document.getElementById("scan").addEventListener("click", function () {
    navigator.bluetooth.requestDevice({ acceptAllDevices: true })
        .then(device => {
            let option = document.createElement("option");
            option.value = device.id;
            option.text = device.name || "Unknown Device";
            document.getElementById("deviceList").appendChild(option);
        })
        .catch(error => console.log("Bluetooth Error:", error));
});

document.getElementById("startSpam").addEventListener("click", function () {
    let selectedDevice = document.getElementById("deviceList").value;
    let spamTime = document.getElementById("timeSelect").value;

    if (selectedDevice) {
        fetch(`start_spam.php?device=${selectedDevice}&time=${spamTime}`);
    } else {
        alert("Please select a device!");
    }
});

document.getElementById("stopSpam").addEventListener("click", function () {
    fetch("stop_spam.php");
});
