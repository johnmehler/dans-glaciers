<svelte:head>
    <title>Our Goal - Glacier Archive Project</title>
</svelte:head>

<section class="goal-container">
    <div class="header-section">
        <h1 class="gradient-text">Our Goal</h1>
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
                    The Glacier Archive Project is an environmental
                    documentation and research initiative focused on recording
                    glacier change through repeat photography, geospatial
                    analysis, and open scientific collaboration. By replicating
                    historical glacier photographs and pairing them with modern
                    imagery, the project creates a visual record of glacier
                    retreat and its downstream impacts on ecosystems, water
                    systems, and human communities.
                </p>
            </div>

            <div class="section">
                <h2>Open Science</h2>
                <p>
                    All photographs and associated metadata, including GPS
                    coordinates, elevation, equipment specifications, and
                    methods, are published in a public archive so researchers,
                    educators, and future observers can build upon the dataset.
                </p>
            </div>

            <div class="section">
                <h2>Analytical Innovation</h2>
                <p>
                    The project also incorporates emerging artificial
                    intelligence tools to enhance analysis and communication.
                    AI-assisted techniques help organize large image datasets,
                    generate visual comparisons of glacier change across time,
                    and produce clear, engaging graphics and visualizations that
                    make complex glaciology and climate science more accessible
                    to the public.
                </p>
            </div>
        </div>

        <div class="vision-image">
            <img
                src="/1.png"
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
        padding: 8rem 2rem 4rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .header-section {
        text-align: center;
        margin-bottom: 5rem;
    }

    .gradient-text {
        font-size: 4rem;
        background: linear-gradient(135deg, #007cf0, #00dfd8);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
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
        border-radius: 32px;
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
        color: #444;
    }

    .vision-image {
        position: sticky;
        top: 120px;
    }

    .side-img {
        width: 100%;
        border-radius: 24px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    .stats-glass {
        position: absolute;
        bottom: -30px;
        left: 20px;
        right: 20px;
        padding: 1.5rem;
        border-radius: 20px;
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
