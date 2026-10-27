---
title: Pizza Delivery 
description: "How delivery pizza fast"
date: 2026-10-26
excerpt: Just a random excerpt …
authorAvatar: https://avatars.githubusercontent.com/u/10867370?v=4&size=64
layout: split
tags:
- popular
- rant
author: Susanta Sahoo
---

Both of your analogies capture the exact techniques used in modern web performance:

* **Analogy One (Prefetching):** The room service guy is already standing right outside your door with the pizza. The instant you ask for it (click the link), it is handed to you immediately because it was already prepared and brought to your floor in advance.
* **Analogy Two (Pre-rendering / View Transitions with Hover/Speculation):** The room service guy knocks and delivers it seamlessly right as you need it with zero effort or full-room resets on your part.

Here is how you implement both of these techniques in your Astro project to give your visitors that instant, friction-free experience.

---

## 1. Implement Room-Service-Outside-the-Door (Link Prefetching)

Astro has a built-in **Prefetch** feature. When a visitor scrolls past a link or hovers their cursor over it, Astro quietly downloads that next page in the background. When they actually click, the page loads instantly from local memory.

### Step 1: Enable Prefetching in `astro.config.mjs`

Open your `astro.config.mjs` file and update it to enable the prefetch configuration:

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Enable prefetching site-wide
  prefetch: {
    prefetchAll: true,       // Prefetches all links found on the page
    defaultStrategy: 'hover' // Fetches when user hovers or touches a link
  },
});
```

### Step 2: Fine-Tune Link Strategies (Optional)

If you want specific links (like your most popular blog posts) fetched even before the user hovers, you can add `data-astro-prefetch` directly to your `<a>` tags:

```html
<!-- Prefetch immediately as soon as the link enters the viewport -->
<a href="/posts/markdown" data-astro-prefetch="viewport">Read Post</a>

<!-- Prefetch the moment the mouse hovers over it (default) -->
<a href="/about" data-astro-prefetch="hover">About Me</a>
```

---

## 2. Implement Zero-Friction Delivery (Client-Side View Transitions)

To eliminate the white flash and page-reload interruption entirely when moving between pages, add Astro’s native **Client Router** (View Transitions). This keeps the layout persistent while smoothly swapping out only the main content area.

### Step 1: Add the `<ClientRouter/>` to `src/layouts/Base.astro`

Open your `src/layouts/Base.astro` file, import `ClientRouter`, and insert it inside the `<head>` section:

```astro
---
import '../styles/global.css';
import { SITE } from '../config';
// 1. Import the Client Router
import { ClientRouter } from 'astro:transitions';

interface Props { title?: string; description?: string; }
const { title, description = SITE.description } = Astro.props;
const fullTitle = title ? `${title} — ${SITE.title}` : `${SITE.title} — ${SITE.tagline}`;
const canonical = Astro.site ? new URL(Astro.url.pathname, Astro.site).href : undefined;
const path = Astro.url.pathname;
const year = new Date().getFullYear();
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="light dark" />
    <title>{fullTitle}</title>
    <meta name="description" content={description} />
    {canonical && <link rel="canonical" href={canonical} />}
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="alternate" type="application/rss+xml" title={SITE.title} href="/rss.xml" />
    <meta property="og:title" content={fullTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />

    <!-- 2. Add the router inside your head tag -->
    <ClientRouter />
  </head>
  <body>
    <!-- Rest of your Base.astro layout remains unchanged -->
```

---

## The Result

By combining **Prefetching** and **Client Router**:
1. Pages are fetched silently in the background before the user even completes a click.
2. Clicking a link swaps the content seamlessly without a full browser refresh, giving your site the exact instantaneous feel of clicking through local files on your MacBook.
