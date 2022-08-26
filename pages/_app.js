import '../styles/globals.css'
import Layout from '../components/Layout';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: "https://b2cdemo.getswift.asia/graphql",
    cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
	return(
		<ApolloProvider client={client}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	) 
}

export default MyApp