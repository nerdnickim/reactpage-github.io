import React from "react";
import styled from "styled-components";
import FatText from "../Components/FatText";

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	justify-content: center;
	align-items: center;
	display: flex;
`;

const Card = styled.div`
	background-color: #241f1f;
	width: 90%;
	height: 80%;
	padding: 20px 0 20px 20px;
`;

const Font = styled.div`
	font-size: 3rem;
`;

export default () => (
	<Wrapper>
		<Card>
			<Font>
				<FatText style={{}} text={"FirstCard"} />
			</Font>
		</Card>
	</Wrapper>
);
