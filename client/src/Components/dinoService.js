const bURL = "http://localhost:9000/api/dinos/"

export const getDinos = () => {
    return (fetch(bURL)).then((res) => res.json())

};

export const updateDino = (id, dinoToUpdate) => {
    return (fetch(bURL + id, {
        method: 'PUT',
        body: JSON.stringify(dinoToUpdate),
        headers: { 'Content-Type': 'application/json' }

    }).then(res => res.json()))

};

