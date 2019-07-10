import {API} from "../api.js"
// Name of the point of interest
// Description of the point of interest
// Cost of visiting the point of interest
// Dropdown to pick which place the point of interest is located in
const interestForm = () => {
    let interestFormDiv = document.createElement("div")
    interestFormDiv.setAttribute("id", "interestForm-Div")
    interestFormDiv.innerHTML = `
        <form>
        <fieldset>
            <legend for="interest-name-input">Name of Interest</legend>
            <input type="text" id="interest-name-input" placeholder="Interest Name">
        </fieldset>

        <fieldset>
            <legend for="interest-description-input">description of Interest</legend>
            <textarea type="text" id="interest-description-input" placeholder="Interest description"></textarea>
        </fieldset>

        <fieldset>
            <legend for="interest-cost-input">Cost of Interest</legend>
            <input type="text" id="interest-cost-input" placeholder="Interest Cost">
        </fieldset>

        <fieldset>
            <select id="inerest-country-input">
                <option value="">Country...</option>
                <option value="1">Italy</option>
                <option value="2">Switzerland</option>
                <option value="3">France</option>
            </select>
        </fieldset>
        </form>
    `
    let submitInterestFormBtn = document.createElement("button")
    submitInterestFormBtn.setAttribute("id", "submitInterestForm-btn")
    submitInterestFormBtn.innerHTML = "Create Interest"
    submitInterestFormEvent(submitInterestFormBtn)
    interestFormDiv.appendChild(submitInterestFormBtn)
    return interestFormDiv
}
const addInterestFormToDOM = () => {
    let domContainer = document.querySelector("#container")
    domContainer.innerHTML = ""
    domContainer.appendChild(interestForm())
}
const createInterestObj = (placeId, name, description, cost, review) => {
    let newObj = {
        placeId,
        name,
        description,
        cost,
        review
    }
    return newObj

}
const submitInterestFormEvent = btn => {
    btn.addEventListener("click", () => {
        let placeId = document.querySelector("#interest-country-input")
        let name = document.querySelector("#interest-name-input")
        let description = document.querySelector("#interest-description-input")
        let cost = document.querySelector("#interest-cost-input")
        let review = document.querySelector("#interest-review-input")
        let interestObj = createInterestObj(placeId, name, description, cost, review)
        API.addData("interests", interestObj).then(data =>{
            data.forEach( interestData => {
                console.log(interestData);
            });
        })
    })
}

const addInterestEvent = btn => {
    btn.addEventListener("click", () => {
        addInterestFormToDOM()
    })
}

export {addInterestEvent}