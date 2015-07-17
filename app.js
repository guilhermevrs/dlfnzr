function translate(a,b,c){

    var inputText = document.getElementById("inputArea");

    var resultText = document.getElementById("result-text");
    resultText.textContent = inputText.value.replace(/a|e|i|o|u|á|à|ã|é|ê|í|ó|ú/gi, '');

    var resultCard = document.getElementById("result-card");
    resultCard.removeAttribute("style");
    return false;
}

(function(){
    var frmInput = document.getElementById("frmInput");
    frmInput.onsubmit = translate;

    ZeroClipboard.config( { swfPath: "https://cdnjs.cloudflare.com/ajax/libs/zeroclipboard/2.2.0/ZeroClipboard.swf" } );

    var client = new ZeroClipboard( document.getElementById("copy-button") );

    client.on( "ready", function( readyEvent ) {
        alert( "ZeroClipboard SWF is ready!" );

        client.on( "copy", function (event) {
  var clipboard = event.clipboardData;
  clipboard.setData( "text/plain", "Copy me!" );
});

        client.on( "aftercopy", function( event ) {
            // `this` === `client`
            // `event.target` === the element that was clicked
            event.target.style.display = "none";
            alert("Copied text to clipboard: " + event.data["text/plain"] );
        } );
    } );
})();
