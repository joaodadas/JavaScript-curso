function foco() {
    document.getElementById('box').style.background = "yellow"
}

function desfoco() {
    let space = document.getElementById('box').value

    if (space.length < 3) {
        document.getElementById('box').style.background = "red"
    } else {
        document.getElementById('box').style.background = "green"
    }
}