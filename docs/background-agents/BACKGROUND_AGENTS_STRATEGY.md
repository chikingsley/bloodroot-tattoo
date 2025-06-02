# Background Agents Strategy for Go-Live Updates

## 🎯 Overview

Using [Cursor's background agents](https://docs.cursor.com/background-agent) to parallelize the 5 UI updates for the client's go-live request.

## 📋 Task Distribution

### Agent 1: Green Frames

**Branch**: `feat/green-frames`
**Task**: Add green borders to artist profile cards
**Files**: `src/components/home/TeamSection.tsx`, possibly `src/index.css`
**Prompt**:

```markdown
Add a 3px green border (#00A86B) to each artist profile card in the TeamSection component. 
The border should be rounded (border-radius: 8px) and consistent across all cards.
Use TailwindCSS classes if possible, or add inline styles.
Test that the cards look good on mobile, tablet, and desktop views.
```

### Agent 2: Remove Style Tags

**Branch**: `feat/remove-style-tags`
**Task**: Remove specialty/style description tags
**Files**: `src/data/artists.ts`, `src/components/home/TeamSection.tsx`
**Prompt**:

```markdown
Remove all style/specialty tags from the artist profiles.
This includes "Illustrative", "Black & Grey", "Fine Line", "Neo Traditional", etc.
1. Update src/data/artists.ts to remove or comment out the specialties array
2. Update TeamSection.tsx to not render these tags
3. Clean up any unused CSS classes
Keep the code commented out rather than deleting it completely.
```

### Agent 3: First Names Only

**Branch**: `feat/first-names-only`
**Task**: Update artist names
**Files**: `src/data/artists.ts`
**Prompt**:

```markdown
Update all artist names to first names only:
- "Kelechi Ejimofor" → "Kelechi"
- "Alex Greene" → "Alex"
- "Jameson Quinn" → "Jameson"
Update this in src/data/artists.ts
Ensure the changes reflect everywhere the names are displayed.
```

### Agent 4: Prepare Descriptions

**Branch**: `feat/prepare-descriptions`
**Task**: Prepare bio areas for new content
**Files**: `src/data/artists.ts`, `src/components/home/TeamSection.tsx`
**Prompt**:

```markdown
Prepare the artist description/bio areas for new shorter content:
1. Keep the existing bio text structure but add a TODO comment
2. Ensure the styling and positioning remain the same
3. Add placeholder text: "Bio coming soon..." if needed
The client will provide new descriptions later, so just prepare the structure.
```

### Agent 5: Remove QR Code

**Branch**: `feat/remove-qr-code`
**Task**: Remove QR code from footer
**Files**: `src/components/layout/Footer.tsx`
**Prompt**:

```markdown
Remove the QR code from the "Follow Us" section in the footer:
1. Comment out the QR code component (don't delete)
2. Keep the "Follow Us" heading and any social media links
3. Adjust spacing/layout to look good without the QR code
4. Add a comment: "QR Code removed per client request - Dec 2024"
```

## 🚀 Execution Strategy

### Phase 1: Setup (Do First)

1. Ensure all agents have access to the latest main branch
2. Create all feature branches
3. Set up environment.json if needed

### Phase 2: Parallel Execution

1. Dispatch all 5 agents simultaneously
2. Each agent works on their specific branch
3. Monitor progress with `Cmd + ;`

### Phase 3: Review & Merge

1. Review each branch individually
2. Test each change in isolation
3. Merge in this order (least to most impactful):
   - first-names-only
   - remove-qr-code
   - prepare-descriptions
   - remove-style-tags
   - green-frames

## 📝 Agent Instructions Template

```markdown
You are working on the Bloodroot Tattoo website. 

Your task: [SPECIFIC TASK]
Branch: [BRANCH NAME]
Files to modify: [FILE PATHS]

Important:
1. Follow the UI Update Guidelines in .cursor/rules/ui-updates.mdc
2. Test your changes with `bun dev`
3. Check for TypeScript errors with `bun run tsc --noEmit`
4. Comment out code rather than deleting
5. Make atomic commits with descriptive messages
6. Test responsive design

Do not modify files outside your specific task scope.
```

## 🔍 Monitoring & Troubleshooting

### Check Agent Status

- Use `Cmd + ;` to view agent progress
- Look for any setup issues or errors
- Send follow-ups if agents get stuck

### Common Issues

1. **Merge conflicts**: Keep tasks isolated to specific files
2. **Build errors**: Ensure agents run `bun install` if needed
3. **Styling issues**: Agents should test in browser

### Quality Checks

After each agent completes:

```bash
# On each feature branch
bun run lint
bun run tsc --noEmit
bun dev # Manual testing
```

## 🎯 Success Criteria

Each agent task is complete when:

1. ✅ The specific UI change is implemented
2. ✅ No TypeScript or build errors
3. ✅ Responsive design is maintained
4. ✅ Code is properly commented (not deleted)
5. ✅ Clean git commit with descriptive message

## 🔄 Future Agent Usage

For future updates, consider:

1. **Atomic tasks**: One clear objective per agent
2. **Clear file boundaries**: Minimize overlap
3. **Detailed prompts**: Include file paths and specific instructions
4. **Testing requirements**: Always include testing steps
5. **Rollback strategy**: Use branches for easy reversion

## 💡 Tips for Agent Prompts

### Good Prompt Structure

```markdown
1. Context: "You're updating the Bloodroot Tattoo website"
2. Specific task: "Add green borders to artist cards"
3. File locations: "Modify src/components/home/TeamSection.tsx"
4. Technical details: "Use #00A86B color, 3px width"
5. Testing: "Verify with bun dev and check responsive design"
```

### Avoid

- Vague instructions ("make it look better")
- Multiple unrelated tasks in one agent
- Assuming agent knowledge of project structure
- Forgetting to specify testing requirements
