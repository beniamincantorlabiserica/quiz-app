<script>
	import { quizzes } from '$lib/quizzes.js';
</script>

<div class="p-4">
	<h1 class="text-2xl font-bold mb-4">Choose a Quiz</h1>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each quizzes as quiz}
			<div class="card bg-base-100 shadow-xl">
				<div class="card-body">
					<h2 class="card-title">{quiz.title}</h2>
					<p>{quiz.description}</p>
					<div class="card-actions justify-end">
						<a href="/quiz/{quiz.id}" class="btn btn-primary">Start Quiz</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>