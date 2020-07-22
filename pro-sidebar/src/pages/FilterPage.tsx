import React from "react";
import { Link } from "react-router-dom";
import { FakeFilter } from "../components/FakeFilter";

export const FilterPage = () => (
    <>
        <header className="container-fluid mb-5">
            <div className="row">
                <div className="col-lg">
                    <h5><Link to="/">Start</Link> / Filter</h5>
                </div>

                <div className="col-lg">
                    <div className="row">
                        <div className="col">
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" htmlFor="select-1">Filter</label>
                                <div className="col-sm-10">
                                    <select className="form-select" id="select-1">
                                        <option>Standardfilter</option>
                                        <option>Second filter</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" htmlFor="select-2">Liste</label>
                                <div className="col-sm-10">
                                    <select className="form-select" id="select-2">
                                        <option>Standardliste</option>
                                        <option>Second list</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>

        <main className="container pb-3">
            <FakeFilter />
        </main>
    </>
);