var acc = document.getElementsByClassName("choice__button");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("actives");
        var targetPanelId = this.getAttribute("data-target");
        this.classList.toggle("active");
        var targetPanelId = this.getAttribute("data-target");
        var panel = document.getElementById(targetPanelId);
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
var acc = document.getElementsByClassName("standart__buttone");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("actives");
        var targetPaneId = this.getAttribute("data-target");
        var pane = document.getElementById(targetPaneId);
            pane.style.display = "block";
    });
}