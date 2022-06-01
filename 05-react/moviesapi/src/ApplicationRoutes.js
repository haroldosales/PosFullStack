import { Home } from "./views/Home";
import { Route } from "react-router";

export const ApplicationRoutes = () => (
    
    <Route exact path="/" component={Home}></Route>    
);