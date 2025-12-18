# Portfolio Pro Template

A modern, fully-featured portfolio template built with Next.js, designed to showcase projects and skills with stunning animations, responsive design, and clean, maintainable code. This is not a personal portfolio but a comprehensive template project created to demonstrate the use of various tools and best practices for building professional portfolios that are easy to customize and extend.

## 🚀 Features

- **Modern UI/UX**: Sleek design featuring glassmorphism effects (frosted glass appearance), neon animations (glowing text and borders), and smooth CSS transitions for a contemporary look
- **Responsive Design**: Fully responsive across all devices including desktops, tablets, and mobiles using Tailwind CSS breakpoints and flexible layouts
- **Interactive Elements**: Custom cursor that follows mouse movement, floating animated particles in the background, 3D card effects on hover with perspective transforms, and scroll-based animations that trigger as users navigate
- **3D Background**: Immersive background animations powered by Three.js, creating dynamic geometric shapes and lighting effects that respond to user interaction
- **Advanced Animations**: GSAP (GreenSock Animation Platform) for complex timeline-based animations and performance-optimized effects; Framer Motion for React-specific entrance/exit animations and gesture controls
- **Theme Support**: Dark/Light theme toggle with smooth CSS transitions, automatically detecting system preferences and allowing manual switching
- **Component Library**: Modular, reusable React components following atomic design principles for easy customization and maintenance
- **Performance Optimized**: Built with Next.js for server-side rendering, static generation, optimal loading times, and SEO benefits
- **TypeScript**: Full TypeScript support providing type safety, better IDE support, and reduced runtime errors during development
- **Redux Toolkit**: Simplified state management for global states like theme toggling, user preferences, and application-wide data
- **SASS/SCSS Integration**: Advanced CSS preprocessing with variables, mixins, nesting, and functions for maintainable and scalable styling
- **Animation Library**: Custom CSS keyframe animations and transitions throughout the application, including particle effects, hover states, and loading sequences

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router) - React-based framework for server-side rendering and static site generation
- **Frontend Library**: React 19 - Component-based UI library for building interactive interfaces
- **Styling**: Tailwind CSS 4 + SASS/SCSS - Utility-first CSS framework with custom SCSS for advanced styling
- **Language**: TypeScript - Typed superset of JavaScript for better development experience and error prevention
- **State Management**: Redux Toolkit - Simplified Redux for managing global state like theme toggling
- **3D Graphics**: Three.js (@react-three/fiber, @react-three/drei) - Library for creating 3D graphics and immersive backgrounds
- **Animations**: GSAP (GreenSock Animation Platform) - High-performance animation library for complex animations; Framer Motion - React-specific animation library for smooth transitions
- **Smooth Scrolling**: Lenis (@studio-freight/lenis) - Custom smooth scrolling library for enhanced user experience
- **Icons**: Custom SVG icons - Scalable vector graphics for consistent iconography
- **Fonts**: Google Fonts (Geist Sans, Geist Mono) - Modern, readable fonts loaded via Next.js font optimization
- **Build Tool**: Next.js CLI - Command-line interface for development, building, and deployment
- **Linting**: ESLint - Code quality and style enforcement
- **PostCSS**: PostCSS with Tailwind - CSS processing and optimization
- **Development Tools**: TypeScript Compiler, Next.js Dev Server - For compilation and hot reloading

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/portfolio-pro-template.git
   cd portfolio-pro-template
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization Guide

This template is designed for easy customization. Follow these step-by-step instructions to personalize it for your needs:

### 1. **Personal Information**

Edit the following files to add your details:

- `app/components/HeroSection.tsx` - Update your name, title, and description in the hero section
- `app/components/AboutSection.tsx` - Add your bio, background, and personal story
- `app/components/ContactSection.tsx` - Update contact information, social links, and contact form details

### 2. **Projects**

Modify `app/components/ProjectsSection.tsx` to showcase your projects. Update the projects array with your work:

```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Detailed description of what the project does and its key features",
    image: "/project-screenshot.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project-repo",
    live: "https://yourproject.com"
  }
  // Add more projects as needed...
];
```

### 3. **Skills**

Update `app/components/SkillsSection.tsx` with your skills and proficiency levels. Modify the skills array to reflect your expertise:

```typescript
const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  // Add your skills with proficiency percentages...
];
```

### 4. **Colors and Themes**

Customize colors in `app/globals.scss` using CSS variables. The template supports light and dark themes:

```scss
:root {
  --background: #ffffff;  // Light theme background
  --foreground: #171717;  // Light theme text
  --color-background: var(--background);
  --color-foreground: var(--foreground);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;  // Dark theme background
    --foreground: #ededed;  // Dark theme text
  }
}

// Add custom color variables
:root {
  --primary: #007bff;      // Primary brand color
  --secondary: #6c757d;    // Secondary color
  --accent: #28a745;       // Accent color for highlights
}
```

### 5. **Fonts and Typography**

Fonts are configured in `app/layout.tsx` using Google Fonts. The template uses Geist Sans for body text and Geist Mono for code:

- **Body Font**: Geist Sans - Clean, modern sans-serif for readability
- **Code Font**: Geist Mono - Monospaced font for code snippets and technical content

To change fonts, modify the imports in `layout.tsx`:

```typescript
import { YourFont, YourMonoFont } from 'next/font/google';
```

### 6. **Styles and Animations**

- **Tailwind CSS**: Use utility classes for quick styling (e.g., `bg-blue-500`, `text-center`)
- **SCSS**: Add custom styles in `app/globals.scss` for advanced features like variables and mixins
- **Animations**: Customize GSAP animations in component files, Framer Motion in React components
- **Custom Classes**: Utility classes in `globals.scss` include animation delays for particles:

```scss
.animation-delay-500 { animation-delay: 0.5s; }
@for $i from 0 through 200 {
  .animation-delay-#{$i} { animation-delay: #{$i * 0.1}s; }
}
```

### 7. **Images and Assets**

Replace placeholder images in the `public/` folder:

- `me.jpg` - Your professional profile picture (recommended size: 400x400px)
- Add project screenshots and other assets as needed

### 8. **Content Sections**

The template includes multiple sections that can be easily enabled/disabled in `app/page.tsx`:

- **Hero Section**: Main landing area with intro animation
- **About Section**: Personal background and story
- **Skills Section**: Technical skills with progress bars
- **Projects Section**: Portfolio showcase with links
- **Services Section**: Services offered
- **Testimonials Section**: Client reviews and feedback
- **Pricing Section**: Pricing plans or packages
- **Contact Section**: Contact form and information

### 9. **Animations and Interactions**

- **Intro Animation**: Customize loading effects in `IntroAnimation.tsx`
- **Scroll Animations**: Adjust scroll-triggered effects using GSAP or Framer Motion
- **Hover Effects**: Modify 3D card effects and cursor interactions in component files
- **Particle Animations**: Configure floating particles in `FloatingParticles.tsx`
- **Theme Transitions**: Smooth theme switching handled by Redux state

### 10. **Advanced Customization**

- **Redux State**: Modify global state in `app/features/themeSlice.ts` for additional features
- **Components**: Edit individual components in `app/components/` for specific changes
- **Layout**: Adjust overall layout in `app/layout.tsx` and `app/page.tsx`
- **Configuration**: Update build settings in `next.config.ts`, `tailwind.config.ts`, etc.

## 📁 Project Structure

```

portfolio-pro-template/
├── app/                          # Next.js App Router directory
│   ├── components/               # Reusable React components
│   │   ├── HeroSection.tsx       # Main hero/landing section
│   │   ├── AboutSection.tsx      # Personal about section
│   │   ├── SkillsSection.tsx     # Skills showcase with progress bars
│   │   ├── ProjectsSection.tsx   # Portfolio projects display
│   │   ├── ContactSection.tsx    # Contact form and info
│   │   ├── FloatingParticles.tsx # Animated background particles
│   │   ├── IntroAnimation.tsx    # Loading/intro animations
│   │   ├── ThemeToggle.tsx       # Dark/light theme switcher
│   │   ├── CustomCursor.tsx      # Custom mouse cursor component
│   │   ├── SmoothScroll.tsx      # Smooth scrolling wrapper
│   │   └── ...                   # Additional components
│   ├── features/                 # Redux Toolkit slices
│   │   └── themeSlice.ts         # Theme state management
│   ├── globals.scss              # Global SCSS styles and variables
│   ├── globals.css               # Tailwind CSS imports and base styles
│   ├── layout.tsx                # Root layout with fonts and providers
│   ├── page.tsx                  # Main home page component
│   ├── providers.tsx             # React context providers
│   ├── store.ts                  # Redux store configuration
│   ├── hooks.ts                  # Custom React hooks
│   └── page-new.tsx              # Alternative page layout (if used)
├── public/                       # Static assets directory
│   └── me.jpg                    # Profile image placeholder
├── tailwind.config.ts            # Tailwind CSS configuration
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Project dependencies and scripts
├── eslint.config.mjs             # ESLint configuration
├── postcss.config.mjs            # PostCSS configuration
└── .gitignore                    # Git ignore rules
```

### **Key Directories and Files Explained:**

- **`app/`**: Contains all Next.js application code using the App Router
- **`components/`**: Modular React components for different sections of the portfolio
- **`features/`**: Redux slices for state management (currently theme management)
- **`globals.scss`**: Global styles, CSS variables for colors, and custom animation classes
- **`layout.tsx`**: Root layout component with font loading and provider setup
- **`page.tsx`**: Main page that renders all portfolio sections
- **`public/`**: Static files like images served directly
- **`tailwind.config.ts`**: Tailwind CSS configuration with custom theme extensions

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Configured for Next.js and React best practices
- **Clean Code**: Modular components with clear separation of concerns
- **Performance**: Optimized images, lazy loading, and efficient rendering

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The template works with any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

This is a template project, but contributions for improvements are welcome:

1. Fork the repository

2. Create a feature branch: `git checkout -b feature/amazing-feature`

3. Commit your changes: `git commit -m 'Add amazing feature'`

4. Push to the branch: `git push origin feature/amazing-feature`

5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from various sources (please check individual components)

---

**Note**: This template demonstrates the use of modern web development tools and best practices. It's designed to be a starting point for creating professional portfolios, with clean, maintainable code that's easy to understand and modify. Feel free to use it as a foundation for your own projects!

```bash
# Example command
npm run build
```
