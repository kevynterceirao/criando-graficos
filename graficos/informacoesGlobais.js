const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais () {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (( dados.total_pessoas_mundo) / 1e9 )
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement( 'p')
    paragrafo.classList.add('garficos-container_texto')
    paragrafo.innerHTML = 'voce sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas}

    const container = document.getElementById('garficos-container')
    container.appendChild(paragrafo)
}

visualizarInformacoesGlobais()