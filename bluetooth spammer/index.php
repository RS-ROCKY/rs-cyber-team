<?php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bluetooth Spammer</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>CS CYBER TEAM - Bluetooth Spammer</h1>
    <p>Developer: MR SILENT</p>

    <button id="scan">🔍 Scan Bluetooth Devices</button>
    <select id="deviceList"></select>

    <label for="timeSelect">Spamming Duration:</label>
    <select id="timeSelect">
        <option value="300">5 Minutes</option>
        <option value="600">10 Minutes</option>
        <option value="900">15 Minutes</option>
    </select>

    <button id="startSpam">🚀 Start Spamming</button>
    <button id="stopSpam">🛑 Stop</button>

    <script src="script.js"></script>

</body>
</html>
