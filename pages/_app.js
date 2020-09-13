import App from 'next/app'
import Head from 'next/head'
import Navbar from '../src/components/Navbar'
import { AuthProvider } from '../src/contexts/auth.context'
import { UniversityProvider } from '../src/contexts/university.context'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/light-theme.css'

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <title>Unipedia</title>
                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                </Head>
                <AuthProvider>
                    <UniversityProvider>
                        <Navbar />
                        <Component {...pageProps} />
                    </UniversityProvider>
                </AuthProvider>
            </>
        )
    }
}