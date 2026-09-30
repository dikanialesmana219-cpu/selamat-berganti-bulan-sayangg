
const openButton = document.getElementById("openEnvelope");
const envelope = document.getElementById("envelope");
const hint = document.getElementById("hint");

const revealMessage = document.getElementById("revealMessage");
const loveLetter = document.getElementById("loveLetter");

if (openButton && envelope) {
    openButton.addEventListener("click", () => {
        if (envelope.classList.contains("opened")) return;

        envelope.classList.add("opened");
        openButton.style.display = "none";

        if (hint) {
            hint.textContent = "Surat kecil dari Dika untukmu 🤍";
        }

        setTimeout(() => {
            if (revealMessage) {
                revealMessage.classList.add("show");
            }

            if (loveLetter) {
                loveLetter.classList.add("show");
            }
        }, 700);
    });
}
