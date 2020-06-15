import React, { ReactNode } from "react";

export interface ILayoutProps {
    children: ReactNode;
    appLogo?: string | undefined;
    appTitle?: string | undefined;
}

export function Layout({ children, appLogo, appTitle }: ILayoutProps) {
    return (
        <>
            <header className="bg-theme p-2 d-flex align-items-center" style={{ height: "48px" }}>
                <img src={appLogo} alt={appTitle} className="h-100" />
                <h4 className="text-white font-weight-light ml-2 mb-0">{appTitle}</h4>
            </header>

            {children}
        </>
    );
}