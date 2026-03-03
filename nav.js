// Inject shared navigation + footer into every page
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';

  function isActive(href) {
    return page === href ? ' class="active"' : '';
  }

  const navHTML = `
  <div class="logo-bar">
    <div class="logo-icnasa">
      <div class="dots">
        <div class="dot d1"></div><div class="dot d2"></div>
        <div class="dot d3"></div><div class="dot d4"></div><div class="dot d5"></div>
      </div>
      <span>ICNASA</span>
    </div>
    <div class="logo-divider"></div>
    <div class="logo-can"><span><em>C</em>A<em>N</em></span></div>
  </div>
  <nav>
    <div class="nav-inner">
      <a href="index.html"${isActive('index.html')}>Home</a>
      <a href="venue.html"${isActive('venue.html')}>Venue &amp; Travel</a>
      <a href="submit-abstract.html"${isActive('submit-abstract.html')}>Submit an Abstract</a>
      <a href="registration.html"${isActive('registration.html')}>Registration</a>
      <a href="speakers.html"${isActive('speakers.html')}>Speakers</a>
      <a href="committee.html"${isActive('committee.html')}>Committee</a>
      <div class="dropdown">
        <a href="program.html"${isActive('program.html')}>Program ▾</a>
        <div class="dropdown-menu">
          <a href="program.html">Scientific Program</a>
          <a href="program.html#schedule">Conference Schedule</a>
        </div>
      </div>
    </div>
    <div class="nav-sub">
      <a href="past-conferences.html"${isActive('past-conferences.html')}>Past Conferences</a>
      <a href="sponsors.html"${isActive('sponsors.html')}>Sponsors</a>
      <a href="contact.html"${isActive('contact.html')}>Contact Us</a>
    </div>
  </nav>`;

  const footerHTML = `
  <footer>
    <div class="footer-inner">
      <div>
        <div class="footer-links">
          <a href="index.html">Home</a>
          <a href="venue.html">Venue &amp; Travel</a>
          <a href="submit-abstract.html">Submit an Abstract</a>
          <a href="registration.html">Registration</a>
          <a href="speakers.html">Speakers</a>
          <a href="committee.html">Committee</a>
          <a href="program.html">Program</a>
          <a href="past-conferences.html">Past Conferences</a>
          <a href="sponsors.html">Sponsors</a>
          <a href="contact.html">Contact Us</a>
        </div>
        <div class="footer-social">
          <a class="li" href="#" title="LinkedIn">in</a>
          <a class="wc" href="#" title="WeChat">WeChat</a>
        </div>
      </div>
      <div style="text-align:right;">
        <img src="website/qr-placeholder.png" alt="QR Code" style="width:80px;opacity:.5;"
          onerror="this.style.display='none'">
      </div>
    </div>
    <div class="footer-copy">© 2026 ICNASA · Centre for Atomaterials and Nanomanufacturing (CAN) · RMIT University</div>
  </footer>`;

  document.getElementById('nav-placeholder').innerHTML = navHTML;
  document.getElementById('footer-placeholder').innerHTML = footerHTML;
})();
