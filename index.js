function genrationMotDePasse(
    length,
    caracterLowercase,
    caracterUppercase,
    caracterNumber,
    caracterChiffre
) {
    const lowercaseCaracter = "abcdefghijklmopqrstuvwxyz";
    const uppercaseCaracter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberCaracter = "0123456789";
    const chiffreCaracter = ",?.;:/!§*%£$¨'^=+)°_-(²<>&";

    let toutLesCaracter = "";
    let motDePasse = "";

    toutLesCaracter += caracterLowercase ? lowercaseCaracter : "";
    toutLesCaracter += caracterUppercase ? uppercaseCaracter : "";
    toutLesCaracter += caracterNumber ? numberCaracter : "";
    toutLesCaracter += caracterChiffre ? chiffreCaracter : "";

    for (let i = 0; i < length; i++) {
        const element = Math.floor(Math.random() * toutLesCaracter.length);
        motDePasse += toutLesCaracter[element];
    }

    motDePasse = motDePasse
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");

    return motDePasse;
}
const motDEPAsseLength = 12;
const caracterLowercase = true;
const caracterUppercase = true;
const caracterNumber = true;
const caracterChiffre = true;

const motDePasse = genrationMotDePasse(
    motDEPAsseLength,
    caracterLowercase,
    caracterUppercase,
    caracterNumber,
    caracterChiffre
);

document.getElementById("p").innerText = `Mot de passe est: ${motDePasse}`;
