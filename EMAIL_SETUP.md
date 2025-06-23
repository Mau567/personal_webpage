# EmailJS Setup Guide

To make the contact form work and send emails to mjletort@gmail.com, you need to set up EmailJS:

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your email account (mjletort@gmail.com)
5. Note down the **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** New Contact Message from {{from_name}}

**Content:**
```
Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

This message was sent from your personal website contact form.
```

4. Save the template and note down the **Template ID** (e.g., "template_xyz789")

## Step 4: Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., "user_def456")

## Step 5: Update the Code
Replace the placeholder values in `src/app/page.tsx`:

```javascript
// Replace these values in the handleSubmit function:
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key
const result = await emailjs.send(
  "YOUR_SERVICE_ID", // Replace with your service ID
  "YOUR_TEMPLATE_ID", // Replace with your template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: "mjletort@gmail.com"
  }
);
```

## Example with Real Values:
```javascript
emailjs.init("user_def456");
const result = await emailjs.send(
  "service_abc123",
  "template_xyz789",
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: "mjletort@gmail.com"
  }
);
```

## Features Added:
✅ **Persistent Contact Section** - Always visible at the bottom like a hotel contact section
✅ **WhatsApp Integration** - Direct link to Canadian number (438) 979 4330
✅ **Working Contact Form** - Sends emails to mjletort@gmail.com
✅ **Enhanced UI** - Better styling and user experience
✅ **Form Validation** - Required fields and proper error handling
✅ **Success/Error Messages** - User feedback for form submission

## WhatsApp Link Format:
The WhatsApp link uses the format: `https://wa.me/14389794330?text=Hi Mauricio! I'd like to get in touch with you.`

This will open WhatsApp with a pre-filled message to your Canadian phone number. 