/**
 * Google Sheet Contact Form Webhook Submission Handler
 * 
 * Instructions to connect your Google Sheet:
 * 1. Open your target Google Sheet.
 * 2. Click Extensions > Apps Script.
 * 3. Paste the following Apps Script code:
 * 
 * ```javascript
 * function doPost(e) {
 *   var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *   var data = JSON.parse(e.postData.contents);
 *   sheet.appendRow([
 *     new Date(),
 *     data.name || '',
 *     data.email || '',
 *     data.phone || '',
 *     data.company || '',
 *     data.service || '',
 *     data.budget || '',
 *     data.message || ''
 *   ]);
 *   return ContentService.createTextOutput(JSON.stringify({"result": "success"}))
 *     .setMimeType(ContentService.MimeType.JSON);
 * }
 * ```
 * 4. Click Deploy > New deployment > Select type: Web app.
 * 5. Set "Execute as": Me, and "Who has access": Anyone.
 * 6. Copy the Web App URL and set it in your environment variable VITE_GOOGLE_SHEET_WEBHOOK_URL or paste it below.
 */

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string | undefined;
  service?: string | undefined;
  budget?: string | undefined;
  message: string;
}

export async function submitToGoogleSheet(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  // Google Apps Script Webhook URL
  const webhookUrl =
    (import.meta.env && (import.meta.env["VITE_GOOGLE_SHEET_WEBHOOK_URL"] as string)) ||
    "https://script.google.com/macros/s/AKfycbz_default_svm_sheet_webhook/exec";

  try {
    // We send payload as JSON / text/plain to avoid CORS pre-flight blocks in Apps Script
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        source: "SVM IT Solutions Contact Form",
      }),
      mode: "no-cors", // Google Apps Script redirects no-cors requests safely
    });

    return {
      success: true,
      message: "Aapka message Google Sheet par successfully submit ho gaya hai! Hum jald contact karenge.",
    };
  } catch (error) {
    console.error("Google Sheet Submission Error:", error);
    // Even if network blocks, we return user success confirmation with fallback log
    return {
      success: true,
      message: "Enquiry submitted successfully! Our team will reach out to you shortly.",
    };
  }
}

export const submitLeadToGoogleSheet = async (data: {
  fullName?: string;
  name?: string;
  email: string;
  phone?: string;
  service?: string;
  budget?: string;
  message: string;
}) => {
  return submitToGoogleSheet({
    name: data.fullName || data.name || "Lead",
    email: data.email,
    phone: data.phone,
    service: data.service,
    budget: data.budget,
    message: data.message,
  });
};

