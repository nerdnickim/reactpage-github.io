import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Theme from "./Styles/Theme";
import GlobalStyles from "./Styles/GlobalStyles";
import { HashRouter as Router } from "react-router-dom";
import BusinessCard from "./Routes/BusinessCard";
import FirstCard from "./Routes/FirstCard";
import SecondCard from "./Routes/SecondCard";
import FatText from "./Components/FatText";
import ThirdCard from "./Routes/ThirdCard";

const Wrapper = styled.div``;

const Title = styled.div`
	font-size: 4rem;
	margin-left: 40px;
	padding-left: 30px;
`;

export default () => {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyles />
			<Router>
				<Wrapper>
					<BusinessCard props={""} />
					<Title id="firstCard">
						<FatText text={"Works"} />
					</Title>
					<FirstCard />
					<Title id="secondCard">
						<FatText text={"Technology"} />
					</Title>
					<SecondCard />
					<Title id="thirdCard">
						<FatText text={"Contact"} />
					</Title>
					<ThirdCard />
				</Wrapper>
			</Router>
		</ThemeProvider>
	);
};
