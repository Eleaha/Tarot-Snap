function Card (card) {
    console.log(card, 'card')
    const imagePath = `../../cards/${card.card.img}`

    return (
			<div className="card">
				<div className="card-back"></div>
				<div className="card-front">
                    <img src={imagePath}/>
                </div>
			</div>
		);
}

export default Card