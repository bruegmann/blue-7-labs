import React, { useEffect } from "react";
import halfmoon from "halfmoon";
import { List } from "react-bootstrap-icons";

import "halfmoon/css/halfmoon-variables.css";

function App() {
    useEffect(() => {
        halfmoon.onDOMContentLoaded();
    });

    const toggleDarkMode = () => halfmoon.toggleDarkMode();

    return (
        <div className="page-wrapper with-navbar with-sidebar">
            {/* Sticky alerts (toasts), empty container */}
            {/* Reference: https://www.gethalfmoon.com/docs/sticky-alerts-toasts */}
            <div className="sticky-alerts" />
            {/* Navbar start */}
            <nav className="navbar">
                {/* Reference: https://www.gethalfmoon.com/docs/navbar */}

                <button aria-label="Toggle sidebar" className="btn" onClick={() => halfmoon.toggleSidebar()}>
                    <List /> This sadly doesn't work yet :/
                </button>
            </nav>
            {/* Navbar end */}
            {/* Sidebar start */}
            <div className="sidebar">
                {/* Reference: https://www.gethalfmoon.com/docs/sidebar */}
            </div>
            {/* Sidebar end */}
            {/* Content wrapper start */}
            <div className="content-wrapper">
                <div className="container p-10">
                    <button className="btn">I want you to click this</button>

                    <button className="btn btn-primary" onClick={toggleDarkMode}>Toggle theme</button>
                </div>
            </div>
            {/* Content wrapper end */}
        </div>
    );
}

export default App;
