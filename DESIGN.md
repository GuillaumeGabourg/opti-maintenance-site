---
name: Opti'Maintenance Industrie
description: A graphite touch panel framing the technician's own field photos; what is lit green is what one independent technician covers.
colors:
  run: "#8cc63f"
  run-hover: "#9fd657"
  run-ink: "#10140c"
  run-dim: "#3e5a22"
  run-tint: "#1f2a19"
  warn: "#e3a33b"
  ground: "#16191b"
  ground-2: "#1b1f22"
  panel: "#212629"
  panel-2: "#272d31"
  seam: "#30363a"
  line: "#5d666c"
  edge: "#76818a"
  placeholder: "#7f8984"
  ink: "#e7ebe8"
  ink-2: "#a3ada8"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(52px, 5vw, 84px)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 66"
  display-mobile:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(44px, 12.5vw, 60px)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 66"
  headline:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(38px, 4.4vw, 64px)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 66"
  title:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "28px"
    fontWeight: 800
    lineHeight: 1
    fontVariation: "'wdth' 70"
  title-sm:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "24px"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "0.02em"
    fontVariation: "'wdth' 72"
  body-lg:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.5
    fontVariation: "'wdth' 100"
  standfirst:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.5
    fontVariation: "'wdth' 100"
  body:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
    fontVariation: "'wdth' 100"
  body-sm:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    fontVariation: "'wdth' 100"
  ui:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
    fontVariation: "'wdth' 100"
  small:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
    fontVariation: "'wdth' 100"
  button:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: 1.5
    fontVariation: "'wdth' 90"
  label:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 85"
  mono-value:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "clamp(30px, 3vw, 40px)"
    fontWeight: 600
    letterSpacing: "-0.01em"
    fontFeature: "'tnum'"
  mono-tag:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 600
    letterSpacing: "0.1em"
    fontFeature: "'tnum'"
rounded:
  sm: "10px"
  md: "16px"
  lg: "28px"
  sheet: "44px"
  pill: "999px"
  full: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  gutter: "clamp(16px, 4vw, 56px)"
  band-top: "clamp(72px, 10vw, 128px)"
  band-bottom: "clamp(96px, 12vw, 160px)"
components:
  button-run:
    backgroundColor: "{colors.run}"
    textColor: "{colors.run-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "16px 26px"
  button-run-hover:
    backgroundColor: "{colors.run-hover}"
    textColor: "{colors.run-ink}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "16px 26px"
  button-line-hover:
    backgroundColor: "{colors.panel-2}"
    textColor: "{colors.ink}"
  call-compact:
    backgroundColor: "{colors.run}"
    textColor: "{colors.run-ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  header:
    backgroundColor: "{colors.ground-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "64px"
    padding: "0 10px 0 16px"
  nav-link:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "9px 16px"
  nav-pill:
    backgroundColor: "{colors.panel-2}"
    rounded: "{rounded.pill}"
  field:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "13px 16px"
  choice:
    backgroundColor: "{colors.ground-2}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
  choice-checked:
    backgroundColor: "{colors.run-tint}"
    textColor: "{colors.ink}"
  form-panel:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.lg}"
  form-message:
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.md}"
    padding: "12px 18px"
  photo-caption:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
  plate:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "12px 12px 22px"
  plate-targeted:
    backgroundColor: "{colors.run-tint}"
  plate-id:
    textColor: "{colors.run}"
    typography: "{typography.mono-tag}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  op-chip:
    backgroundColor: "{colors.panel-2}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  value-card:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "22px 22px 24px"
  station:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.full}"
    size: "88px"
    padding: "20px"
  alarm-strip:
    backgroundColor: "{colors.ground-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
  direct-line:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "30px"
  sheet:
    backgroundColor: "{colors.ground}"
    rounded: "{rounded.sheet}"
  progress-line:
    backgroundColor: "{colors.run}"
    rounded: "{rounded.pill}"
    height: "2px"
  mobile-call-bar:
    backgroundColor: "{colors.run}"
    textColor: "{colors.run-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    height: "54px"
---

# Design System: Opti'Maintenance Industrie

## Overview

**Creative North Star: "Le technicien de terrain"**

The site reads like the operator touch panel of a modern installation: a graphite ground, soft-cornered tiles sized for a thumb, pill controls, and a state vocabulary so small it reads at a glance. Inside it sit the technician's own field photographs (a cogeneration set, a belt transmission, a sensor, a drive motor, a PLC program, a diagnostic curve), framed in rounded tiles and tagged with equipment codes. What is lit green is what Malo covers or what you can do next. Everything that is not state stays grey.

The panel is calm and tactile rather than square and technical. Sections stack like sheets sliding over one another; cards rise when touched; the header floats as a pill above the page. Colour is never decoration. Motion is the panel coming to life: the header drops in, the hero photo opens out of a rounded inset, the headline rises line by line, cards arrive in a short wave, the process pipe fills. It all disappears under reduced motion.

The world refuses the start-up register (neon, glow, gadget effects) and the anonymous trades site (stock photos, icon cards). It is a technician's panel, dark, soft-edged and exact, showing real work.

**Key Characteristics:**
- Graphite ground with four close tonal steps; 1px seams edge every tile.
- One-bit state colour: green means running / my domain / live feedback / primary action; amber means urgency or fault.
- Real field photography only, in rounded tiles, tagged with mono equipment codes on blurred pills.
- A five-step radius scale: 10px fields, 16px inner items, 28px tiles, 44px sheets, pills for everything pressed or tagged.
- Archivo variable width: compressed caps (66–72% width) for display and titles, 85% for labels, 100% for reading.
- JetBrains Mono only for phone numbers, measured values and equipment codes.
- One shared lift shadow for what floats or is touched; no other shadows.

## Colors

A locked graphite-and-signal palette: neutrals carry the whole surface, and two signal hues each own exactly one meaning.

### Primary
- **Running Green** (`run`): the "marche" state. Status lamps, equipment-code tags, sector stations once lit, the pipe flow, the reading-progress line, the short bar heading each value card, focus rings and the input focus halo, selection, acting links, and the fill of every primary call/submit button. Its text partner is **Run Ink** (`run-ink`), never white.
- **Running Green, Pressed Up** (`run-hover`): the hover step of a green-filled button. Nowhere else.
- **Dim Run** (`run-dim`): green at rest; the border a value card takes on hover.
- **Run Tint** (`run-tint`): the background of a targeted domain card, a checked choice, and the success message.

### Secondary
- **Alarm Amber** (`warn`): the "défaut / urgence" state. The amber lamp and phone number in the alarm strip, the direct-line panel's frame (amber at 45%) and its annunciator pill, invalid field borders, and the error message frame. Amber may sit behind its own text as a 10–20% tint pill (the phone link, the annunciator); that tint is still urgency, never a highlight elsewhere.

### Neutral
- **Graphite Ground** (`ground`): the page and every section sheet, input wells, and (at 82% with blur) the pills laid over photos.
- **Graphite Raised** (`ground-2`): alternating sheets, the header (86% at rest, 94% once scrolled, 97% for the open mobile menu), the alarm strip, unchecked choices.
- **Panel** (`panel`): every tile: domain cards, value cards, the direct-line panel, the form panel, stations, and the placeholder behind a loading photo.
- **Panel Raised** (`panel-2`): what sits on or slides over a tile: the nav pill, op chips, the outline button's hover fill, the menu button, the current item in the mobile menu.
- **Seam** (`seam`): every 1px tile and sheet edge (decorative, 1.25:1 on Panel); the empty process pipe; unlit station rims. Never the only boundary of a control.
- **Pipe Grey** (`line`): the secondary button outline, the hover edge of domain cards, unlit station symbols.
- **Control Edge** (`edge`): the resting 1px boundary of every field and choice pill (3.8:1 on Panel, 4.2:1 on Graphite Raised), so controls meet the 3:1 non-text minimum. Hover steps it to Readout Grey.
- **Placeholder Grey** (`placeholder`): placeholder text in fields (4.9:1 on Ground). Never for real content.
- **Screen Ink** (`ink`): headings, button text, field values, caption text.
- **Readout Grey** (`ink-2`): body copy, ledes, labels, inactive nav (6.6:1 on Panel, 7.6:1 on Ground).

### Named Rules
**The One-Bit Rule.** Green is a state, not a brand accent. It marks what is running, what Malo covers, live system feedback (progress, focus), or the action to take. If an element is none of these, it is grey.

**The Alarm Rule.** Amber appears only where something is urgent or wrong: the emergency line and a fault. Never as a highlight, a category colour, or a second accent.

**The Grey-Then-Lit Rule.** Things come on line, they do not arrive coloured: sector stations start Seam and Pipe Grey and light green in sequence; a domain card turns green-edged on Run Tint only when targeted.

## Typography

**Display Font:** Archivo variable (wdth 62–100, wght 400–800), with Arial Narrow fallback
**Body Font:** Archivo at full width
**Label/Mono Font:** JetBrains Mono (400–600), with ui-monospace fallback

**Character:** One grotesque stretched across its width axis does all the talking: compressed heavy caps read like panel legends, the full-width cut reads like a work order. The mono is the instrument readout and nothing else. Both families are self-hosted as WOFF2 subsets (latin and latin-ext) with `font-display: swap`; the latin Archivo file is preloaded.

### Hierarchy
- **Display** (800, wdth 66, clamp(52px, 5vw, 84px), lh 0.92, uppercase): the single hero statement, one masked line per phrase so it can rise line by line. **Display Mobile** (clamp(44px, 12.5vw, 60px)) at 640px and below. The last word turns Running Green.
- **Headline** (800, wdth 66, clamp(38px, 4.4vw, 64px), lh 0.95, uppercase, balanced wrap): one per sheet, paired with a **Standfirst** (18px, Readout Grey, 46ch) in a 7/5 split.
- **Title** (800, wdth 70, 28px, lh 1, uppercase): domain card names and sector station names.
- **Title Small** (800, wdth 72, 24px, lh 1.05, +0.02em, uppercase): value card names, legal-page subheads.
- **Body Large** (19px): the hero lede (clamp from 17px, 42ch), the about prose (56ch), the technician's name in the direct line (700).
- **Body** (400, wdth 100, 17px, lh 1.5): default running text and field values.
- **Body Small** (16px): domain and value descriptions, the alarm strip (15px on phones).
- **UI** (15px): choice labels, form messages, the compact call and the numeral inside the call button.
- **Small** (14px): footer, consent note, mobile menu items.
- **Button** (700, wdth 90, 17px).
- **Label** (600, wdth 85, 13px, +0.04–0.07em, uppercase): nav links, field labels and legends, op chips, photo captions, the annunciator, the zone line.
- **Mono value** (600, tabular): the direct-line phone number (clamp(30px, 3vw, 40px)); at text size for the alarm-strip and button phone numbers.
- **Mono tag** (600, 12px, +0.1em): equipment codes (MÉCA, ÉLEC, VAR, AUTO).

### Named Rules
**The Measured Mono Rule.** JetBrains Mono is reserved for what an instrument would print: phone numbers, measured values with units and equipment codes. Never for headings, body, buttons or decoration.

**The Width-Axis Rule.** Hierarchy is set by width and weight of the one family, not by a second display face: 66% for display and headlines, 70–72% for titles, 85% for labels, 90% for buttons, 100% for reading. Reading text is never compressed and never set in caps.

## Layout

The page is a stack of sheets inside a fluid gutter (`gutter`, 16–56px). A floating pill header sits 12px from the top (8px on phones), inset by the gutter, sticky, 64px tall (58px on phones), with the 2px green reading-progress line running inside its lower edge.

The first viewport is two tiles side by side: copy at 6fr (min 380px), vertically centred, and a full-height rounded field photo at 7fr, separated by a 16–32px gap. Directly below, the alarm strip runs as a pill across the gutter.

Sections are **sheets**: full-width Graphite Ground or Graphite Raised blocks with 44px rounded top corners (32px on phones) and a 1px Seam along the top, each pulled up by its own corner radius so it slides over the bottom of the one before. Sheets pad `band-top` (72–128px) above and the larger `band-bottom` (96–160px) below, so the overlap never eats content. The footer is the last sheet. Each sheet opens with a 7/5 headline-and-standfirst row aligned to the baseline.

Collections are separate tiles with a 12–20px gap: four domain cards (two below 1180px, one below 640px); three value cards under the about prose beside a portrait photo; the direct-line panel (sticky while the form scrolls, 4fr) beside the form panel (7fr).

Recurring gaps step 8 / 12 / 16 / 24 / 32px; larger column gaps (40–72px) only between sheet columns.

Responsive: at 1180px the status readout drops, domain cards go to two columns and value cards stack; at 960px navigation collapses behind a Menu pill into a dropdown tile under the header (28px radius, lift shadow, 16px-radius items), every split becomes one column, the hero photo moves below the copy at 4:3, the direct line stops being sticky, and the process line turns vertical; at 640px radii step down (tiles 22px, sheets 32px), the hero photo becomes 4:5, actions stack full-width, the alarm strip becomes a 22px tile, and a fixed green call pill appears at the bottom once the hero call button has scrolled away.

### Named Rules
**The Sheet Rule.** Every section is a sheet: rounded top corners at the sheet radius, a 1px Seam on top, and a negative top margin equal to that radius so it overlaps the previous sheet. Never a flat full-bleed band, never a gap between sections.

### Photography
**The Field Photo Rule.** Only the technician's own field photographs: real equipment on real sites. No stock, no generated or illustrated imagery. Every photo is cropped to remove camera watermarks and carries its origin in the file. Photos are rounded tiles (hero full-height in its tile, domain cards 4:3 inset within the card, about portrait), `object-fit: cover` with a chosen focal point, on a Panel or Ground placeholder. Text on a photo lives only in a pill: Graphite Ground at 82% with a 6–8px backdrop blur, Label type, in a corner.

## Elevation & Depth

Mostly flat, with one lift. Depth comes from four tonal steps (ground, ground-2, panel, panel-2), 1px seam edges, the overlap of stacked sheets, and the photographs. A single shared shadow, `--lift`, marks what floats above the page or answers a touch: the header once the page has scrolled, the open mobile menu, the fixed mobile call pill, a hovered domain card and a hovered primary button. The nav pill uses an inset 1px Seam ring instead of a border. The floating header and photo caption pills use a backdrop blur for legibility, not as decoration.

### Shadow Vocabulary
- **Lift** (`box-shadow: 0 18px 40px -18px rgba(0,0,0,.6)`): scrolled header, open mobile menu, mobile call pill, hovered domain card, hovered primary button.
- **Focus halo** (`box-shadow: 0 0 0 4px rgba(140,198,63,.14)`): a focused field, alongside its green border.

### Named Rules
**The Lift-On-Touch Rule.** Tiles rest flat on their seam. Only something that floats over content or responds to the pointer gets the lift, and always the same neutral one. No coloured shadows, no glows.

## Shapes

Soft instrument geometry on a five-step scale, chosen by role, not by size:
- **Field** (`sm`, 10px): text inputs and textareas; also the focus-ring corner.
- **Inner item** (`md`, 16px): the form message, mobile menu items.
- **Tile** (`lg`, 28px; 22px on phones): domain cards, value cards, photos, the direct-line panel, the form panel, the mobile menu.
- **Sheet** (`sheet`, 44px; 32px on phones): the top corners of every section and the footer.
- **Pill** (`pill`): everything pressed or tagged (header, nav links and the sliding nav pill, buttons, the call, choices, op chips, equipment-code tags, caption chips, the alarm strip, the annunciator, the progress line, the green value bar, the pipe).
- **Circle** (`full`): status lamps and sector stations.

Strokes: the process pipe is a 6px Seam pill with a 2px green dash flow; station symbols are 2.6px round-capped strokes inside 88px circles. Icons and direction markers are drawn SVG (the forward arrow is a round-capped 16×12 mask), never typographic glyphs or filled pictograms.

### Named Rules
**The Nested Radius Rule.** A rounded thing inside a rounded thing takes the outer radius minus the inset: a photo inside a domain card is `lg − 8px`. Never the same radius inside and out, never square inside round.

**The Pill-for-Touch Rule.** If you press it or it labels a state, it is a pill. If it holds content, it is a tile. Only fields take the small 10px corner.

## Components

### Buttons
Soft, thumb-sized pills: a label, and either the phone number or a drawn forward arrow.
- **Shape:** pill, padding 16px × 26px.
- **Primary (run):** Running Green fill, Run Ink text, Archivo 700 at 90% width; carries the phone number in mono when it is the call. Used for calling and for submitting the request.
- **Hover / Focus / Active:** fill steps to Running Green Pressed Up over 0.25s and the button takes the lift; press scales to 0.97 (the compact call to 0.96); focus is a 2px Running Green outline at 3px offset.
- **Secondary (line):** transparent with a 1px Pipe Grey outline and Screen Ink text; on hover a Panel Raised fill sweeps in from the left (0.45s), the outline turns Running Green and the arrow nudges 5px forward.
- **Disabled / sending:** 60% opacity, progress cursor.
- **Compact call:** header version, 12px × 20px, UI size, tabular numerals.

### Inputs / Fields
- **Style:** Graphite Ground well, 1px Control Edge, 10px radius, 13px × 16px padding, Body text, Placeholder Grey hints, green caret, inside the Panel form tile. Labels sit above in the Label style.
- **Hover / Focus:** edge to Readout Grey on hover; on focus a Running Green border plus the 4px green focus halo.
- **Error:** edge turns Alarm Amber; the form message is an amber-framed 16px-radius box. Success: Running Green frame on Run Tint.

### Choices (radio / checkbox pills)
- **Style:** Graphite Raised pill, 1px Control Edge, 10px × 16px, native control tinted Running Green.
- **State:** hover edge to Readout Grey; press scales to 0.97; checked edge Running Green on Run Tint.

### Header and navigation
A floating Graphite Raised pill with a blur, holding the logo lockup, the nav, the location readout and the compact call. Nav links are pills in Label style, Readout Grey turning Screen Ink; a Panel Raised **nav pill** with an inset Seam ring slides (0.5s) under the hovered link and returns to the current section's link. Once scrolled, the header firms to 94% and takes the lift. On mobile a Menu pill opens a dropdown tile that fades and grows from 98% scale.

### Hero photo tile (signature)
A full-height rounded field photo with a blurred caption pill (green lamp plus a Label-style description) in the lower left. It is what opens on load and drifts gently with scroll (see Motion).

### Domain cards
Four separate Panel tiles (28px, 1px Seam, 12px inset). Each opens with a 4:3 field photo inset in the card at `lg − 8px`, with the equipment code (mono tag in Running Green on a blurred Ground pill, followed by a green lamp) top-left. Then the Title, a Body Small description in Readout Grey, and op chips (Panel Raised pills, Label style) at the bottom. Hover lifts the card 6px with the lift shadow and a Pipe Grey edge, and pushes the photo in to 1.06; a targeted card turns Running Green-edged on Run Tint.

### Value cards
Three Panel tiles under the about prose, each headed by a 28 × 4px green pill bar, then a Title Small name and a Body Small line. Hover raises 4px and edges the card in Dim Run.

### Process line (sectors)
Three stations on a 6px Seam pill pipe: each an 88px Panel circle around a stroked symbol, then a Title name and a short Readout Grey line. On entering view the green flow wipes along the pipe and the stations scale up from 0.86 and light from grey to green in sequence. Vertical on tablets and phones.

### Alarm strip and direct line (urgency)
The two amber objects. The **alarm strip** is a Graphite Raised pill under the hero: an amber lamp, one sentence, and the phone number in amber mono on a 10% amber pill (20% on hover). The **direct-line panel** is a Panel tile edged in 45% amber, opening with an amber annunciator pill, the phone number in large mono (hover to amber), the technician's name, a green mailto, and a seam-separated zone line. It stays in view while the form scrolls.

### Mobile call bar
A fixed Running Green pill 12px from the bottom and sides, 54px tall, Run Ink text; slides up only after the hero call button leaves the viewport.

### Motion
Two curves: `ease` (cubic-bezier(.16,1,.3,1)) for nearly everything (rises, opens, slides, settles); `ease-io` (cubic-bezier(.65,0,.35,1)) for the linear-feeling pipe-flow wipe.
- **Power-up (hero):** the header drops in from −14px; the hero photo opens from a rounded inset clip (12% / 10%) to full over 1.1s and settles from scale 1.12 over 1.8s; the headline lines rise from their masks (0.8s, from 0.15s, 80ms stagger); then the lede (0.55s), actions (0.65s), alarm strip (0.85s) and caption pill (1s) fade-rise 14px.
- **Parallax:** while the hero is in view, its photo drifts down at 12% of scroll and zooms gently from 1.04 to about 1.10.
- **Scroll reveals:** sheet heads, about blocks and the contact grid fade-rise 28px (0.8–1s); domain cards rise 40px in a wave with 110ms stagger, their photos unmasking from a rounded inset and settling from 1.12 (1.1–1.4s); value cards rise 24px with 100ms stagger; the pipe flow wipes in (1.4s, ease-io) while stations light at 0 / 0.4 / 0.8s.
- **Touch:** card lift 6px (0.5s); nav pill slide 0.5s; outline-button sweep 0.45s; arrow nudge 0.35s; press-scale 0.96–0.97; colour and edge changes 0.25s.
- **Loops:** only the pipe flow (1.8s linear). Lamps never pulse or blink.
- **Reduced motion:** no power-up, no parallax, no reveals; everything is in place immediately and state changes are instant.

## Do's and Don'ts

### Do:
- **Do** build every surface from the four graphite steps (`ground`, `ground-2`, `panel`, `panel-2`) and edge tiles and sheets with a 1px `seam`.
- **Do** pick radius by role: 10px fields, 16px inner items, 28px tiles, 44px sheets, pills for anything pressed or tagged, circles for lamps and stations.
- **Do** nest radii: an inset photo takes the card radius minus its inset.
- **Do** use Running Green only for running / covered state, live feedback, focus and the primary action.
- **Do** reserve Alarm Amber, including its tint pills, for the emergency line and for faults.
- **Do** use only the technician's own field photographs, cropped free of camera watermarks, with their origin embedded in the file.
- **Do** put text on photos only inside a blurred Ground pill.
- **Do** set headings and labels in Archivo compressed caps (wdth 66–85) and reading text in Archivo at full width, sentence case.
- **Do** set phone numbers, measured values and equipment codes in JetBrains Mono with tabular numerals.
- **Do** edge every field and choice with `edge` so its boundary stays at 3:1 or better against its surface.
- **Do** use the single `--lift` shadow, and only for what floats or responds to touch.
- **Do** show everything in place under `prefers-reduced-motion`.
- **Do** keep a call action within reach at every scroll position on phones.

### Don't:
- **Don't** add coloured shadows, glows or neon, or any shadow other than the lift and the field focus halo.
- **Don't** use green or amber as decoration, category colour or background wash.
- **Don't** use stock photography, generated imagery or illustrations in place of field photos.
- **Don't** use mono for headings, buttons, body or decorative labels.
- **Don't** build icon cards; a domain card opens on a field photo.
- **Don't** put eyebrow labels or kickers above section headings; labels belong to instruments (captions, tags, annunciators).
- **Don't** use typographic glyphs as icons or arrows; draw them as SVG.
- **Don't** mix square corners into the panel, or give an inner element the same radius as its container.
- **Don't** pulse, blink or loop anything except the pipe flow; no bounce or spring easing.
