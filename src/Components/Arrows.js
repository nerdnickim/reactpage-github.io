import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LeftArrow, Arrow } from "./Icons";

const ArrowWrapper = styled.div`
	position: absolute;
	top: 45%;
	width: 100%;
	display: flex;
	padding: 0px 10px;
	justify-content: space-between;
`;

export default ({ props }) => {
	console.log(props);
	return (
		<ArrowWrapper>
			<Link>
				<LeftArrow />
			</Link>
			<Link>
				<Arrow />
			</Link>
		</ArrowWrapper>
	);
};
