<svelte:head>
    <title>Our Approach - Glacier Photography Project</title>
</svelte:head>

<section class="approach-container">
    <div class="header-section">
        <h1 class="gradient-text">The Scientific Approach</h1>
        <p class="lead">
            Merging historical accuracy with modern technology to document
            glacial retreat.
        </p>
    </div>

    <div class="methodology-grid">
        <div class="card glass">
            <h3>1. Historical Sourcing</h3>
            <p>
                We begin by scouring archival collections—from national
                libraries to private estates—to find high-quality photographs of
                Swiss glaciers taken between 1880 and 1950.
            </p>
        </div>
        <div class="card glass">
            <h3>2. Precise Re-location</h3>
            <p>
                Using GPS data, terrain analysis, and visual cues (jagged peaks,
                unique rock formations), we identify the exact vantage point of
                the original photographer.
            </p>
        </div>
        <div class="card glass">
            <h3>3. Repeat Photography</h3>
            <p>
                We recreate the shot using professional mirrorless cameras,
                matching the focal length, lighting conditions (where possible),
                and framing of the archival image.
            </p>
        </div>
    </div>

    <div class="technical-details">
        <h2>Technical Methodology</h2>
        <div class="tech-row">
            <div class="tech-content">
                <h3>Field Documentation</h3>
                <p>
                    Every expedition is documented with meticulous field notes.
                    We record altitudes, weather conditions, and the logistical
                    challenges of reaching remote glacial tongues. As a Swiss
                    citizen familiar with these ranges, I utilize local
                    knowledge to navigate safely while carrying heavy optical
                    equipment.
                </p>
            </div>
            <div class="tech-image">
                <img
                    src="/6.png"
                    alt="Field Equipment"
                    class="placeholder-img"
                />
            </div>
        </div>

        <div class="tech-row reverse">
            <div class="tech-content">
                <h3>Image Processing</h3>
                <p>
                    Post-processing focuses on alignment and color correction to
                    ensure the comparison with historical black-and-white plates
                    is as accurate as possible. We use specialized software to
                    overlay images and calculate volumetric retreat where
                    visible.
                </p>
            </div>
            <div class="tech-image">
                <img
                    src="/7.png"
                    alt="Editing Process"
                    class="placeholder-img"
                />
            </div>
        </div>
    </div>
</section>

<style>
    .approach-container {
        padding: 4rem 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .header-section {
        text-align: center;
        margin-bottom: 5rem;
    }

    .gradient-text {
        font-size: 3.5rem;
        background: linear-gradient(135deg, #2af598 0%, #009efd 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 1rem;
    }

    .lead {
        font-size: 1.25rem;
        color: #666;
    }

    .methodology-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-bottom: 6rem;
    }

    .card {
        padding: 2.5rem;
        border-radius: 20px;
        background: #fff;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        transition: transform 0.3s ease;
    }

    .card:hover {
        transform: translateY(-10px);
    }

    .card h3 {
        margin-bottom: 1rem;
        color: #333;
        font-size: 1.5rem;
    }

    .glass {
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .tech-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
        margin-bottom: 4rem;
    }

    .tech-row.reverse {
        direction: rtl;
    }
    .tech-row.reverse .tech-content {
        direction: ltr;
    }

    .placeholder-img {
        width: 100%;
        aspect-ratio: 16/9;
        background: #e0e0e0;
        border-radius: 12px;
        display: block;
        object-fit: cover;
    }

    h2 {
        font-size: 2.5rem;
        margin-bottom: 3rem;
        text-align: center;
    }

    @media (max-width: 768px) {
        .tech-row {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        .gradient-text {
            font-size: 2.5rem;
        }
    }
</style>
