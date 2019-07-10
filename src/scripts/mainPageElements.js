import {addInterestEvent} from "./interests/eventListeners.js"
import {addVisitedEvent} from "./visited/eventListeners.js"
import {API} from "./api.js"

const createInterestEl = () => {
    let interestSection = document.createElement("section")
    interestSection.setAttribute("id", "interest-section")
    interestSection.innerHTML = "<h1>Interesting Places</h1>"
    let addInterestBtn = document.createElement("button")
    addInterestBtn.setAttribute("id", "addInterest-btn")
    addInterestBtn.innerHTML = "Add Interesting Place"
    addInterestEvent(addInterestBtn)
    let interestDiv = document.createElement("div")
    interestDiv.setAttribute("id", "interest-div")
    interestSection.appendChild(addInterestBtn)
    interestSection.appendChild(interestDiv)
    return interestSection
}
const addInterests = (interestObj) => {
    let divContainer = document.querySelector("#interest-div")
    let newInterestDiv = document.createElement("div")
    newInterestDiv.setAttribute("id", `interestDiv-${interestObj.id}`)
    newInterestDiv.appendChild(createInterestHTML(interestObj))
    divContainer.appendChild(newInterestDiv)
}

const createInterestHTML = (interestObj) => {
    let newInterestArticle = document.createElement("article")
    newInterestArticle.setAttribute("id", `interestArticle-${interestObj.id}`)
    newInterestArticle.innerHTML = `
        <h3 id="interestName-${interestObj.id}"><strong>${interestObj.name}</strong></h3>
        <h4 id="interestCountry-${interestObj.id}">Country: <br> ${interestObj.place.name}</h4>
        <p id="interestDescription-${interestObj.id}">Description: <br> ${interestObj.description}</p>
        <p id="interestCost-${interestObj.id}">Cost: $${String(interestObj.cost)}</p>
    `
    return newInterestArticle
}
const addVisited = (interestObj) => {
    let divContainer = document.querySelector("#visited-div")
    let newVisitedDiv = document.createElement("div")
    newVisitedDiv.setAttribute("id", `visitedDiv-${interestObj.id}`)
    newVisitedDiv.appendChild(visitedHTML(interestObj))
    divContainer.appendChild(newVisitedDiv)
}

const visitedHTML = (interestObj) => {
    let newVisitedArticle = document.createElement("article")
    newVisitedArticle.setAttribute("id", `visitedArticle-${interestObj.id}`)
    newVisitedArticle.innerHTML = `
        <h3 id="visitedName-${interestObj.id}"><strong>${interestObj.name}</strong></h3>
        <h4 id="visitedCountry-${interestObj.id}">Country: <br> ${interestObj.place.name}</h4>
        <p id="visitedDescription-${interestObj.id}">Description: <br> ${interestObj.description}</p>
        <p id="visitedCost-${interestObj.id}">Cost: $${String(interestObj.cost)}</p>
        <p id="visitedReview-${interestObj.id}"> Review: <br> ${interestObj.review}</p>
    `
    return newVisitedArticle
}

const createVisitedEl = () => {
    let visitedSection = document.createElement("section")
    visitedSection.setAttribute("id", "visited-section")
    visitedSection.innerHTML = "<h1>Places I've Visited</h1>"
    let addVisitedBtn = document.createElement("button")
    addVisitedBtn.setAttribute("id", "addVisited-btn")
    addVisitedBtn.innerHTML = "Add Visited Place"
    addVisitedEvent(addVisitedBtn)
    let visitedDiv = document.createElement("div")
    visitedDiv.setAttribute("id", "visited-div")
    visitedSection.appendChild(addVisitedBtn)
    visitedSection.appendChild(visitedDiv)
    return visitedSection
}

const addElementsToDOM = (el1, el2) => {
    let domContainer = document.querySelector("#container")
    domContainer.appendChild(el1)
    domContainer.appendChild(el2)
    API.getData("interests", "?_expand=place").then( data => {
        data.forEach ( newData => {
            if (newData.review === "") {
                addInterests(newData)
            } else {
                addVisited(newData)
            }
        })
    })
}
export {addElementsToDOM, createVisitedEl, createInterestEl}