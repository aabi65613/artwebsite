# 🎨 Joydev Bala Art Gallery - Simple HTML Version

## ✅ Compatible with Windows 7 & Node.js v12

This is a **simple HTML/CSS/JavaScript** website that works on **any computer** without needing Node.js, React, or any build tools!

---

## 📁 Project Structure

```
joydev-art-simple/
├── index.html          ← Main website file (EDIT THIS)
├── css/
│   └── style.css       ← All styling (colors, fonts, layout)
├── js/
│   └── script.js       ← Modal popup functionality
├── images/
│   ├── 3r2.jpg         ← Your painting images (ADD MORE HERE)
│   ├── 3r3.jpg
│   └── 3r4.jpg
└── README.md           ← This file
```

---

## 🚀 How to Use This Website

### Step 1: Open in Visual Studio Code

1. Open **Visual Studio Code**
2. Click **File** → **Open Folder**
3. Select the `joydev-art-simple` folder
4. You'll see all the files in the left sidebar

### Step 2: Edit the Website

#### **To Change Text (Title, About, etc.):**

1. Open `index.html` in VS Code
2. Look for the comments like this:
   ```html
   <!-- ============================================ -->
   <!-- EDIT YOUR TEXT HERE -->
   <!-- ============================================ -->
   ```
3. Edit the text between the HTML tags
4. Save the file (Ctrl+S or Cmd+S)

#### **To Add Your Painting Images:**

1. Put your image files (`.jpg` or `.png`) in the `images/` folder
2. Open `index.html`
3. Find the placeholder section:
   ```html
   <!-- Painting 4 - PLACEHOLDER -->
   <div class="gallery-item placeholder">
       <div class="placeholder-content">
           <span class="placeholder-icon">🎨</span>
           <p class="placeholder-text">[YOUR_IMAGE_4.jpg]</p>
       </div>
   </div>
   ```
4. Replace it with:
   ```html
   <!-- Painting 4 -->
   <div class="gallery-item" onclick="openModal('images/YOUR_IMAGE_4.jpg')">
       <img src="images/YOUR_IMAGE_4.jpg" alt="Painting 4" class="gallery-image">
   </div>
   ```
5. Change `YOUR_IMAGE_4.jpg` to your actual filename
6. Save the file

#### **To Change Colors:**

1. Open `css/style.css`
2. Look for the section you want to change (e.g., "HEADER STYLES")
3. Edit the color values:
   - `#0d7377` = Teal color
   - `#f97316` = Orange color
   - `#ffffff` = White
   - `#000000` = Black
4. Save the file

### Step 3: Test the Website Locally

1. **Option A: Double-click `index.html`**
   - Just double-click the file
   - It will open in your default browser

2. **Option B: Use VS Code Live Server (if installed)**
   - Right-click on `index.html`
   - Select "Open with Live Server"

3. **Option C: Use Python (if installed)**
   ```bash
   cd joydev-art-simple
   python -m SimpleHTTPServer 8000
   ```
   Then open: http://localhost:8000

---

## 🌐 How to Deploy (Make It Public)

### Option 1: Netlify Drop (Easiest!)

1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop the **entire `joydev-art-simple` folder**
3. Wait 10 seconds
4. You'll get a public URL like: `https://random-name.netlify.app`
5. **Done!** Share the URL with anyone

### Option 2: GitHub Pages

1. Create a GitHub account at [github.com](https://github.com)
2. Create a new repository called `joydev-art-gallery`
3. Upload all files from `joydev-art-simple` folder
4. Go to **Settings** → **Pages**
5. Select **main branch** → **Save**
6. Your site will be live at: `https://YOUR_USERNAME.github.io/joydev-art-gallery`

### Option 3: Any Web Hosting

1. Buy hosting from **Hostinger**, **Bluehost**, **GoDaddy**, etc.
2. Use **FTP** or **File Manager** to upload all files
3. Upload to the `public_html` or `www` folder
4. Your site will be live at your domain!

---

## ✏️ Editing Guide for Beginners

### How to Change the Main Title

**File:** `index.html`

**Find this:**
```html
<h1 class="main-title">🎨 Joydev Bala Art Gallery 🎨</h1>
<p class="subtitle">Where Colors Meet Emotions</p>
```

**Change to:**
```html
<h1 class="main-title">🎨 Your Name Art Gallery 🎨</h1>
<p class="subtitle">Your Custom Subtitle</p>
```

### How to Change the About Text

**File:** `index.html`

**Find this:**
```html
<p class="about-text">
    Welcome to my artistic sanctuary...
</p>
```

**Replace the text inside with your own biography.**

### How to Add More Paintings

**File:** `index.html`

**Copy this block:**
```html
<!-- Painting 7 -->
<div class="gallery-item" onclick="openModal('images/painting7.jpg')">
    <img src="images/painting7.jpg" alt="Painting 7" class="gallery-image">
</div>
```

**Paste it after the last painting in the gallery section.**

**Change:**
- `painting7.jpg` to your image filename
- Make sure your image is in the `images/` folder

### How to Remove a Painting

**File:** `index.html`

**Find the painting block you want to remove:**
```html
<!-- Painting 3 -->
<div class="gallery-item" onclick="openModal('images/3r4.jpg')">
    <img src="images/3r4.jpg" alt="Painting 3" class="gallery-image">
</div>
```

**Delete the entire block** (from `<!-- Painting 3 -->` to `</div>`).

---

## 🎨 Customization Tips

### Change Header Background Color

**File:** `css/style.css`

**Find:**
```css
.header {
    background: linear-gradient(90deg, #0d7377 0%, #14a085 50%, #0d7377 100%);
}
```

**Change the color codes:**
- `#0d7377` = Teal (change to `#1e40af` for blue, `#7c2d12` for brown, etc.)

### Change About Section Border Color

**File:** `css/style.css`

**Find:**
```css
.about-container {
    border: 4px solid #b2f5ea;
}
```

**Change `#b2f5ea` to any color you like.**

---

## 📱 Mobile Responsive

This website is **automatically responsive** and works perfectly on:
- ✅ Desktop computers
- ✅ Tablets
- ✅ Mobile phones

No extra work needed!

---

## 🆘 Troubleshooting

### Images Not Showing?

1. Check that your image files are in the `images/` folder
2. Check that the filename in `index.html` matches exactly (case-sensitive!)
3. Make sure the image format is `.jpg`, `.jpeg`, or `.png`

### Modal Not Opening?

1. Make sure `js/script.js` is in the correct folder
2. Check that the `<script src="js/script.js"></script>` line is at the bottom of `index.html`

### Website Looks Broken?

1. Make sure `css/style.css` is in the `css/` folder
2. Check that the `<link rel="stylesheet" href="css/style.css">` line is in the `<head>` section of `index.html`

---

## 💡 Pro Tips

1. **Always save your files** before refreshing the browser
2. **Use Ctrl+F5** (or Cmd+Shift+R on Mac) to hard refresh and see changes
3. **Keep backups** of your files before making big changes
4. **Test locally** before deploying to the internet
5. **Compress images** using [tinypng.com](https://tinypng.com) for faster loading

---

## 🎉 You're Ready!

This website is:
- ✅ Simple HTML/CSS/JavaScript (no build tools needed)
- ✅ Compatible with Windows 7 and Node.js v12
- ✅ Easy to edit in Visual Studio Code
- ✅ Ready to deploy manually to any hosting
- ✅ No image details or descriptions (as requested)

**Just edit, save, and upload!**

---

## 📞 Need Help?

If you have questions:
1. Read the comments in the code files
2. Check this README again
3. Test your changes locally before deploying

**Happy editing! 🎨✨**
