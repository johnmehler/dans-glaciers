<footer class="footer glass">
  <div class="footer-bottom">
    <div class="footer-info">
      <h3>Glacier Archive Project</h3>
      <p>
        Contact: <a href="mailto:admin@glacierarchive.org"
          >admin@glacierarchive.org</a
        >
      </p>
    </div>

    <div class="footer-right">
      <div class="legal-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Use</a>
      </div>
      <div class="copyright">
        © Glacier Archive Project {new Date().getFullYear()}
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    padding: 4rem 2.5rem;
    margin-top: 4rem;
    background: white;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 1200px;
    margin: 0 auto;
    font-size: 0.95rem;
  }

  .footer-info h3 {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  .footer-info p {
    color: var(--gray);
  }

  .footer-right {
    text-align: right;
  }

  .legal-links {
    display: flex;
    gap: 1.5rem;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }

  .legal-links a {
    color: var(--gray);
    transition: color 0.3s ease;
  }

  .legal-links a:hover {
    color: var(--primary);
  }

  .copyright {
    color: var(--gray);
    font-size: 0.85rem;
  }

  @media (max-width: 768px) {
    .footer-bottom {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 2rem;
    }
    .footer-right {
      text-align: center;
    }
    .legal-links {
      justify-content: center;
    }
  }
</style>
