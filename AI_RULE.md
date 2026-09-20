# AI Rules — Mandatory Directives

These rules are injected into every AI session on this project. Follow them without exception.

## 1. Mandatory Pre-Implementation Protocol
Before ANY code, content, or file change:
1. Load the relevant opencode **skills** for the task — e.g. `ui-ux-engineer` (design direction), `frontend-engineer` (implementation), `seo-engineer` (technical SEO/schema), `seo-keyword-research-implementation` (keywords/on-page SEO), `performance-engineer` (site performance).
2. Read `context.md` for business facts and project conventions.
3. For any SEO or content decision, follow the loaded SEO skill workflow before writing markup/content.
Do not skip this step; treat it as a mandatory gate before implementing.

## 2. Integrity Rule (Do NOT Invent)
- Never claim unverified **years of experience, certifications, brands serviced, warranty terms, capacities, statistics**, or customer testimonials unless the business owner has explicitly confirmed them.
- Use only the verified business details listed in `context.md` (single source of truth).
- Answer questions like "how long does motor rewinding take?" based on motor type, size, damage, and workload — never give a fixed promise or timeline.
- Mention brands/types/capacities only where the business actually handles them.

## 3. Local SEO & Conversion Rules
- Target high-intent local keywords for **Vapi / GIDC Vapi** and nearby belts (Silvassa, Daman, Valsad, Pardi).
- Every service gets its **own dedicated page**; no keyword cannibalization between pages.
- Embed `LocalBusiness` / `Service` **JSON-LD structured data** in the `<head>` of every primary page (address, geo, opening hours, phone, services).
- Use unique `<title>` and meta description per page, proper heading hierarchy, descriptive image `alt` text.
- Maintain `sitemap.xml` and `robots.txt`; keep internal links consistent.
- Do not create dozens of near-identical location pages purely for SEO.
- Mobile conversion is the top priority: **Instant Call** and **WhatsApp** CTAs must always be visible and functional, including the sticky mobile bottom CTA bar (< 768px).

## 4. Semantics & Accessibility
- Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`), ARIA attributes, logical heading order (single `h1` per page).
- High-contrast industrial palette; text must remain readable on all viewports.

## 5. Media
- Use **real workshop images only**. Never use fake or generated photos to represent actual business work.
- Optimize images for web (compressed, correct dimensions, meaningful alt text).

## 6. Verification & Quality
- After completing a task, verify the output (HTML validity, working links, JS behavior, schema correctness).
- This is a static site — there is no lint/build pipeline. Self-verify by rechecking the produced markup/assets; only run project-defined verification commands if they exist (see `opencode.jsonc`).
- Keep changes consistent with existing file conventions and naming patterns.

## 7. Autonomous Execution (Do NOT Ask Permission)
- Do not ask the user for any type of permission or approval before, during, or after a task.
- Proceed autonomously with best-of-knowledge decisions at every step — research, implement, verify, and finalize without seeking confirmation.
- Make reasonable judgment calls on ambiguity using context.md, this file, and standard best practices; only escalate if there is a genuine data-blocking conflict that cannot be resolved on your own.
- Do not pause for confirmation, preference prompts, or option selection unless the request itself is genuinely ambiguous with no sensible default.