---
name: react-architecture
description: Use this skill when creating or refactoring the React project structure, routing, layouts, page composition, and reusable component boundaries.
---

# React Architecture Skill

## When to use
Use this skill when:
- creating the initial frontend architecture
- defining folder structure
- setting up routing and layouts
- splitting UI into pages, sections, and reusable components
- refactoring large components into smaller ones

## Project assumptions
- React + TypeScript
- Vite
- React Router
- Frontend-first approach
- Backend will be added later

## Architecture rules
- Use functional components only
- Keep components small and focused
- One component = one responsibility
- Separate UI structure from future data / API concerns
- Prefer composition over deeply nested logic

## Recommended structure
src/
  app/
  pages/
  components/
  sections/
  shared/
  assets/
  styles/
  data/

## Responsibilities
- app/: app bootstrap, router, providers, layout wiring
- pages/: route-level pages
- sections/: page-specific content blocks
- components/: reusable domain or feature components
- shared/: low-level UI primitives and helpers
- data/: static content and configuration objects

## Routing
- Use React Router
- Create a shared layout with header and footer
- Route pages explicitly
- Avoid overengineering nested routing unless it is clearly useful

## Implementation guidance
- Start with a clean shell and clear route map
- Reuse section patterns across pages where possible
- Extract repeated content into data files when it improves maintainability
- Do not introduce unnecessary state managers or heavy libraries

## Anti-patterns
- Do not mix page markup, data, and layout logic in one giant file
- Do not create massive “universal” components
- Do not overabstract before repetition is real
- Do not add backend-specific implementation yet
