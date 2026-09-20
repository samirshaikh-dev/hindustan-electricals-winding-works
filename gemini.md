# Hindustan Electricals Winding Works — Gemini System Directives

> Project context, business facts, and directory structure now live in **`context.md`** (the single source of truth). Read it before implementing anything.

## Agent Skills (Mandatory)
Before ANY code, content, or file change, load the relevant opencode **skill** from `agents/skills/` and follow its workflow:

| Skill | When to use |
| :--- | :--- |
| `ui-ux-engineer` | Design direction — layout, typography, color, spacing, interaction patterns. |
| `frontend-engineer` | Implementation — HTML/CSS/JS markup, components, client-side behavior. |
| `seo-engineer` | Technical SEO — schema/JSON-LD, sitemap/robots, crawlability, Core Web Vitals. |
| `seo-keyword-research-implementation` | Keyword strategy & on-page SEO — titles, metas, headings, content, internal links, FAQs. |
| `performance-engineer` | System-wide performance analysis and optimization. |

Rules:
1. Load the relevant skill(s) and read `context.md` for business facts before implementing anything.
2. Treat these as a mandatory gate, not a suggestion — especially before any SEO, content, or site-code change.
3. On-page SEO and content decisions follow the loaded SEO skill workflow before markup is written.

---

## Mandatory Directives
- Follow **`AI_RULE.md`** (`AI_RULE.md`) for the full set of non-negotiable project rules — including section 7 **Autonomous Execution**: never ask the user for permission; proceed autonomously with best-of-knowledge decisions.
- **`contact.html`** is the primary conversion page — it must always remain valid, functional, and consistent with the site's Instant Call (`tel:+919825272547`) and WhatsApp (`https://wa.me/919825272547`) CTAs. Treat any edit to it as high-priority and self-verify it after completing the task.
- Bounded by the **Integrity Rule**: never invent unverified years of experience, certifications, brands serviced, warranty terms, capacities, or statistics.
- Mobile conversion is the top priority: **Instant Call** and **WhatsApp** CTAs must always be visible and functional, including the sticky mobile bottom CTA bar (< 768px).
- Use **real workshop images only** — never fake or generated photos to represent actual business work.