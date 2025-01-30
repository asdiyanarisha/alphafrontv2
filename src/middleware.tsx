import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
    const session = request.cookies.get('session')?.value
    console.log(session);

    if (session == undefined) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // if (request.nextUrl.pathname.startsWith('/login')) {
    //     return NextResponse.redirect(new URL('/admin', request.url))
    // }

    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/admin/:path*'],
}
