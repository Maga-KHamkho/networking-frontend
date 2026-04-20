---
name: clean-code-refactoring
description: Use this skill when refactoring the codebase, removing duplication, improving naming, and keeping the frontend maintainable as the project grows.
---

# Clean Code and Refactoring Skill

## When to use
Use this skill when:
- the codebase starts duplicating sections
- component files become too large
- naming is inconsistent
- imports and structure need cleanup
- repeated patterns should be extracted

## Principles
- DRY where repetition is real
- KISS always
- Readability beats cleverness
- Refactor incrementally, not theatrically

## Naming
- Use explicit component names
- Use names that reflect responsibility
- Avoid vague names like Block, Item, DataStuff unless context is obvious

## Extraction rules
Extract a reusable component when:
- the same pattern appears more than once
- the abstraction is clear
- reuse will likely continue

Do not extract prematurely.

## File hygiene
- Keep imports organized
- Remove dead code
- Remove unused styles
- Keep files focused

## Refactoring targets
Look for opportunities in:
- CTA sections
- service cards
- case cards
- generic content sections
- layout wrappers
- form fields

## Anti-patterns
- Do not create abstraction layers with no payoff
- Do not collapse unrelated concerns into one helper
- Do not optimize for hypothetical future complexity
