# Hindustan Electricals Winding Works — Project Context

## Overview
Official business and local lead-generation website for **Hindustan Electricals Winding Works**, located in GIDC Vapi, Gujarat.

- **Client Name:** Hindustan Electricals Winding Works
- **Industry:** Electric Motor Rewinding, AC/DC Motor Winding & Industrial Electrical Repair
- **Primary Mission:** High-ranking **Local SEO + Lead-Generation** platform targeting high-intent industrial queries (e.g., *"motor rewinding in Vapi"*, *"AC motor winding GIDC"*, *"electric motor repair Vapi"*).
- **Core Conversion Goal:** Drive direct high-trust customer inquiries via **Instant Phone Call** and **WhatsApp**.

## Business Information (Single Source of Truth)
- **Business Name:** Hindustan Electricals Winding Works
- **Category:** Electric Motor Repair / Motor Rewinding Workshop
- **Workshop Address:** Shop No. 28 & 29, Express House, Near C.N.G. Gujarat Gas Station, N.H. 48, GIDC, Vapi, Gujarat 396195
- **Primary Phone:** `+91 98252 72547` (link format: `tel:+919825272547`)
- **Primary WhatsApp:** `+91 98252 72547` (link format: `https://wa.me/919825272547`)
- **Primary Service Belts:** GIDC Vapi, Silvassa, Daman, Valsad, Pardi, and nearby industrial zones across South Gujarat & UT.

## Tech Stack
- **Markup:** Pure semantic HTML5, proper heading hierarchy, ARIA accessibility attributes, landmark elements.
- **Styling:** Vanilla CSS3 (`css/style.css`, `css/responsive.css`) with CSS variables, flexbox/grid layouts, industrial palette.
- **Scripting:** Lightweight vanilla JavaScript (`js/script.js`) for mobile nav, FAQ accordions, sticky mobile CTA, form handling.
- **Icons / Fonts:** Font Awesome or inline SVG; Google Fonts (Outfit or Inter).
- **Mapping:** Embedded responsive Google Maps iframe for Express House, GIDC Vapi.
- **Hosting:** Static site only — no package.json, no build tooling.

## Directory Structure
```text
hindustan-electricals-winding-works/
├── index.html            # Homepage: Hero, Services, Process, Trust, Reviews, Map, CTA
├── about.html
├── services.html
├── gallery.html
├── faq.html
├── contact.html
├── services/             # Individual local-SEO pages
│   ├── motor-rewinding.html
│   ├── ac-motor-winding.html
│   ├── dc-motor-winding.html
│   ├── electric-motor-repair.html
│   ├── generator-repair.html
│   ├── transformer-repair.html
│   └── welding-machine-repair.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   └── script.js
├── images/               # logo/ hero/ services/ gallery/
├── favicon.ico
├── robots.txt
├── sitemap.xml
├── README.md
├── LICENSE
├── req.txt               # Raw client requirements specification
├── gemini.md             # Agent system directives, skill usage
├── context.md            # This file (injected by opencode)
└── AI_RULE.md            # Mandatory AI directives (injected by opencode)
```

## Key Pages & SEO Focus
| Page / Route | Primary Target Keyword | Purpose |
| :--- | :--- | :--- |
| `index.html` | Motor Rewinding in Vapi | High-conversion homepage with trust indicators, click-to-call. |
| `about.html` | Motor Rewinding Workshop Vapi | Location, technical competence, commitment. |
| `services.html` | Motor Repair Services Vapi | Directory linking to all specialized pages. |
| `services/motor-rewinding.html` | Motor Rewinding Services in Vapi | Rewinding process, stator/rotor rewinding, insulation classes. |
| `services/ac-motor-winding.html` | AC Motor Winding Vapi | Single/three-phase AC induction motor rewinding & overhaul. |
| `services/dc-motor-winding.html` | DC Motor Winding Vapi | Armature winding, field coils, commutator & brush overhaul. |
| `services/electric-motor-repair.html` | Electric Motor Repair Vapi | Bearing replacement, balancing, burnout troubleshooting. |
| `services/generator-repair.html` | Generator Repair & Rewinding Vapi | Alternator rewinding, rotor/stator testing. |
| `services/transformer-repair.html` | Transformer Rewinding Vapi | Coil rewinding and electrical insulation testing. |
| `services/welding-machine-repair.html` | Welding Machine Repair Vapi | ARC/MIG/TIG transformer coil repair and troubleshooting. |
| `gallery.html` | Motor Rewinding Workshop Photos | Real visual proof of copper winding, dismantled motors, testing. |
| `faq.html` | Motor Rewinding FAQs | Cost factors, turnaround times, signs of motor failure. |
| `contact.html` | Hindustan Electricals Vapi Contact | Address, phone, map, quotation form. |

## Core Design & UX Directives
1. **Industrial Visual Identity:** Deep Slate Navy (`#0F172A`), Crisp White/Off-White (`#F8FAFC`), Industrial Charcoal (`#1E293B`); accent Electric Amber / Safety Orange (`#F59E0B` / `#D97706` / `#EA580C`).
2. **Mobile Sticky CTA Bar (mandatory, < 768px):** fixed bottom dock with `Call Now` (`tel:+919825272547`) and `WhatsApp` (`https://wa.me/919825272547?text=Hello%20Hindustan%20Electricals,%20I%20need%20a%20quote%20for%20motor%20repair`).
3. **Structured Data (JSON-LD):** embed `LocalBusiness` / `Service` schema in `<head>` of all primary pages with address, geo, opening hours, phone, services.
4. **Rewinding Process Flow:** 5-step visual — Inspection & Fault Diagnosis → Dismantling & Stripping → Precision Rewinding → Varnishing & Curing → Testing & Delivery.

## Integrity Rule
Do NOT invent unverified years of experience, certifications, brands serviced, warranty terms, or capacities. Present only genuine, confirmed capabilities and verified location details.