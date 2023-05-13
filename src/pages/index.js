import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Resume = lazy(() => import("./Resume"));
const Portfolio = lazy(() => import("./Portfolio"));
const SinglePortfolio = lazy(() => import("./SinglePortfolio"));

export {
	Home,
	About,
	Resume,
	Portfolio,
	SinglePortfolio
}