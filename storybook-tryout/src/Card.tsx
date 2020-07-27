import React, { ReactNode } from "react";

export const Card = ({ children }: { children: ReactNode }) => (
    <div style={{ border: "1px solid #ddd", padding: "1rem" }}>
        {children}
    </div>
);