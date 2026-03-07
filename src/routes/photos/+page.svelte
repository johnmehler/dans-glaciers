<svelte:head>
    <title>Photo Library - Glacier Photography Project</title>
</svelte:head>

<section class="photos-container">
    <div class="header">
        <h1 class="gradient-text">Photo Library</h1>
        <p>A collection of comparisons and field recordings.</p>
    </div>

    <div class="gallery">
        {#each Array(9) as _, i}
            <div class="photo-card glass">
                <img
                    src="/{i + 1}.png"
                    alt="Glacier documentation shot {i + 1}"
                    class="placeholder-img"
                />
                <div class="meta">
                    <h3>Glacier {i + 1}</h3>
                    <p>Valais, Switzerland · 2026</p>
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    .photos-container {
        padding: var(--section-padding) 2rem;
        max-width: var(--container-width);
        margin: 0 auto;
    }

    .header {
        text-align: center;
        margin-bottom: var(--section-padding);
    }

    .gradient-text {
        font-size: 3.5rem;
        color: var(--primary);
    }

    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
    }

    .photo-card {
        padding: 1rem;
        border-radius: var(--border-radius);
        transition: var(--transition);
    }

    .photo-card:hover {
        transform: translateY(-5px);
    }

    .placeholder-img {
        width: 100%;
        aspect-ratio: 3/2;
        background: var(--gray-light);
        border-radius: calc(var(--border-radius) / 2);
        object-fit: cover;
    }

    .meta {
        padding: 1rem 0.5rem;
    }

    .meta h3 {
        margin: 0;
        font-size: 1.2rem;
        color: var(--dark);
    }

    .meta p {
        margin: 0.25rem 0 0;
        color: var(--gray);
        font-size: 0.9rem;
    }

    .glass {
        background: var(--glass);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }
</style>
