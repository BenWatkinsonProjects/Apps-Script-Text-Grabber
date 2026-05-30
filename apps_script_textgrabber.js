
/*
 @param {string} inputFolder Name of the source folder.
 @param {string} inputSS ID of the destination spreadsheet.
 @param {string} inputSheet Name of the destination sheet tab.
*/

function lookup(inputFolder, inputSS, inputSheet) {
  
  const folders = DriveApp.getFoldersByName(inputFolder)
  const targetss = SpreadsheetApp.openById(inputSS);
  const targetsheet = targetss.getSheetByName(inputSheet)
  
  while (folders.hasNext()) {
    const folder = folders.next();
    const files = folder.getFiles();
      
      while (files.hasNext()) {
        const file = files.next();
        const fileType = file.getMimeType();
          if(fileType === "application/vnd.google-apps.spreadsheet") {

          const ss = SpreadsheetApp.open(file);
          const firstSheet = ss.getSheets()[0]
          const nextRow = targetsheet.getLastRow() + 1;

          let schoolName = ss.getName();
          let schoolNameSet = targetsheet.getRange(nextRow, 1).setValue(schoolName);

          let noStaffRange = firstSheet.getRange("D72");
          let noStaffVal = noStaffRange.getValue();
          let noStaffSet = targetsheet.getRange(nextRow, 2).setValue(noStaffVal);

          let noReferralRange = firstSheet.getRange("D113");
          let noReferralVal = noReferralRange.getValue();
          let noReferralSet = targetsheet.getRange(nextRow, 3).setValue(noReferralVal);

          let dateRange = firstSheet.getRange("D9");
          let dateVal = dateRange.getValue();
          let dateSet = targetsheet.getRange(nextRow, 4).setValue(dateVal);  
  
        }
      }
    }
  }

function executeLookup() {
  const folderName = "ENTER_FOLDER_NAME";
  const targetID = "ENTER_SPREADSHEET_ID";
  const sheetName = "ENTER_SHEET_NAME";

  lookup(folderName, targetID, sheetName);
}
