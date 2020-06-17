import React, { useEffect } from "react";
import styled from "styled-components";
import FatText from "../Components/FatText";

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	justify-content: center;
	align-items: center;
	display: flex;
	@media only screen and (max-width: 500px) {
		height: 50vh;
	}
`;

const Card = styled.div`
	position: absolute;
	display: grid;
	background-color: ${(props) => props.theme.cardBg};
	width: 90%;
	height: 80%;
	padding: 20px 0 20px 20px;
	transform-origin: right top;
	transition: all 0.6s linear;
	box-shadow: 3px 4px 10px 1px gray;
	z-index: 4;
	@media only screen and (max-width: 500px) {
		height: 30%;
	}
`;

const Font = styled.div`
	font-size: 5vw;
`;

const Header = styled.header``;

const Body = styled.div`
	align-self: end;
`;

const Ul = styled.ul`
	font-size: 4vw;
`;

const Li = styled.li`
	margin-bottom: 3vh;
	@media only screen and (max-width: 500px) {
		margin-bottom: 1vh;
	}
`;

const Nav = styled.nav`
	position: fixed;
	top: 25vh;
	right: 2vw;
	z-index: 10;
	text-align: right;
`;

export default () => {
	let state = false;

	const onScroll = (e) => {
		const scrollTop = e.srcElement.scrollingElement.scrollTop;
		const businessCard = document.querySelector(".businessCard");
		const navUl = document.querySelector(".navUl");

		const x = window.matchMedia("(max-width: 500px)");

		if (window.innerHeight - window.scrollY <= scrollTop + 300) {
			if (x.matches) {
				businessCard.style.transform = "translateX(200%)";
			} else {
				businessCard.style.transform = `scale(0.25)`;
				businessCard.style.position = `fixed`;
				businessCard.style.top = `4vh`;
				businessCard.style.right = `2vw`;
				businessCard.style.cursor = "pointer";
				state = true;
				navUl.style.transform = "translateX(0%)";
			}
		} else {
			if (x.matches) {
				businessCard.style.transform = "translateX(0%)";
			} else {
				businessCard.style.transform = `scale(1.0)`;
				businessCard.style.position = `absolute`;
				businessCard.style.top = ``;
				businessCard.style.right = ``;
				businessCard.style.cursor = "";
				state = false;
				navUl.style.transform = "translateX(200%)";
			}
		}
	};

	const clickHandle = () => {
		if (state === true) {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		} else {
			return null;
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", onScroll);
	}, []);
	return (
		<>
			<Wrapper>
				<Card className="businessCard" onClick={clickHandle}>
					<Header>
						<Font>
							<FatText style={{}} text={"EuiKyo Kim"} />
						</Font>
					</Header>
					<Body>
						<Ul>
							<Li>
								<FatText text={"Tel. +82 10 8709 1352"} />
							</Li>
							<Li>
								<FatText text={"Email. kcdmlry@gmail.com"} />
							</Li>
							<Li>
								<FatText text={"Instagram. @nerd__nick"} />
							</Li>
						</Ul>
					</Body>
				</Card>
			</Wrapper>
			<Nav>
				<Ul
					style={{
						transform: "translateX(200%)",
						transition: "all 0.3s linear",
						fontSize: "2vw",
						marginTop: "2vh",
						cursor: "pointer",
					}}
					className="navUl"
				>
					<Li
						onClick={() => {
							const card = document.getElementById("firstCard");
							window.scrollTo({
								top: card.offsetTop,
								behavior: "smooth",
							});
						}}
					>
						<FatText text={"Works"} />
					</Li>
					<Li
						onClick={() => {
							const card = document.getElementById("secondCard");
							window.scrollTo({
								top: card.offsetTop,
								behavior: "smooth",
							});
						}}
					>
						<FatText text={"Technology"} />
					</Li>
					<Li
						onClick={() => {
							const card = document.getElementById("thirdCard");
							window.scrollTo({
								top: card.offsetTop,
								behavior: "smooth",
							});
						}}
					>
						<FatText text={"Contact"} />
					</Li>
				</Ul>
			</Nav>
		</>
	);
};
