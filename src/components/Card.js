import React from "react";
import { Button } from "./Button";
import { CardText } from "./CardText";
import { CardTopImage } from "./CardTopImage";

export const Card = () => {
	return (
		<article className="card-container">
			<CardTopImage />
			<CardText />
			<Button /> 
		</article>
	)
}