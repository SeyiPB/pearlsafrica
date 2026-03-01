/**
 * Google Apps Script for Partner Form Submission
 * 
 * Instructions:
 * 1. Open your Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Delete existing code and paste this script.
 * 4. Click 'Deploy' > 'New deployment'.
 * 5. Select type: 'Web app'.
 * 6. Set 'Who has access': 'Anyone'.
 * 7. Authorize and click 'Deploy'.
 * 8. Copy the 'Web app URL' and paste it into partner.html.
 */

function doPost(e) {
    try {
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        var data = JSON.parse(e.postData.contents);

        // Define headers/columns to match partner.html payload
        var newRow = [
            new Date(), // Timestamp
            data.role,
            data.interests,
            data.firstName,
            data.lastName,
            data.email,
            data.phone,
            data.organisation,
            data.country,
            data.budget,
            data.message
        ];

        sheet.appendRow(newRow);

        return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}
