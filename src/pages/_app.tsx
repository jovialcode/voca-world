import type {AppProps} from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';
import {RecoilRoot} from 'recoil';

import '../styles/globals.css'
import DefaultLayout from "../components/layouts/DefaultLayout";

const queryClient = new QueryClient();

function MyApp({Component, pageProps}: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <DefaultLayout Component={Component} pageProps={pageProps}/>
            </RecoilRoot>
        </QueryClientProvider>
    )
}

export default MyApp;
