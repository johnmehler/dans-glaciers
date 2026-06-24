<script lang="ts">
    import { posts } from "$lib/journalData";
</script>

<svelte:head>
    <title>Journal - Glacier Archive Project</title>
    <meta
        name="description"
        content="Recent updates and journal entries from the Glacier Archive Project."
    />
</svelte:head>

<div class="journal-page">
    <section class="updates-section glass">
        <h2>Recent Updates:</h2>
        
        <div class="posts-list">
            {#each posts as post}
                <article class="update-card">
                    <h3>{post.title}</h3>
                    <p class="date">Date: {post.date}</p>

                    <div class="post-content">
                        {#each post.paragraphs as paragraph}
                            <p>{paragraph}</p>
                        {/each}
                    </div>

                    {#if post.sources && post.sources.length > 0}
                        <div class="post-sources">
                            <h4>Sources:</h4>
                            <ul>
                                {#each post.sources as source}
                                    <li>{source}</li>
                                {/each}
                            </ul>
                        </div>
                    {/if}
                </article>
            {/each}
        </div>
    </section>
</div>

<style>
    .journal-page {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem var(--section-padding);
    }

    .updates-section {
        padding: 3rem;
        border-radius: var(--border-radius);
    }

    h2 {
        font-size: 1.8rem;
        margin-bottom: 2rem;
        color: var(--dark);
    }

    .posts-list {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    .update-card {
        padding-bottom: 3.5rem;
        border-bottom: 1px solid rgba(0, 158, 253, 0.15);
    }

    .update-card:last-child {
        padding-bottom: 0;
        border-bottom: none;
    }

    .update-card h3 {
        font-size: 1.6rem;
        color: var(--primary);
        margin-bottom: 0.5rem;
    }

    .date {
        font-weight: 600;
        color: var(--gray);
        margin-bottom: 1.5rem;
        font-size: 0.95rem;
    }

    p {
        font-size: 1.1rem;
        line-height: 1.7;
        color: var(--dark);
        margin-bottom: 1.2rem;
    }

    .post-sources {
        margin-top: 2rem;
        padding: 1.5rem;
        background: rgba(0, 158, 253, 0.04);
        border-radius: 8px;
    }

    .post-sources h4 {
        font-size: 1.05rem;
        margin-bottom: 0.75rem;
        color: var(--dark);
        font-weight: 700;
    }

    .post-sources ul {
        list-style-type: disc;
        padding-left: 1.25rem;
        margin: 0;
    }

    .post-sources li {
        font-size: 0.95rem;
        color: var(--gray);
        line-height: 1.6;
        margin-bottom: 0.4rem;
    }

    .post-sources li:last-child {
        margin-bottom: 0;
    }
</style>
