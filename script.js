/* ========================= */
/* PINDAH HALAMAN */
/* ========================= */

function nextPage(pageNumber) {

    var pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    document
        .getElementById("page" + pageNumber)
        .classList.add("active");
}


/* ========================= */
/* BUKA UCAPAN + MUSIK */
/* ========================= */

function mulaiUcapan() {

    // Tampilkan ucapan
    var ucapan = document.getElementById("ucapan");

    ucapan.style.display = "block";


    // Hilangkan tombol
    document
        .getElementById("tombolUcapan")
        .style.display = "none";


    // Ambil musik
    var musik = document.getElementById("musik");


    // Jalankan musik
    musik.play();


    // Jalankan confetti
    buatConfetti();
}


/* ========================= */
/* CONFETTI */
/* ========================= */

function buatConfetti() {

    var container =
        document.getElementById("confetti-container");


    var emoji = [
        "🎉",
        "🎊",
        "🥳",
        "✨",
        "🎓",
        "⭐",
        "🤣",
        "👏",
        "🎈"
    ];


    for (var i = 0; i < 40; i++) {

        var confetti =
            document.createElement("div");

        confetti.className = "confetti";


        confetti.innerHTML =
            emoji[
                Math.floor(
                    Math.random() * emoji.length
                )
            ];


        confetti.style.left =
            Math.random() * 100 + "%";


        confetti.style.animationDuration =
            (2 + Math.random() * 3) + "s";


        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";


        container.appendChild(confetti);


        setTimeout(function() {

            if (container.firstChild) {
                container.removeChild(
                    container.firstChild
                );
            }

        }, 5000);

    }
}