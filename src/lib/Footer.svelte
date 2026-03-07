<footer class="footer">
  <div class="container footer-container">
    <div class="footer-links">
      <a href="/privacy" class="footer-link">Privacy Policy</a>
      <a href="/terms" class="footer-link">Terms of Use</a>
      <a href="/contact" class="footer-link">Contact</a>
    </div>
    <div class="footer-bottom">
      <span class="copyright">
        © Glacier Archive Project {new Date().getFullYear()}
      </span>
    </div>
  </div>
</footer>

<style>
  .footer {
    background-color: var(--footer-bg);
    color: var(--footer-text);
    padding: var(--section-padding) 0 2rem 0;
    margin-top: var(--section-padding);
  }

  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .footer-links {
    display: flex;
    gap: 2rem;
    justify-content: center;
  }

  .footer-link {
    color: var(--footer-text);
    font-weight: 500;
    opacity: 0.8;

    padding: 0.5rem 1rem;
    border: 1px solid rgba(252, 245, 229, 0.2); /* Semi-transparent cream */
    border-radius: var(--border-radius);
    transition: var(--transition);
  }

  .footer-link:hover {
    opacity: 1;
    background: rgba(252, 245, 229, 0.1);
    border-color: var(--footer-text);
  }

  .footer-bottom {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-top: 2rem;
    border-top: 1px solid rgba(252, 245, 229, 0.1);
    font-size: 0.85rem;
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    .footer-links {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
    .footer-bottom {
      justify-content: center;
    }
  }
</style>
