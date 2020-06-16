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
	width: 90%;
	height: 80%;
	padding: 20px 0 20px 20px;
	text-align: center;
`;

const Ul = styled.ul`
	font-size: 4vw;
`;

const Li = styled.li`
	margin-bottom: 5vh;
	&:hover {
		text-decoration: underline;
	}
`;

export default () => (
	<Wrapper>
		<Card>
			<Ul>
				<Li>
					<FatText text={"+82 10-8709-1352"} />
				</Li>
				<Li>
					<a href="mailto: kcdmlry@gmail.com">
						<FatText text={"kcdmlry@gmail.com"} />
					</a>
				</Li>
				<Li>
					<a href="https://www.instagram.com/nerd__nick/">
						<FatText text={"Instagram : nerd__nick"} />
					</a>
				</Li>
			</Ul>
		</Card>
	</Wrapper>
);
