# Google Apps Script Integration for Contact Form and Admin Dashboard

## Google Apps Script Code

Copy this code into your Google Apps Script project:

```javascript
// Google Apps Script Code for Contact Form Integration and Lead Management
// This script receives form data, saves it to Google Sheets, and provides lead data for admin dashboard

function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Open the Google Sheet by ID
    const SHEET_ID = '1bJwGfpMlS_EUcH3C0nkNE6hgpDDw-vnYR0rNMis9GjE';
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName('Leads');
    
    // If sheet doesn't exist, create it
    if (!sheet) {
      setupSheetHeaders();
    }
    
    const currentSheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName('Leads');
    
    // Prepare the data row
    const timestamp = new Date();
    const rowData = [
      timestamp,                    // Column A: Timestamp
      data.name || '',             // Column B: Name
      data.email || '',            // Column C: Email
      data.company || '',          // Column D: Company
      data.phone || '',            // Column E: Phone
      data.service || '',          // Column F: Service
      data.budget || '',           // Column G: Budget
      data.message || '',          // Column H: Message
      data.source || 'Contact Form', // Column I: Source
      'new'                        // Column J: Status
    ];
    
    // Add the data to the sheet
    currentSheet.appendRow(rowData);
    
    // Optional: Send notification email to admin
    sendNotificationEmail(data);
    
    // Return success response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Form submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
      
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Failed to process form submission',
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
  }
}

function doGet(e) {
  try {
    const action = e.parameter.action;
    
    if (action === 'getLeads') {
      // Fetch leads for admin dashboard
      const SHEET_ID = '1bJwGfpMlS_EUcH3C0nkNE6hgpDDw-vnYR0rNMis9GjE';
      const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName('Leads');
      
      if (!sheet) {
        return ContentService
          .createTextOutput(JSON.stringify({
            success: true,
            leads: []
          }))
          .setMimeType(ContentService.MimeType.JSON)
          .setHeaders({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
          });
      }
      
      const data = sheet.getDataRange().getValues();
      const headers = data[0];
      const rows = data.slice(1);
      
      const leads = rows.map((row, index) => ({
        id: (index + 1).toString(),
        timestamp: row[0] ? new Date(row[0]).toISOString() : new Date().toISOString(),
        name: row[1] || '',
        email: row[2] || '',
        company: row[3] || '',
        phone: row[4] || '',
        service: row[5] || '',
        budget: row[6] || '',
        message: row[7] || '',
        source: row[8] || 'Contact Form',
        status: row[9] || 'new'
      }));
      
      return ContentService
        .createTextOutput(JSON.stringify({
          success: true,
          leads: leads.reverse() // Show newest first
        }))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        });
    }
    
    // Default response for testing
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Contact Form and Lead Management API is running',
        endpoints: {
          'POST /': 'Submit contact form',
          'GET /?action=getLeads': 'Fetch all leads for admin dashboard'
        }
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
      
  } catch (error) {
    console.error('Error in doGet:', error);
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
  }
}

// Handle preflight OPTIONS requests for CORS
function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
}

function sendNotificationEmail(data) {
  try {
    // Configure your notification email
    const ADMIN_EMAIL = 'hello@copperscreen.com'; // Replace with your email
    const subject = `New Contact Form Submission - ${data.name}`;
    
    const emailBody = `
New contact form submission received:

Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'Not provided'}
Phone: ${data.phone || 'Not provided'}
Service: ${data.service}
Budget: ${data.budget || 'Not specified'}

Message:
${data.message}

Submitted: ${new Date().toLocaleString()}
Source: ${data.source}

---
This email was automatically generated from your website contact form.
View all leads in the admin dashboard: https://your-domain.pages.dev/admin
    `;
    
    // Send the email
    MailApp.sendEmail({
      to: ADMIN_EMAIL,
      subject: subject,
      body: emailBody
    });
    
  } catch (error) {
    console.error('Error sending notification email:', error);
  }
}

// Function to set up the sheet headers (run once)
function setupSheetHeaders() {
  const SHEET_ID = '1bJwGfpMlS_EUcH3C0nkNE6hgpDDw-vnYR0rNMis9GjE';
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  
  // Create or get the Leads sheet
  let sheet = spreadsheet.getSheetByName('Leads');
  if (!sheet) {
    sheet = spreadsheet.insertSheet('Leads');
  }
  
  // Set up headers
  const headers = [
    'Timestamp',
    'Name',
    'Email',
    'Company',
    'Phone',
    'Service',
    'Budget',
    'Message',
    'Source',
    'Status'
  ];
  
  // Clear existing content and add headers
  sheet.clear();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#B87333'); // Copper color
  headerRange.setFontColor('white');
  
  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length);
  
  console.log('Sheet headers set up successfully');
}

// Function to test the script (for debugging)
function testScript() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    company: 'Test Company',
    phone: '+1234567890',
    service: 'SEO & Organic Growth',
    budget: '$10K - $25K',
    message: 'This is a test message',
    source: 'Test'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
}

// Function to test lead retrieval
function testGetLeads() {
  const mockEvent = {
    parameter: {
      action: 'getLeads'
    }
  };
  
  const result = doGet(mockEvent);
  console.log('Get leads result:', result.getContent());
}
```

## Step-by-Step Implementation Guide

### Step 1: Set Up Google Apps Script

1. **Open Google Apps Script**
   - Go to [script.google.com](https://script.google.com)
   - Click "New Project"

2. **Replace Default Code**
   - Delete the default `myFunction()` code
   - Paste the complete script code above

3. **Configure the Script**
   - Replace `ADMIN_EMAIL` with your actual email address
   - The `SHEET_ID` is already set to your provided sheet ID

### Step 2: Set Up Google Sheet Headers

1. **Run Setup Function**
   - In the Apps Script editor, select `setupSheetHeaders` from the function dropdown
   - Click the "Run" button
   - Grant necessary permissions when prompted
   - This will set up proper headers in your Google Sheet

### Step 3: Deploy the Web App

1. **Deploy as Web App**
   - Click "Deploy" → "New deployment"
   - Choose "Web app" as the type
   - Set the following configuration:
     - **Description**: "Contact Form API"
     - **Execute as**: "Me"
     - **Who has access**: "Anyone"
   - Click "Deploy"

2. **Copy the Web App URL**
   - After deployment, copy the provided Web App URL
   - It will look like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`

### Step 4: Update Your React Component

1. **Update the Script URL**
   - In your `ContactForm.tsx`, replace `YOUR_SCRIPT_ID` with your actual script ID
   - The script ID is the long string in your Web App URL

```typescript
const SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec'
```

### Step 5: Test the Integration

1. **Test the Script**
   - In Apps Script, run the `testScript()` function
   - Check your Google Sheet for a test entry

2. **Test the Form**
   - Fill out your contact form on the website
   - Check the Google Sheet for the new entry
   - Check your email for the notification

### Step 6: Set Up CRM Integration (Optional)

To fetch leads to your CRM, you can:

1. **Use Google Sheets API** in your CRM to pull data
2. **Set up Zapier** to connect Google Sheets to your CRM
3. **Use Webhooks** to push data directly to your CRM

Example webhook addition to the script:

```javascript
function sendToCRM(data) {
  const CRM_WEBHOOK_URL = 'https://your-crm.com/api/webhook';
  
  const payload = {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_CRM_API_KEY'
    },
    'payload': JSON.stringify(data)
  };
  
  try {
    UrlFetchApp.fetch(CRM_WEBHOOK_URL, payload);
  } catch (error) {
    console.error('CRM integration error:', error);
  }
}
```

## Security Considerations

1. **CORS Handling**: The script uses `mode: 'no-cors'` which is necessary for cross-origin requests
2. **Data Validation**: Add server-side validation in the Apps Script
3. **Rate Limiting**: Consider implementing rate limiting to prevent spam
4. **Email Notifications**: Configure proper email settings and limits

## Troubleshooting

1. **Permission Issues**: Make sure to grant all necessary permissions
2. **CORS Errors**: Ensure the deployment is set to "Anyone" access
3. **Sheet Access**: Verify the sheet ID is correct and accessible
4. **Email Issues**: Check Gmail quota limits for automated emails

Your contact form is now ready to collect leads directly to Google Sheets with email notifications!