This document outlines the functionality and implementation of the lookup script, designed for automated data aggregation within Google Workspace.

Functional Overview

The script performs a batch extraction of specific cell data from multiple Google Sheets located within a defined Google Drive folder. The extracted data is appended to a designated master spreadsheet for centralized reporting. This script was designed to be somewhat easy to modify.

System Logic

Directory Access: Queries DriveApp for the folder matching inputFolder.

File Validation

Iterates through the file collection, filtering for MIME type application/vnd.google-apps.spreadsheet.

Data Retrieval

Capture the name of the file as a string

Opens each valid spreadsheet and captures values from the following fixed ranges:
D72 & D113 & D9

Data Persistence

Calculates the terminal row of the target sheet and writes the collected values into columns A through D.

Security and Scopes

Execution requires authorization for the following OAuth scopes:

https://www.googleapis.com/auth/drive.readonly
https://www.googleapis.com/auth/spreadsheets
