

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RS CYBER TEAM</title>
    <meta name="theme-color" content="#32ffa7">
    <link rel="icon" href="https://i.ibb.co/Cs8CpVq7/IMG-20250409-163716-192.jpg">
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/particles.js"></script>
    <style>
        body {
            font-family: 'VT323', monospace;
            background: #000;
            color: #fff;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: auto;
        }
        #particles-js {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
        .container {
            text-align: center;
            z-index: 1;
            width: 80%;
            max-width: 500px;
            background: rgba(0, 0, 0, 0.8);
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
        }
        .logo {
            margin: 20px auto;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background: url('https://i.ibb.co/Cs8CpVq7/IMG-20250409-163716-192.jpg') no-repeat center center / cover;
            border: 5px solid #0af;
            box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
        }
        .container h1 {
            font-size: 2em;
            margin: 10px 0;
        }
        .container h2 {
            font-size: 1.5em;
            margin: 10px 0 20px;
        }
        .box input[type="file"] {
            color: #fff;
            background: transparent;
            border: 1px solid #0af;
            padding: 10px;
            width: 90%;
            margin-bottom: 10px;
            border-radius: 5px;
        }
        .box button {
            background: #0af;
            color: #fff;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 5px;
            transition: transform 0.3s, background 0.3s;
        }
        .box button:hover {
            transform: scale(1.1);
            background: #08d;
        }
        .success-messages {
            margin: 20px auto;
            padding: 15px;
            background: rgba(0, 255, 0, 0.2);
            color: #fff;
            border-radius: 12px;
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
        }
        a {
            color: #0af;
            text-decoration: none;
            transition: color 0.3s;
        }
        a:hover {
            color: #08d;
        }
        .disclaimer {
            margin: 20px auto;
            padding: 15px;
            background: rgba(255, 0, 0, 0.2);
            color: #fff;
            border-radius: 12px;
            box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
        }
    </style>
</head>
<body>
    <div id="particles-js"></div>
    <div class="container">
        <div class="logo"></div>
        <h1>RS CYBER TEAM</h1>
        <h2>Upload and manage your files securely</h2>
        <div class="box">
            <form id="uploadForm" action="" method="post" enctype="multipart/form-data">
                <input type="file" name="userFiles[]" multiple required>
                <button type="submit">Upload Files</button>
            </form>
        </div>
        <div id="messages">
                    </div>
        <div class="disclaimer">
            <p><strong>Disclaimer:</strong> Ensure that you upload files that comply with our terms and conditions. Any misuse of this service may lead to permanent account suspension.</p>
        </div>
    </div>
    <script>
        particlesJS('particles-js', {
            particles: {
                number: { value: 100, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: {
                    type: "circle",
                    stroke: { width: 0, color: "#000000" },
                    polygon: { nb_sides: 5 }
                },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 } }
            },
            retina_detect: true
        });
    </script>
</body>
</html>
