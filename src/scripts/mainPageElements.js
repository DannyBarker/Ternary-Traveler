import {addInterestEvent} from "./interests/interestEventListeners.js/index.js"
import {addVisitedEvent} from "./visited/visitedEventListeners.js/index.js"
import {delBtnEvent, addEditEvent} from "./mainEventListeners.js/index.js"
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
    let interestForm = document.createElement("form")
    let delInterestBtn = document.createElement("button")
    delInterestBtn.setAttribute("id", `${interestObj.id}`)
    delInterestBtn.innerHTML = "Delete"
    delBtnEvent(delInterestBtn, interestObj)
    interestForm.appendChild(delInterestBtn)
    newInterestDiv.appendChild(createInterestHTML(interestObj))
    newInterestDiv.appendChild(interestForm)
    divContainer.appendChild(newInterestDiv)
}

const createInterestHTML = (interestObj) => {
    let newInterestArticle = document.createElement("article")
    newInterestArticle.setAttribute("id", `interestArticle-${interestObj.id}`)
    newInterestArticle.innerHTML = `
        <h3 id="interestName-${interestObj.id}"><strong>${interestObj.name}</strong></h3>
        <h4 id="interestCountry-${interestObj.id}">Country: <br> ${interestObj.place.name}</h4>
        <p id="interestDescription-${interestObj.id}">Description: <br> ${interestObj.description}</p>
        <p>Cost:</p>
        <p id="interestCost-${interestObj.id}">${String(interestObj.cost)}</p>
    `
    addEditEvent(newInterestArticle, interestObj)
    return newInterestArticle
}


const addVisited = (interestObj) => {
    let divContainer = document.querySelector("#visited-div")
    let newVisitedDiv = document.createElement("div")
    newVisitedDiv.setAttribute("id", `visitedDiv-${interestObj.id}`)
    let delForm = document.createElement("form")
    let delVisitedBtn = document.createElement("button")
    delVisitedBtn.setAttribute("id", `${interestObj.id}`)
    delVisitedBtn.innerHTML = "Delete"
    delBtnEvent(delVisitedBtn, interestObj)
    delForm.appendChild(delVisitedBtn)
    newVisitedDiv.appendChild(visitedHTML(interestObj))
    newVisitedDiv.appendChild(delForm)
    divContainer.appendChild(newVisitedDiv)
}


const visitedHTML = (interestObj) => {
    let newVisitedArticle = document.createElement("article")
    newVisitedArticle.setAttribute("id", `visitedArticle-${interestObj.id}`)
    newVisitedArticle.innerHTML = `
        <h3 id="visitedName-${interestObj.id}"><strong>${interestObj.name}</strong></h3>
        <h4 id="visitedCountry-${interestObj.id}">Country: <br> ${interestObj.place.name}</h4>
        <p id="visitedDescription-${interestObj.id}">Description: <br> ${interestObj.description}</p>
        <p>Cost: </p>
        <p id="visitedCost-${interestObj.id}">${String(interestObj.cost)}</p>
        <p> Review:</p>
        <p id="visitedReview-${interestObj.id}">${interestObj.review}</p>
    `
    addEditEvent(newVisitedArticle, interestObj)
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