const nao = document.getElementById("nao");

nao.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    nao.style.position = "absolute";
    nao.style.left = x + "px";
    nao.style.top = y + "px";
});

function aceitar(){
    window.location.href = "yay.html";
}

