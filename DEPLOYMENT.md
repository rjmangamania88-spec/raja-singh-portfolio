# 🚀 Deployment Guide - Raja Singh Portfolio

Complete step-by-step instructions for deploying your portfolio to various platforms.

## Quick Start (Vercel - Recommended)

**Time Required: 5 minutes**

### Step 1: Prepare Your Code
```bash
npm install
npm run build
```

### Step 2: Create GitHub Account & Repository

1. Go to [github.com](https://github.com)
2. Sign up (or login)
3. Click "New repository"
4. Name it `raja-singh-portfolio`
5. Select "Public"
6. Click "Create repository"

### Step 3: Push Your Code to GitHub

```bash
cd raja-singh-portfolio
git init
git config user.name "Your Name"
git config user.email "your-email@example.com"
git add .
git commit -m "Initial commit - Raja Singh Portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/raja-singh-portfolio.git
git push -u origin main
```

### Step 4: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Select "Continue with GitHub"
4. Authorize Vercel to access your GitHub
5. Click "Import Project"
6. Select your `raja-singh-portfolio` repository
7. Vercel auto-detects Next.js settings
8. Click "Deploy"
9. **Your site is LIVE!** 🎉

### Step 5: Access Your Live Site

- Vercel provides a URL like: `raja-singh-portfolio.vercel.app`
- Your portfolio is now live on the internet!

### Step 6: Add Custom Domain (Optional)

1. Purchase a domain from GoDaddy, Namecheap, etc.
2. In Vercel dashboard → Settings → Domains
3. Click "Add Domain"
4. Enter your domain name
5. Follow Vercel's DNS instructions
6. Update DNS records with your domain provider
7. Wait 24 hours for propagation

---

## Alternative: Netlify

**Time Required: 5 minutes**

### Step 1: Prepare Code

```bash
npm run build
```

### Step 2: Create Netlify Account

1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up"
3. Choose "GitHub"
4. Authorize and connect your GitHub

### Step 3: Deploy

1. Click "New site from Git"
2. Select your repository
3. Keep default settings
4. Click "Deploy site"
5. **Site is live!** 🎉

### Step 4: Custom Domain

1. Domain settings → "Add custom domain"
2. Follow DNS setup
3. Update domain provider settings

---

## Advanced: Deploy to Your Own VPS

**Time Required: 30 minutes**

### Prerequisites
- VPS with Ubuntu/Debian (DigitalOcean, Linode, AWS)
- SSH access
- Domain name

### Step 1: Server Setup

```bash
# SSH into your server
ssh root@your-server-ip

# Update system
apt update && apt upgrade -y

# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt install -y nodejs

# Install Git
apt install -y git

# Install PM2 (process manager)
npm install -g pm2

# Create app directory
mkdir /var/www/portfolio
cd /var/www/portfolio
```

### Step 2: Clone Your Repository

```bash
git clone https://github.com/YOUR-USERNAME/raja-singh-portfolio.git .
npm install
npm run build
```

### Step 3: Start Application with PM2

```bash
# Start the app
pm2 start "npm start" --name "portfolio"

# Make it auto-restart
pm2 startup
pm2 save
```

### Step 4: Setup Nginx (Reverse Proxy)

```bash
# Install Nginx
apt install -y nginx

# Create Nginx config
sudo nano /etc/nginx/sites-available/default
```

Paste this configuration:
```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Step 5: Enable SSL with Let's Encrypt

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d yourdomain.com
```

### Step 6: Restart Services

```bash
nginx -s reload
pm2 restart all
```

Your site is now live with HTTPS! 🔒

---

## Docker Deployment (Advanced)

### Create Dockerfile

Create `Dockerfile` in your project root:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Create docker-compose.yml

```yaml
version: '3.8'

services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
```

### Deploy with Docker

```bash
docker-compose up -d
```

---

## Environment Variables

Create `.env.production.local` for production:

```env
NODE_ENV=production
# Add any other environment variables here
```

---

## Performance Optimization Tips

1. **Enable Caching**
   - Vercel/Netlify handle this automatically
   - For VPS, use Cloudflare CDN

2. **Image Optimization**
   - Next.js automatically optimizes images
   - Consider using Cloudinary for images

3. **Database (if needed later)**
   - MongoDB Atlas (free tier available)
   - PostgreSQL on Render or Railway

4. **Monitoring**
   - Sentry for error tracking (free)
   - Vercel Analytics (built-in)

---

## Continuous Deployment (Auto-Update)

### With GitHub & Vercel (Automatic!)

1. Make changes locally
2. Push to GitHub: `git push`
3. Vercel automatically detects the push
4. Automatic build and deployment
5. Changes live instantly!

### With GitHub & VPS (Using GitHub Actions)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to VPS

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy via SSH
        run: |
          echo "${{ secrets.DEPLOY_KEY }}" > deploy_key
          chmod 600 deploy_key
          ssh -i deploy_key user@your-vps.com 'cd /var/www/portfolio && git pull && npm install && npm run build && pm2 restart portfolio'
```

---

## Troubleshooting Deployments

### Issue: Build Fails
**Solution:**
```bash
# Clear build cache
rm -rf .next
npm run build
```

### Issue: Port Already in Use
**Solution:**
```bash
# Find process using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>
```

### Issue: Out of Memory
**Solution:**
```bash
# Increase Node memory
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```

### Issue: Module Not Found
**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## Monitoring & Maintenance

### Check Application Status

**Vercel/Netlify:**
- Dashboard shows build status
- Analytics available

**VPS with PM2:**
```bash
pm2 status
pm2 logs portfolio
pm2 restart portfolio
```

### Update Dependencies

```bash
npm update
npm audit fix
npm run build
git add .
git commit -m "Update dependencies"
git push
```

### Backup Your Site

```bash
# Local backup
git clone https://github.com/YOUR-USERNAME/raja-singh-portfolio.git backup-folder

# VPS backup
rsync -av /var/www/portfolio /backup/
```

---

## Cost Comparison

| Platform | Cost | Ease | Best For |
|----------|------|------|----------|
| Vercel | Free | ⭐⭐⭐⭐⭐ | Beginners |
| Netlify | Free | ⭐⭐⭐⭐ | Quick Deploy |
| DigitalOcean | $5-20/mo | ⭐⭐⭐ | Control |
| AWS | Variable | ⭐⭐ | Enterprise |
| GitHub Pages | Free | ⭐⭐⭐⭐ | Static Sites |

---

## My Recommendation for You 🎯

**Use Vercel** because:
1. ✅ Completely free (with generous limits)
2. ✅ Easiest to use (auto-deploy with GitHub push)
3. ✅ Best performance (global CDN)
4. ✅ Built for Next.js (zero configuration)
5. ✅ Custom domain support
6. ✅ Preview deployments
7. ✅ No server management needed

**Setup takes 5 minutes!** ⚡

---

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Netlify Docs:** https://docs.netlify.com
- **GitHub Help:** https://docs.github.com

---

**🎉 You're ready to deploy! Choose your platform and go live!**
