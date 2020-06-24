function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formContent = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:3000/data',{
        method: "POST",
        credentials: "same-origin",
        headers: {
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin' : "http://localhost:3000/"
        },
        body: JSON.stringify({test: formContent})
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('polarity').innerHTML=res.polarity
        document.getElementById('subjectivity').innerHTML=res.subjectivity
        document.getElementById('text').innerHTML = res.text
        document.getElementById('polarity-confidence').innerHTML=res.polarity_confidence
        document.getElementById('subjectivity-confidence').innerHTML=res.subjectivity_confidence
    })
}
export { handleSubmit }