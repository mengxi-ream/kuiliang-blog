---
title: 'My New Post'
date: '2023-08-02'
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can also use **Static Generation** for pages that need to be updated frequently, but the changes are small enough that a full rebuild is not required. You can do this by using **Incremental Static Regeneration**.

### When to use Static Generation v.s. Server-side Rendering?

Next.js provides two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then **reused** on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.
- **Client-side Rendering** is the pre-rendering method that generates the HTML on **each request**.
