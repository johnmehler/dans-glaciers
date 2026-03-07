<script>
  // Header is now static as per requirements
</script>

<header>
  <nav class="container">
    <div class="logo">
      <a href="/">
        <span class="logo-text">GLACIER<b>ARCHIVE</b></span>
      </a>
    </div>
    <ul class="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/about">Our Goal</a></li>
      <li><a href="/contributors">Contributors</a></li>
      <li><a href="/approach">Approach</a></li>
      <li><a href="/journal">Journal</a></li>
      <li><a href="/photos">Photos</a></li>
      <li><a href="/contact" class="contact-cta">Contact & Contribute</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    position: static;
    height: var(--header-height);
    background: var(--header-bg);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    z-index: 1000;
  }

  .container {
    width: 100%;
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo a {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--header-text);
    letter-spacing: -0.5px;
  }

  .logo-text b {
    color: var(--primary);
  }

  .nav-links {
    display: flex;
    list-style: none;
    gap: var(--gap);
    align-items: center;
  }

  .nav-links a {
    font-weight: 500;
    font-size: 0.95rem;
    color: var(--header-text);
    transition: var(--transition);
    opacity: 0.8;
  }

  .nav-links a:hover {
    color: var(--primary);
    opacity: 1;
  }

  .contact-cta {
    background: var(--primary);
    color: var(--white) !important;
    padding: 0.6rem 1.25rem;
    border-radius: 50px;
    opacity: 1 !important;
    transition: var(--transition) !important;
  }

  .contact-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
  }
</style>
