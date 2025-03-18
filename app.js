// Almacenar los nombres
let amigos = [];

// Agregar amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value;

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = ""; // Limpia el cuadro de texto
}

// Actualiza la lista
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // No duplica la lista

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos nombres en la lista para hacer un sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}
