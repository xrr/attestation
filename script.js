
const texts = [
    "firstname", "lastname",
    "address", "zipcode", "town",
    "birthday", "lieunaissance",
]

const checks = [
    "travail", "sport", "courses", "sante",
    "famille","missions", "judiciaire",
]


function createLink() {
    var obj = {};
    texts.forEach(x => obj[x] = document.getElementById("field-" + x).value);
    checks.forEach(x => obj[x] = document.getElementById("checkbox-" + x).checked);

    var str = Object.keys(obj).map(x => x + '=' + obj[x]).join("&");

    var link = document.querySelector("#link > a");
    var uri = window.location.origin + "/#" + str;
    link.href = uri;
    link.innerText = "Attestation personnalisée"

    window.location = uri;
}


function onLoad() {
    if (str = window.location.hash.substr(1)) {
        for (const [key, value] of new URLSearchParams(str)) {
            if (texts.includes(key))
                document.getElementById("field-" + key).value = value;
            if (checks.includes(key))
                document.getElementById("checkbox-" + key).checked =
                    (value === 'true');
        }
        document.getElementById("generate-btn").click();
    }
}

window.addEventListener("DOMContentLoaded", e => onLoad());
window.addEventListener("focus", e => onLoad());
