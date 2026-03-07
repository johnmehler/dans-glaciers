<svelte:head>
    <title>Journal - Glacier Photography Project</title>
</svelte:head>

<section class="journal-container">
    <h1 class="gradient-text">Expedition Journal</h1>

    <div class="posts-grid">
        <article class="post-card glass">
            <div class="post-image">
                <img
                    src="/8.png"
                    alt="Gorner Glacier Expedition"
                    class="placeholder-img"
                />
            </div>
            <div class="post-content">
                <span class="date">March 15, 2026</span>
                <h2>Weathering the Storm at Gorner Glacier</h2>
                <p>
                    Three days into our latest trek, the Swiss spring showed its
                    claws. We had to bunker down at 3,200m...
                </p>
                <a href="/journal/gorner-expedition" class="read-more"
                    >Read Full Post →</a
                >
            </div>
        </article>

        <article class="post-card glass">
            <div class="post-image">
                <img
                    src="/9.png"
                    alt="Blue Grotto Discovery"
                    class="placeholder-img"
                />
            </div>
            <div class="post-content">
                <span class="date">February 28, 2026</span>
                <h2>Finding the "Blue Grotto" of 1892</h2>
                <p>
                    Using a rare glass plate negative from the 19th century, we
                    finally located the cave entrance...
                </p>
                <a href="/journal/blue-grotto" class="read-more"
                    >Read Full Post →</a
                >
            </div>
        </article>
    </div>
</section>

<style>
    .journal-container {
        padding: var(--section-padding) 2rem;
        max-width: 1000px;
        margin: 0 auto;
    }

    .gradient-text {
        font-size: 3rem;
        color: var(--primary);
        margin-bottom: 3rem;
    }

    .posts-grid {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    .post-card {
        display: grid;
        grid-template-columns: 300px 1fr;
        gap: 2rem;
        padding: 1.5rem;
        border-radius: var(--border-radius);
        overflow: hidden;
    }

    .placeholder-img {
        width: 100%;
        height: 100%;
        aspect-ratio: 1/1;
        background: var(--gray-light);
        object-fit: cover;
        border-radius: calc(var(--border-radius) / 2);
    }

    .date {
        font-size: 0.9rem;
        color: var(--gray);
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .post-content h2 {
        margin: 0.5rem 0 1rem;
        font-size: 1.75rem;
        color: var(--dark);
    }

    .read-more {
        display: inline-block;
        margin-top: 1rem;
        color: var(--primary);
        font-weight: 600;
        text-decoration: none;
    }

    .glass {
        background: var(--glass);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    @media (max-width: 768px) {
        .post-card {
            grid-template-columns: 1fr;
        }
    }
</style>
