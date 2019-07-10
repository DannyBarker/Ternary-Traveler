let API = {
    getData: (entity, id) => {
        if (entity && id) {
            return fetch(`http://localhost:8088/${entity}/${id}`)
            .then(data => data.json())
        } else {
            return fetch(`http://localhost:8088/${entity}`)
            .then(data => data.json())
        }
    },
    addData: (entity, obj) => {
        return fetch(`http://localhost:8088/${entity}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        .then(data => data.json())
    }
}

export {API}