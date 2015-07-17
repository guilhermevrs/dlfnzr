function translate(a,b,c){

    var inputText = document.getElementById("inputArea");

    var resultText = document.getElementById("result-text");
    resultText.textContent = inputText.value.replace(/a|e|i|o|u/gi, '');

    var resultCard = document.getElementById("result-card");
    resultCard.removeAttribute("style");
    return false;
}

(function(){
    var frmInput = document.getElementById("frmInput");
    frmInput.onsubmit = translate;
})();
