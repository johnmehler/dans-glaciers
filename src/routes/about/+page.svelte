<script>
    import headshot from "$lib/assets/headshot.png";
</script>

<svelte:head>
    <title>About - Glacier Archive Project</title>
</svelte:head>

<div class="about-page">
    <section class="mission-section">
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
                <ul class="goals-list">
                    <li>Document landscape change</li>
                    <li>Publish accessible expert discussion</li>
                    <li>Share our field experience</li>
                    <li>Build an AI-enabled public archive</li>
                </ul>
            </div>
        </div>
    </section>

    <hr class="section-divider" />

    <section class="contributors-section">
        <div class="header-section">
            <h2 class="section-title">About the Authors</h2>
            <p class="lead">Meet the team behind the lens and the data.</p>
        </div>

        <div class="contributor-profile">
            <div class="profile-image">
                <img src={headshot} alt="Dan Meier" class="headshot" />
            </div>

            <div class="profile-text">
                <h2>Dan Meier</h2>
                <p class="subtitle">Founder & Lead Investigator</p>

                <div class="bio-content">
                    <p>
                        Dan Meier is a dual United States–Swiss citizen who grew
                        up spending his summers hiking throughout Switzerland.
                        During those early trips he developed a deep
                        appreciation for the alpine landscape and the glaciers
                        that shape it. Over the years, however, he began to
                        notice that many of the places he loved looked different
                        each time he returned. Glaciers he remembered from
                        childhood, including the Morteratsch Glacier and the
                        Wildstrubel Glacier, appeared smaller with every visit.
                    </p>

                    <p>
                        Those observations became the inspiration for the <strong
                            >Glacier Archive Project</strong
                        >.
                    </p>

                    <p>
                        Dan began this project during a sabbatical from his
                        professional career in consulting in order to study
                        glaciers more closely and document their changes through
                        repeat photography. The project also explores how modern
                        tools, including large-scale data analysis and
                        artificial intelligence, can help document and
                        communicate glacier change more effectively.
                    </p>

                    <p>
                        Beyond the physical landscape, the project also examines
                        the broader societal implications of glacier retreat.
                        Glaciers play an important role in water supply, energy
                        systems, infrastructure, tourism, and other sectors that
                        rely on alpine environments.
                    </p>

                    <p>
                        Dan holds a Master of Public Policy from the University
                        of Maryland, where he studied environmental policy and
                        related topics across the United States, Latin America,
                        and Europe. While at the University of Maryland, he
                        founded the University of Maryland Journal of Public
                        Policy and served as its first Editor-in-Chief,
                        publishing the journal’s inaugural edition in 2017.
                    </p>

                    <p>
                        In his free time, Dan continues to spend time in the
                        mountains hiking, skiing, and rock climbing.
                    </p>
                </div>
            </div>
        </div>

        <div class="contributor-profile reverse">
            <div class="profile-image anon-placeholder">GH</div>

            <div class="profile-text">
                <h2>Ginny Harmon</h2>
                <p class="subtitle">
                    Expert glacierologist, V2 climber at earth treks
                </p>

                <div class="bio-content">
                    <p>Bio and pic coming soon.</p>
                </div>
            </div>
        </div>
    </section>
</div>

<style>
    .about-page {
        padding: calc(var(--header-height) + var(--section-padding)) 2rem
            var(--section-padding);
        max-width: var(--container-width);
        margin: 0 auto;
    }

    .mission-section {
        margin-bottom: 5rem;
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

    .goal-card h1 {
        font-size: 2.2rem;
        color: var(--primary);
        margin: 0 0 1.5rem;
    }

    .goal-card p {
        font-size: 1.1rem;
        line-height: 1.8;
        color: var(--dark);
        margin-bottom: 2rem;
    }

    .goals-list {
        list-style: none;
        padding-left: 0;
    }

    .goals-list li {
        font-size: 1.1rem;
        margin-bottom: 1rem;
        padding-left: 1.5rem;
        position: relative;
        color: var(--dark);
    }

    .goals-list li::before {
        content: "•";
        color: var(--primary);
        position: absolute;
        left: 0;
        font-weight: bold;
    }

    .section-divider {
        border: none;
        border-top: 1px solid rgba(0, 158, 253, 0.1);
        margin: 4rem 0;
    }

    .header-section {
        text-align: center;
        margin-bottom: 4rem;
    }

    .section-title {
        font-size: 3rem;
        color: var(--primary);
        margin-bottom: 0.5rem;
    }

    .lead {
        font-size: 1.25rem;
        color: var(--gray);
    }

    .contributor-profile {
        display: grid;
        grid-template-columns: 240px 1fr;
        gap: 4rem;
        align-items: start;
        margin-bottom: 8rem;
    }

    .contributor-profile.reverse {
        grid-template-columns: 1fr 240px;
    }

    .contributor-profile.reverse .profile-image {
        grid-column: 2;
    }

    .contributor-profile.reverse .profile-text {
        grid-column: 1;
        grid-row: 1;
        text-align: right;
    }

    .headshot,
    .anon-placeholder {
        width: 100%;
        border-radius: var(--border-radius);
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        aspect-ratio: 1/1;
        object-fit: cover;
        border: 8px solid var(--white);
    }

    .anon-placeholder {
        background: #f1f5f9;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        font-weight: 800;
        color: var(--gray);
        letter-spacing: -2px;
    }

    .profile-text h2 {
        font-size: 2.2rem;
        margin-bottom: 0.25rem;
        color: var(--dark);
    }

    .subtitle {
        color: var(--primary);
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.9rem;
        margin-bottom: 2rem;
        display: block;
    }

    .bio-content p {
        font-size: 1.1rem;
        line-height: 1.7;
        color: var(--dark);
        opacity: 0.9;
        margin-bottom: 1.5rem;
    }

    @media (max-width: 850px) {
        .contributor-profile {
            grid-template-columns: 1fr;
            gap: 2rem;
            margin-bottom: 5rem;
        }
        .contributor-profile.reverse {
            grid-template-columns: 1fr;
        }
        .contributor-profile.reverse .profile-image,
        .contributor-profile.reverse .profile-text {
            grid-column: 1;
            text-align: left;
        }
        .profile-image {
            max-width: 300px;
            margin: 0 auto;
        }
        .section-title {
            font-size: 2.2rem;
        }
    }

    @media (max-width: 768px) {
        .mission-vision-goals {
            flex-direction: column;
            gap: 2.5rem;
        }
        .goal-card {
            min-width: 100%;
        }
    }
</style>
