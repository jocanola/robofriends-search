import React from 'react';
import './Card.css';

const Card = (props) => {
	const {name,email} = props;
	return(
		<div className="bg-light-blue dib br3 pa3 ma2 tc divsize bw2 grow">

			<img src={`https://robohash.org/${props.id}?`} alt="robotimage"/>

			<h3>{name}</h3>

			<p>{email}</p>

		</div>
		)
};

export default Card;