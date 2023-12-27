import React from "react";
import { Button } from "./Button";
import { CardText } from "./CardText";

export const Card = () => {
	return (
		<article className="card-container">
			<CardText />
			<Button /> 
		</article>
	)
}