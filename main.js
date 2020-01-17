let score = {
	firstLayer: 1,
	secondLayer: 2,
	thirdLayer: 3,
	fourthLayer: 4,
	fifthLayer: 5,
	sixthLayer: 6
}
let homeScore = 0;
let awayScore = 0;

function firstPlayer(e){
	let homeResult = document.querySelector('#home > p');
	let colorTarget = e.target.id;

	if(score[colorTarget] !== undefined) {
		homeScore += score[colorTarget];
		homeResult.textContent = homeScore;

		let home = document.querySelector('#turns > p');
		home.style.textDecoration = 'none';
		home.style.fontWeight = 'normal';

		let away = document.querySelector('#turns p:nth-child(2)');
		away.style.textDecoration = 'underline';
		away.style.fontWeight = 'bold';
		document.querySelector('body').removeEventListener('click', firstPlayer);
		document.querySelector('body').addEventListener('click',secondPlayer);
	}

	if(homeScore >= 21) {
		document.querySelector('#home > p:nth-child(2)').style.background = 'green';
		document.querySelector('#away > p:nth-child(2)').style.background = 'red';
		let newGame = document.getElementById('newGame');
		newGame.style.display = 'block';
		document.querySelector('body').removeEventListener('click',secondPlayer);
		newGame.addEventListener('click', newGames)
	}
}

function secondPlayer(e) {
	let awayResult = document.querySelector('#away > p');
	let colorTarget = e.target.id;
	if(score[colorTarget] !== undefined) {
		awayScore += score[colorTarget];
		awayResult.textContent = awayScore;

		let home = document.querySelector('#turns > p');
		home.style.textDecoration = 'underline';
		home.style.fontWeight = 'bold';

		let away = document.querySelector('#turns > p:nth-child(2)');
		away.style.textDecoration = 'none';
		away.style.fontWeight = 'normal';
		document.querySelector('body').removeEventListener('click', secondPlayer);
		document.querySelector('body').addEventListener('click',firstPlayer);
	}
	if(awayScore >= 21) {
		document.querySelector('#home > p:nth-child(2)').style.background = 'red';
		document.querySelector('#away > p:nth-child(2)').style.background = 'green';
		let newGame = document.getElementById('newGame');
		newGame.style.display = 'block';
		document.querySelector('body').removeEventListener('click',firstPlayer);
		newGame.addEventListener('click', newGames)
	}
} 

function newGames() {
	location.reload();
}

function dart(){
	document.querySelector('body').addEventListener('click', firstPlayer);
}
