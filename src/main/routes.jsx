import React from "react"
import { Router, Route, Redirect, hashHistory } from "react-router"
import Dashboard from "../dashboard2/dashboard2"
import BilliCycle from "../billiCicle/billiCycle"


export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={Dashboard} />
        <Route path="/billiCycles" component={BilliCycle} />
        <Redirect from="*" to="/" />
    </Router>
)