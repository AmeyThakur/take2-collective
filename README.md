# Take2 Collective website

This is the complete source for the Take2 Collective website. It is a static site built with HTML, CSS, JavaScript, and PNG/JPG assets. There is no build step or package installation.

## Run locally

From this directory, start any static file server, for example:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Files

- `index.html` — homepage
- `therapy.html`, `projects.html`, `resources.html`, `connect.html` — other pages
- `styles.css` — shared responsive styles
- `therapy-motion.js` — the therapy illustration's one-time animation; it respects reduced-motion preferences
- PNG and JPG files — illustrations and photos used by the pages

The contact and therapy inquiry links lead to external email, LinkedIn, and Google Forms destinations. Fonts are loaded from Google Fonts.

This handoff contains the site itself. Hosting configuration for the earlier Sites deployment is intentionally excluded.
