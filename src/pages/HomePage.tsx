import React from "react";
import { PageHeader } from "../new/components/PageHeader";
import { Layout } from "../new/components/Layout";

export function HomePage() {
    return (
        <Layout appLogo={require("../assets/blue.svg")} appTitle="Blue">
            <main className="container">
                <article className="mb-5">
                    <PageHeader>Welcome to the next Blue</PageHeader>

                    <button className="btn btn-light mr-1">Click me</button>
                    <button className="btn btn-primary mr-1">But click me</button>
                    <button className="btn btn-theme mr-1">But click me</button>
                </article>

                <article>
                    <PageHeader>Was gibt es hier momentan?</PageHeader>

                    <p><code>react-split-pane</code> ist installiert. Damit kann die Sidebar frei per
                    Drag-Drop verschoben werden.</p>

                    <p>Ich habe versucht bis jetzt alles nur mit Bootstrap-Mitteln zu stylen, kein
                    eigener CSS-Code. Bootstrap-Variablen wurden lediglich mit Sass angepasst, bzw.
                        erweitert. Ansonsten habe ich mich großteils an Bootstraps Utility Classes bedient.</p>
                </article>
            </main>
        </Layout>
    );
}