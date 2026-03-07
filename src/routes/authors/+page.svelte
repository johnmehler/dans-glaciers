<svelte:head>
    <title>About the Authors - Glacier Archive Project</title>
</svelte:head>

<section class="contributors-container">
    <div class="header-section">
        <h1 class="gradient-text">About the Authors</h1>
        <p class="lead">Meet the team behind the lens and the data.</p>
    </div>

    <div class="contributor-profile">
        <div class="profile-image">
            <img src="/images/headshot.png" alt="Dan Meier" class="headshot" />
        </div>

        <div class="profile-text">
            <h2>Dan Meier</h2>
            <p class="subtitle">Founder & Lead Investigator</p>

            <div class="bio-content">
                <p>
                    Dan Meier is a dual United States–Swiss citizen who grew up
                    spending his summers hiking throughout Switzerland. During
                    those early trips he developed a deep appreciation for the
                    alpine landscape and the glaciers that shape it. Over the
                    years, however, he began to notice that many of the places
                    he loved looked different each time he returned. Glaciers he
                    remembered from childhood, including the Morteratsch Glacier
                    and the Wildstrubel Glacier, appeared smaller with every
                    visit.
                </p>

                <p>
                    Those observations became the inspiration for the <strong
                        >Glacier Archive Project</strong
                    >.
                </p>

                <p>
                    Dan began this project during a sabbatical from his
                    professional career in consulting in order to study glaciers
                    more closely and document their changes through repeat
                    photography. The project also explores how modern tools,
                    including large-scale data analysis and artificial
                    intelligence, can help document and communicate glacier
                    change more effectively.
                </p>

                <p>
                    Beyond the physical landscape, the project also examines the
                    broader societal implications of glacier retreat. Glaciers
                    play an important role in water supply, energy systems,
                    infrastructure, tourism, and other sectors that rely on
                    alpine environments.
                </p>

                <p>
                    Dan holds a Master of Public Policy from the University of
                    Maryland, where he studied environmental policy and related
                    topics across the United States, Latin America, and Europe.
                    While at the University of Maryland, he founded the
                    University of Maryland Journal of Public Policy and served
                    as its first Editor-in-Chief, publishing the journal’s
                    inaugural edition in 2017.
                </p>

                <p>
                    In his free time, Dan continues to spend time in the
                    mountains hiking, skiing, and rock climbing.
                </p>
            </div>
        </div>
    </div>
</section>

<style>
    .contributors-container {
        padding: calc(var(--header-height) + var(--section-padding)) 2rem
            var(--section-padding);
        max-width: 1000px;
        margin: 0 auto;
    }

    .header-section {
        text-align: center;
        margin-bottom: 5rem;
    }

    .gradient-text {
        font-size: 3.5rem;
        color: var(--primary);
    }

    .lead {
        font-size: 1.25rem;
        color: var(--gray);
        margin-top: 1rem;
    }

    .contributor-profile {
        display: grid;
        grid-template-columns: 350px 1fr;
        gap: 4rem;
        align-items: start;
    }

    .headshot {
        width: 100%;
        border-radius: var(--border-radius);
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        aspect-ratio: 1/1;
        object-fit: cover;
        border: 8px solid var(--white);
    }

    .profile-text h2 {
        font-size: 2.5rem;
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
    }

    .bio-content p {
        font-size: 1.15rem;
        line-height: 1.7;
        color: var(--dark);
        opacity: 0.8;
        margin-bottom: 1.5rem;
    }

    @media (max-width: 850px) {
        .contributor-profile {
            grid-template-columns: 1fr;
        }
        .profile-image {
            max-width: 300px;
            margin: 0 auto;
        }
        .header-section {
            margin-bottom: 3rem;
        }
    }
</style>
