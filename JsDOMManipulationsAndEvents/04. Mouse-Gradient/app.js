function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', onMove);

    function onMove (event) {
        // const offsetX = event.pageX - event.target.offsetLeft
        const offsetX = event.offsetX
        const persent = Math.floor(offsetX / event.target.clientWidth * 100)

        document.getElementById('result').textContent = `${persent}%`

    }
}