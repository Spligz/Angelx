var target_name = "";


window.onload = function () {
    target_name = getUrlVars()["name"].replace("+", " ");
    document.getElementById("name-id").innerHTML = target_name;
    document.getElementById("start-test").onclick = function () {
        var el = document.getElementsByClassName("cutie-tester-container")[0];
        el.innerHTML = `
            <img src="nhs.png" class="nhs">
            <div id="done" class="done-msg animate__animated animate__tada"> You've tested positive for being a <span class="hl">cutie</span> ;) </div>
        `;
        document.getElementById("done").classList.add("animate__tada");
    };
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
