document.addEventListener("DOMContentLoaded", main)

function main(event){
    submitData("helen", "email@email.com");


}


function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            'name': name,
            'email': email
        })
    }).then(response => response.json())
        .then(json => appendToDOM(json.id))
        .catch(error =>appendToDOM(error.message) )
}

function appendToDOM(thing){
    let pTag = document.createElement('p')
    pTag.textContent = thing
    document.body.appendChild(pTag)
}

// function idToScreen(json){
    
//     let pTag = document.createElement('p')
//     pTag.textContent = json.id
//     document.body.appendChild(pTag)
// }