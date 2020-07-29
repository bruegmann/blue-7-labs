import Head from "next/head";
import { BusyCard } from "../components/BusyCard";
import { Button } from "../components/Button";
import { useState } from "react";
// import styles from "../styles/Home.module.css"

export default function Home() {
    const [btnActive, setBtnActive] = useState<boolean>(false);
    const toggleBtnActive = () => setBtnActive(!btnActive);

    return (
        <>
            <Head>
                <title>Tailwind Tryout with Next.js</title>
            </Head>
            <div>
                <div className="relative inline-block">
                    <span className="flex h-3 w-3 absolute right-0 mt-3 mr-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500" />
                    </span>
                    <Button className="m-5" active={btnActive} onClick={toggleBtnActive}>Hello</Button>
                </div>

                <BusyCard />
            </div>
        </>
    )
}
