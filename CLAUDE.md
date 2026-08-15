# Portfolio site: CLAUDE.md

## What this project is

This is Raksha's personal portfolio website, a static HTML/CSS/JS site hosted on GitHub Pages at raksha-mangasuli.github.io/raksha-portfolio/. It links out to individual project repos (each project is deployed separately, with its own GitHub repo and its own GitHub Pages URL) and to a separate interconnected Jekyll blog at raksha-mangasuli.github.io/blog/.

## Tech stack

- Plain HTML, CSS, JavaScript, no framework or build step
- Deployed via GitHub Pages, source branch is main
- Individual featured projects live in their own separate repos and are linked to from project cards here, not embedded in this repo

## Content rules

- Keep project descriptions concise, aim for around 3 to 4 lines on screen, not long paragraphs.
- No Lorem ipsum or stock filler text, ever, even temporarily.

## Project card conventions

Each project card includes:
- A title (h2, class "experience-sub-title project-title")
- A description (p, class "project-description")
- A Github button and a Live Demo button, each linking out to that project's own separate repo/deployment
- A project image

For projects that are not yet live or not ready to show (e.g. Bike Passport), disable or remove the Github and Live Demo links for that card only, and label the card clearly as in progress (e.g. "Project Name: Under Construction"). Never leave a dead or broken link live.

## Structural boundaries

- Do not modify other project cards when editing one card. Changes should be scoped to the specific section being worked on.
- Do not touch the blog repo from here, it is a separate Jekyll project with its own CLAUDE.md.
- Always check for and avoid duplicate or nested HTML tags (e.g. nested `<p>` tags) after edits, validate the surrounding structure before considering an edit done.

## Design direction

- Currently using the site's existing template styling. A visual redesign is planned for later, to be done via Figma (Dev Mode handoff) once content population is further along. Do not make large unprompted visual/layout changes until that phase begins, stick to content and functional fixes for now unless asked otherwise.