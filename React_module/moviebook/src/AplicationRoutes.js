import { Route } from "react-router-dom";
import { Home } from "./views/Home";
import React from 'react';

export const AplicationRoutes = () => (
    <>
    <Route exact path="/" component={Home}></Route>
    </>
    /*<> marcação em react */
)