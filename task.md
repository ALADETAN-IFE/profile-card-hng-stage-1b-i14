# Frontend Wizards - Stage 1b Task: Build a Testable Profile Card

In this task, you will build a small, accessible, responsive Profile Card component/page using semantic HTML and modern frontend patterns (HTML/CSS/vanilla JS only). Every visible element must include a `data-testid` attribute so automated tests can target it.

## Study Material (recommended)

- HTML semantics and accessibility
- Accessible images and alt text

## Task: Profile Card (core requirements)

### Required Content

Each item must exist and include the specified `data-testid`.

- Profile card root container: `data-testid="test-profile-card"`
- Name (plain text): `data-testid="test-user-name"`
- Short biography (paragraph): `data-testid="test-user-bio"`
- Current time (in milliseconds): `data-testid="test-user-time"`
- Avatar image (user photo): `data-testid="test-user-avatar"`
- Social links list (one element containing links): `data-testid="test-user-social-links"`
- Hobbies (list): `data-testid="test-user-hobbies"`
- Dislikes (list): `data-testid="test-user-dislikes"`

The component should show the current epoch time in milliseconds at render or update.

Each social link item may have:

- `data-testid="test-user-social-<network>"` (e.g. `test-user-social-twitter`)

All `data-testid` attributes are required exactly as shown so tests are stable.

## HTML and Semantics (example suggestions)

- Wrap the card in `<article>` (`test-profile-card`)
- Name inside a `<header>` or an `<h2>` with `aria-label` as needed
- Bio in a `<p>`
- Avatar inside a `<figure>` with `<img>` and `<figcaption>` (if caption used)
- Social links inside a `<nav>` or `<ul>`
- Hobbies/dislikes each inside `<section>` and presented as `<ul>/<li>`
- All interactive items (links/buttons) must be keyboard-focusable

## Accessibility Requirements

- Provide meaningful alt text for the avatar image
- Ensure color contrast meets WCAG AA for text
- All interactive elements must have accessible names
- Provide `aria-live` or similar if time updates dynamically (or ensure time is announced on demand)
- Keyboard navigation: user must be able to tab through the card, focus each link, and activate them

## Responsiveness

- Card must look good on mobile, tablet, and desktop
- On small screens, stack content vertically
- On wider screens, arrange avatar to the left and text to the right (or any clean layout)
- Use CSS that does not break layout when content length changes (word-wrap, truncation with accessible expansion, etc.)

## Behavior and Implementation Guidance

- The time in milliseconds should be accurate and reflect `Date.now()` at render or on an update tick
- If you choose to update time, do so reasonably (e.g. every 500-1000ms)
- Avatar should accept either a URL or an uploaded image
- If upload is used, the component must ultimately display an image URL
- Social links should open in a new tab with `target="_blank"` and `rel="noopener noreferrer"`
- Use semantic markup and modern CSS (Flexbox or Grid)

## Acceptance Criteria (grading checklist)

- All required elements exist and are discoverable by the given `data-testid` values
- HTML uses semantic tags (`article`, `figure`, `nav`, `section`, headings)
- `test-user-time` equals `Date.now()` (or within a reasonable delta for rendering delay) and is shown in milliseconds
- Avatar renders with an `alt` attribute and `data-testid="test-user-avatar"`
- Social links are present inside `test-user-social-links` and optionally individually testable
- Hobbies and dislikes are distinct lists with their respective `data-testid` values
- Keyboard navigation works for links and focus styles are visible
- Layout is responsive at typical breakpoints (mobile/tablet/desktop)

## Submission Instructions

- Host the completed project (Netlify, Vercel, GitHub Pages, etc.) and include the live URL
- Include the GitHub repo link with a clear README and local run instructions
- Provide any relevant tests or notes in the repo

- Deadline: 17/04/2026, 11:59pm
- Submission link: https://docs.google.com/forms/d/e/1FAIpQLSfyENWbGf9qRkmDj77BIEAPkO0WwIqDpeR6_dte026HA-KuWQ/viewform
- Airtable link (edited)
