<svelte:head>
    <title>Contact - Glacier Photography Project</title>
</svelte:head>

<section class="contact-container">
    <div class="contact-grid">
        <div class="info">
            <h1 class="gradient-text">Get in Touch</h1>
            <p>
                Whether you have questions about the methodology, want to
                collaborate, or have historical photographs of Swiss glaciers to
                share, I'd love to hear from you.
            </p>

            <div class="contact-methods">
                <div class="method">
                    <strong>Email</strong>
                    <span>dan.meier@glacierproject.ch</span>
                </div>
                <div class="method">
                    <strong>Location</strong>
                    <span>Valais, Switzerland</span>
                </div>
            </div>
        </div>

        <form class="contact-form glass">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
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
                    rows="5"
                    placeholder="How can I help you?"
                    required
                ></textarea>
            </div>
            <button type="submit" class="submit-btn">Send Message</button>
        </form>
    </div>
</section>

<style>
    .contact-container {
        padding: 6rem 2rem;
        max-width: 1100px;
        margin: 0 auto;
    }

    .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;
        align-items: start;
    }

    .gradient-text {
        font-size: 3.5rem;
        background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 1.5rem;
    }

    .info p {
        font-size: 1.2rem;
        line-height: 1.6;
        color: #555;
        margin-bottom: 3rem;
    }

    .contact-methods {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .method strong {
        display: block;
        font-size: 0.9rem;
        text-transform: uppercase;
        color: #888;
        margin-bottom: 0.25rem;
    }

    .method span {
        font-size: 1.25rem;
        color: #333;
        font-weight: 500;
    }

    .contact-form {
        padding: 3rem;
        border-radius: 24px;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .form-group label {
        font-weight: 600;
        font-size: 0.9rem;
    }

    input,
    textarea {
        padding: 1rem;
        border-radius: 12px;
        border: 1px solid #ddd;
        background: rgba(255, 255, 255, 0.5);
        font-size: 1rem;
        transition: border-color 0.3s ease;
    }

    input:focus,
    textarea:focus {
        outline: none;
        border-color: #009efd;
    }

    .submit-btn {
        background: #1a1a1a;
        color: white;
        padding: 1rem;
        border-radius: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.3s ease;
        border: none;
    }

    .submit-btn:hover {
        background: #333;
    }

    .glass {
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 850px) {
        .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
        }
        .contact-container {
            padding: 3rem 1.5rem;
        }
    }
</style>
