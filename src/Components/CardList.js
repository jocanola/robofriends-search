import React from 'react';
import Card from './Card';

const CardList = ( {robots} ) => {

	return (
	//{const renderCard = }
	robots.map(

		(user,i) =>
		<Card key={i} 
		id={robots[i].id}
		email={robots[i].email}
		username={robots[i].username}
		name={robots[i].name}/>

		 )
		//{<div>
			//{renderCard}
		//</div>}
		)
};

export default CardList;