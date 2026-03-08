<script>
  import { fade } from "svelte/transition";
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  function closeMenu() {
    isMenuOpen = false;
    document.body.style.overflow = "";
  }

  function handleKeydown(event) {
    if (event.key === "Escape" && isMenuOpen) {
      closeMenu();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

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
      <li><a href="/about">About</a></li>
      <li class="sep">|</li>
      <li><a href="/approach">Approach</a></li>
      <li class="sep">|</li>
      <li><a href="/journal">Journal</a></li>
      <li class="sep">|</li>
      <li><a href="/gallery">Gallery</a></li>
      <li class="sep">|</li>
      <li><a href="/contact" class="contact-cta">Contact</a></li>
    </ul>

    <button
      class="hamburger {isMenuOpen ? 'open' : ''}"
      on:click={toggleMenu}
      aria-label="Menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
</header>

{#if isMenuOpen}
  <div
    class="mobile-drawer-overlay"
    on:click={closeMenu}
    on:keydown={(e) => e.key === "Enter" && closeMenu()}
    transition:fade={{ duration: 200 }}
    role="button"
    tabindex="-1"
    aria-label="Close menu"
  ></div>
  <div class="mobile-drawer" class:open={isMenuOpen}>
    <ul class="mobile-nav-links">
      <li><a href="/" on:click={closeMenu}>Home</a></li>
      <li><a href="/about" on:click={closeMenu}>About</a></li>
      <li><a href="/approach" on:click={closeMenu}>Approach</a></li>
      <li><a href="/journal" on:click={closeMenu}>Journal</a></li>
      <li><a href="/gallery" on:click={closeMenu}>Gallery</a></li>
      <li>
        <a href="/contact" class="mobile-contact-cta" on:click={closeMenu}
          >Contact</a
        >
      </li>
    </ul>
  </div>
{/if}

<style>
  header {
    position: static;
    height: var(--header-height);
    background: var(--header-bg);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    padding: 0 2rem;
    z-index: 1001; /* Higher than drawer */
  }

  .logo {
    flex-shrink: 0;
    z-index: 1002;
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
    justify-content: flex-end;
    align-items: center;
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0;
  }

  .nav-links {
    display: flex;
    list-style: none;
    gap: 1.5rem;
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

  /* Hamburger Styles */
  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1002;
  }

  .hamburger span {
    width: 2rem;
    height: 0.2rem;
    background: var(--white);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  .hamburger.open span:first-child {
    transform: rotate(45deg);
  }

  .hamburger.open span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.open span:last-child {
    transform: rotate(-45deg);
  }

  /* Mobile Drawer Styles */
  .mobile-drawer-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    z-index: 999;
  }

  .mobile-drawer {
    position: absolute;
    top: var(--header-height);
    left: 0;
    width: 100%;
    background: var(--header-bg);
    border-bottom: 2px solid var(--primary);
    padding: 2rem;
    z-index: 1000;
    transform: translateY(-100%);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  .mobile-drawer.open {
    transform: translateY(0);
  }

  .mobile-nav-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }

  .mobile-nav-links a {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--white);
    text-decoration: none;
    transition: var(--transition);
  }

  .mobile-nav-links a:hover {
    color: var(--primary);
  }

  .mobile-contact-cta {
    background: var(--primary);
    padding: 0.8rem 2rem;
    border-radius: 50px;
    width: 100%;
    text-align: center;
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
    .hamburger {
      display: flex;
    }
  }
</style>
