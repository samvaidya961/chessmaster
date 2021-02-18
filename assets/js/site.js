function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "Follow") {
        x.innerHTML = "Unfollow";
    } else {
        x.innerHTML = "Follow";
    }
}

function myFunction1() {
    var x = document.getElementById("myDIV1");
    if (x.innerHTML === "Follow") {
        x.innerHTML = "Unfollow";
    } else {
        x.innerHTML = "Follow";
    }
}

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}