# Repository Guidelines

## Project Structure & Module Organization
This repository is currently a blank slate, so keep the first implementation organized as a monorepo:
- `apps/web` for the Next.js frontend.
- `apps/api` for the Fastify backend.
- `prisma/` for schema, migrations, and seed data.
- `packages/shared/` for shared types, validators, and helpers.
- `tests/` for end-to-end or cross-cutting integration tests.

Inside the API, use an MVC-style split by domain:
- `routes/` for HTTP entrypoints
- `controllers/` for request handling
- `services/` for business rules
- `repositories/` for database access

## Build, Test, and Development Commands
No scripts are defined yet. When the stack is added, expose these root commands in `package.json`:
- `npm install` to install dependencies.
- `npm run dev` to start web and API in watch mode.
- `npm run build` to create production artifacts.
- `npm test` to run the test suite.
- `npx prisma migrate dev` to apply local database migrations.
- `npx prisma studio` to inspect Prisma data locally.

## Coding Style & Naming Conventions
Use TypeScript, 2-space indentation, and consistent named exports where practical. Prefer:
- `camelCase` for variables, functions, and service methods
- `PascalCase` for React components, classes, and DTOs
- `kebab-case` for route paths and file names

Keep controllers thin, services focused on business logic, and repositories limited to persistence. Use the formatter and linter configured in the repo before submitting changes.

## Testing Guidelines
Use `*.test.ts` or `*.spec.ts` for test files. Prioritize coverage for core ecommerce flows:
- product listing and detail
- cart updates and totals
- order creation
- admin authentication and product management

Prefer deterministic tests with factories or seed data so results stay stable.

## Commit & Pull Request Guidelines
The Git history currently only contains `Initial commit`, so no commit convention exists yet. Use short, imperative commit messages such as `feat: add product catalog` or `fix: validate cart totals`.

Pull requests should include:
- a concise summary of the change
- linked issue or task when available
- screenshots for UI updates
- notes for migrations, env vars, or breaking changes

## Security & Configuration Tips
Keep secrets out of version control and store them in `.env.local` or `.env`. Common variables will likely include `DATABASE_URL`, `JWT_SECRET`, and any external service keys used by the app.
