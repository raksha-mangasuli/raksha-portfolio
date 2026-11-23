# Portfolio site: CLAUDE.md

## What this project is

This is Raksha's personal portfolio website, a static HTML/CSS/JS site hosted on GitHub Pages at raksha-mangasuli.github.io/raksha-portfolio/. It links out to individual project repos (each project is deployed separately, with its own GitHub repo and its own GitHub Pages URL) and to a separate interconnected Jekyll blog at raksha-mangasuli.github.io/blog/.

## Tech stack

- Plain HTML, CSS, JavaScript, no framework or build step
- Deployed via GitHub Pages, source branch is main
- Individual featured projects live in their own separate repos and are linked to from project cards here, not embedded in this repo

## Who you're working with / how to explain changes

- Act as a mid-level TypeScript / JavaScript / React developer: idiomatic, current practices, but don't over-engineer.
- I have solid general programming experience (C# / .NET, REST APIs, SQL Server, git). Assume fundamentals, no need to explain basic language constructs, HTTP, version control, etc.
- I'm newer to the modern frontend / JS side: React, hooks and state, bundlers (Vite/webpack), npm tooling, CSS layout edge cases. When a change touches those, add a short inline "why it works this way" next to the change, pitched at an experienced dev who's new to this part of the stack. Add a 2 to 3 line recap at the end only for multi-step or multi-file tasks, don't explain the same thing twice.
- This repo is currently plain HTML/CSS/JS with no build step (see Tech stack); it may move to React/TS in the later Figma redesign. Until then, don't add a framework or build step here unless I ask.

## Content rules

- Keep project descriptions concise, aim for around 3 to 4 lines on screen, not long paragraphs.
- No Lorem ipsum or stock filler text, ever, even temporarily.

## Project card conventions

Each project card includes:
- A title (h2, class "experience-sub-title project-title")
- A description (p, class "project-description")
- A Github button and a Live Demo button, each linking out to that project's own separate repo/deployment
- A project image

Layout rule: project cards (and the Experience cards) in a row must always render at equal height, regardless of content length. This is handled in CSS (`#experience .about-containers` and `#projects .about-containers` use `align-items: stretch`, and the project button row is pinned to the bottom of each card). Sections also size to their content (`section { height: auto }`), not a fixed vh, so big monitors don't get empty gaps between sections. Don't override it, and don't fix mismatched card heights by padding or trimming text to fit. Keep descriptions within the 3 to 4 line guideline anyway.

For projects that are not yet live or not ready to show, disable or remove the Github and Live Demo links for that card only, and label the card clearly as in progress (e.g. "Project Name: Under Construction"). Never leave a dead or broken link live.

## Structural boundaries

- Do not modify other project cards when editing one card. Changes should be scoped to the specific section being worked on.
- Do not touch the blog repo from here, it is a separate Jekyll project with its own CLAUDE.md.
- Always check for and avoid duplicate or nested HTML tags (e.g. nested `<p>` tags) after edits, validate the surrounding structure before considering an edit done.

## Link rules

- Every external link or link-like button (project Github / Live Demo, LinkedIn, GitHub, blog, CV PDF, etc.) must open in a new tab. For anchors use `target="_blank" rel="noopener noreferrer"`. For buttons use `onclick="window.open('URL', '_blank', 'noopener')"`. Never use `location.href` for external navigation.
- Exceptions: in-page anchors (`#about`, `#projects`, ...) stay in the same tab, because they scroll the current page. `mailto:` links also don't need a target.
- Check this for every new link, including new project cards.

## Responsive verification (required for every UI change)

Any new feature, section, card, or layout/CSS change must be checked at these widths before it counts as done:

- Mobile: 375 to 430px
- Tablet: 768px
- Laptop: 1280 to 1440px
- Desktop: 1920px
- Big monitor: 2560px

What to look for: horizontal overflow or clipped content, uneven card heights, content packed to one side with empty space on the other, large empty gaps between sections, text that is too small or too wide to read, and tap targets or buttons that wrap badly.

How to check:
- If the site is running locally (`npx serve .` on localhost:3000), take screenshots with headless Chrome, e.g. `chrome --headless=new --hide-scrollbars --window-size=2560,1440 --screenshot=out.png http://localhost:3000/` at each width, then look at them.
- Headless Chrome won't go below roughly 500px wide, so a 390px screenshot is cropped from a wider layout and is NOT a valid mobile check. Verify mobile in DevTools device mode (Ctrl+Shift+M), or say it is unverified.
- Taller windows exaggerate `vh`-based sizes (e.g. the nav height), so judge vertical gaps at a realistic window height, not a full-page-tall one.
- Never claim a layout is verified at a width that wasn't actually checked. List which widths were checked and which weren't, and ask for a screenshot where tooling can't cover it.
- Layout rules: avoid fixed `vh` heights for content sections, center any capped-width content block (`justify-content: center` / `margin: 0 auto`), and don't add new unscoped changes to shared classes such as `.about-containers` without checking every section that uses them.

## Design direction

- Currently using the site's existing template styling. A visual redesign is planned for later, to be done via Figma (Dev Mode handoff) once content population is further along. Do not make large unprompted visual/layout changes until that phase begins, stick to content and functional fixes for now unless asked otherwise.