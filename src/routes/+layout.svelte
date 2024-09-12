<script>
	import "../app.css";
</script>

<div class="app flex flex-col min-h-screen bg-base-100" data-theme="wireframe">
	<header class="navbar bg-base-200">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl">QuizApp</a>
		</div>
	</header>

	<main class="flex-grow overflow-auto">
		<div class="container mx-auto p-4">
			<slot />
		</div>
	</main>

	<footer class="footer footer-center p-4 bg-base-200 text-base-content">
		<div>
			<p>Copyright © 2024 - All rights reserved by QuizApp</p>
		</div>
	</footer>
</div>