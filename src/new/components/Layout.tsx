import React, { ReactNode, useState, useEffect } from "react";
import SplitPane from "react-split-pane";
import ElementQueries from "css-element-queries/src/ElementQueries";
import classNames from "classnames";
import List from "../../icons/List";
import { SidebarButton } from "./SidebarButton";

import "../styles/Layout.scss";
import { getTouchySize } from "../utils";

export interface ILayoutProps {
    children: ReactNode;
    appLogo?: string | undefined;
    appTitle?: string | undefined;
}

export function Layout({ children, appLogo, appTitle }: ILayoutProps) {

    let touchySize: number | string = getTouchySize();
    if (touchySize && touchySize !== "" && touchySize.includes("px")) {
        touchySize = parseInt(touchySize.replace("px", ""), 10);
    }
    else {
        touchySize = 48;
    }
    const splitPos = localStorage.getItem("splitPos");

    const [current, setCurrent] = useState(0);
    const [splitPaneSize, setSplitPaneSize] = useState((splitPos !== null ? parseInt(splitPos, 10) : touchySize) as string | number);
    const [transition, setTransition] = useState(false);

    useEffect(() => {
        ElementQueries.init();
    });

    const doSetSplitPaneSize = (size: string | number) => {
        setSplitPaneSize(size);
        localStorage.setItem("splitPos", size.toString());
    };

    return (
        <div className={classNames("Layout", { "transition": transition })}>
            <header className="bg-theme d-flex align-items-center h-touchy">
                <button
                    className="btn btn-trans btn-lg p-0 d-flex align-items-center justify-content-center rounded-0 h-100 w-touchy box-shadow-inset"
                    onClick={() => {
                        if (splitPaneSize !== touchySize) {
                            doSetSplitPaneSize(touchySize);
                        }
                        else {
                            doSetSplitPaneSize(265);
                        }
                    }}
                    onMouseEnter={() => setTransition(true)}
                    onMouseLeave={() => setTransition(false)}
                >
                    <List />
                </button>
                <div className="p-2 d-flex h-100">
                    <img src={appLogo} alt={appTitle} className="h-100" />
                    <h4 className="text-white font-weight-light ml-2 mb-0">{appTitle}</h4>
                </div>
            </header>

            <SplitPane
                size={splitPaneSize}
                onChange={doSetSplitPaneSize}
                minSize={touchySize}
                maxSize={500}
            >
                <div className="Sidebar bg-theme text-white h-100">
                    <div className="position-relative element-query">
                        <div
                            className="SidebarButtonIndicator bg-white h-touchy pl-1 position-absolute"
                            style={{ transform: `translateY(calc(${current} * var(--touchy)))` }}
                        />
                        <SidebarButton href="#" onClick={() => setCurrent(0)} label="Start">
                            <img src={appLogo} alt={appTitle} className="h-100 mr-1" />
                        </SidebarButton>
                        <SidebarButton href="#" onClick={() => setCurrent(1)} label="Second">
                            <span role="img" aria-label="Astro cat" className="mx-1">🐱‍🚀</span>
                        </SidebarButton>
                    </div>
                </div>

                <div>
                    {children}
                </div>
            </SplitPane>
        </div>
    );
}