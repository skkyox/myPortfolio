# Portfolio Next.js

## Overview

This is a personal portfolio website for Théo Le Sommier, a full-stack web and mobile developer. The project is built with Next.js (using Pages Router) and styled with Tailwind CSS with a modern dark mode design. It serves as a digital resume showcasing professional experience, technical skills, and contact information in a professional, responsive single-page application format.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preference: Dark mode with custom brand colors (gold #FBD400 primary, dark gray #2d2d2d secondary).
Includes profile picture in hero section.

## System Architecture

### Frontend Architecture

**Framework Choice: Next.js with Pages Router**
- The project uses Next.js Pages Router (`pages/` directory structure) rather than the newer App Router
- Rationale: Simpler mental model for a static portfolio site without complex routing needs
- Trade-off: Pages Router is the legacy approach; App Router offers better performance but adds complexity for this use case

**Component Structure: Single-Page Component**
- All portfolio content is contained in a single `pages/index.js` component
- Rationale: Simplicity for a small portfolio with limited content sections (profile, skills, experience)
- Alternative considered: Splitting into smaller reusable components (Header, ExperienceCard, SkillCard)
- Pros: Easy to understand and modify; single source of truth
- Cons: Less maintainable as content grows; harder to reuse components

**Styling: Tailwind CSS Utility-First with Dark Mode**
- Uses Tailwind CSS for all styling with utility classes directly in JSX
- Configuration: Standard Tailwind setup with PostCSS processing
- Content paths configured for `pages/` and `components/` directories
- Color scheme: Dark mode (gray-900/gray-800 backgrounds, white text)
- Brand colors: Primary gold (#FBD400) for accents, dark gray (#2d2d2d) secondary
- Rationale: Rapid development, consistent design system, professional dark aesthetic
- Trade-off: HTML becomes verbose with many class names; learning curve for Tailwind syntax

**State Management**
- Uses local component constants for data (profile, skills, experiences)
- No external state management (Redux, Zustand, Context) implemented
- Rationale: Static data that doesn't change; no user interactions requiring state
- Future consideration: Could extract data to separate JSON/TS files for easier content updates

### Data Layer

**Data Storage: Hardcoded Constants**
- Profile information, skills, and experiences are defined as JavaScript objects within the component
- No external data fetching or database integration
- Rationale: Portfolio content is static and doesn't require dynamic updates
- Alternative: Could use markdown files or headless CMS for content management

### Build & Development

**Development Server**
- Custom port configuration: Runs on port 5000 instead of default 3000
- Host binding: `0.0.0.0` for external accessibility (Replit requirement)
- Scripts: Standard Next.js dev/build/start workflow
- Workflow configured: "npm run dev" on port 5000

**Build Process**
- Next.js handles bundling, optimization, and static generation
- Tailwind CSS v3 (downgraded from v4 for Turbopack compatibility)
- PostCSS processing for autoprefixing and styling
- No custom webpack or build configurations

**Design Features**
- Profile picture integrated in hero section with gold border
- Responsive layout: profile picture left + text right on desktop, stacked on mobile
- Dark gradient header for visual hierarchy
- Hover effects on cards and buttons with smooth transitions
- Professional spacing and typography throughout

## External Dependencies

### Core Framework
- **Next.js (v16.0.3)**: React framework for production-grade applications
- **React (v19.2.0)** & **React DOM (v19.2.0)**: UI library and DOM renderer

### Styling
- **Tailwind CSS (v3.4.18)**: Utility-first CSS framework
- **PostCSS (v8.5.6)**: CSS transformation tool
- **Autoprefixer (v10.4.22)**: Automatic vendor prefix addition

### Icons
- **react-icons (v5.5.0)**: Icon library providing Font Awesome, Simple Icons, etc.
  - Used for social links (GitHub, LinkedIn, Email)
  - Technology stack icons (React, Vue, PHP, etc.)

### Development Tools
- **@types/node (v22.13.11)**: TypeScript definitions for Node.js APIs

### Third-Party Services
- No external API integrations
- No authentication providers
- No analytics or tracking services
- No database connections
- No backend services or serverless functions