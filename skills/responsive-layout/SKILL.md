---
name: responsive-layout
description: Use this skill when implementing mobile-first responsive layouts, spacing systems, grids, and breakpoint behavior for the frontend.
---

# Responsive Layout Skill

## When to use
Use this skill when:
- building page layouts
- defining responsive behavior
- setting container widths and spacing
- adapting cards, forms, and sections for mobile/tablet/desktop

## Core principle
Use a **mobile-first** approach.

Design and implement for small screens first.
Then progressively enhance for tablet and desktop.

## Suggested breakpoints
- mobile: default / below 768px
- tablet: 768px to 1023px
- desktop: 1024px and above

## Layout rules
- Use a consistent content container
- Keep horizontal padding comfortable on mobile
- Do not let cards become cramped
- Stack vertically by default, then split into columns when space allows
- Keep spacing rhythm consistent across sections

## Typography behavior
- Headings should remain readable on mobile
- Avoid giant hero text that breaks awkwardly
- Maintain clear vertical hierarchy

## Component behavior
- Buttons should remain easily tappable
- Forms should be easy to complete on mobile
- Navigation should degrade cleanly to a simple mobile pattern
- Cards should not rely on hover-only affordances

## Testing checklist
Review each page on:
- mobile
- tablet
- desktop

Check:
- line breaks
- spacing
- overflow
- button sizes
- form usability
- section order

## Anti-patterns
- Do not start from desktop and force it into mobile later
- Do not rely on fixed heights unless unavoidable
- Do not let text overflow or create horizontal scrolling
