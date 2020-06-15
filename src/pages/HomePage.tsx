import React from "react";
import { PageHeader } from "../new/components/PageHeader";
import { Layout } from "../new/components/Layout";

export function HomePage() {
    return (
        <Layout appLogo={require("../assets/blue.svg")} appTitle="Blue">
            <main className="container">
                <PageHeader>Welcome to the next Blue</PageHeader>

                <button className="btn btn-light mr-1">Click me</button>
                <button className="btn btn-primary mr-1">But click me</button>
                <button className="btn btn-theme mr-1">But click me</button>
            </main>
        </Layout>
    );
}