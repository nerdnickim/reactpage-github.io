import React from "react";
import styled from "styled-components";

const ImgWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 75%;
	margin-bottom: 30px;
`;

const Div = styled.div`
	box-shadow: 3px 4px 10px 1px gray;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	margin-bottom: 30px;
	border: 1px solid grey;
`;

const WorksCard = ({ src }) => (
	<ImgWrapper>
		<Div>
			<Image src={src} />
		</Div>
	</ImgWrapper>
);

export default WorksCard;
