<svelte:head>
    <title>Mission & Vision - Glacier Archive Project</title>
    <meta
        name="description"
        content="Mission, vision, and goals of the Glacier Archive Project."
    />
</svelte:head>

<div class="mission-page">
    <section class="content-section">
        <div class="mission-vision-goals">
            <div class="goal-card">
                <h1>Mission</h1>
                <p>
                    To document and communicate the changing state of the
                    world’s glaciers through repeat photography, geospatial
                    data, and open scientific collaboration, creating an
                    accessible archive for researchers, educators, and the
                    public.
                </p>
            </div>

            <div class="goal-card">
                <h1>Vision</h1>
                <p>
                    A global, open archive of glacier imagery, data, and
                    accessible educational content that enables scientists,
                    citizen observers, and communities to better understand how
                    glacier change affects ecosystems, economies, and societies.
                </p>
            </div>

            <div class="goal-card">
                <h1>Project Goals</h1>
                <ul>
                    <li>Document landscape change</li>
                    <li>Publish accessible expert discussion</li>
                    <li>Share our field experience</li>
                    <li>Build an AI-enabled public archive</li>
                </ul>
            </div>
        </div>
    </section>

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
    .mission-page {
        max-width: 1200px;
        margin: 0 auto;
        padding: calc(var(--header-height) + var(--section-padding)) 2rem
            var(--section-padding);
    }

    .content-section {
        margin-bottom: 4rem;
    }

    .mission-vision-goals {
        display: flex;
        gap: 3rem;
        flex-wrap: wrap;
    }

    .goal-card {
        flex: 1;
        min-width: 300px;
    }

    h1 {
        font-size: 2.2rem;
        color: var(--primary);
        margin: 0 0 1.5rem;
    }

    p {
        font-size: 1.15rem;
        line-height: 1.8;
        color: var(--dark);
        margin-bottom: 2rem;
    }

    ul {
        list-style: none;
        padding-left: 0;
    }

    ul li {
        font-size: 1.15rem;
        margin-bottom: 1rem;
        padding-left: 1.5rem;
        position: relative;
    }

    ul li::before {
        content: "•";
        color: var(--primary);
        position: absolute;
        left: 0;
        font-weight: bold;
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

    .update-card p {
        font-size: 1.1rem;
        margin-bottom: 1.2rem;
    }

    @media (max-width: 768px) {
        .mission-vision-goals {
            flex-direction: column;
            gap: 2rem;
        }

        .goal-card {
            min-width: 100%;
        }
    }
</style>
