<svelte:head>
    <title>Mission - Glacier Archive Project</title>
</svelte:head>

<section class="goal-container">
    <div class="header-section">
        <h1 class="gradient-text">Mission</h1>
        <p class="lead">
            Bridging the gap between technical scientific research and public
            understanding.
        </p>
    </div>

    <div class="content-grid">
        <div class="mission-vision glass">
            <div class="section">
                <h2>Mission</h2>
                <p>
                    To document and communicate the changing state of the
                    world’s glaciers through repeat photography, geospatial
                    data, and open scientific collaboration, creating an
                    accessible archive for researchers, educators, and the
                    public.
                </p>
            </div>

            <div class="section">
                <h2>Vision</h2>
                <p>
                    A global, open archive of glacier imagery, data, and
                    accessible educational content that enables scientists,
                    citizen observers, and communities to better understand how
                    glacier change affects ecosystems, economies, and societies.
                </p>
            </div>

            <div class="section">
                <h2>Project Goals</h2>
                <ul class="goals-list">
                    <li>Document landscape change</li>
                    <li>Publish accessible expert discussion</li>
                    <li>Share our field experience</li>
                    <li>Build an AI-enabled public archive</li>
                </ul>
            </div>

            <div class="section recent-update glass">
                <h3>Recent Updates: GlacierArchive.org Launch</h3>
                <p class="date">Date: March 7, 2026</p>
                <div class="update-content">
                    <p>The Glacier Archive website is now live.</p>
                    <p>
                        This site will serve as the public home for the Glacier
                        Archive Project, an effort to document glacier change
                        through repeat photography and field observations. Over
                        the coming months we plan to revisit historic glacier
                        viewpoints and recreate photographs taken decades or
                        even more than a century ago.
                    </p>
                    <p>
                        The goal is simple: build a visual record showing how
                        glaciers have changed through time and make those
                        comparisons accessible to the public.
                    </p>
                    <p>
                        The project is currently pending final approval for the
                        upcoming field expedition. Once confirmed, this site
                        will host journal updates from the field, photo
                        comparisons, and documentation of the locations visited.
                    </p>
                </div>
            </div>
        </div>

        <div class="vision-image">
            <img
                src="/images/banner.jpg"
                alt="Glacier Archive Landscape"
                class="side-img"
            />
            <div class="stats-glass glass">
                <div class="stat">
                    <span class="num">100%</span>
                    <span class="lbl">Open Access</span>
                </div>
                <div class="stat">
                    <span class="num">AI</span>
                    <span class="lbl">Assisted Analysis</span>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .goal-container {
        padding: calc(var(--header-height) + var(--section-padding)) 2rem
            var(--section-padding);
        max-width: var(--container-width);
        margin: 0 auto;
    }

    .header-section {
        text-align: center;
        margin-bottom: var(--section-padding);
    }

    .gradient-text {
        font-size: 4rem;
        color: var(--primary);
    }

    .lead {
        font-size: 1.5rem;
        color: var(--gray);
        margin-top: 1rem;
    }

    .content-grid {
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: 4rem;
        align-items: start;
    }

    .mission-vision {
        padding: 3rem;
        border-radius: var(--border-radius);
    }

    .section {
        margin-bottom: 3rem;
    }

    .section:last-child {
        margin-bottom: 0;
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: var(--dark);
    }

    p {
        font-size: 1.2rem;
        line-height: 1.8;
        color: var(--dark);
        opacity: 0.8;
    }

    .goals-list {
        list-style: none;
        padding-left: 0;
    }

    .goals-list li {
        font-size: 1.15rem;
        margin-bottom: 0.75rem;
        color: var(--dark);
        opacity: 0.8;
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .goals-list li::before {
        content: "→";
        color: var(--primary);
        font-weight: bold;
    }

    .recent-update {
        margin-top: 4rem;
        padding: 2.5rem;
        border-radius: var(--border-radius);
        background: rgba(255, 255, 255, 0.4);
    }

    .recent-update h3 {
        margin-top: 0;
        color: var(--primary);
    }

    .recent-update .date {
        font-size: 0.9rem;
        color: var(--gray);
        margin-bottom: 1.5rem;
    }

    .update-content p {
        font-size: 1.1rem;
        margin-bottom: 1rem;
    }

    .vision-image {
        position: sticky;
        top: calc(var(--header-height) + 2rem);
    }

    .side-img {
        width: 100%;
        border-radius: var(--border-radius);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    .stats-glass {
        position: absolute;
        bottom: -30px;
        left: 20px;
        right: 20px;
        padding: 1.5rem;
        border-radius: var(--border-radius);
        display: flex;
        justify-content: space-around;
        text-align: center;
    }

    .num {
        display: block;
        font-size: 1.5rem;
        font-weight: 800;
        color: var(--primary);
    }

    .lbl {
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--gray);
    }

    @media (max-width: 900px) {
        .content-grid {
            grid-template-columns: 1fr;
        }
        .vision-image {
            position: static;
            margin-top: 2rem;
        }
    }
</style>
