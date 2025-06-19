# Cursor Environment Configuration

This directory contains the Cursor IDE environment configuration for the Bloodroot Tattoo project.

## Files Overview

- `environment.json` - Main environment configuration
- `environment.schema.json` - JSON schema for validation
- `Dockerfile` - Container environment setup
- `README.md` - This documentation

## Environment Setup

### Tech Stack Alignment

The environment is configured for:

- **React 19** with TypeScript
- **Vite 6.3.1** for build tooling
- **Bun** as package manager (instead of npm/yarn)
- **TailwindCSS 4.1.5** for styling
- **GSAP 3.13.0** for animations

### Available Terminals

1. **dev-server** - Main development server on port 3000
2. **type-check** - TypeScript error watching
3. **lint-watch** - ESLint code quality checks
4. **preview** - Production build preview on port 3001
5. **build** - Create optimized production build
6. **markdown-lint** - Documentation quality checks

### Port Configuration

- `3000` - Vite development server (auto-forwarded)
- `3001` - Vite preview server (manual forward)

### Quick Start

1. **Install dependencies**: Automatic via `bun install`
2. **Start development**: Use "dev-server" terminal
3. **Type checking**: Use "type-check" terminal for real-time errors
4. **Production testing**: Run "build" then "preview" terminals

### Environment Variables

- `NODE_ENV=development` - Standard Node environment
- `VITE_NODE_ENV=development` - Vite-specific environment

## Validation

The configuration follows the schema in `environment.schema.json` which ensures:

- Required fields are present
- Commands use Bun instead of npm/yarn
- Port configurations are valid
- Terminal descriptions are helpful

## Integration with Project Documentation

This environment aligns with:

- **PROJECT_OVERVIEW.md** - Tech stack and architecture
- **TECHNICAL_SETUP.md** - Development workflow
- **ORGANIZATION_SUMMARY.md** - Project standards
- **package.json** - Available scripts and dependencies

## Docker Environment

The Dockerfile provides:

- Ubuntu 22.04 base with necessary build tools
- Bun installation for both root and ubuntu users
- TypeScript global installation
- Port exposure for development servers
- Security-focused non-root user setup

## Troubleshooting

### Common Issues

1. **Port conflicts**: Change ports in both `vite.config.ts` and `environment.json`
2. **Bun not found**: Ensure PATH includes Bun binary location
3. **TypeScript errors**: Use "type-check" terminal for real-time feedback

### Validation Commands

```bash
# Validate environment.json against schema
bun run --bun jq -s '.[1] as $schema | .[0] | $schema.required - (keys | map(select(. as $k | $schema.properties | has($k)))) | if length == 0 then "Valid" else ("Missing required fields: " + tostring) end' .cursor/environment.json docs/background-agents/environment.schema.json

# Test all terminals work
bun install && bun dev --version && bun run tsc --version
```

## Updates

When updating this configuration:

1. Validate against schema
2. Test all terminal commands
3. Ensure port alignment with `vite.config.ts`
4. Update documentation if needed
