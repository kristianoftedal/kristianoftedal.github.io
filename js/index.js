function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

(function() {
   var skjellsord = getParameterByName("skjellsord");
   if (skjellsord == null)
        skjellsord = "neger";
   var button = document.getElementById("button");
   button.innerHTML = "kan jeg si " + skjellsord + "?";
})();


function changeDisplay() {
    document.getElementById("answer").style.display="block";
    document.getElementById("other-stuff").style.display="block";
    document.getElementById("question").style.display="none";
}