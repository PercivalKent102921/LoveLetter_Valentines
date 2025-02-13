let attempts = 0;

function askAgain() {
    attempts++;
    if (attempts < 2) {
        alert("Sure ka Mahal? Pag-isipan mo ulit. 😢");
    } else {
        alert("Sige na po!");
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
