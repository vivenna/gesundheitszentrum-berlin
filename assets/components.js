(function () {
  const BRAND = {
    name: 'Gesundheitszentrum Berlin',
    tagline: 'Medizin. Vorsorge. Vertrauen.',
    phone: '+49 30 123 456 789',
    phoneHref: 'tel:+4930123456789',
    email: 'kontakt@gesundheitszentrum-berlin.de',
    emailHref: 'mailto:kontakt@gesundheitszentrum-berlin.de',
    addressShort: 'Friedrichstraße 142, 10117 Berlin-Mitte',
    addressLines: 'Friedrichstraße 142<br />10117 Berlin-Mitte'
  };

  function elFromHTML(html) {
    const tpl = document.createElement('template');
    tpl.innerHTML = html.trim();
    return tpl.content;
  }

  function headerHTML() {
    return `
      <div class="topbar">
        <div class="container">
          <div class="topbar-info">
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="${BRAND.phoneHref}">${BRAND.phone}</a>
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Mo–Fr 8:00–18:00 · Sa 9:00–13:00
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              ${BRAND.addressShort}
            </span>
          </div>
          <div class="topbar-actions">
            <a href="kontakt.html">Kontakt</a>
            <a href="#" aria-label="Sprache wechseln">DE&nbsp;|&nbsp;EN</a>
          </div>
        </div>
      </div>

      <header class="site-header">
        <div class="container nav">
          <a href="index.html" class="brand" aria-label="${BRAND.name} – Startseite">
            <span class="brand-logo" aria-hidden="true"></span>
            <span class="brand-text">
              <strong>${BRAND.name}</strong>
              <span>${BRAND.tagline}</span>
            </span>
          </a>
          <nav class="nav-menu" id="navMenu" aria-label="Hauptnavigation">
            <a href="index.html">Start</a>
            <a href="leistungen.html">Leistungen</a>
            <a href="ueber-uns.html">Über uns</a>
            <a href="kontakt.html">Kontakt</a>
          </nav>
          <a href="termin.html" class="btn btn-primary nav-cta" id="navCta">
            Termin vereinbaren
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <button class="nav-toggle" id="navToggle" aria-label="Menü öffnen" aria-expanded="false">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </header>
    `;
  }

  function footerHTML() {
    return `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <a href="index.html" class="brand">
                <span class="brand-logo" aria-hidden="true"></span>
                <span class="brand-text">
                  <strong>${BRAND.name}</strong>
                  <span>${BRAND.tagline}</span>
                </span>
              </a>
              <p>Moderne Medizin in Berlin-Mitte – mit klaren Abläufen, kurzen Wegen und einem Team, das zuhört.</p>
            </div>

            <div class="footer-col">
              <h4>Kontakt</h4>
              <div class="footer-contact">
                <div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>${BRAND.addressLines}</span>
                </div>
                <div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <a href="${BRAND.phoneHref}">${BRAND.phone}</a>
                </div>
                <div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <a href="${BRAND.emailHref}">${BRAND.email}</a>
                </div>
              </div>
            </div>

            <div class="footer-col">
              <h4>Öffnungszeiten</h4>
              <ul>
                <li><a href="kontakt.html">Mo–Fr: 8:00–18:00</a></li>
                <li><a href="kontakt.html">Sa: 9:00–13:00</a></li>
                <li><a href="termin.html">Termin online</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Schnelllinks</h4>
              <ul>
                <li><a href="leistungen.html">Leistungen</a></li>
                <li><a href="ueber-uns.html">Über uns</a></li>
                <li><a href="kontakt.html">Kontakt</a></li>
                <li><a href="termin.html">Terminvereinbarung</a></li>
                <li><a href="datenschutz.html">Datenschutz</a></li>
                <li><a href="impressum.html">Impressum</a></li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <span>© 2026 ${BRAND.name} · Alle Rechte vorbehalten.</span>
            <div class="footer-bottom-links">
              <a href="impressum.html">Impressum</a>
              <a href="datenschutz.html">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  function inject() {
    const headerMount = document.getElementById('siteHeader');
    if (headerMount) headerMount.appendChild(elFromHTML(headerHTML()));

    const footerMount = document.getElementById('siteFooter');
    if (footerMount) footerMount.appendChild(elFromHTML(footerHTML()));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
