import { useRouter } from 'next/router';
import Link from 'next/link';
import { withRouter } from 'next/router';

function Page({ router }) {
	return (
		<>
			<h1>404 - {router.asPath} Not Found</h1>
			<Link href="/">
				<a>
					Go back home
				</a>
			</Link>
		</>
	)
}

export default withRouter(Page)



