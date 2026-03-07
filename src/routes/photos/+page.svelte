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
        padding: 4rem 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .header {
        text-align: center;
        margin-bottom: 4rem;
    }

    .gradient-text {
        font-size: 3.5rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
    }

    .photo-card {
        padding: 1rem;
        border-radius: 16px;
        transition: transform 0.3s ease;
    }

    .photo-card:hover {
        transform: translateY(-5px);
    }

    .placeholder-img {
        width: 100%;
        aspect-ratio: 3/2;
        background: #f0f0f0;
        border-radius: 8px;
        object-fit: cover;
    }

    .meta {
        padding: 1rem 0.5rem;
    }

    .meta h3 {
        margin: 0;
        font-size: 1.2rem;
    }

    .meta p {
        margin: 0.25rem 0 0;
        color: #666;
        font-size: 0.9rem;
    }

    .glass {
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }
</style>
