import React from "react";
import styled from "styled-components";
import ImageContainer from "../Components/ImageContainer";
import TechCard from "../Components/TechCard";

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	justify-content: center;
	align-items: center;
	display: flex;
`;

const Card = styled.div`
	width: 90%;
	padding: 20px 0 20px 20px;
	display: grid;
	grid-template-columns: repeat(4, 19%);
`;

export default () => (
	<Wrapper>
		<Card>
			{ImageContainer[3].icon.map((img) => (
				<TechCard key={img.name} src={img.src} text={img.name} />
			))}
		</Card>
	</Wrapper>
);
