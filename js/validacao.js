function verificaChute(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="botao-jogar" >Jogar novamente</button>
                `
                document.body.style.backgroundColor = "black";
        } else {

            elementoChute.innerHTML += '<div>Valor Inválido, tente novamente.</div>';
        }
    }


    if (numeroMaiorouMenor(numero)) {
        elementoChute.innerHTML += `<div>O número secreto precisa estar entre ${menorValor} e ${maiorValor}. Por favor, tente novamente.</div>`
        
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2 class="acertou-titulo">Você acertou!</h2>
            <h3 class="acertou-texto">O número secreto era ${numeroSecreto}!</h3>
            <div><img src="/assets/dancing-cat.gif" alt="gato dançando com fundo colorido" width=70%></div>
            <button id="jogar-novamente" class="botao-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down fa-bounce"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up fa-bounce"></i></div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorouMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', (e) => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})

