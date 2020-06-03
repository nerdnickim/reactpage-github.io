import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Theme from "./Styles/Theme";
import GlobalStyles from "./Styles/GlobalStyles";
import Routes from "./Components/Routes";

const Wrapper = styled.div``;

export default () => {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyles />
			<Wrapper>
				<Routes />
			</Wrapper>
		</ThemeProvider>
	);
};
