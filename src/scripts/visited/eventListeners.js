import {API} from "../api.js"
const addVisitedEvent = ( btn) => {
    btn.addEventListener("click", () => {
        API.getData("interests").then(data => {
            data.forEach(visitedData => {
                if (visitedData.review) {
                    console.log(visitedData.review);
                }
            });
        })
    })
}

export {addVisitedEvent}