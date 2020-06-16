import React from "react";
import { Route, Switch } from "react-router-dom";
import BusinessCard from "../Routes/BusinessCard";
import FirstCard from "../Routes/FirstCard";
import SecondCard from "../Routes/SecondCard";

export default ({ location }) => {
	return (
		<Switch location={location}>
			<Route exact path="/" component={BusinessCard} />
			<Route path="/FirstCard" component={FirstCard} />
			<Route path="/SecondCard" component={SecondCard} />
		</Switch>
	);
};
