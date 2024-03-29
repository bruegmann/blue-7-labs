import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem, SidebarContent, SidebarHeader, SubMenu } from "react-pro-sidebar";
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { Asterisk, House, List, Funnel } from "react-bootstrap-icons";
import classNames from "classnames";

import BlueLogo from "./components/BlueLogo";
import "./styles/main.scss";
import { FilterPage } from "./pages/FilterPage";

function App() {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [toggled, setToggled] = useState<boolean>(false);

    const toggleCollapsed = () => setCollapsed(!collapsed);
    const toggleToggled = () => setToggled(!toggled);

    return (
        <div className="App d-flex vh-100">
            <Router>
                <ProSidebar
                    collapsed={collapsed}
                    toggled={toggled}
                    onToggle={toggleToggled}
                    breakPoint="md"
                >
                    <SidebarHeader>
                        <h3 className="px-4 py-3 mb-0 d-flex text-nowrap">
                            <BlueLogo /> <small className={classNames("ml-1", { "d-none": collapsed })}>Blue React</small>
                        </h3>
                    </SidebarHeader>

                    <SidebarContent>
                        <Menu>
                            <MenuItem icon={<List />}>
                                <a onClick={toggleCollapsed}>
                                    Toggle menu
                                </a>
                            </MenuItem>
                            <MenuItem icon={<House />}>
                                <NavLink to="/">Home</NavLink>
                            </MenuItem>
                            <MenuItem icon={<Funnel />}>
                                <NavLink to="/filter">
                                    Filter
                                </NavLink>
                            </MenuItem>
                            <SubMenu title="More" icon={<Asterisk />}>
                                <MenuItem icon={<Asterisk />}>
                                    <NavLink to="/second">Second page</NavLink>
                                </MenuItem>
                            </SubMenu>
                        </Menu>
                    </SidebarContent>
                </ProSidebar>

                <div className="pt-3 w-100">
                    <button className="d-md-none btn btn-outline-primary mb-4 mx-3" onClick={toggleToggled}>
                        <List /> Toggle menu
                    </button>

                    <Switch>
                        <Route path="/filter">
                            <FilterPage />
                        </Route>

                        <Route path="/second">
                            <div className="container">
                                <h1>Second page</h1>
                            </div>
                        </Route>

                        <Route path="/">
                            <div className="container">
                                <h1 className="mb-3">Home page</h1>
                                <p>Resize the window to see how the sidebar behaves!</p>
                                <p>The sidebar is using <a href="https://github.com/azouaoui-med/react-pro-sidebar" target="_blank" rel="noopener noreferrer">https://github.com/azouaoui-med/react-pro-sidebar</a></p>
                            </div>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
