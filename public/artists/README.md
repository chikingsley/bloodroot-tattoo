# Artist Assets Structure

This directory contains all artist-related media assets organized in a consistent structure.

## Structure

```
/artists/
├── [artist-slug]/
│   ├── profile.webp    # Artist profile image
│   └── portfolio/      # Artist portfolio media
│       ├── tattoo-001.jpg
│       ├── tattoo-002.jpg
│       └── video-001.mp4
```

## Naming Conventions

- **Artist Folders**: Use lowercase artist slug (e.g., `alex`, `kelechi`, `jameson`)
- **Profile Images**: Always named `profile.webp`
- **Portfolio Images**: `tattoo-XXX.jpg` where XXX is a zero-padded number (001, 002, etc.)
- **Portfolio Videos**: `video-XXX.mp4` where XXX is a zero-padded number

## Adding New Artists

1. Create a new folder with the artist's slug: `/artists/[artist-slug]/`
2. Add their profile image as `profile.webp`
3. Create a `portfolio/` subfolder
4. Add portfolio media following the naming conventions

## Adding New Portfolio Items

Simply add new files following the sequential numbering pattern:
- Next image: `tattoo-XXX.jpg` (increment the number)
- Next video: `video-XXX.mp4` (increment the number)