---
name: forms-and-validation
description: Use this skill when building consultation forms, validation states, input UX, and frontend-ready form abstractions before backend integration.
---

# Forms and Validation Skill

## When to use
Use this skill when:
- creating lead capture forms
- building reusable input components
- adding validation
- designing success and error states
- preparing frontend forms for future backend integration

## Primary form goal
Reduce friction and maximize consultation requests.

## Recommended fields
- name
- phone or messenger contact
- optional comment

## UX rules
- Keep forms short
- Make labels clear
- Show validation errors near the field
- Use obvious loading, success, and error states
- Make submit actions feel reliable and fast

## Validation rules
- Validate only what is useful
- Avoid excessive restrictions
- Keep error messages clear and human-readable
- Do not block submission for optional fields

## Architecture guidance
- Create a reusable form component if forms repeat
- Separate field UI from submission logic
- Keep backend integration abstract for now
- Prepare types and placeholders for future API connection

## Success handling
After successful frontend submission simulation:
- show a clear success state
- confirm that the request was received
- avoid abrupt resets without feedback

## Anti-patterns
- Do not ask for too many fields
- Do not use confusing validation copy
- Do not hide errors
- Do not hardcode backend-specific logic yet
