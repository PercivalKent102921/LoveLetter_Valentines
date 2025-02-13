let attempts = 0;
let yesButton = document.querySelector(".yes-btn");

function askAgain() {
    attempts++;
    if (attempts < 3) {
        alert("Sure ka Mahal? Pag-isipan mo ulit. 😢");
    } else if (attempts < 4) {
        alert("Sige na po! 🥺");
    } else if (attempts < 5) {
        alert("Pleasssssssssssssssssssssse. 🥺");
    } else {
        alert("Pumayag kana po Mahal ko please. 🥺");
    }

    // Increase the Yes button size
    let currentSize = parseFloat(getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = (currentSize + 10) + "px";
    yesButton.style.padding = (currentSize + 5) + "px";

    // Hide the No button when the Yes button gets too big
    if (currentSize > 50) {
        document.querySelector(".no-btn").style.display = "none";
    }
}


function nextPage(pageId) {
    document.querySelectorAll(".container").forEach(el => el.classList.add("hidden"));
    let nextPage = document.getElementById(pageId);
    nextPage.classList.remove("hidden");
    setTimeout(() => nextPage.classList.add("active"), 100);

    if (pageId === 'page5') {
        let activity = document.getElementById("activity").value;
        let time = document.getElementById("timeInput").value || "Not Set";
        let message = document.getElementById("message").value || "No Message";

        document.getElementById("summary").innerHTML = `
            <strong>Activity:</strong> ${activity} <br>
            <strong>Time:</strong> ${time} <br>
            <strong>Message:</strong> ${message}
        `;
    }
}

function showPhotos() {
    let album = document.getElementById("album");
    album.innerHTML = "";
    let photos = ["picture1.jpg", "picture2.jpg", "picture3.jpg"];
    photos.forEach(photo => {
        let img = document.createElement("img");
        img.src = photo;
        img.alt = "Sweet Memory";
        album.appendChild(img);
    });
}

function restart() {
    nextPage('page1');
}
