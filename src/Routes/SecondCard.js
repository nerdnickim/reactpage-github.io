import React from "react";
import styled from "styled-components";
import ImageContainer from "../Components/ImageContainer";
import TechCard from "../Components/TechCard";

const Wrapper = styled.div`
	width: 100%;
	justify-content: center;
	align-items: center;
	display: flex;
	margin-bottom: 40px;
`;

const Card = styled.div`
	width: 90%;
	padding: 20px 0 20px 0;
	display: grid;
	grid-template-columns: repeat(4, 19%);
	@media only screen and (max-width: 500px) {
		grid-template-columns: repeat(4, 25%);
	}
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
