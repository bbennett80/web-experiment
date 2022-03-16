const capture = document.getElementByID('capture');
capture.addEventListener('click', capOut);


function capOut() {
    document.getElementById("output").value = capture;
}

