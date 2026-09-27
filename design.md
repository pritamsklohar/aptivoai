# Aptivo AI — Design System v2
*Inspired by the Payer reference screenshots. Direction: light, warm-cool gradient SaaS aesthetic, pill buttons, soft card surfaces — replacing the current dark/electric-blue theme.*

---

## 1. Typography (unchanged)

Keep the existing type system — do not swap fonts during this redesign.

- **Display / Headings:** `Space Grotesk` (weights 500/600/700)
- **Body / UI text:** `Inter` (weights 400/500/600)

What changes is *color and weight usage within headlines* (see §4), not the typefaces themselves.

---

## 2. Color Palette (new — light theme)

The reference is a white-based site with warm-to-cool gradient accents (amber/orange → blue/violet), not the dark navy theme Aptivo AI currently uses. Adapted to Aptivo's existing blue identity:

| Token | Value | Use |
|---|---|---|
| `--bg` | `#FFFFFF` | Page background |
| `--surface` | `#F4F5F7` | Card / panel background (soft gray, not white) |
| `--surface-2` | `#EDEFF3` | Secondary panel, input backgrounds |
| `--border` | `#E4E6EB` | Hairlines, card borders |
| `--ink` | `#111318` | Primary text (near-black, not pure black) |
| `--muted` | `#6B7280` | Secondary text |
| `--accent-blue` | `#3B5BFF` | Primary accent — CTAs, links, highlighted headline words |
| `--accent-orange` | `#F5941C` | Secondary accent — highlighted headline words, checkmarks, warm gradient stop |
| `--accent-blue-soft` | `#E7ECFF` | Chips, soft highlight backgrounds |
| `--gradient-blob` | `linear-gradient(135deg, #F5941C 0%, #FFFFFF 45%, #3B5BFF 100%)` | Large soft blurred background blocks behind hero art and CTA bands |

**Rule:** Never use both accents at full saturation in the same tight cluster (e.g., a button). Reserve orange for secondary emphasis (checkmarks, one highlighted word, one bar in a chart) and blue for primary actions.

---

## 3. Page Framing

The reference wraps the entire page in a thick gradient border (blue top edge, orange→blue diagonal on the lower corners). Treat this as an **optional signature device**, not mandatory on every page:

- Use on the **Home page only**, as a fixed `border: 14px` frame around the viewport, with the gradient defined once and rotated per edge.
- Sub-pages (Product, Company, Careers, Contact, legal) stay borderless for readability — the frame is a homepage flourish, not a global chrome element.

---

## 4. Headline Accent Pattern

Every major section headline highlights **one or two words** in an accent color, rest stays `--ink`:

> "Enhance Your **Financial** **Journey** with Payer" → Financial = blue, Journey = orange

**Aptivo AI equivalent:**
> "Enhance Your **Career** **Journey** with Aptivo AI" → Career = blue, Journey = orange
> "Simple & **Transparent** Pricing" → Transparent = orange
> "Boost Your **Preparation** with Aptivo AI" → Preparation = blue

Rule: max two accent words per headline. Never accent an entire phrase.

---

## 5. Navigation Bar

- White background, no blur/glass effect (unlike the current dark nav) — a plain `1px solid var(--border)` bottom line is enough.
- Logo left (icon mark + wordmark).
- Nav links: plain text, `--muted`, `--ink` on hover — no underline.
- Right side: two actions —
  - Secondary: light gray pill ("Sign in")
  - Primary: solid blue pill ("Start now" / "Get Started")
- All nav buttons are **fully rounded pills** (`border-radius: 999px`), not the 8–9px rounded-rect buttons used previously.

---

## 6. Buttons

Two button families, both pill-shaped:

| Style | Background | Text | Use |
|---|---|---|---|
| Primary | `--accent-blue` | white | Main CTA — one per section max |
| Secondary (light) | `--surface-2` | `--ink` | Supporting action next to a primary |
| Secondary (dark) | `--ink` | white | Used sparingly for contrast on light gradient bands (e.g. "Learn more", "Download app") |

No ghost/outline buttons in this system — the reference uses only filled pills.

---

## 7. Hero Pattern

1. Left: eyebrow-free bold headline (`Space Grotesk`, 56–64px), gray subtext, two pill CTAs stacked horizontally.
2. Right: a **large soft gradient blob container** (rounded-corner, ~24px radius) holding a phone/product mockup image, with **floating badge callouts** scattered around it:
   - White pill badges with a small colored icon + short label (e.g. "AI-Matched", "Interview Ready", "Roadmap Live")
   - An avatar-stack + counter badge (e.g. "12K+" users) with a heart/star icon
   - A small tag near the mockup showing the brand name
3. Directly below the hero: a **"Trusted by" strip** — small caption + a row of grayscale logos (once real logos/partners exist; use placeholder wordmarks pre-launch).

**Aptivo AI adaptation:** replace the finance phone mockup with a roadmap/dashboard screenshot once the product UI exists; keep the floating badges but relabel for career context (e.g. "AI Roadmap Ready", "Interview Prep", "3 Companies Matched").

---

## 8. Feature Cards

- Background: `--surface` (soft gray), **not** white, **not** dark — this is the biggest shift from the current design.
- Corner radius: 20–24px, generous internal padding (32–40px).
- Pattern: headline (2 lines max) + 1–2 sentence description + an embedded mini UI element (a stat, a small chart, a pill button) sitting inside the card, not just plain text.
- Cards can be uneven sizes (2-column asymmetric grid), not a rigid 3-up grid every time.

For an "empower/security" style panel (reference's large single panel with floating elements over a dotted grid):
- Background: `--surface`, with a **faint dot-grid pattern** (radial-gradient dots, ~24px spacing, very low opacity) as texture.
- Floating small white cards/pills scattered on top (icons, a balance-style stat, a status badge) to suggest a live product, not a static illustration.

---

## 9. "Trusted by" / Social Proof

- Centered caption line: *"Trusted by students preparing for [X]+ companies"* (adapt copy — Aptivo has no company logos to show pre-launch; use this slot for stats instead: "500+ roadmaps generated", "3 user types", etc., until real logos exist).

---

## 10. Testimonial Component

- Two-column: left = large headline + quote + prev/next arrow buttons (simple circular icon buttons, `--surface-2` background); right = photo in a rounded card with a name/title tag overlapping the bottom edge of the photo.
- Only build this once real user testimonials exist — do not fabricate quotes or names for a pre-launch site.

---

## 11. Pricing Cards

- Monthly/Yearly pill toggle switch above the cards (two-option segmented control, active state = white pill on gray track).
- Three cards, middle one visually elevated (solid blue "Get Started" button vs. light/outline on the other two) to guide the eye to the recommended plan.
- Checklist uses **orange checkmarks** (small circular icon), not blue — keeps pricing visually distinct from primary CTAs.
- Price: large bold number + small `/Year` or `/Month` label in `--muted`.

---

## 12. Gradient CTA Band

- Full-width rounded panel using `--gradient-blob`, centered content: small icon mark, bold headline, short subtext, one dark pill button ("Download app" equivalent → for Aptivo: "Join the waitlist" / "Get Started").
- This is the *warmest* moment on the page — use once per page, near the bottom, never mid-page.

---

## 13. Newsletter Strip

- Icon (envelope) + headline/subtext on the left, email input + solid blue "Subscribe" pill on the right.
- Small disclaimer line under the input referencing the Privacy Policy link.

---

## 14. Footer

Four columns, consistent with current site structure but restyled for light theme:

| Column | Links |
|---|---|
| Useful Links | Home, Product, Pricing, About, Blog |
| Follow Us | LinkedIn, Instagram, Twitter/X |
| Company | Careers, Blog, Public Roadmap, Contact |
| Legal | Privacy Policy, Terms of Service |

- Logo + one-line tagline bottom-left, copyright line bottom bar.
- Link text: `--muted`, hover → `--ink` (not accent-blue — keep footer restrained).

---

## 15. Iconography

- Simple line icons (1.5–1.8px stroke), no filled icon sets — matches the reference's minimal line-icon feature list (Flexible Data Transfer, Dedicated Support, etc.).
- Icon color: `--ink` or `--muted` in lists; small colored circular badges (blue or orange fill, white icon) only for floating hero/panel callouts.

---

## 16. Spacing, Radius & Shadow Tokens

```
--radius-sm: 10px    /* inputs, small pills' internal elements */
--radius-md: 16px    /* buttons at rest sometimes, small cards */
--radius-lg: 24px    /* feature cards, panels */
--radius-full: 999px /* all buttons, nav pills, toggle */

--shadow-card: 0 1px 2px rgba(17,19,24,0.04), 0 8px 24px rgba(17,19,24,0.04);
--shadow-float: 0 4px 16px rgba(17,19,24,0.10); /* floating badges/pills over hero art */

--space-section: 96px vertical padding per major section (desktop); 56px mobile
```

---

## 17. Motion (kept from current system, retuned for light theme)

- Hero load: staggered fade/slide-up for headline → subtext → CTAs (unchanged approach).
- Floating hero badges: gentle staggered scale-in after the phone mockup settles, not before.
- Scroll reveal: single fade+translateY(16px) on feature cards, pricing cards, testimonial — same IntersectionObserver pattern already in use, no change needed.
- Avoid adding motion to the gradient blob backgrounds themselves (keep those static) — motion budget should go to content entering, not decorative backgrounds.

---

## 18. What NOT to carry over from the dark theme

- Drop the dark nav glass-blur — plain white nav with a hairline border instead.
- Drop the electric-blue-on-black card borders (`border-top: 3px solid accent`) — replaced by flat gray `--surface` cards with no colored top border.
- Drop monospace/technical-looking labels — this new direction is warmer and more consumer-friendly, less "developer tool."

---

## 19. Accessibility Notes (light theme specific)

- `--muted` (#6B7280) on `--bg` (#FFFFFF) meets AA for body text at 15px+; verify at final font sizes.
- Orange (`#F5941C`) on white fails AA for small text — use orange only for large headline words (32px+), icons, or checkmarks, never for body copy or small links.
- Maintain visible focus rings (`outline: 2px solid var(--accent-blue)`) on all pill buttons and inputs — pill shapes make default browser focus rings easy to lose.
