import React from "react";

import "./App.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ThirdPage } from "./pages/ThirdPage";

function App() {
    return (
        <Router>
            <>
                <Switch>
                    <Route path="/third">
                        <ThirdPage />
                    </Route>

                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </>
        </Router>
    );
}

export default App;