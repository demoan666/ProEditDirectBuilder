🎬 ProEdit Direct Builder

ProEdit Direct Builder is a powerful Adobe Premiere Pro extension designed to automate the most tedious parts of video editing: cutting raw footage to a script and formatting on-screen text.

Upload your client's script (Excel, CSV, Word, or plain text), select your source video, and the Builder will instantly generate a fully cut timeline, complete with timeline markers and an auto-formatted .srt caption track.

🚀 Installation Guide

Method 1: ZXP Installer (Recommended)

Download a free ZXP installer like Anastasiy's Extension Manager or ZXPInstaller.

Open the Extension Manager and drag the ProEditDirectBuilder.zxp file into the window.

Restart Premiere Pro. Go to Window > Extensions > ProEdit Direct Builder.

Method 2: Manual Installation

Copy the ProEditDirectBuilder folder to the extensions directory:

Windows: C:\Program Files (x86)\Common Files\Adobe\CEP\extensions\

Mac: /Library/Application Support/Adobe/CEP/extensions/

Enable Debug Mode: On Windows, double-click the included Enable_Debug_Mode.reg file. On Mac, run defaults write com.adobe.CSXS.11 PlayerDebugMode 1 in Terminal.

📖 How to Use

Follow the red numbered rectangles in the screenshots below to master the workflow.

1. Select Source Video & Help

Click Choose Video to link your footage. You can verify the file metadata in the clip badge (2). If you get stuck, click the ? Help button to view the guide modal.

<img src="assets/screenshots/help01.jpg" width="600" alt="Select Source Video">

2. Upload Your Script

Click Choose File to upload your script. Once loaded, the tool displays the row count and format type in the parsing status box (3).

<img src="assets/screenshots/help02.jpg" width="600" alt="Upload Script">

3. Configure Exclusions & Handles

Enter Exclusion Keywords (4) to skip lines like "Delete". Set your custom Sequence Name (5) and add Handle Frames (6) to add padding to every cut.

<img src="assets/screenshots/help03.jpg" width="600" alt="Configure Exclusions and Handles">

4. Text Extraction Settings

Enter the exact column name or Extraction Keyword (7) from your script. Choose whether to generate markers, an SRT file, or both for your overlay text.

<img src="assets/screenshots/help04.jpg" width="600" alt="Set Extraction Keywords">

5. Review the Editable Preview

Verify all cuts in the Editable Preview (9). You can change the In/Out points or edit the SRT text directly in the grid before building.

<img src="assets/screenshots/help05.jpg" width="600" alt="Preview Grid">

6. Build Timeline

Click Build Selected Passes. Choose Auto from Clip to create a sequence that matches your source footage exactly, or Choose Preset for manual control.

<img src="assets/screenshots/help06.jpg" width="600" alt="Build Timeline">

📝 Client Script Formatting Best Practices

Spreadsheets Are King: Ask clients for .xlsx files to ensure 100% data alignment.

One Row = One Cut: Ensure the Timecode and Copy live horizontally on the exact same row.

Exact Column Names: If your column is named Text Layer, ensure you type Text Layer into the Extraction Keyword box.

Built with ❤️ for rapid video production workflows.