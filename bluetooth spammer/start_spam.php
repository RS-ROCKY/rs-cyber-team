<?php
if (isset($_GET['device']) && isset($_GET['time'])) {
    $device = $_GET['device'];
    $time = $_GET['time'];

    shell_exec("python3 bluetooth_spammer.py $device $time > /dev/null 2>&1 &");
    echo "Spamming started for device: $device for $time seconds!";
}
?>
