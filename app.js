function translate(){

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

    var resultText = document.getElementById("result-text");
    ZeroClipboard.config( { swfPath: "//cdnjs.cloudflare.com/ajax/libs/zeroclipboard/2.2.0/ZeroClipboard.swf" } );
    var client = new ZeroClipboard( document.getElementById("copy-button") );
    client.on( "ready", function( readyEvent ) {
        client.on("copy", function(event){
            var clipboard = event.clipboardData;
            clipboard.setData( "text/plain", resultText.textContent );
        });
        client.on( "aftercopy", function( event ) {
            event.target.style.display = "none";
        });
    } );
})();
