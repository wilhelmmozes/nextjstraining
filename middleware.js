import {NextResponse} from 'next/server';

export default function middleware(request){
    const status = request.cookies.get('status');
    // console.log("ini request", request);
    const url = request.url;
    const {origin} = request.nextUrl;
    // console.log("ini next url",request.nextUrl);

    if(!status){
        console.log("status kosong");
        // return NextResponse.rewrite(`${origin}/backoffice/login`);
    }
    console.log("status ada");
    // return NextResponse.rewrite(`${request.nextUrl}`);

}

export const config = {
    matcher: '/backoffice/:path*',
}