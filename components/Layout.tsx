import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
    children: ReactNode
}

const Layout = (props: LayoutProps) => {
    return (
        <div>
            <Head>
                <title>Filmes</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;