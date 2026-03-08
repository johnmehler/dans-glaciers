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
        <div class="update-card">
            <h3>Title: GlacierArchive.org Launch</h3>
            <p class="date">Date: March 7, 2026</p>

            <p>The Glacier Archive website is now live.</p>

            <p>
                This site will serve as the public home for the Glacier Archive
                Project, an effort to document glacier change through repeat
                photography and field observations. Over the coming months we
                plan to revisit historic glacier viewpoints and recreate
                photographs taken decades or even more than a century ago.
            </p>

            <p>
                The goal is simple: build a visual record showing how glaciers
                have changed through time and make those comparisons accessible
                to the public.
            </p>

            <p>
                The project is currently pending final approval for the upcoming
                field expedition. Once confirmed, this site will host journal
                updates from the field, photo comparisons, and documentation of
                the locations visited.
            </p>

            <p>More updates will follow soon as planning progresses.</p>
        </div>
    </section>
</div>

<style>
    .journal-page {
        max-width: 1200px;
        margin: 0 auto;
        padding: calc(var(--header-height) + var(--section-padding)) 2rem
            var(--section-padding);
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

    .update-card h3 {
        font-size: 1.5rem;
        color: var(--primary);
        margin-bottom: 0.5rem;
    }

    .date {
        font-weight: 600;
        color: var(--gray);
        margin-bottom: 1.5rem;
        font-size: 1rem;
    }

    p {
        font-size: 1.1rem;
        line-height: 1.7;
        color: var(--dark);
        margin-bottom: 1.2rem;
    }
</style>
