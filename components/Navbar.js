import Link from 'next/link';

export default function Navbar({}) {
    return (
        <div>
            <style jsx>
            {`
                .navbar {
                    background-color: lightblue;
                    height: 100px;
                }
            `}
            </style>
            
            <div className="navbar">
                <ul>
                    <li><Link href="/meals">CSR</Link></li>
                    <li><Link href="/meals/52926">SSR</Link></li>
                    <li><Link href="/meals/fav">SSG</Link></li>
                    <li><Link href="/meals/time">ISG</Link></li>
                </ul>
            </div>
        </div>

    )
}