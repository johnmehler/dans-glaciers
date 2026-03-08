<script lang="ts">
	import carousel1 from "$lib/assets/carousel_1.png";
	import carousel2 from "$lib/assets/carousel_2.png";
	import carousel3 from "$lib/assets/carousel_3.png";

	let activeSlide = 0;
	const slides = [carousel1, carousel2, carousel3];

	function nextSlide() {
		activeSlide = (activeSlide + 1) % slides.length;
	}

	function prevSlide() {
		activeSlide = (activeSlide - 1 + slides.length) % slides.length;
	}
</script>

<svelte:head>
	<title>Glacier Archive Project</title>
</svelte:head>

<!-- SECTION 2: Glacier Repeat Photography Project -->
<section class="hero">
	<div class="hero-overlay"></div>
	<div class="hero-content">
		<h1 class="hero-title">Glacier Repeat Photography Project</h1>
		<p class="hero-subtitle">
			Documenting a century of change in the Swiss Alps through historical
			reproductions and modern field observations.
		</p>
		<div class="hero-actions">
			<a href="/gallery" class="btn btn-primary">View Gallery</a>
			<a href="/approach" class="btn btn-secondary">Learn More</a>
		</div>
	</div>
</section>

<!-- SECTION 3: Middle -->
<section class="middle-section container grid">
	<div class="mission-block">
		<h2>Our Mission</h2>
		<p>
			To document and communicate the changing state of the world’s
			glaciers through repeat photography, geospatial data, and open
			scientific collaboration, creating an accessible archive for
			researchers, educators, and the public.
		</p>
	</div>

	<div class="goals-block">
		<h2>Project Goals</h2>
		<ul class="goals-list">
			<li>Document landscape change</li>
			<li>Publish accessible expert discussion</li>
			<li>Share our field experience</li>
			<li>Build an AI-enabled public archive</li>
		</ul>
	</div>

	<div class="updates-block">
		<h2>Recent Updates</h2>
		<div class="update-card glass">
			<span class="date">March 7, 2026</span>
			<h3>GlacierArchive.org Launch</h3>
			<p>
				The Glacier Archive website is now live, serving as the public
				home for our documentation efforts.
			</p>
		</div>
	</div>
</section>

<hr class="section-divider" />

<!-- SECTION 4: Then & Now -->
<section class="then-now container">
	<div class="section-header">
		<h2>Then & Now</h2>
	</div>

	<div class="carousel-container">
		<div class="carousel-slides">
			{#each slides as slide, i}
				<div
					class="slide {activeSlide === i ? 'active' : ''}"
					aria-hidden={activeSlide !== i}
				>
					<img src={slide} alt="Glacier melting phase {i + 1}" />
				</div>
			{/each}
		</div>

		<div class="carousel-controls">
			<button
				class="control-btn prev"
				on:click={prevSlide}
				aria-label="Previous slide">←</button
			>
			<div class="indicators">
				{#each slides as _, i}
					<button
						class="indicator {activeSlide === i ? 'active' : ''}"
						on:click={() => (activeSlide = i)}
						aria-label="Go to slide {i + 1}"
					></button>
				{/each}
			</div>
			<button
				class="control-btn next"
				on:click={nextSlide}
				aria-label="Next slide">→</button
			>
		</div>

		<p class="melt-description">
			The Morteratsch glacier in southwest Switzerland photographed from
			the same position in 1985, 2006, and 2021. In 1985 the front of the
			glacier is mere feet from the viewpoint with bulging ice. By 2006
			the glacier is a distant background with early high-altitude plants
			like willow and larch beginning to grow. By 2021 the glacier is a
			distant whisp of white with the first pines beginning to grow. This
			is the glacier that inspired the project and the photo I am most
			looking forward to repeating.
		</p>
	</div>
</section>

<style>
	.hero {
		height: 35vh;
		background-color: var(--dark);
		background-size: cover;
		background-position: center;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: var(--white);
	}

	.hero-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
	}

	.hero-content {
		position: relative;
		z-index: 10;
		max-width: 800px;
		padding: 0 2rem;
	}

	.hero-title {
		font-size: clamp(2rem, 6vw, 4rem);
		font-weight: 800;
		margin-bottom: 0.75rem;
		letter-spacing: -1px;
		line-height: 1.1;
	}

	.hero-subtitle {
		font-size: 1.1rem;
		margin-bottom: 1.5rem;
		opacity: 0.95;
		line-height: 1.4;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.btn {
		display: inline-block;
		padding: 0.6rem 1.5rem;
		border-radius: 50px;
		font-weight: 600;
		text-decoration: none;
		transition: var(--transition);
		margin: 0.4rem;
		font-size: 0.9rem;
	}

	.btn-primary {
		background: var(--primary);
		color: var(--white);
	}

	.btn-primary:hover {
		background: var(--primary-dark);
		transform: translateY(-2px);
		box-shadow: 0 10px 20px rgba(0, 158, 253, 0.3);
	}

	.btn-secondary {
		background: rgba(255, 255, 255, 0.1);
		color: var(--white);
		backdrop-filter: blur(5px);
		border: 1px solid rgba(255, 255, 255, 0.3);
	}

	.btn-secondary:hover {
		background: rgba(255, 255, 255, 0.2);
		transform: translateY(-2px);
	}

	.middle-section {
		padding: 2rem 2rem;
		gap: 3rem;
	}

	.middle-section h2 {
		font-size: 1.5rem;
		color: var(--primary);
		margin-bottom: 0.75rem;
	}

	.goals-list {
		list-style: none;
	}

	.goals-list li {
		margin-bottom: 0.4rem;
		padding-left: 1.5rem;
		position: relative;
		font-size: 0.95rem;
	}

	.goals-list li::before {
		content: "→";
		position: absolute;
		left: 0;
		color: var(--primary);
		font-weight: bold;
	}

	.update-card {
		padding: 1rem 1.25rem;
		border-radius: var(--border-radius);
		border: 1px solid rgba(0, 158, 253, 0.1);
	}

	.update-card .date {
		display: block;
		font-size: 0.8rem;
		color: var(--gray);
		margin-bottom: 0.25rem;
		font-weight: 600;
	}

	.update-card h3 {
		font-size: 1.05rem;
		margin-bottom: 0.5rem;
		color: var(--dark);
	}

	.update-card p {
		font-size: 0.9rem;
		line-height: 1.4;
	}

	.section-divider {
		border: none;
		border-top: 1px solid rgba(0, 158, 253, 0.1);
		max-width: var(--container-width);
		margin: 0 auto;
		width: calc(100% - 4rem);
	}

	.then-now {
		padding-top: 2rem;
		padding-bottom: 2rem;
	}

	.section-header {
		text-align: center;
		margin-bottom: 1.5rem;
	}

	.section-header h2 {
		font-size: 2rem;
		color: var(--dark);
		margin-bottom: 0.1rem;
	}

	.carousel-container {
		position: relative;
		max-width: 1000px;
		margin: 0 auto;
		overflow: hidden;
	}

	.carousel-slides {
		position: relative;
		aspect-ratio: 21/7;
		background: var(--gray-light);
		border-radius: var(--border-radius);
		overflow: hidden;
	}

	.slide {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: opacity 0.5s ease-in-out;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.slide.active {
		opacity: 1;
		z-index: 2;
	}

	.slide img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.carousel-controls {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 0;
	}

	.control-btn {
		background: rgba(0, 158, 253, 0.1);
		border: none;
		color: var(--primary);
		width: 40px;
		height: 40px;
		border-radius: 50%;
		cursor: pointer;
		font-weight: bold;
		transition: var(--transition);
	}

	.control-btn:hover {
		background: var(--primary);
		color: var(--white);
	}

	.indicators {
		display: flex;
		gap: 0.5rem;
	}

	.indicator {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--gray-light);
		border: none;
		cursor: pointer;
		padding: 0;
		transition: var(--transition);
	}

	.indicator.active {
		background: var(--primary);
		transform: scale(1.2);
	}

	.melt-description {
		font-size: 0.95rem;
		line-height: 1.6;
		color: var(--gray);
		text-align: center;
		max-width: 900px;
		margin: 1.5rem auto 0;
	}

	.container {
		max-width: var(--container-width);
		margin: 0 auto;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 3rem;
	}

	.glass {
		background: var(--glass);
		backdrop-filter: blur(10px);
	}

	@media (max-width: 1024px) {
		.grid {
			grid-template-columns: 1fr;
			gap: 3rem;
		}
	}

	@media (max-width: 768px) {
		.hero-title {
			font-size: 2.5rem;
		}
		.carousel-slides {
			aspect-ratio: 16/9;
		}
	}
</style>
