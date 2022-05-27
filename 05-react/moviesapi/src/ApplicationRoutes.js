import { Route } from "react-router-dom";
import { Home } from "./views/Home";

export const ApplicationRoutes = () => (
    <>
                <Route  exact  path="/"  component={Home} >  </Route>
    </>
) ;