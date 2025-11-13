# Portfolio Pro Template

A modern, fully-featured portfolio template built with Next.js, designed to showcase projects and skills with stunning animations, responsive design, and clean, maintainable code. This is not a personal portfolio but a comprehensive template project created to demonstrate the use of various tools and best practices for building professional portfolios that are easy to customize and extend.

## 🚀 Features

- **Modern UI/UX**: Sleek design with glassmorphism effects, neon animations, and smooth transitions
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Interactive Elements**: Custom cursor, floating particles, 3D card effects, and scroll animations
- **3D Background**: Immersive Three.js-powered background animations
- **Advanced Animations**: GSAP and Framer Motion for smooth, performant animations
- **Theme Support**: Dark/Light theme toggle with smooth transitions
- **Component Library**: Modular components for easy customization and reuse
- **Performance Optimized**: Built with Next.js for optimal loading and SEO
- **TypeScript**: Full TypeScript support for better development experience
- **Redux Toolkit**: State management for theme and other global states
- **SASS/SCSS Integration**: Custom styling with SASS for advanced CSS features
- **Animation Library**: Custom CSS animations and transitions throughout

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + SASS/SCSS
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **3D Graphics**: Three.js
- **Animations**: GSAP, Framer Motion
- **Icons**: Custom SVG icons
- **Fonts**: Google Fonts (Inter, JetBrains Mono)
- **Build Tool**: Next.js CLI

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

This template is designed for easy customization. Here's how to personalize it:

### 1. **Personal Information**

Edit the following files to add your details:

- `app/components/HeroSection.tsx` - Update name,
 title, and description
- `app/components/AboutSection.tsx` - Add your bio and background
- `app/components/ContactSection.tsx` - Update contact information

### 2. **Projects**

Modify `app/components/ProjectsSection.tsx` to showcase your projects:

```typescript
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    image: "/project-image.jpg",
    technologies: ["React", "Node.js"],
    github: "https://github.com/yourusername/project",
    live: "https://yourproject.com"
  }
  // Add more projects...
];
```

### 3. **Skills**

Update `app/components/SkillsSection.tsx` with your skills and proficiency levels.

### 4. **Colors and Themes**

Customize colors in `app/styles/globals.scss`:

```scss
:root {
  --primary: #your-color;
  --secondary: #your-color;
  // Add more custom properties...
}
```

### 5. **Images**

Replace placeholder images in the `public/` folder:

- `me.jpg` - Your profile picture
- Project screenshots in relevant components

### 6. **Content Sections**

The template includes multiple sections that can be easily enabled/disabled:

- Hero Section
- About Section
- Skills Section
- Projects Section
- Services Section
- Testimonials Section
- Pricing Section
- Contact Section

### 7. **Styling**

- Use Tailwind classes for quick styling
- Add custom SCSS in `app/styles/globals.scss`
- Custom utility classes are defined in the SCSS file

## 📁 Project Structure

``
portfolio-pro-template/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── ...
│   ├── features/            # Redux slices
│   │   └── themeSlice.ts
│   ├── styles/              # SCSS styles
│   │   └── globals.scss
│   ├── globals.css          # Tailwind imports
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── providers.tsx        # Context providers
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── next.config.ts           # Next.js configuration
└── package.json
``

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
