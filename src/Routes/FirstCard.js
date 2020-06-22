import React from "react";
import styled from "styled-components";
import ImageContainer from "../Components/ImageContainer";
import FatText from "../Components/FatText";
import WorksCard from "../Components/WorksCard";

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	display: flex;
`;

const Card = styled.div`
	width: 90%;
	height: 80%;
	padding: 20px 0 20px 20px;
	@media only screen and (max-width: 500px) {
		width: 100%;
		height: 100%;
	}
`;

const NewWave = styled.div`
	position: relative;
	margin-bottom: 40px;
`;

const Moho = styled.div`
	position: relative;
	margin-bottom: 40px;
`;

const Cloning = styled.div`
	position: relative;
`;

const AContain = styled.div`
	margin: 40px 0 0 0;
	width: 75%;
	display: flex;
	justify-content: flex-end;
`;

const Ahref = styled.a`
	display: flex;
	font-size: 2vw;
	color: #615e5d;
	&:hover {
		text-decoration: underline;
	}
`;

const Video = styled.div`
	width: 75%;
	height: 70vh;
	@media only screen and (max-width: 500px) {
		width: 95%;
		height: 30%;
	}
`;

export default () => {
	return (
		<Wrapper>
			<Card>
				<NewWave>
					{ImageContainer[0].newWave.map((img) => (
						<WorksCard key={img.name} src={img.src} />
					))}
					<Video>
						<iframe
							width="100%"
							height="100%"
							src="https://www.youtube.com/embed/S9Kx6AvsfxY"
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</Video>
					<AContain>
						<Ahref href="http://www.newwaveboys.co.kr/index.html">
							<FatText text={"Go to NEWWAVEBOYS"} />
						</Ahref>
					</AContain>
				</NewWave>
				<Moho>
					{ImageContainer[1].moho.map((img) => (
						<WorksCard key={img.name} src={img.src} />
					))}
				</Moho>
				<Cloning>
					{ImageContainer[2].cloning.map((img) => (
						<WorksCard key={img.name} src={img.src} />
					))}
					<Video>
						<iframe
							width="100%"
							height="100%"
							src="https://www.youtube.com/embed/ofur21I3Bpo"
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</Video>
					<AContain>
						<Ahref href="https://cloninggram.netlify.app">
							<FatText text={"Go to Cloninggram"} />
						</Ahref>
					</AContain>
				</Cloning>
			</Card>
		</Wrapper>
	);
};
