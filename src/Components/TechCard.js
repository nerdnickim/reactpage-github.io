import React from "react";
import styled from "styled-components";
import FatText from "./FatText";

const Div = styled.div`
	border: 1px solid grey;
	justify-content: center;
	align-items: center;
	box-shadow: 3px 4px 10px 1px gray;
`;

const ImgWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Image = styled.img`
	width: 80%;
`;

const Font = styled.div`
	text-align: center;
	font-size: 2rem;
`;

const TechCard = ({ src, text }) => (
	<Div>
		<ImgWrapper>
			<Image src={src} />
		</ImgWrapper>
		<Font>
			<FatText text={text} />
		</Font>
	</Div>
);

export default TechCard;
