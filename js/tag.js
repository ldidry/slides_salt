window.onload = function() {
    Reveal.addEventListener( 'gogogo', function() {
        console.log('toto');
        try {
            TagCanvas.Start('myCanvas', '', {
                initial: [0.1,-0.1],
                textHeight: 40,
                textColour: '#000000',
                textFont: '"Open Sans",sans-serif'
            });
        } catch(e) {
            document.getElementById('myCanvasContainer').style.display = 'none';
        }
    });
};

