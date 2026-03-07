<script>
  let scrolled = false;
  if (typeof window !== "undefined") {
    window.onscroll = () => {
      scrolled = window.scrollY > 50;
    };
  }
</script>

<header class:scrolled class="glass">
  <nav class="container">
    <div class="logo">
      <a href="/">
        <span class="logo-icon">🏔️</span>
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
      <li><a href="/contact" class="contact-cta">Contact</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition: all 0.3s ease;
    padding: 1.5rem 0;
    background: transparent;
    border-bottom: 1px solid transparent;
  }

  header.scrolled {
    padding: 0.75rem 0;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  }

  .container {
    max-width: 1200px;
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
    color: var(--dark);
    letter-spacing: -0.5px;
  }

  .logo-text b {
    color: var(--primary);
  }

  .nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
    align-items: center;
  }

  .nav-links a {
    font-weight: 500;
    font-size: 0.95rem;
    color: var(--dark);
    transition: color 0.3s ease;
    opacity: 0.8;
  }

  .nav-links a:hover {
    color: var(--primary);
    opacity: 1;
  }

  .contact-cta {
    background: var(--dark);
    color: white !important;
    padding: 0.6rem 1.25rem;
    border-radius: 50px;
    opacity: 1 !important;
    transition: transform 0.3s ease !important;
  }

  .contact-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none; /* In a real app we'd add a burger menu */
    }
  }
</style>
