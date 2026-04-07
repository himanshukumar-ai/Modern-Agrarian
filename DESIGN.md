# Design System Strategy: The Modern Agrarian

## 1. Overview & Creative North Star
The "Modern Agrarian" is the Creative North Star for this design system. It moves beyond the clinical "clean" look of standard e-commerce to create a high-end, editorial experience that feels as curated as a boutique farmers' market. This system rejects the rigid, boxy constraints of traditional grids in favor of **Organic Asymmetry** and **Tonal Depth**. 

By utilizing overlapping imagery, significant negative space, and a sophisticated interplay between sharp serif typography and soft rounded surfaces, we create a digital environment that breathes. The goal is to make the user feel like they are flipping through a luxury food magazine rather than scrolling a database.

---

## 2. Colors & Surface Philosophy
The palette is rooted in the earth, using a foundation of "clays" and "mosses" to establish trust and freshness.

### Color Palette (Material Design Specification)
- **Primary:** `#213301` (Deep Forest) — Used for high-authority text and primary actions.
- **Secondary:** `#5d604c` (Sage Leaf) — Used for secondary UI elements and supporting icons.
- **Tertiary:** `#5a1406` (Terracotta) — Used sparingly for "Sale" accents or organic highlights.
- **Background/Surface:** `#faf9f5` (Fine Linen) — The base for all pages.

### The "No-Line" Rule
To maintain a premium feel, **1px solid borders are prohibited for sectioning.** Structural boundaries must be defined solely through background color shifts or subtle tonal transitions. For example, a product gallery should sit on `surface-container-low` (`#f4f4f0`) to distinguish it from a `surface` (`#faf9f5`) header without the need for a line.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine paper.
- **Surface (Lowest):** Main background.
- **Surface-Container-Low:** Wide section backgrounds (e.g., Testimonials).
- **Surface-Container:** Card backgrounds.
- **Surface-Container-High:** Hover states or active selection cards.

### The "Glass & Gradient" Rule
Standard flat colors lack "soul." Main CTAs and Hero backgrounds should utilize subtle gradients (e.g., transitioning from `primary` to `primary-container`). For floating navigation or shopping carts, use **Glassmorphism**: semi-transparent surface colors with a `20px` backdrop-blur to allow produce photography to bleed through the UI, softening the interface.

---

## 3. Typography
The typographic system relies on high-contrast scales to create an editorial hierarchy.

- **Display & Headlines (Noto Serif):** These are the "voice" of the brand. Use `display-lg` (3.5rem) for hero sections to convey heritage and quality. Ensure tight letter-spacing (-0.02em) for a modern edge.
- **Body & Titles (Plus Jakarta Sans):** A clean, geometric sans-serif that provides a technical counterpoint to the serif. It ensures maximum readability for nutritional info and product names.
- **Labels (Plus Jakarta Sans):** Used for metadata (e.g., "Organic," "In Stock"). Always uppercase with increased letter-spacing (+0.05em) for a "designer label" aesthetic.

---

## 4. Elevation & Depth
This design system abandons heavy drop shadows in favor of **Tonal Layering**.

- **The Layering Principle:** Softness is achieved by stacking. Place a `surface-container-lowest` card on a `surface-container-low` section to create a "soft lift" that mimics natural light.
- **Ambient Shadows:** When a floating effect is required (e.g., a "Quick Add" button), use extra-diffused shadows.
    - **Shadow Color:** Tinted version of `on-surface` (not black).
    - **Specs:** `0px 12px 32px rgba(26, 28, 26, 0.06)`.
- **The "Ghost Border":** If a border is required for accessibility, use the `outline-variant` token at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components

### Buttons
- **Primary:** High-pill shape (`rounded-full`). Background uses a gradient from `primary` to `primary_container`. Text is `on_primary`.
- **Secondary:** Transparent background with a "Ghost Border" (15% opacity `outline-variant`).
- **Interaction:** On hover, the button should subtly scale (1.02x) rather than just changing color, mimicking the tactile nature of organic materials.

### Cards & Lists
- **Layout:** Strictly forbid divider lines. Use vertical white space (32px or 48px) to separate items.
- **Image Integration:** Product photography should use "cut-out" PNGs that occasionally overlap the card's edge, breaking the "box" and adding a sense of movement.

### Input Fields
- **Styling:** Use `surface_container_low` for the input background. Instead of a perimeter border, use a 2px bottom-accent in `primary_fixed` when the field is focused.
- **Corners:** Use `md` (0.75rem) rounding to balance softness with modern structure.

### Contextual Components
- **The "Origin" Chip:** A small, pill-shaped tag (e.g., "E-Farm") using `secondary_container` background. These should be placed with intentional asymmetry on product images.
- **The Floating Cart:** A glassmorphic side-drawer that uses `surface_container_lowest` at 80% opacity with a heavy blur, making the shopping experience feel integrated into the content.

---

## 6. Do's and Don'ts

### Do:
- **Use "Hero" White Space:** Allow at least 120px of vertical padding between major homepage sections.
- **Overlap Elements:** Place a high-quality photo of a lemon or leaf so it partially covers a text block and a background container. This creates depth.
- **Tonal Contrast:** Use the subtle difference between `#faf9f5` and `#eeeeea` to define areas.

### Don't:
- **Don't use "Pure" Black:** Always use `on_surface` (`#1a1c1a`) for text to maintain a soft, organic feel.
- **Don't use Grid Borders:** Never separate categories or products with lines. If it feels cluttered, increase the white space.
- **Don't use Standard Shadows:** Avoid the "fuzzy grey" shadow look. If it doesn't look like ambient natural light, remove it.
- **Don't use Stocky Buttons:** Avoid square or slightly rounded buttons. Go for the full pill (`rounded-full`) or a very generous `xl` (1.5rem) radius.