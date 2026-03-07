<script>
  // Header is now static as per requirements
</script>

<header>
  <div class="logo">
    <a href="/">
      <span class="logo-text">GLACIER<b>ARCHIVE</b></span>
    </a>
  </div>

  <nav class="container">
    <ul class="nav-links">
      <li><a href="/">Home</a></li>
      <li class="sep">|</li>
      <li><a href="/authors">About</a></li>
      <li class="sep">|</li>
      <li><a href="/approach">Approach</a></li>
      <li class="sep">|</li>
      <li><a href="/mission">Journal</a></li>
      <li class="sep">|</li>
      <li><a href="/gallery">Gallery</a></li>
      <li class="sep">|</li>
      <li><a href="/contact" class="contact-cta">Contact</a></li>
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
    padding: 0 2rem; /* Ensure logo is at the edge with some padding */
    z-index: 1000;
  }

  .logo {
    flex-shrink: 0;
  }

  .logo a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--white);
    letter-spacing: -0.5px;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.5rem 1.25rem;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: var(--transition);
  }

  .logo a:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .logo-text b {
    color: var(--primary);
  }

  .container {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end; /* Push links to the right */
    align-items: center;
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0;
  }

  .nav-links {
    display: flex;
    list-style: none;
    gap: 1.5rem; /* Adjusted gap for separators */
    align-items: center;
  }

  .nav-links li.sep {
    color: var(--header-text);
    opacity: 0.3;
    font-weight: 300;
  }

  .nav-links a {
    font-weight: 500;
    font-size: 1rem;
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

  @media (max-width: 1024px) {
    header {
      padding: 0 1rem;
    }
    .logo a {
      font-size: 1.1rem;
      padding: 0.4rem 0.8rem;
    }
    .nav-links {
      gap: 1rem;
    }
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
    .container {
      justify-content: flex-end;
    }
  }
</style>
