import React from "react";
import styled from "styled-components";
import FatText from "../Components/FatText";
import Arrows from "../Components/Arrows";

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	justify-content: center;
	align-items: center;
	display: flex;
	animation: all 0.3s linear;
`;

const Card = styled.div`
	background-color: ${(props) => props.theme.cardBg};
	width: 90%;
	height: 80%;
	padding: 20px 0 20px 20px;
`;

const Font = styled.div`
	font-size: 3rem;
`;

export default () => (
	<>
		<Wrapper>
			<Card>
				<Font>
					<FatText style={{}} text={"김의교"} />
				</Font>
			</Card>
		</Wrapper>
		<Arrows />
	</>
);
