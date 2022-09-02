const bURL = "http://localhost:9000/api/dinos/"

export const getDinos = () => {
    return (fetch(bURL)).then((res) => res.json())

};