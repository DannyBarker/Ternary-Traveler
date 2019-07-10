
const delBtnEvent = (btn, obj) => {
    btn.addEventListener("click", () => {
        event.preventDefault()
        let elToRemove = document.getElementById(`interestArticle-${obj.id}`)
        let name = obj.name
        let btnToRemove = document.getElementById(`${obj.id}`)
        let btnId = event.target.id
        if (confirm(`Would you like to delete "${name}"?`)) {
            API.delData("interests", btnId).then(() => {
                elToRemove.remove()
                btnToRemove.remove()
                alert(`"${name}" has been removed!`)
            })
        } else {
            event.preventDefault()
        }
    })
}
const addEditEvent = (el, obj) => {
    el.addEventListener("dblclick", () => {
        if (document.getElementById(`interestArticle-${obj.id}`)) {
            removeEditEvent(el, obj)
            document.getElementById(`${obj.id}`).style.display = "none"
            let parentNode = document.getElementById(`interestArticle-${obj.id}`)
            let costInput = document.getElementById(`interestCost-${obj.id}`)
            let costEdit = document.createElement("input")
            costEdit.setAttribute("id", `costEditInt-${obj.id}`)
            costEdit.value = costInput.textContent
            parentNode.replaceChild(costEdit, costInput)
        } else {
            removeEditEvent(el, obj)
            document.getElementById(`${obj.id}`).style.display = "none"
            let parentNode = document.getElementById(`visitedArticle-${obj.id}`)
            let costInput = document.getElementById(`visitedCost-${obj.id}`)
            let costEdit = document.createElement("input")
            costEdit.setAttribute("id", `costEdit-${obj.id}`)
            costEdit.value = costInput.textContent
            let reviewInput = document.getElementById(`visitedReview-${obj.id}`)
            let reviewEdit = document.createElement("input")
            reviewEdit.setAttribute("id", `reviewEdit-${obj.id}`)
            reviewEdit.value = reviewInput.textContent
            parentNode.replaceChild(costEdit, costInput)
            parentNode.replaceChild(reviewEdit, reviewInput)
            console.log(obj.review);

        }
    })
}
const removeEditEvent = (el, obj) => {
    el.addEventListener("dblclick", () => {
        if (document.getElementById(`costEditInt-${obj.id}`)) {
            addEditEvent(el, obj)
            document.getElementById(`${obj.id}`).style.display = "block"
            let parentNode = document.getElementById(`visitedArticle-${obj.id}`)
            let costEdit = document.getElementById(`costEditInt-${obj.id}`)
            let interestCost = document.createElement("p")
            interestCost.setAttribute("id", `interestCost-${obj.id}`)
            interestCost.textContent = `${String(obj.cost)}`
            parentNode.replaceChild(interestCost, costEdit)
        } else {
            addEditEvent(el, obj)
            document.getElementById(`${obj.id}`).style.display = "block"
            let parentNode = document.getElementById(`visitedArticle-${obj.id}`)
            let costEdit = document.getElementById(`costEdit-${obj.id}`)
            let visitedCost = document.createElement("p")
            visitedCost.setAttribute("id", `visitedCost-${obj.id}`)
            visitedCost.textContent = `${String(obj.cost)}`
            let reviewEdit = document.getElementById(`reviewEdit-${obj.id}`)
            let visitedReview = document.createElement("p")
            visitedReview.setAttribute("id", `visitedReview-${obj.id}`)
            visitedReview.textContent = obj.review
            parentNode.replaceChild(visitedCost, costEdit)
            parentNode.replaceChild(visitedReview, reviewEdit)
        }

    })
}
export {delBtnEvent, addEditEvent}