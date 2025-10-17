# Contact Form Setup Guide

## How the "Let's Connect" Contact Form Works

The contact form currently uses **Formspree** - a free service that handles form submissions and emails them to you.

### Setup Steps:

1. **Go to [Formspree.io](https://formspree.io/) and create a free account**

2. **Create a new form** and copy your form ID (looks like: `xyzabc123`)

3. **Update the form endpoint** in `src/components/Contact.tsx`:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
   Replace `YOUR_FORM_ID` with your actual Formspree form ID.

4. **Test it!** Submit a test message and check your email.

### Alternative Options:

#### Option 1: Direct Email Link (No Setup Required)
If you want a simpler solution without backend, the form already has a fallback that opens the user's email client. You can make this the primary method by modifying the submit handler.

#### Option 2: EmailJS (Also Free)
1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Install: `npm install @emailjs/browser`
3. Replace the fetch call with EmailJS integration

#### Option 3: Backend API
If you want full control, you can create your own backend using:
- Node.js + Nodemailer
- AWS Lambda + SES
- Vercel Serverless Functions

### Current Behavior:
- User fills out name, email, and message
- Clicks "Send Message" 
- Form shows "Launching..." with rocket animation
- If successful: Shows success message and clears form
- If failed: Falls back to opening email client with pre-filled message

### Contact Links:
All the social links (Email, LinkedIn, GitHub) are direct links that work immediately without any setup needed.
