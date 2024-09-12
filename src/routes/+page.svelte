<script>
	import {goto} from '$app/navigation';


	function navigateToQuizzes() {
		console.log("cacat")
		goto("/quizlist")
	}
</script>

<div class="flex flex-col lg:flex-col items-center justify-center min-h-full">
	<div class="text-center lg:text-left lg:mr-8 mb-8 lg:mb-0 mt-32">
		<h1 class="text-5xl font-bold">Welcome to QuizApp!</h1>
		<p class="py-6 max-w-md">Test your knowledge, challenge your friends, and learn new things with our exciting
			quizzes. Join our community of quiz enthusiasts today!</p>
	</div>
	<div class="card flex-shrink-0 w-full max-w-sm bg-base-100 mt-16">
		<button class="btn btn-primary animate-bounce" on:click={navigateToQuizzes}>Start</button>
	</div>
</div>