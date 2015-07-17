function translate(){
    alert('hue');
    return false;
}

(function(){
    var frmInput = document.getElementById("frmInput");
    frmInput.addEventListener("submit", translate, false);
})();
