import React, { ReactNode } from "react";
import SplitPane from "react-split-pane";
import List from "../../icons/List";
import { SidebarButton } from "./SidebarButton";

export interface ILayoutProps {
    children: ReactNode;
    appLogo?: string | undefined;
    appTitle?: string | undefined;
}

export function Layout({ children, appLogo, appTitle }: ILayoutProps) {

    const splitPos = localStorage.getItem("splitPos");

    return (
        <>
            <header className="bg-theme d-flex align-items-center h-touchy">
                <button className="btn btn-trans btn-lg p-0 d-flex align-items-center justify-content-center rounded-0 mr-2 h-100" style={{ width: "48px" }}>
                    <List />
                </button>
                <div className="p-2 d-flex h-100">
                    <img src={appLogo} alt={appTitle} className="h-100" />
                    <h4 className="text-white font-weight-light ml-2 mb-0">{appTitle}</h4>
                </div>
            </header>

            <SplitPane
                defaultSize={parseInt(splitPos !== null ? splitPos : "50", 10)}
                onChange={size => localStorage.setItem("splitPos", size.toString())}
                maxSize="50vw"
            >
                <div className="bg-theme text-white h-100">
                    <SidebarButton href="#" active={true}>
                        <span role="img" aria-label="House icon">🏠</span> Start
                    </SidebarButton>
                    <SidebarButton href="#">
                        <span role="img" aria-label="Astro cat">🐱‍🚀</span> Second
                    </SidebarButton>
                </div>

                <div>
                    {children}
                </div>
            </SplitPane>
        </>
    );
}