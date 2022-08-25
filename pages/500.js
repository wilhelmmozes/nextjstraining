import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Error404() {
    // const router = useRouter();
    // console.log(router);

    return <>
        <h1>500 Internal Server Error</h1>
        <Link href="/">
            <a>
                Go back home
            </a>
        </Link>
    </>
}