# The Beauty Parlour — Dearborn, MI

A polished, single-page website for a Dearborn beauty salon. Custom build, hosted for free on GitHub Pages.

**Live site:** https://dylanthrp.github.io/the-beauty-parlour/

## What this is

A modern, mobile-first website for The Beauty Parlour at 23714 Michigan Ave, Dearborn, MI 48124. Built as a sales template — better than the hosted pHorest template the salon is currently on, and easy to extend with a real booking system.

## Tech

- Plain HTML + CSS + a small JS file. No frameworks, no build step.
- Free hosting on GitHub Pages.
- Custom domain (when ready): point a CNAME to `dylanthrp.github.io` and add a `CNAME` file.

## Layout

```
index.html
assets/
  site.css       # blush + rose-gold palette, layout, responsive
  site.js        # book button handler, footer year, hash nav
```

## Sections

1. **Utility bar** — open today, phone, email (rose-dark, sticky)
2. **Header** — brand, three CTAs (Call, Book online, Map)
3. **Section nav** — rose-colored, sticky
4. **Hero** — big serif headline, two CTAs, quick-facts row
5. **Services** — three categories (Hair, Nails, Skin & wax), 14 service cards
6. **Our team** — stylist cards with photo placeholders
7. **Book online** — callout card with a button + "coming soon" notice
8. **Gallery** — 6-cell grid of photo placeholders
9. **Visit us** — address, hours card on rose-dark, contact, Google Maps
10. **Footer** — byline, "Contact for pricing"

## What's real vs placeholder

**Real (pulled from the live business on pHorest + Google Maps):**
- Shop name: The Beauty Parlour
- Address: 23714 Michigan Ave, Dearborn, MI 48124
- Phone: (313) 425-8000
- Email: susub@beautyparlourdearborn.com
- Hours: Mon 11–7, Tue 10–5, Wed–Fri 10–7, Sat 10–5, Sun Closed
- Stylist: Susu (owner)

**Sample placeholders (clearly marked as such):**
- Service prices — labeled as "sample pricing" in the section lead and footer
- Service photos — gray placeholders marked "Photo coming soon"
- Team photos — same
- Gallery — same
- Facebook / Instagram links — currently `href="#"` (placeholder until the salon provides the real URLs)

**Honest disclaimers kept on the page:**
- "Photo coming soon" tags on every missing image (no fake stock photos)
- "Sample prices" callout (no fabricated pricing)
- "Booking system — coming soon" notice on the book button (no fake live booking)

## When a real booking system is ready

Edit `assets/site.js` — the `bookNowBtn` click handler has a comment showing where to add the real booking URL. Common options:

| Service | Cost to salon | Real-time availability | Deposits | Gift cards | SMS reminders |
|---|---|---|---|---|---|
| **Fresha** | Free (revenue from processing) | ✅ | ✅ | ✅ | ✅ |
| **Square Appointments** | Free with payment processing | ✅ | ✅ | ✅ | ✅ |
| **Cal.com** | Free / $15/mo for payments | ✅ | ❌ | ❌ | ✅ |
| **Calendly** | Free tier available | ✅ | ❌ | ❌ | ✅ |

**My recommendation:** Fresha or Square Appointments — both are purpose-built for salons, both are free for the salon, and both handle the full booking + deposits + gift cards + reminders stack that pHorest does. I can wire the chosen one into this site in a few minutes.

## When the salon has real photos and content

1. Drop images into `assets/photos/`
2. Replace each `<div class="service-photo" ...>` and `<div class="team-photo" ...>` with `<img src="assets/photos/filename.jpg" alt="...">`
3. Remove the "Photo coming soon" tag spans
4. Update the service prices in `index.html` (search for `class="price"`)
5. Replace `#` in the social links with real Facebook / Instagram URLs
6. Commit and push — live site updates in ~30 seconds

## License

This template is original work. Photos must be added under whatever license the salon's photographer agrees to.
