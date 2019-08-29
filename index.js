// Add your code here

function submitData(name,email){
    let configObject = {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            'name': name,
            'email': email

        })
    }
    return fetch('http://localhost:3000/users',configObject)
            .then(response => response.json())
            .then(json => appendToDOM(json.id))
            .catch(response => appendToDOM(response))
}

function appendToDOM(string){
    console.log(string)
    let paragraph =  document.createElement("p")
    paragraph.textContent = string
   document.body.appendChild(paragraph)
}