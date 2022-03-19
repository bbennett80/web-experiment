

let video = document.querySelector("#videoElement");

function start(e) {
    if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (stream) {
                    video.srcObject = stream;
                    })
                .catch(function (err0r) {
                console.log("Something went wrong!");
                });
        }
}

function stop(e) {
    const stream = video.srcObject;
    const tracks = stream.getTracks();

    for (let i = 0; i < tracks.length; i++) {
        let track = tracks[i];
        track.stop();
    }
    video.srcObject = null;
}
