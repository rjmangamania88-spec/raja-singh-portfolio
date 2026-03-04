# ⚡ Quick Start Guide

Get your portfolio live in minutes!

## 📖 5-Minute Setup

### 1. Install Dependencies (2 min)
```bash
npm install
```

### 2. Run Locally (1 min)
```bash
npm run dev
```
Open: http://localhost:3000

### 3. Deploy to Vercel (2 min)
```bash
# Push to GitHub
git push

# Then go to vercel.com and import your GitHub repo
```

**That's it! Your portfolio is live!** 🎉

---

## 📝 Customization (Optional)

### Update Your Information

**File: `app/components/About.tsx`**
- Change bio/description
- Update years of experience
- Modify expertise areas

**File: `app/components/Work.tsx`**
- Add your project titles
- Add project descriptions
- Update project links

**File: `app/components/Skills.tsx`**
- Update software tools
- Modify skill categories
- Change AI tools list

**File: `app/components/Contact.tsx`**
- Already populated from your CV ✓
- Update if needed

### Change Colors

**File: `tailwind.config.js`**
```javascript
// Change 'amber' to another color (e.g., 'blue', 'purple', 'rose')
```

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)
1. Go to vercel.com
2. Sign up with GitHub
3. Import your repository
4. Click Deploy
5. Done! Site is live

### Option 2: Netlify
1. Go to netlify.com
2. Drag & drop your project folder
3. Site is live instantly

### Option 3: Your Own Server
See DEPLOYMENT.md for detailed instructions

---

## 📱 Project Structure

```
raja-portfolio-nextjs/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx      ← Menu
│   │   ├── Hero.tsx            ← Intro section
│   │   ├── About.tsx           ← About you
│   │   ├── Work.tsx            ← Your projects
│   │   ├── Skills.tsx          ← Your skills
│   │   ├── Testimonials.tsx    ← Reviews
│   │   ├── Contact.tsx         ← Contact section
│   │   └── Footer.tsx          ← Footer
│   ├── page.tsx                ← Main page
│   ├── layout.tsx              ← Root layout
│   └── globals.css             ← Global styles
├── package.json
├── tailwind.config.js          ← Color/theme config
├── next.config.js
├── README.md                   ← Full documentation
└── DEPLOYMENT.md               ← Deployment guide
```

---

## 🎨 Customize Colors

### Current Theme: Amber & Slate

Change in `tailwind.config.js`:
- `amber` → Primary color (buttons, highlights)
- `slate` → Background color

### Color Options:
- `amber` (golden - current)
- `blue` (professional)
- `purple` (creative)
- `rose` (modern)
- `emerald` (fresh)
- `cyan` (tech)

---

## 📸 Add Project Images

### Option 1: Use Color Gradients (Current)
```typescript
image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
```

### Option 2: Use Image URLs
```typescript
image: 'https://your-image-url.com/image.jpg',
```

### Option 3: Upload to Cloudinary (Free)
1. Sign up: cloudinary.com
2. Upload images
3. Copy image URL
4. Paste in Work.tsx

---

## ✅ Pre-Deployment Checklist

- [ ] Updated About section with your bio
- [ ] Added your project descriptions
- [ ] Updated contact information
- [ ] Changed colors if desired
- [ ] Tested locally (`npm run dev`)
- [ ] Built successfully (`npm run build`)
- [ ] GitHub repository created
- [ ] Vercel/Netlify account ready

---

## 🔧 Common Customizations

### Add More Projects
Edit `app/components/Work.tsx`:
```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project',
    category: 'Category',
    description: 'Description',
    image: 'gradient-url',
    year: '2024',
    link: '#',
  },
  // Add more...
];
```

### Update Contact Links
Edit `app/components/Contact.tsx`:
- Email: Update `rajadking88@gmail.com`
- Phone: Update `+91 79881 14273`
- LinkedIn: Update profile URL

### Change Navigation Items
Edit `app/components/Navigation.tsx`:
```typescript
const navItems = ['About', 'Work', 'Skills', 'Contact'];
// Add or remove items
```

---

## 🐛 Quick Fixes

### Port 3000 Already in Use
```bash
# Mac/Linux
lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Build Fails
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Changes Not Showing
```bash
npm run dev
# Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
```

---

## 📚 Documentation

- **Full Setup Guide**: README.md
- **Deployment Instructions**: DEPLOYMENT.md
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs

---

## 🎯 Next Steps

1. **Customize Content** (5 min)
   - Update About section
   - Add your projects
   - Update skills

2. **Test Locally** (2 min)
   ```bash
   npm run dev
   ```

3. **Push to GitHub** (3 min)
   ```bash
   git add .
   git commit -m "Customize portfolio"
   git push
   ```

4. **Deploy to Vercel** (2 min)
   - Go to vercel.com
   - Import repository
   - Click Deploy

5. **Share Your Portfolio!** 🎉
   - Copy your live URL
   - Share with clients/recruiters
   - Add to your CV

---

## 💡 Pro Tips

✨ **Tip 1**: Use Vercel for free hosting with auto-deploy
✨ **Tip 2**: Update your portfolio regularly with new projects
✨ **Tip 3**: Add video embeds to your projects
✨ **Tip 4**: Use Cloudinary for free image hosting
✨ **Tip 5**: Add Google Analytics for visitor tracking

---

## 📞 Need Help?

1. Check README.md
2. Check DEPLOYMENT.md
3. Google the error message
4. Next.js Discord community
5. Stack Overflow

---

**You've got this! 🚀**

Questions? Check the full docs or reach out!
