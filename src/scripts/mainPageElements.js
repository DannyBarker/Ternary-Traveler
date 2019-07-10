import {addInterestEvent} from "./interests/eventListeners.js"
import {addVisitedEvent} from "./visited/eventListeners.js"

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
}
export {addElementsToDOM, createVisitedEl, createInterestEl}