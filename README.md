# Raja Singh - Professional Portfolio

A stunning, modern portfolio website built with Next.js, React, Tailwind CSS, and smooth animations. Showcasing cinematic video editing work, AI tools expertise, and professional accomplishments.

## 🚀 Features

- **Modern Design**: Dark theme with golden accents and glassmorphism effects
- **Smooth Animations**: Scroll animations, hover effects, and page transitions
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Performance Optimized**: Fast loading, optimized images, and clean code
- **SEO Ready**: Meta tags, structured data, and accessibility best practices
- **Component-Based**: Modular, reusable React components for easy customization
- **TypeScript**: Full type safety for better development experience

## 📋 Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Detailed background, expertise, and quick facts
- **Work**: Portfolio showcase with project categories and descriptions
- **Skills**: Technical arsenal with AI tools and software expertise
- **Testimonials**: Client feedback and reviews
- **Contact**: Direct contact methods and social links
- **Navigation**: Sticky header with smooth scrolling

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: Lucide React Icons
- **Language**: TypeScript/JavaScript
- **Deployment**: Vercel (recommended) or Netlify

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git (for version control)

### Local Setup

1. **Clone or Download the Project**
   ```bash
   git clone https://github.com/yourusername/raja-singh-portfolio.git
   cd raja-singh-portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## 🚀 Deployment

### Deploy to Vercel (Recommended - Free & Easiest)

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub/GitLab/Bitbucket

2. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/raja-singh-portfolio.git
   git push -u origin main
   ```

3. **Connect to Vercel**
   - Import your repository in Vercel dashboard
   - Vercel auto-detects Next.js settings
   - Click "Deploy"
   - Your site is live! 🎉

4. **Custom Domain (Optional)**
   - In Vercel settings, add your custom domain
   - Update DNS records with Vercel's provided values

### Deploy to Netlify

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag & drop the `.next` folder to [netlify.com](https://netlify.com)
   - Or connect GitHub for auto-deployment

### Deploy to Your Own Server

1. **Build & Upload**
   ```bash
   npm run build
   npm install -g serve
   serve -s build -l 3000
   ```

2. **Using PM2 for Production**
   ```bash
   npm install -g pm2
   pm2 start "npm start" --name "portfolio"
   pm2 startup
   pm2 save
   ```

## 🎨 Customization

### Update Content

Edit the component files in `app/components/`:

- **About Section** (`About.tsx`): Update bio, facts, expertise
- **Work Section** (`Work.tsx`): Add your projects with descriptions and links
- **Skills Section** (`Skills.tsx`): Update tools and technologies
- **Contact Section** (`Contact.tsx`): Update email, phone, location
- **Testimonials** (`Testimonials.tsx`): Add client reviews

### Change Colors

Edit `tailwind.config.js` to modify the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      amber: { /* ... */ }, // Change primary color
    },
  },
},
```

### Modify Animations

Update `app/globals.css` to customize animations and effects.

### Add Your Projects

Edit the `projects` array in `app/components/Work.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    category: 'Category',
    description: 'Project description',
    image: 'gradient-or-image-url',
    year: '2024',
    link: 'https://your-project-link.com',
  },
  // Add more projects...
];
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: 320px and up
- Tablet: 768px and up (md)
- Desktop: 1024px and up (lg)
- Large Desktop: 1280px and up (xl)

## ♿ Accessibility

- Semantic HTML structure
- Proper color contrast
- Keyboard navigation support
- Alt text for images
- ARIA labels where appropriate

## 📊 Performance

- Optimized bundle size
- Code splitting with Next.js
- Image optimization
- CSS minimization
- Fast page load times

## 🔍 SEO

- Meta tags and descriptions
- Open Graph tags for social sharing
- Structured data ready
- Mobile-friendly design
- Fast performance

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :3000
kill -9 <PID>
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment Issues
- Check Node.js version: `node --version` (should be 18+)
- Verify all environment variables are set
- Check build logs in Vercel/Netlify dashboard

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

Raja Singh - Senior AI Video Editor

- Email: rajadking88@gmail.com
- Phone: +91 79881 14273
- Location: Ambala Cantt, Haryana
- LinkedIn: linkedin.com/in/raja-singh-5b7036234

## 🙏 Support

If you need help with setup or customization:
1. Check the troubleshooting section
2. Review Next.js documentation: https://nextjs.org/docs
3. Check Tailwind CSS docs: https://tailwindcss.com/docs
4. Contact via email for custom modifications

## 🎯 Future Enhancements

Consider adding:
- Blog section with articles
- Video embeds from YouTube/Vimeo
- Contact form with email integration
- Dark/Light theme toggle
- Multi-language support
- Analytics integration

---

**Happy Deploying! 🚀**

Built with ❤️ using Next.js and Tailwind CSS
