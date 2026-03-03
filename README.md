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

1. Select Source Video

Click Choose Video to link your footage. Once linked, you can verify the file metadata, frame rate, and duration in the clip badge (2).

<img src="ProEditDirectBuilder/assets/screenshots/help02.jpg" width="600" alt="Select Source Video">

2. Upload Your Script

Click Choose File to upload your script (Excel, Word, or CSV). Once loaded, the tool displays the row count and parsing status in the box marked (3). If you need a refresher on the format, click the ? HELP button.

<img src="ProEditDirectBuilder/assets/screenshots/help01.jpg" width="600" alt="Upload Script">

3. Configure Build Settings

Enter Exclusion Keywords (4) to skip lines like "Delete". Set your custom Sequence Name (5) and add Handle Frames (6) if you need extra padding at the start and end of every cut.

<img src="ProEditDirectBuilder/assets/screenshots/help00.jpg" width="600" alt="Configure Build Settings">

4. Text Extraction & Preview

Enter the Extraction Keyword (7) to identify which column contains your captions. Before building, review all cuts in the Editable Preview (9) where you can verify timecodes and SRT text.

<img src="ProEditDirectBuilder/assets/screenshots/help00.jpg" width="600" alt="Text Extraction and Preview">

5. Build Timeline

Click the blue Build button. A modal will appear allowing you to choose Auto from Clip (matches footage settings) or Choose Preset for manual sequence control.

<img src="ProEditDirectBuilder/assets/screenshots/help04.jpg" width="600" alt="Build Timeline">

📝 Client Script Formatting Best Practices

Spreadsheets Are King: Ask clients for .xlsx files to ensure 100% data alignment.

One Row = One Cut: Ensure the Timecode and Copy live horizontally on the exact same row.

Exact Column Names: If your column is named Text Layer, ensure you type Text Layer into the Extraction Keyword box.

Built with ❤️ for rapid video production workflows.
