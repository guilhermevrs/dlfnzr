function translate(){
    var resultCard = document.getElementById("result-card");
    resultCard.removeAttribute("style");
    return false;
}

(function(){
    var frmInput = document.getElementById("frmInput");
    frmInput.onsubmit = translate;
})();
