import * as React from "react";
import { Route, Link } from "react-router-dom";
import About from "../Pages/About/about";
import RepositoriesList from "../Pages/OpenSource/repoList";
import {Homepage} from "../Pages/HomePage/homepage";
import TechStack from "../Pages/Techstack/techstack";
import MyStory from "../Pages/StoryLine/my-story";

const routes = [
    { path: "/", exact: true, name: "Home", component: Homepage },
    { path: "/about", exact: true, name: "About", component: About },
    {
        path: "/open-source",
        exact: true,
        name: "OpenSource",
        component: RepositoriesList
    },
    { path: "/tech-stack", exact: true, name: "Tools", component: TechStack },
    { path: "/story-timeline", exact: true, name: "My Story", component: MyStory }

];
const Navigation = () => {
    return (
        <>
            {routes.map((route, idx) => (
                <Route
                    key={idx}
                    exact={route.exact}
                    path={route.path}
                    render={(props:any) => <route.component {...props} />}
                />
            ))}
            <Link to="/" />
        </>
    );
};

export default Navigation;
