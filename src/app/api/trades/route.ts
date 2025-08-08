import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/utils/supabase/server';
import { auth } from '../../backend/auth'; // din NextAuth v5 config

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ ok: false, error: 'Neautentificat.' }, { status: 401 });
    }
    const userId = session.user.id as string;

    // Acceptă form-data (inclusiv fișierul)
    const form = await req.formData();

    const pair = String(form.get('pair') || '');
    const pnl = Number(form.get('pnl') || 0);
    const rr = form.get('rr') ? Number(form.get('rr')) : null;
    const stoploss_pips = form.get('stoploss_pips') ? Number(form.get('stoploss_pips')) : null;
    const takeprofit_pips = form.get('takeprofit_pips') ? Number(form.get('takeprofit_pips')) : null;
    const comentariu = form.get('comentariu')?.toString() ?? null;

    // Upload foto (opțional)
    let photo_path: string | null = null;
    const file = form.get('photo') as File | null;

    if (file && file.size > 0) {
      const ext = (file.name.split('.').pop() || 'jpg').toLowerCase();
      const path = `u_${userId}/${crypto.randomUUID()}.${ext}`;

      const { error: upErr } = await supabaseAdmin
        .storage
        .from('trade-photos')
        .upload(path, file, { upsert: false, contentType: file.type });

      if (upErr) throw upErr;
      photo_path = path; // STOCHEZI PATH, nu URL
    }

    // Inserare în DB (folosim admin pe server și validăm noi user-ul)
    const { data, error } = await supabaseAdmin
      .from('trades')
      .insert({
        user_id: userId,
        pair,
        pnl,
        rr,
        stoploss_pips,
        takeprofit_pips,
        comentariu,
        photo_url: photo_path,
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ ok: true, trade: data }, { status: 201 });
  } catch (e: unknown) {
    let errorMessage = 'Unknown error';
    if (e instanceof Error) {
      errorMessage = e.message;
    } else if (typeof e === 'string') {
      errorMessage = e;
    }
    return NextResponse.json({ ok: false, error: errorMessage }, { status: 400 });
  }
}
