const themes = {
    morningBtn: { bg: "#b6dbfcff", text: "#000" },
    afternoonBtn: { bg: "#dfd38bff", text: "#000" },
    nightBtn: { bg: "#10103fff", text: "#fff" }
};

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", function () {
        const theme = themes[this.id];
        document.body.style.backgroundColor = theme.bg;
        document.body.style.color = theme.text;
        document.querySelectorAll("h1").forEach(h1 => h1.style.fontSize = "24px");
    });
});
