<svelte:head>
    <title>Contact - Glacier Archive Project</title>
</svelte:head>

<section class="contact-container">
    <div class="header-section">
        <h1 class="gradient-text">Contact</h1>
        <p class="lead">
            We welcome collaboration from researchers, mountaineers, and the
            public.
        </p>
    </div>

    <div class="contact-grid">
        <div class="info-side">
            <div class="intro-box glass">
                <h2>Contact</h2>
                <p>
                    If you have questions about the Glacier Archive Project, are
                    interested in collaborating, or would like to share
                    information related to glaciers or historical photography,
                    we welcome hearing from you.
                </p>
                <p class="direct-email">
                    <strong>Email:</strong>
                    <a href="mailto:admin@glacierarchive.org"
                        >admin@glacierarchive.org</a
                    >
                </p>
            </div>

            <div class="interest-list">
                <h3>We are particularly interested in hearing from:</h3>
                <ul>
                    <li>
                        Researchers and scientists working on glaciers or alpine
                        environments
                    </li>
                    <li>
                        Archives or institutions with historical glacier
                        photographs
                    </li>
                    <li>
                        Mountaineers, hikers, and photographers with historical
                        images
                    </li>
                    <li>
                        Educators interested in using Glacier Archive materials
                    </li>
                </ul>
                <p class="note">
                    <i
                        >While we may not be able to respond immediately during
                        fieldwork periods, we will make every effort to reply as
                        soon as possible.</i
                    >
                </p>
            </div>
        </div>

        <form class="contact-form glass">
            <h3>Send a Message</h3>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    required
                />
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea
                    id="message"
                    rows="6"
                    placeholder="How can we collaborate or help you?"
                    required
                ></textarea>
            </div>
            <button type="submit" class="submit-btn">Send Message</button>
            <p class="form-note">
                We will do our best to provide a timely response.
            </p>
        </form>
    </div>

    <div class="contribute-section glass">
        <div class="contribute-header">
            <h2>Contribute Historical Photos</h2>
            <p>
                Historical photographs are one of the most valuable tools for
                understanding how glaciers have changed through time. Many
                important images exist outside of formal archives in personal
                collections, old mountaineering records, guidebooks, or family
                photo albums.
            </p>
        </div>

        <div class="contribute-grid">
            <div class="guidelines">
                <h3>What is especially helpful:</h3>
                <ul>
                    <li>
                        Images that clearly show glacier fronts or glacier
                        valleys
                    </li>
                    <li>Photos where the approximate location is known</li>
                    <li>
                        Images taken from trails, huts, overlooks, or well-known
                        viewpoints
                    </li>
                    <li>
                        Photographs from earlier decades that allow repeat
                        photography today
                    </li>
                </ul>
            </div>

            <div class="submission-info">
                <h3>How to contribute:</h3>
                <p>
                    If you would like to contribute, please include as much
                    information as possible:
                </p>
                <ul class="meta-list">
                    <li>Glacier name, Country or Region</li>
                    <li>Approximate location or viewpoint</li>
                    <li>Approximate year and Photographer (if known)</li>
                </ul>
                <div class="cta-box">
                    <p>
                        Images may be submitted through the form above or by
                        emailing:
                    </p>
                    <a href="mailto:admin@glacierarchive.org" class="email-link"
                        >admin@glacierarchive.org</a
                    >
                </div>
            </div>
        </div>

        <div class="terms-box">
            <p>
                <strong>Credit & Rights:</strong> Contributors will be credited when
                their materials are used in the archive unless they prefer to remain
                anonymous. By submitting materials, you confirm you have the right
                to share the content for educational and research purposes.
            </p>
        </div>
    </div>
</section>

<style>
    .contact-container {
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

    .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1.2fr;
        gap: 4rem;
        margin-bottom: var(--section-padding);
        align-items: start;
    }

    .intro-box h2 {
        margin-bottom: 1.5rem;
        color: var(--dark);
    }

    .intro-box p {
        font-size: 1.15rem;
        line-height: 1.7;
        margin-bottom: 1.5rem;
        color: var(--dark);
        opacity: 0.8;
    }

    .direct-email a {
        color: var(--primary);
        font-weight: 600;
    }

    .interest-list h3 {
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
        color: var(--dark);
    }

    .interest-list ul {
        list-style: none;
        padding: 0;
    }

    .interest-list li {
        padding: 0.75rem 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        color: var(--dark);
        opacity: 0.8;
    }

    .interest-list li::before {
        content: "•";
        color: var(--primary);
        font-weight: bold;
    }

    .note {
        margin-top: 2rem;
        color: var(--gray);
        font-size: 0.95rem;
    }

    .contact-form {
        padding: 3rem;
        border-radius: var(--border-radius);
    }

    .contact-form h3 {
        margin-bottom: 2rem;
        color: var(--dark);
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
        font-size: 0.9rem;
        color: var(--dark);
    }

    input,
    textarea {
        width: 100%;
        padding: 1rem;
        border-radius: calc(var(--border-radius) / 2);
        border: 1px solid var(--gray-light);
        background: var(--white);
        font-size: 1rem;
        transition: var(--transition);
        color: var(--dark);
    }

    input:focus,
    textarea:focus {
        outline: none;
        border-color: var(--primary);
    }

    .submit-btn {
        width: 100%;
        background: var(--dark);
        color: var(--white);
        padding: 1rem;
        border-radius: 50px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        transition: var(--transition);
        margin-bottom: 1rem;
    }

    .submit-btn:hover {
        background: var(--primary-dark);
        transform: translateY(-2px);
    }

    .form-note {
        text-align: center;
        font-size: 0.85rem;
        color: var(--gray);
    }

    .contribute-section {
        padding: var(--section-padding);
        border-radius: var(--border-radius);
    }

    .contribute-header {
        max-width: 800px;
        margin-bottom: var(--section-padding);
    }

    .contribute-header h2 {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        color: var(--dark);
    }

    .contribute-header p {
        font-size: 1.2rem;
        line-height: 1.7;
        color: var(--dark);
        opacity: 0.8;
    }

    .contribute-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        margin-bottom: 3rem;
    }

    .contribute-grid h3 {
        margin-bottom: 1.5rem;
        font-size: 1.4rem;
        color: var(--dark);
    }

    .contribute-grid ul {
        padding-left: 1.2rem;
    }

    .contribute-grid li {
        margin-bottom: 1rem;
        color: var(--dark);
        opacity: 0.8;
    }

    .meta-list {
        list-style: none;
        padding-left: 0 !important;
    }

    .meta-list li::before {
        content: "→ ";
        color: var(--primary);
        font-weight: bold;
    }

    .cta-box {
        background: var(--white);
        padding: 2rem;
        border-radius: var(--border-radius);
        margin-top: 2rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
    }

    .email-link {
        display: block;
        margin-top: 0.5rem;
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--primary);
    }

    .terms-box {
        border-top: 1px solid rgba(0, 0, 0, 0.05);
        padding-top: 2rem;
        font-size: 0.95rem;
        color: var(--gray);
    }

    @media (max-width: 900px) {
        .contact-grid,
        .contribute-grid {
            grid-template-columns: 1fr;
        }
        .contribute-section {
            padding: 2rem;
        }
    }
</style>
