# The Smile Lounge – Node.js website

Express + EJS site, 6 pages: Home, About Us, Services (with dropdown), Reviews, FAQs, Contact Us.
Includes sitemap.xml, robots.txt, JSON-LD (Dentist + FAQ) schema, gzip, long-term caching.

## Deploy on Hostinger (Node.js Web App)

1. hPanel → **Websites → Add website → Node.js Apps**.
2. Choose **Upload your website files** and upload this ZIP.
3. Settings: Node version **20 or 22**, entry file **server.js**,
   install command `npm install`, start command `npm start` (Hostinger sets `PORT` automatically).
4. Click **Deploy**. Then connect your domain and enable SSL.
5. Optional environment variable: `SITE_URL=https://yourdomain.com` (used for canonical links,
   sitemap and share images). Without it the site uses the domain it is served from.

## Adding your photos (no code needed)

Drop images into `public/images/` using these exact base names (.jpg, .jpeg, .png, .webp or .avif).
Until a file exists, a branded illustration is shown automatically.

| File name            | Where it appears                    | Suggested size |
|----------------------|-------------------------------------|----------------|
| `hero`               | Home page hero                      | 1000×1100      |
| `clinic-1`           | About page, clinic photo            | 1200×900       |
| `doctor-ankur-garg`  | Home + About doctor portrait        | 900×1125       |
| `og-image.png`       | Social share preview (already made) | 1200×630       |

Compress photos (e.g. squoosh.app, WebP, under 200 KB each) for speed.

## Editing details

All clinic facts (phone, address, hours, services, FAQs, doctor) live in `data/site.js`.
To show Google review cards on the site, paste a widget embed code (Elfsight, Trustindex, etc.)
into `reviewsWidgetHtml` in that file.

## Run locally

```
npm install
npm start      # http://localhost:3000
```
