import { lazy } from "react";

// import Home from "./Home";
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Resume = lazy(() => import("./Resume"));
const Portfolio = lazy(() => import("./Portfolio"));
const SinglePortfolio = lazy(() => import("./SinglePortfolio"));
const Contact = lazy(() => import("./Contact"));

export {
	Home,
	About,
	Resume,
	Portfolio,
	SinglePortfolio,
	Contact
}