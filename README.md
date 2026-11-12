# GNGC — Green Energy & E-Mobility Website

Responsive, static multi-page website concept for **GNGC (Ganga Nile Global Company)**. Built with HTML, custom CSS, vanilla JavaScript, Tailwind CDN utility availability, and Lucide icons.

## Pages
- `index.html` — landing page, sectors, metrics (clearly marked illustrative)
- `products.html` — product categories, filters, quote modal
- `services.html` — EPC, fleet electrification, support and market overview
- `compliance.html` — responsible trade framework and India/Nigeria/Sudan context
- `contact.html` — meeting request and enquiry forms
- `style.css`, `script.js` — shared design and interaction
- `README.md` — deployment and launch checklist

## Preview locally
No build step is required. Open `index.html` in a browser, or run a local static server:

```bash
python -m http.server 8000
```

Visit `http://localhost:8000`.

## Deploy to GitHub Pages
1. Create a GitHub repository (e.g. `gngc-website`).
2. Add all files in this folder to the repository root and commit/push.
3. In **Settings → Pages**, select **Deploy from a branch**.
4. Choose `main` and `/ (root)`, then Save.
5. Wait for the Pages deployment and open the published URL. A custom domain can be configured in Pages settings.

## Before production launch (important)
This repository is a **front-end starter**, not a complete production system. Do these tasks before accepting real customer information:

- **Forms:** Current forms validate in the browser and display a demo success notice; they do not transmit or book anything. Connect a vetted HTTPS form API, CRM, or serverless endpoint. Add server-side validation, CSRF protection where applicable, spam/rate limiting, consent/privacy notice, retention rules, and secure access controls. Do not log submitted personal information.
- **Booking:** Integrate a calendar provider/API and display availability. A submitted preferred time is not a confirmed appointment.
- **Legal/compliance:** Have qualified India, Nigeria, Sudan and destination-country trade counsel validate each transaction. Confirm sanctions, export controls, importer permits, customs, local-content rules, certification, tax, tender and payment/banking restrictions at the time of transaction. The compliance page is general information—not legal advice, a certification, or a claim of bilateral preferential treatment.
- **Company facts:** Replace illustrative stats, office placeholders, contact details, product specifications, testimonials and any unsupported claims with verified company information.
- **Security headers:** Meta CSP is a starter policy; HTTP response headers are stronger and preferred. Configure CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`, and suitable `Permissions-Policy` at hosting/CDN level. Review/lock CDN versions and CSP sources. Avoid inline scripts/styles in a hardened deployment.
- **Accessibility:** Test keyboard navigation, screen readers, contrast, focus states, reduced motion, and forms with WCAG 2.2 AA checks.
- **Performance:** Optimize/locally host images, use WebP/AVIF, set dimensions, lazy-load below-the-fold images, and consider self-hosting fonts/icons. Unsplash assets are demonstration imagery.
- **Privacy:** Publish a privacy policy, cookie/analytics disclosures (if applicable), and contact details. Do not collect sensitive data without a lawful basis and safeguards.

## Tech notes
- Tailwind is loaded from its CDN for easy prototyping. For a production site, install Tailwind and compile/minify a static CSS build.
- Theme preference uses local storage (`gngc-theme`).
- All form data remains in the browser in this demo. `script.js` only trims/control-character-filters values for demonstration; this is **not** a security boundary or substitute for server-side validation/escaping.
- Static GitHub Pages cannot run a backend, database, secure secrets, or server-side booking. Use a separately hosted API/service for those features.

## License
Add a license and asset license review appropriate to your organization before public distribution.
