<svelte:head>
    <title>Our Approach - Glacier Archive Project</title>
</svelte:head>

<section class="approach-container">
    <div class="header-section">
        <h1 class="gradient-text">Our Approach</h1>
        <p class="lead">
            Merging historical archive research with modern field methodology
            and data science.
        </p>
    </div>

    <div class="intro-glass glass">
        <p>
            The Glacier Archive Project combines historical research, field
            photography, geospatial data, and emerging analytical tools to
            document glacier change and make that information accessible to a
            broad audience. Our goal is to build a visual and data-driven
            archive that illustrates how alpine glaciers have evolved over time.
        </p>
    </div>

    <div class="method-grid">
        <div class="card glass">
            <div class="icon">🔍</div>
            <h3>Historical Research</h3>
            <p>
                We identify and catalog historical glacier photographs from
                archives, publications, and private collections. Physical prints
                or slides are digitized through high-resolution scanning and
                cataloged with metadata including location, vantage point, and
                date.
            </p>
        </div>

        <div class="card glass">
            <div class="icon">🏔️</div>
            <h3>Fieldwork</h3>
            <p>
                Using maps, terrain analysis, and GIS data, we locate the
                original camera positions. We then recreate those photographs
                from the exact same vantage points to provide a powerful visual
                comparison of glacier change across decades.
            </p>
        </div>

        <div class="card glass">
            <div class="icon">📊</div>
            <h3>Data Analysis</h3>
            <p>
                Images are paired with additional datasets such as satellite
                imagery and elevation data. This supports the creation of
                three-dimensional or interactive visualizations that allow
                viewers to explore glacier landscapes in new ways.
            </p>
        </div>

        <div class="card glass">
            <div class="icon">🤖</div>
            <h3>AI Tools</h3>
            <p>
                We explore how artificial intelligence can assist with
                organizing large image archives and identifying geographic
                features, helping translate complex environmental information
                into accessible public formats.
            </p>
        </div>
    </div>

    <div class="detailed-sections">
        <div class="section-row">
            <div class="section-content">
                <h2>Expert Insights & Education</h2>
                <p>
                    Beyond photography, we conduct interviews with researchers,
                    glaciologists, and experts across disciplines. These
                    conversations help us develop educational materials that
                    explain how glaciers function, why they matter, and what
                    these changes mean for surrounding communities and
                    ecosystems.
                </p>
            </div>
            <div class="tech-image">
                <img
                    src="/images/banner.jpg"
                    alt="Glacier Fieldwork Banner"
                    class="side-img"
                />
            </div>
        </div>

        <div class="section-row reverse">
            <div class="section-content">
                <h2>Citizen Science & Engagement</h2>
                <p>
                    We are developing opportunities for the public to engage
                    with the archive directly. This includes collaborative
                    efforts like contributing historical photographs, helping
                    identify specific locations in archival images, and
                    expanding the scope of the archive over time.
                </p>
            </div>
            <div class="section-image">
                <img src="/7.png" alt="Public Engagement" class="side-img" />
            </div>
        </div>
    </div>
</section>

<style>
    .approach-container {
        padding: 8rem 2rem 4rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .header-section {
        text-align: center;
        margin-bottom: 4rem;
    }

    .gradient-text {
        font-size: 4rem;
        background: linear-gradient(135deg, #2af598 0%, #009efd 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .lead {
        font-size: 1.5rem;
        color: var(--gray);
        margin-top: 1rem;
    }

    .intro-glass {
        padding: 3rem;
        border-radius: 32px;
        margin-bottom: 4rem;
        font-size: 1.35rem;
        line-height: 1.8;
        color: #334155;
        text-align: center;
    }

    .method-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 2rem;
        margin-bottom: 6rem;
    }

    .card {
        padding: 2.5rem;
        border-radius: 24px;
        transition: transform 0.3s ease;
    }

    .card:hover {
        transform: translateY(-8px);
    }

    .icon {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
    }

    .card h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: var(--dark);
    }

    .card p {
        font-size: 1.05rem;
        color: #475569;
        line-height: 1.7;
    }

    .detailed-sections {
        display: flex;
        flex-direction: column;
        gap: 6rem;
    }

    .section-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
    }

    .section-row.reverse {
        direction: rtl;
    }
    .section-row.reverse .section-content {
        direction: ltr;
    }

    .section-content h2 {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        color: var(--dark);
    }

    .section-content p {
        font-size: 1.2rem;
        line-height: 1.8;
        color: #334155;
    }

    .side-img {
        width: 100%;
        border-radius: 24px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 900px) {
        .section-row {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        .header-section h1 {
            font-size: 3rem;
        }
    }
</style>
