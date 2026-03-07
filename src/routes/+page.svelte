<script lang="ts">
	// We will add featured photos here later
</script>

<svelte:head>
	<title>Glacier Archive Project</title>
</svelte:head>

<section class="hero">
	<div class="hero-overlay"></div>
	<div class="hero-content">
		<h1 class="hero-title">Vanishing Giants</h1>
		<p class="hero-subtitle">
			Exploring and documenting the glacial retreat of the Swiss Alps
			through the lens of history.
		</p>
		<div class="hero-actions">
			<a href="/photos" class="btn btn-primary">View Photo Library</a>
			<a href="/about" class="btn btn-secondary">Our Goal</a>
		</div>
	</div>
</section>

<section class="featured-comparison">
	<div class="container">
		<div class="section-header">
			<h2>A Century of Change</h2>
			<p>The Aletsch Glacier: 1910 vs 2024</p>
		</div>

		<div class="comparison-slider">
			<div class="image-wrapper">
				<div class="label">1910</div>
				<img
					src="/3.png"
					alt="Aletsch Glacier 1910"
					class="placeholder-img"
				/>
			</div>
			<div class="image-wrapper">
				<div class="label">Today</div>
				<img
					src="/4.png"
					alt="Aletsch Glacier Today"
					class="placeholder-img"
				/>
			</div>
		</div>
	</div>
</section>

<section class="mission-summary glass">
	<div class="container grid">
		<div class="text">
			<h3>Our Expedition</h3>
			<p>
				Led by Swiss-American explorer Dan Meier, this project treks
				across the highest peaks of Switzerland to re-capture the exact
				same photographs taken by pioneers over a hundred years ago.
			</p>
			<ul class="stats">
				<li><strong>14</strong> Glaciers Documented</li>
				<li><strong>200+</strong> Historical Archives Indexed</li>
				<li><strong>4,000m+</strong> Average Expedition Altitude</li>
			</ul>
		</div>
		<div class="image">
			<img
				src="/5.png"
				alt="Expedition Snapshot"
				class="placeholder-img"
			/>
		</div>
	</div>
</section>

<style>
	.hero {
		height: 90vh;
		background: #1a2a3a; /* Fallback */
		background-image: url("/images/banner.jpg");
		background-size: cover;
		background-position: center;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: white;
	}

	.hero-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0.6)
		);
	}

	.hero-content {
		position: relative;
		z-index: 10;
		max-width: 800px;
		padding: 0 2rem;
	}

	.hero-title {
		font-size: clamp(3rem, 10vw, 6rem);
		font-weight: 800;
		margin-bottom: 1.5rem;
		letter-spacing: -2px;
	}

	.hero-subtitle {
		font-size: 1.5rem;
		margin-bottom: 2.5rem;
		opacity: 0.9;
		line-height: 1.4;
	}

	.btn {
		display: inline-block;
		padding: 1rem 2rem;
		border-radius: 50px;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.3s ease;
		margin: 0.5rem;
	}

	.btn-primary {
		background: #009efd;
		color: white;
	}

	.btn-primary:hover {
		background: #007cf0;
		transform: scale(1.05);
	}

	.btn-secondary {
		background: rgba(255, 255, 255, 0.1);
		color: white;
		backdrop-filter: blur(5px);
		border: 1px solid rgba(255, 255, 255, 0.3);
	}

	.btn-secondary:hover {
		background: rgba(255, 255, 255, 0.2);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 4rem 2rem;
	}

	.section-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.comparison-slider {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.image-wrapper {
		position: relative;
	}

	.label {
		position: absolute;
		top: 1rem;
		left: 1rem;
		background: rgba(0, 0, 0, 0.6);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.8rem;
		z-index: 5;
	}

	.placeholder-img {
		width: 100%;
		aspect-ratio: 4/3;
		background: #ddd;
		border-radius: 8px;
		object-fit: cover;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.stats {
		list-style: none;
		padding: 0;
		margin-top: 2rem;
	}

	.stats li {
		font-size: 1.1rem;
		margin-bottom: 0.75rem;
		color: #444;
	}

	.glass {
		background: rgba(255, 255, 255, 0.8);
		backdrop-filter: blur(10px);
	}

	@media (max-width: 768px) {
		.comparison-slider,
		.grid {
			grid-template-columns: 1fr;
		}
		.hero-title {
			font-size: 3rem;
		}
	}
</style>
