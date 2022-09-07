const bURL = "http://localhost:9000/api/favdino/"

export const getFavDinos = () => {
    return (fetch(bURL)).then((res) => res.json())

};

export const postFavDino = (payload) => {
    return fetch(bURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }

    }).then(res => res.json())


};

export const delFavDino=(id)=>{
    return fetch(bURL+id,{
    method:'DELETE'})

};

