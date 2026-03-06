# Experience Section Specification

## Overview
A section showcasing work experience, internships, and professional history. Positioned between About and Projects sections.

## Component Structure
- Experience container component (`Experience.jsx`)
- Individual experience card component (`ExperienceCard.jsx`)

## UI/UX Specification

### Layout
- Full-width section with max-width container (1280px)
- Section padding: 80px vertical (desktop), 48px (mobile)
- Container padding: 24px horizontal
- Section title centered at top with subtitle
- Vertical timeline layout with alternating cards on desktop

### Visual Design

#### Color Palette
| Element | Color |
|---------|-------|
| Background | Primary (#0F172A) |
| Card Background | Secondary (#1E293B) |
| Timeline Line | Accent (#3B82F6) |
| Timeline Dot | Accent (#3B82F6) |
| Card Border | Transparent / Subtle |
| Role Text | Text Primary (#F8FAFC) |
| Company/Duration | Text Secondary (#94A3B8) |
| Description | Text Secondary (#94A3B8) |

#### Typography
| Element | Font | Size | Weight |
|---------|------|------|--------|
| Section Heading | Inter | 2.5rem - 3rem | 700 |
| Section Subtitle | Inter | 1rem - 1.25rem | 400 |
| Role/Position | Inter | 1.25rem - 1.5rem | 600 |
| Company Name | Inter | 1rem - 1.125rem | 500 |
| Duration | JetBrains Mono | 0.875rem | 400 |
| Description | Inter | 1rem | 400 |

#### Spacing
- Grid Gap: 32px (desktop), 24px (tablet), 16px (mobile)
- Border Radius: Cards 16px
- Card Padding: 24px - 32px

### Component Design

#### Timeline Layout
- Vertical line (2px width) running through center
- Timeline dots (12px) positioned at each experience entry
- Cards alternate left/right on desktop, stacked on mobile

#### Experience Card
- Background: Secondary (#1E293B)
- Border-radius: 16px
- Shadow: Subtle (0 4px 6px -1px rgba(0, 0, 0, 0.1))
- Content:
  - Role/Position (prominent)
  - Company name with optional logo
  - Duration (formatted: "Jan 2022 - Present")
  - Location (optional, small text)
  - Description list (bullet points)
  - Technologies used (pill badges, optional)

#### Card Hover Effects
- Scale: 1.02
- Shadow increase
- Border highlight with accent color
- Duration: 0.3s

### Responsive Breakpoints
| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 640px | Single column, timeline on left |
| Tablet | 640px - 1024px | Single column with timeline |
| Desktop | > 1024px | Alternating left/right cards |

## Animations Specification

### Scroll Animations
- Section fade in and slide up when entering viewport (Intersection Observer)
- Cards stagger animation (0.1s delay between cards)

### Hover Animations
| Element | Animation | Duration |
|---------|-----------|----------|
| Card | Scale 1.02, shadow increase | 0.3s |
| Technology Badge | Background shift | 0.2s |
| Timeline Dot | Pulse/glow effect | 0.3s |

## Data Structure

### Experience Data (`src/data/experience.js`)
```javascript
export const experiences = [
  {
    id: 1,
    company: "Company Name",
    role: "Position/Role",
    startDate: "Jan 2024",
    endDate: "Present",
    location: "Yangon, Myanmar",
    description: [
      "Responsibility or achievement 1",
      "Responsibility or achievement 2",
      "Responsibility or achievement 3"
    ],
    technologies: ["Laravel", "React", "MySQL"],
    logo: "/assets/images/company-logo.png" // optional
  }
];
```

### Full Data Fields
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | number | Yes | Unique identifier |
| company | string | Yes | Company name |
| role | string | Yes | Job position/title |
| startDate | string | Yes | Start date (e.g., "Jan 2024") |
| endDate | string | Yes | End date or "Present" |
| location | string | No | City, Country |
| description | string[] | Yes | Array of responsibilities/achievements |
| technologies | string[] | No | Tech stack used |
| logo | string | No | Path to company logo |

## Functionality Specification

### Core Features
- Dynamic rendering from experience data array
- Responsive timeline layout
- Hover effects on cards
- Technology tags display (optional)
- Scroll-triggered animations

### Navigation Integration
- Add "Experience" to Navbar links
- Section ID for anchor navigation: `#experience`

## Implementation Files

### New Files to Create
1. `src/data/experience.js` - Experience data array
2. `src/components/experience/Experience.jsx` - Main section component
3. `src/components/experience/ExperienceCard.jsx` - Individual card component

### Files to Modify
1. `src/components/common/Navbar.jsx` - Add Experience link
2. `src/App.jsx` - Import and add Experience component after About

## Acceptance Criteria

### Visual Checkpoints
- [ ] Section displays with correct heading and styling
- [ ] Timeline layout renders correctly on all breakpoints
- [ ] Cards show company, role, duration, and description
- [ ] Hover effects work smoothly
- [ ] Colors match the portfolio theme
- [ ] Typography is consistent with other sections

### Functional Requirements
- [ ] Data loads from experience.js
- [ ] Section is responsive
- [ ] Animations trigger on scroll
- [ ] No console errors

### Integration
- [ ] Navbar links to Experience section
- [ ] Positioned correctly between About and Projects
