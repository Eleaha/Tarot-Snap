import Meaning from './Meaning';
import Card from './Card';

function generateCardLayout(cardData) {
	let cardsAdded = 0;

	const positionArr = [];
	for (let i = 0; cardsAdded < 10; i++) {
		const randomCardIndex = Math.floor(Math.random() * cardData.length);
		const randomCard = cardData[randomCardIndex];

		if (!positionArr.includes(randomCard)) {
			positionArr.push(randomCard);
			positionArr.push(randomCard);
			cardsAdded++;
		}
	}
	let currentIndex = positionArr.length;

	while (currentIndex !== 0) {
		let shuffleIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[positionArr[currentIndex], positionArr[shuffleIndex]] = [
			positionArr[shuffleIndex],
			positionArr[currentIndex],
		];
	}
	console.log(positionArr, 'after shuffling', typeof positionArr);

	// const cardArr = positionArr.map((card, index) => {
	// 	card.position = index;
	// 	return Card(card);
	// });
	return positionArr;
}

function Board({ cardData }) {
	return (
		<section id="board">
			<div id="play-cards">
				{generateCardLayout(cardData).map((card) => {
                    return (
                        <Card card={card}/>
                    )
                })}
			</div>
			<div>deck goes here</div>
			<Meaning />
		</section>
	);
}

export default Board;
