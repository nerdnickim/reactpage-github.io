import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImageContainer from "../Components/ImageContainer";

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	justify-content: center;
	align-items: center;
`;

const Card = styled.div`
	width: 100%;
	padding: 20px 0 20px 5vw;
`;

const ImageWrapper = styled.div``;

const ImageContain = styled.div`
	position: absolute;
	width: 90%;
`;

const Image = styled.img`
	width: 100%;
`;

export default () => {
	const [state, setState] = useState("Hi");

	useEffect(() => {
		const timer = setTimeout(() => {
			setState("");
		}, 1000);
		return () => clearTimeout(timer);
	}, [state]);

	return (
		<Wrapper>
			<Card>
				<ImageWrapper>
					<ImageContain style={{ top: `0vh` }}>
						<Image src={ImageContainer[4].backCard[0].src} />
					</ImageContain>
					<ImageContain style={{ top: `16vh`, opacity: 0.5 }}>
						<Image src={ImageContainer[4].backCard[0].src} />
					</ImageContain>
					<ImageContain style={{ top: `30vh`, opacity: 0.1 }}>
						<Image src={ImageContainer[4].backCard[0].src} />
					</ImageContain>
				</ImageWrapper>
			</Card>
		</Wrapper>
	);
};
