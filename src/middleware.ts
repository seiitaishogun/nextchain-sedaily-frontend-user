import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { USER_PURCHASE_HASH_KEY } from '@module/constants/user/hash';

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.includes('/healthcheck')) return NextResponse.next();

  /*
  const isProduction = process.env.NODE_ENV === 'production';
  if (isProduction && req.headers.get('x-forwarded-proto') !== 'https') {
    return NextResponse.redirect(
      `https://${req.headers.get('host')}${req.nextUrl.pathname}`,
      301
    );
  }
   */

  const purchaseHash = req.cookies.get(USER_PURCHASE_HASH_KEY);
  if (req.nextUrl.pathname.includes('/contents/replays/lists')) {
    const url = req.nextUrl.clone();
    url.pathname = '/contents/replays';
    if (!purchaseHash) return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = { matcher: ['/:path*'] };
