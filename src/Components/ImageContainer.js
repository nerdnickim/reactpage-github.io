import webMain from "../Images/newWave/webMain.png";
import webArchive from "../Images/newWave/webArchive.png";
import webPrdList from "../Images/newWave/webPrdList.png";
import webPrdDetail from "../Images/newWave/webPrdDetail.png";

import main1 from "../Images/moho/main1.png";
import main2 from "../Images/moho/main2.png";

import webFeed from "../Images/cloninggram/webFeed.png";
import webPostDetail from "../Images/cloninggram/webPostDetail.png";
import webNotification from "../Images/cloninggram/webNotification.png";
import webUserDetail from "../Images/cloninggram/webUserDetail.png";

import prisma from "../Images/icons/prisma.png";
import expo from "../Images/icons/expo.png";

import cardBack from "../Images/icons/cardBack.png";

const ImageContainer = [
	{
		newWave: [
			{ name: "webMain", src: webMain },
			{ name: "webArchive", src: webArchive },
			{ name: "webPrdList", src: webPrdList },
			{ name: "webPrdDetail", src: webPrdDetail },
		],
	},
	{
		moho: [
			{ name: "main1", src: main1 },
			{ name: "main2", src: main2 },
		],
	},
	{
		cloning: [
			{ name: "webFeed", src: webFeed },
			{ name: "webPostDetail", src: webPostDetail },
			{ name: "webNotification", src: webNotification },
			{ name: "webUserDetail", src: webUserDetail },
		],
	},
	{
		icon: [
			{ name: "Js", src: "https://img.icons8.com/color/256/000000/javascript.png" },
			{
				name: "React, Native",
				src: "https://img.icons8.com/color/256/000000/react-native.png",
			},
			{ name: "NodeJs", src: "https://img.icons8.com/color/256/000000/nodejs.png" },
			{ name: "Mongo", src: "https://img.icons8.com/color/256/000000/mongodb.png" },
			{ name: "Graphql", src: "https://img.icons8.com/color/256/000000/graphql.png" },
			{ name: "Prisma", src: prisma },
			{ name: "Expo", src: expo },
			{ name: "Pug", src: "https://img.icons8.com/color/256/000000/pug.png" },
		],
	},
	{
		backCard: [{ name: "back", src: cardBack }],
	},
];

export default ImageContainer;
