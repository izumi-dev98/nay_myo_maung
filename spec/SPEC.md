# Portfolio Website Specification

## 1. Project Overview

This document outlines the complete specification for a responsive portfolio website built with React and Tailwind CSS. The website serves as a personal portfolio for a Laravel and React developer, showcasing skills, projects, certifications, and contact information.

## 2. Project Structure

The following folder structure will be used to maintain a clean and scalable codebase:

```
portfolio/
├── public/
│   └── assets/
│       ├── images/
│       │   ├── hero-bg.jpg
│       │   ├── profile.jpg
│       │   └── certificates/
│       └── files/
│           └── certificates/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ScrollToTop.jsx
│   │   ├── home/
│   │   │   └── Hero.jsx
│   │   ├── about/
│   │   │   ├── About.jsx
│   │   │   ├── SkillsAnimation.jsx
│   │   │   └── CertificateCard.jsx
│   │   ├── projects/
│   │   │   ├── Projects.jsx
│   │   │   └── ProjectCard.jsx
│   │   └── contact/
│   │       └── Contact.jsx
│   ├── data/
│   │   ├── skills.js
│   │   ├── projects.js
│   │   └── certificates.js
│   ├── hooks/
│   │   └── useScrollSpy.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 3. Technology Stack

- **Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3+
- **Animations**: CSS transitions and Tailwind utility classes
- **Scroll Behavior**: CSS smooth scroll

## 4. UI/UX Specification

### 4.1 Color Palette

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Primary | #0F172A | Background, dark sections |
| Secondary | #1E293B | Cards, secondary backgrounds |
| Accent | #3B82F6 | Buttons, highlights, links |
| Accent Hover | #2563EB | Button hover states |
| Text Primary | #F8FAFC | Main text on dark backgrounds |
| Text Secondary | #94A3B8 | Secondary text, descriptions |
| Success | #10B981 | Success indicators |
| Warning | #F59E0B | Warning indicators |

### 4.2 Typography

| Element | Font Family | Size | Weight |
|---------|-------------|------|--------|
| Headings | Inter | 2.5rem - 4rem | 700 - 800 |
| Subheadings | Inter | 1.5rem - 2rem | 600 |
| Body | Inter | 1rem | 400 |
| Small Text | Inter | 0.875rem | 400 |
| Code/Skills | JetBrains Mono | 0.875rem | 500 |

### 4.3 Layout Specifications

- **Max Content Width**: 1280px
- **Section Padding**: 80px vertical (desktop), 48px (mobile)
- **Container Padding**: 24px horizontal
- **Grid Gap**: 32px (desktop), 24px (tablet), 16px (mobile)
- **Border Radius**: Cards: 16px, Buttons: 8px, Images: 12px.4 Responsive Break

### 4points

| Breakpoint | Width | Target |
|------------|-------|--------|
| Mobile | < 640px | Smartphones |
| Tablet | 640px - 1024px | Tablets, small laptops |
| Desktop | > 1024px | Standard desktops |

## 5. Component Specifications

### 5.1 Navbar

**Position**: Fixed top, transparent background with blur on scroll

**Structure**:
- Logo/Name on the left
- Navigation links on the right: Home, About, Projects, Contact
- Mobile: Hamburger menu with slide-out drawer

**Behavior**:
- Background becomes solid with blur after 50px scroll
- Active section highlighted based on scroll position
- Smooth scroll to section on link click

**Hover Effects**:
- Links underline animation (left to right)
- Logo scale on hover (1.05)

### 5.2 Home Section (Hero)

**Layout**: Full viewport height, centered content

**Content**:
- Greeting text: "Hello, I'm [Nay Myo Maung (Izumi)]"
- Role text: "Laravel & React Developer"
- Brief tagline describing expertise "Laravel & React Developer crafting scalable, high-performance web applications."
- Two CTA buttons: "View My Work" (primary), "Contact Me" (outline)

**Visual Elements**:
- Animated background gradient or subtle particle effect
- Floating code snippets or tech icons as decorative elements

**Animations**:
- Text fade-in with stagger effect on page load
- Buttons slide up after text
- Continuous subtle floating animation on decorative elements

### 5.3 About Section

**Layout**: Two-column (image left, content right) on desktop, stacked on mobile

**Profile Image**:
- Circular or rounded square frame
- Size: 300px - 400px
- Subtle border with accent color
- Hover: Scale up slightly (1.02) with shadow increase

**About Content**:
- Heading: "About Me"
- 2-3 paragraphs describing background, experience, and passion
- Key statistics: Years of experience, projects completed, happy clients

**Skills Animation (Infinite Looping)**:
- Horizontal scrolling marquee of skill icons/names
- Continuous animation from right to left
- Pause on hover
- Skills include: PHP, Laravel, React, JavaScript, TypeScript, MySQL, Git, Tailwind CSS, Node.js, Docker

**Certificates Section**:
- Section heading: "Certifications"
- Grid layout: 3 columns (desktop), 2 (tablet), 1 (mobile)
- Each certificate card displays:
  - Certificate name
  - Issuing organization
  - Date obtained
  - Download link button

**Certificate Card Hover**:
- Slight lift (translateY -4px)
- Shadow increase
- Download icon appears or highlights

### 5.4 Projects Section

**Layout**: Grid layout, 3 columns (desktop), 2 (tablet), 1 (mobile)

**Section Heading**: "My Projects" with subtitle

**Project Card Structure**:
- Project thumbnail image (aspect ratio 16:9)
- Project title
- Brief description (2-3 lines)
- Tech stack tags (pill-shaped badges)
- Links: Live Demo, GitHub Repository

**Card Hover Effects**:
- Scale up (1.02)
- Shadow increase
- Image slight zoom
- Links fade in

**Data Structure** (for each project):
- id
- title
- description
- thumbnail
- technologies (array)
- liveUrl
- githubUrl

### 5.5 Contact Section

**Layout**: Two-column (info left, form right) on desktop, stacked on mobile

**Contact Information**:
- Heading: "Get In Touch"
- Email address (clickable mailto link)
- Phone number (optional)
- Location
- Social links: LinkedIn, GitHub, Twitter (icons with hover effects)

**Contact Form**:
- Fields: Name, Email, Message
- All fields required
- Submit button with loading state
- Success/error message display

**Form Hover/Focus Effects**:
- Input borders change to accent color on focus
- Labels float or highlight on focus
- Button color intensifies on hover

### 5.6 Footer

**Content**:
- Copyright text
- Back to top button
- Social links (compact)

**Styling**:
- Darker background than main sections
- Subtle top border

## 6. Animations Specification

### 6.1 Page Load Animations

- **Navbar**: Fade in from top (0.3s delay)
- **Hero Section**:
  - Text elements fade in with stagger (0.1s between elements)
  - Buttons slide up from bottom
- **Other Sections**: Fade in when scrolling into view (using Intersection Observer)

### 6.2 Scroll Animations

- Sections fade in and slide up when entering viewport
- Navbar background transitions on scroll

### 6.3 Hover Animations

| Element | Animation | Duration |
|---------|-----------|----------|
| Nav Links | Underline slide | 0.3s |
| Buttons | Background shift, scale | 0.2s |
| Project Cards | Scale, shadow | 0.3s |
| Certificate Cards | Lift, shadow | 0.2s |
| Social Icons | Scale, color | 0.2s |
| Skills Marquee | Pause on hover | - |

### 6.4 Micro-interactions

- Button click: Slight press effect
- Form submission: Button loading spinner
- Smooth scroll behavior for all anchor links
- Scroll progress indicator (optional)

## 7. Functionality Specification

### 7.1 Navigation

- Smooth scroll to each section on click
- URL hash updates on section change
- Active nav link highlights based on current section
- Mobile menu closes on link click
- Mobile menu toggle with animated hamburger icon

### 7.2 Skills Animation

- Auto-scrolling marquee (right to left)
- Speed: Completes one full cycle in ~30 seconds
- Seamless infinite loop (no visible jump)
- Pause animation on hover
- Resume on mouse leave

### 7.3 Projects

- Dynamic rendering from data array
- Filter by technology (optional enhancement)
- Modal or expanded view on card click (optional)

### 7.4 Contact Form

- Client-side validation
- Form states: idle, submitting, success, error
- Clear form after successful submission
- Display validation errors inline

### 7.5 Certificates

- Downloadable PDF links
- Open in new tab option

## 8. Data Structure

### 8.1 Skills Data

```javascript
export const skills = [
  { name: "Laravel", icon: "laravel-icon" },
  { name: "React", icon: "react-icon" },
  { name: "PHP", icon: "php-icon" },
  { name: "JavaScript", icon: "js-icon" },
  { name: "TypeScript", icon: "ts-icon" },
  { name: "MySQL", icon: "mysql-icon" },
  { name: "Git", icon: "git-icon" },
  { name: "Tailwind CSS", icon: "tailwind-icon" },
  { name: "Node.js", icon: "node-icon" },
  { name: "Docker", icon: "docker-icon" },
];
```

### 8.2 Projects Data

```javascript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Brief description of the project",
    thumbnail: "/assets/images/project1.jpg",
    technologies: ["Laravel", "React", "MySQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/user/project",
  },
];
```

### 8.3 Certificates Data

```javascript
export const certificates = [
  {
    id: 1,
    name: "Certificate Name",
    organization: "Issuing Organization",
    date: "2024",
    downloadUrl: "/assets/files/cert1.pdf",
  },
];
```

## 9. Acceptance Criteria

### 9.1 Visual Checkpoints

- [ ] Navbar is fixed and changes background on scroll
- [ ] All navigation links scroll smoothly to correct sections
- [ ] Hero section displays correctly with animations on load
- [ ] About section shows profile image, text, and skills animation
- [ ] Skills animation loops continuously and pauses on hover
- [ ] Certificate cards display correctly with download functionality
- [ ] Project cards display in responsive grid layout
- [ ] Project cards have proper hover effects
- [ ] Contact section shows form and contact information
- [ ] Form validates input and shows appropriate feedback
- [ ] All sections are responsive across breakpoints
- [ ] Footer displays correctly at bottom of page

### 9.2 Functional Requirements

- [ ] All links navigate to correct sections
- [ ] Mobile menu opens and closes correctly
- [ ] Skills marquee animation runs smoothly
- [ ] Contact form validates all fields
- [ ] Certificate downloads work correctly
- [ ] External project links open in new tabs
- [ ] Page loads without console errors
- [ ] All images load correctly
- [ ] Fonts load properly

### 9.3 Performance Requirements

- [ ] Page loads in under 3 seconds
- [ ] Animations run at 60fps
- [ ] No layout shifts during load
- [ ] Images are optimized

## 10. Notes

- Replace placeholder images and data with actual content
- Update certificate file paths with real PDF files
- Configure form endpoint (e.g., Formspree, Netlify Forms) for contact form
- Add actual social media links
- Consider adding SEO meta tags
- Test across multiple browsers and devices
