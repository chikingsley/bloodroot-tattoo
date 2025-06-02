# Ready-to-Use Background Agent Prompts

Copy and paste these prompts when creating each background agent:

## Agent 1: Add Green Frames

```
You are working on the Bloodroot Tattoo website, a React/TypeScript project using Vite and TailwindCSS.

Your task: Add green borders to all artist profile cards
Branch: Create and work on feat/green-frames
Files to modify: src/components/home/TeamSection.tsx

Specific requirements:
1. Add a 3px green border with color #00A86B to each artist profile card
2. Make borders rounded with 8px radius
3. Use TailwindCSS classes if possible (border-2 or border-[3px], rounded-lg)
4. If Tailwind doesn't have the exact color, use inline styles
5. Ensure consistent styling across all three artist cards

Testing:
- Run `bun dev` and check the changes at localhost:3000
- Verify cards look good on mobile (375px), tablet (768px), and desktop (1024px+)
- Check for TypeScript errors with `bun run tsc --noEmit`

Make a single commit with message: "feat(ui): add green frames to artist profile cards"
```

## Agent 2: Remove Style Tags

```
You are working on the Bloodroot Tattoo website, a React/TypeScript project.

Your task: Remove all style/specialty description tags from artist profiles
Branch: Create and work on feat/remove-style-tags  
Files to modify: src/data/artists.ts and src/components/home/TeamSection.tsx

Requirements:
1. In src/data/artists.ts: Comment out (don't delete) the "specialties" array for each artist
2. Add comment: "// Specialties removed per client request - Dec 2024"
3. In TeamSection.tsx: Find where specialties are rendered and comment out that section
4. Clean up any CSS classes that were only used for styling the tags

Important: COMMENT OUT code instead of deleting it

Testing:
- Run `bun dev` and verify tags no longer appear
- Check that card layout still looks good without the tags
- Run `bun run tsc --noEmit` to ensure no TypeScript errors

Commit with message: "fix(content): remove style description tags from artist profiles"
```

## Agent 3: Update to First Names

```
You are working on the Bloodroot Tattoo website, a React/TypeScript project.

Your task: Update all artist names to first names only
Branch: Create and work on feat/first-names-only
Files to modify: src/data/artists.ts

Make these specific changes:
1. Change "Kelechi Ejimofor" to "Kelechi"
2. Change "Alex Greene" to "Alex"  
3. Change "Jameson Quinn" to "Jameson"

Testing:
- Run `bun dev` and verify names display correctly
- Check that the names update everywhere they appear
- Run `bun run tsc --noEmit` for TypeScript validation

Commit with message: "refactor(data): update artist names to first names only"
```

## Agent 4: Prepare Descriptions

```
You are working on the Bloodroot Tattoo website, a React/TypeScript project.

Your task: Prepare artist bio/description areas for new content
Branch: Create and work on feat/prepare-descriptions
Files to modify: src/data/artists.ts

Requirements:
1. In src/data/artists.ts, find the "bio" field for each artist
2. Add a TODO comment above each bio: "// TODO: Update with new bio from client"
3. Replace current bio text with: "Bio coming soon..."
4. Keep the bio field structure exactly the same (don't change types or remove fields)

Testing:
- Run `bun dev` and check that "Bio coming soon..." appears for each artist
- Verify styling and layout remain unchanged
- Run `bun run tsc --noEmit`

Commit with message: "refactor(content): prepare artist descriptions for new content"
```

## Agent 5: Remove QR Code

```
You are working on the Bloodroot Tattoo website, a React/TypeScript project.

Your task: Remove the QR code from the footer's "Follow Us" section
Branch: Create and work on feat/remove-qr-code
Files to modify: src/components/layout/Footer.tsx

Requirements:
1. Find the QR code component in the Footer
2. Comment it out (don't delete) with: {/* QR Code removed per client request - Dec 2024
3. Keep the "Follow Us" heading and any social media links/icons
4. Adjust spacing/padding if needed to maintain good layout
5. The footer should still look balanced without the QR code

Testing:
- Run `bun dev` and scroll to footer
- Verify QR code is gone but "Follow Us" section still looks good
- Check responsive design on mobile and desktop
- Run `bun run tsc --noEmit`

Commit with message: "fix(ui): remove QR code from footer follow us section"
```

## Setup Instructions for First Agent

If this is the first agent in the repo, it may need to set up the environment:

```
1. Clone the repository
2. Run `bun install` to install dependencies
3. Run `bun dev` to start the development server
4. The site will be available at http://localhost:3000
``` 