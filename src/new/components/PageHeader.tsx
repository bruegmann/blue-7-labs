import React, { ReactNode } from "react";

export function PageHeader({ children }: { children: ReactNode }) {
    return (
        <h1 className="border-bottom border-light mt-4 mb-3 pb-2 font-weight-light">
            {children}
        </h1>
    );
}