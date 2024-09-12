<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { quizzes } from '$lib/quizzes.js';

	let currentQuiz;
	let currentQuestionIndex = 0;
	let selectedAnswer = null;
	let score = 0;
	let quizCompleted = false;

	$: quizId = $page.params.id;

	onMount(() => {
		currentQuiz = quizzes.find(quiz => quiz.id === quizId);
		if (!currentQuiz) {
			// Handle case where quiz is not found
			console.error('Quiz not found');
		}
	});

	function handleAnswer() {
		if (selectedAnswer === null) return;

		const currentQuestion = currentQuiz.questions[currentQuestionIndex];
		if (selectedAnswer === currentQuestion.correctAnswer) {
			score++;
		}

		if (currentQuestionIndex < currentQuiz.questions.length - 1) {
			currentQuestionIndex++;
			selectedAnswer = null;
		} else {
			completeQuiz();
		}
	}

	function completeQuiz() {
		quizCompleted = true;
		const finalScore = (score / currentQuiz.questions.length) * 100;
		saveScore(finalScore);
	}

	function saveScore(finalScore) {
		const scores = JSON.parse(localStorage.getItem('quizScores')) || {};
		if (!scores[currentQuiz.id] || finalScore > scores[currentQuiz.id]) {
			scores[currentQuiz.id] = finalScore;
			localStorage.setItem('quizScores', JSON.stringify(scores));
		}
	}
</script>

<div class="container mx-auto p-4">
	{#if currentQuiz}
		<h1 class="text-2xl font-bold mb-4">{currentQuiz.title}</h1>
		{#if !quizCompleted}
			<div class="card bg-base-100 shadow-xl">
				<div class="card-body">
					<h2 class="card-title">Question {currentQuestionIndex + 1} of {currentQuiz.questions.length}</h2>
					<p class="text-lg mb-4">{currentQuiz.questions[currentQuestionIndex].question}</p>
					<div class="space-y-2">
						{#each currentQuiz.questions[currentQuestionIndex].options as option}
							<label class="flex items-center space-x-2">
								<input
										type="radio"
										name="answer"
										value={option.id}
										bind:group={selectedAnswer}
										class="radio radio-primary"
								/>
								<span>{option.text}</span>
							</label>
						{/each}
					</div>
					<div class="card-actions justify-end mt-4">
						<button class="btn btn-primary" on:click={handleAnswer} disabled={selectedAnswer === null}>
							{currentQuestionIndex === currentQuiz.questions.length - 1 ? 'Finish' : 'Next'}
						</button>
					</div>
				</div>
			</div>
		{:else}
			<div class="card bg-base-100 shadow-xl">
				<div class="card-body">
					<h2 class="card-title">Quiz Completed!</h2>
					<p class="text-lg">Your score: {score} out of {currentQuiz.questions.length}</p>
					<p class="text-lg">Percentage: {((score / currentQuiz.questions.length) * 100).toFixed(2)}%</p>
					<div class="card-actions justify-end mt-4">
						<a href="/quizlist" class="btn btn-primary">Back to Quizzes</a>
					</div>
				</div>
			</div>
		{/if}
	{:else}
		<p>Loading quiz...</p>
	{/if}
</div>