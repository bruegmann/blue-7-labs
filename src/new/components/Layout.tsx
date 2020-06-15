import React, { ReactNode } from "react";
import List from "../../icons/List";

export interface ILayoutProps {
    children: ReactNode;
    appLogo?: string | undefined;
    appTitle?: string | undefined;
}

export function Layout({ children, appLogo, appTitle }: ILayoutProps) {
    return (
        <>
            <header className="bg-theme d-flex align-items-center" style={{ height: "48px" }}>
                <button className="btn btn-trans btn-lg p-0 d-flex align-items-center justify-content-center rounded-0 mr-2 h-100" style={{ width: "48px" }}>
                    <List />
                </button>
                <div className="p-2 d-flex h-100">
                    <img src={appLogo} alt={appTitle} className="h-100" />
                    <h4 className="text-white font-weight-light ml-2 mb-0">{appTitle}</h4>
                </div>
            </header>

            {children}
        </>
    );
}