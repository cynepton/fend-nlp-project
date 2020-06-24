function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")

    console.log(Client.checkForName(formText))
    {
        fetch('http://localhost:8081/data',{
            method: "POST",
            credentials: "same-origin",
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : "http://localhost:8081/"
            },
            body: JSON.stringify({test: formText})
        })
        .then(res => res.json())
        .then(function(res){
            document.getElementById('polarity').innerHTML=res.polarity
            document.getElementById('subjectivity').innerHTML=res.subjectivity
            document.getElementById('polarity-confidence').innerHTML=res.polarity_confidence
            document.getElementById('subjectivity-confidence').innerHTML=res.subjectivity_confidence
            document.getElementById('text').innerHTML = res.text
        })
    }
}

export { handleSubmit }
