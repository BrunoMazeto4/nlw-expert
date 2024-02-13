const perguntas = [
  {
    pergunta: "Quem é considerado o pai da computação?",
    opcoes: ["Alan Turing", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
    respostaCorreta: 0, // Alan Turing
  },
  {
    pergunta:
      "Qual foi a primeira linguagem de programação de alto nível criada?",
    opcoes: ["Fortran", "Cobol", "Python", "Java"],
    respostaCorreta: 0, // Fortran
  },
  {
    pergunta:
      "Em que ano o primeiro computador pessoal, o IBM PC, foi lançado?",
    opcoes: ["1975", "1981", "1990", "2000"],
    respostaCorreta: 1, // 1981
  },
  {
    pergunta: "Quem desenvolveu a linguagem de programação C?",
    opcoes: ["Bill Gates", "Steve Jobs", "Dennis Ritchie", "Linus Torvalds"],
    respostaCorreta: 2, // Dennis Ritchie
  },
  {
    pergunta:
      "Qual linguagem de programação é amplamente utilizada para desenvolvimento web?",
    opcoes: ["C++", "Python", "JavaScript", "Swift"],
    respostaCorreta: 2, // JavaScript
  },
  {
    pergunta: "Em que ano a linguagem de programação Python foi lançada?",
    opcoes: ["1989", "1991", "1995", "2000"],
    respostaCorreta: 1, // 1991
  },
  {
    pergunta: "Qual foi o primeiro sistema operacional desenvolvido?",
    opcoes: ["Windows", "Linux", "UNIX", "macOS"],
    respostaCorreta: 2, // UNIX
  },
  {
    pergunta: "Quem é conhecido como o criador do sistema operacional Linux?",
    opcoes: ["Richard Stallman", "Bill Gates", "Linus Torvalds", "Steve Jobs"],
    respostaCorreta: 2, // Linus Torvalds
  },
  {
    pergunta: "Qual foi a primeira linguagem de programação?",
    opcoes: ["Assembly", "Cobol", "Fortran", "Pascal"],
    respostaCorreta: 0, // Assembly
  },
  {
    pergunta: "Em que ano a linguagem de programação Java foi lançada?",
    opcoes: ["1990", "1995", "2000", "2005"],
    respostaCorreta: 1, // 1995
  },
  {
    pergunta: "Quem é considerado o pai do Linux?",
    opcoes: ["Richard Stallman", "Linus Torvalds", "Steve Jobs", "Bill Gates"],
    respostaCorreta: 1, // Linus Torvalds
  },
  {
    pergunta:
      "Qual linguagem de programação é comumente usada para desenvolvimento de aplicativos móveis?",
    opcoes: ["JavaScript", "C++", "Python", "Swift"],
    respostaCorreta: 3, // Swift
  },
  {
    pergunta: "Quando o primeiro compilador foi desenvolvido?",
    opcoes: ["1950", "1960", "1970", "1980"],
    respostaCorreta: 1, // 1960
  },
  {
    pergunta:
      "Qual linguagem de programação é conhecida por sua sintaxe simples e fácil de aprender?",
    opcoes: ["C", "Java", "Ruby", "Python"],
    respostaCorreta: 3, // Python
  },
  {
    pergunta: "Qual foi o primeiro computador comercialmente disponível?",
    opcoes: ["ENIAC", "UNIVAC I", "IBM 650", "Atari 2600"],
    respostaCorreta: 0, // ENIAC
  },
]
const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector("#acertos span")
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true) // clonando o nó template
  quizItem.querySelector("h3").textContent = item.pergunta

  for (let resposta of item.opcoes) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true)
    dt.querySelector("span").textContent = resposta
    dt.querySelector("input").setAttribute(
      "name",
      "pergunta-" + perguntas.indexOf(item)
    )
    dt.querySelector("input").value = item.opcoes.indexOf(resposta)

    // quando houver uma mudança de estado do input, haverá as instruções abaixo
    dt.querySelector("input").onchange = (event) => {
      const isCorrect = event.target.value == item.respostaCorreta

      corretas.delete(item)
      if (isCorrect) {
        corretas.add(item)
      } 
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }

    quizItem.querySelector("dl").appendChild(dt)
  }
  quizItem.querySelector("dl dt").remove()

  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}
