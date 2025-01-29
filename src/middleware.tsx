import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
    const cookie = request.cookies.get('session')?.value
    if (cookie == undefined) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/login')) {
        return NextResponse.redirect(new URL('/admin', request.url))
    }

    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/admin/:path*', '/login'],
}
