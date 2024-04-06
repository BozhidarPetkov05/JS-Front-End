function solve() {
	const firstQuestionElement = document.querySelector('#quizzie section:first-of-type');
	const firstQuestionRightAnswer = document.querySelector('#quizzie section:first-of-type ul li:nth-of-type(2)');
	const firstQuestionWrongAnswer = document.querySelector('#quizzie section:first-of-type ul li:last-of-type');
	
	const secondQuestionElement = document.querySelector('#quizzie section:nth-of-type(2)');
	const secondQuestionRightAnswer = document.querySelector('#quizzie section:nth-of-type(2) ul li:last-of-type');
	const secondQuestionWrongAnswer = document.querySelector('#quizzie section:nth-of-type(2) ul li:nth-of-type(2)');

	const thirdQuestionElement = document.querySelector('#quizzie section:nth-of-type(3)');
	const thirdQuestionRightAnswer = document.querySelector('#quizzie section:nth-of-type(3) ul li:nth-of-type(2)');
	const thirdQuestionWrongAnswer = document.querySelector('#quizzie section:nth-of-type(3) ul li:last-of-type');

	const resultContainer = document.querySelector('#results');
	const result = document.querySelector('#results .results-inner h1')
	let rightAnswers = 0;

	firstQuestionRightAnswer.addEventListener('click', () => {
		firstQuestionElement.style.display = 'none';
		secondQuestionElement.style.display = 'block';
		rightAnswers++;
	});

	firstQuestionWrongAnswer.addEventListener('click', () => {
		firstQuestionElement.style.display = 'none';
		secondQuestionElement.style.display = 'block';
	});

	secondQuestionRightAnswer.addEventListener('click', () => {
		secondQuestionElement.style.display = 'none';
		thirdQuestionElement.style.display = 'block';
		rightAnswers++;
	});

	secondQuestionWrongAnswer.addEventListener('click', () => {
		secondQuestionElement.style.display = 'none';
		thirdQuestionElement.style.display = 'block';
	});

	thirdQuestionRightAnswer.addEventListener('click', () => {
		thirdQuestionElement.style.display = 'none';
		rightAnswers++;
		if (rightAnswers == 3) {
			resultContainer.style.display = 'block';
			result.textContent = `You are recognized as top JavaScript fan!`;
		} else {
			resultContainer.style.display = 'block';
			result.textContent = `You have ${rightAnswers} right answers`;
		}
	});

	thirdQuestionWrongAnswer.addEventListener('click', () => {
		thirdQuestionElement.style.display = 'none';
		if (rightAnswers == 3) {
			resultContainer.style.display = 'block';
			result.textContent = `You are recognized as top JavaScript fan!`;
		} else {
			resultContainer.style.display = 'block';
			result.textContent = `You have ${rightAnswers} right answers`;
		}
	});

	
}
