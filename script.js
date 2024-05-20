const day = new Date().getDay()

const lista = [
    {
        day: "sun",
        amount: 25.48
    },
    {
      day: "mon",
      amount: 17.45
    },
    {
      day: "tue",
      amount: 34.91
    },
    {
      day: "wed",
      amount: 52.36
    },
    {
      day: "thu",
      amount: 31.07
    },
    {
      day: "fri",
      amount: 23.39
    },
    {
      day: "sat",
      amount: 43.28
    }
]
let total = document.querySelector("h3")
const dia = document.querySelectorAll(".chart p")
const graph = document.querySelectorAll(".graph")
quantidade = []

graph[day].style.backgroundColor = "#76b5bc"

dia.forEach((e, i) => {
    e.innerHTML = lista[i].day
    quantidade[i] = lista[i].amount
    total.innerText = (+total.innerText + quantidade[i]).toFixed(2)
})
total.innerText = "$" + total.innerText

let maior = Math.max(...quantidade)
graph.forEach((e, i) => {
    e.style.height = ((quantidade[i] * 100) / maior).toFixed() - 10 + "%";
    e.style.height <= 1 ? e.style.height = "3%" : ''
    console.log(e.style.height)
})
