
window.addEventListener("load", () => {
    axios.get('http://api.bryanuniversity.edu/ZerrickPerry/list')
    .then(response => {
        for(let i =0; i < response.data.length; i++){
            console.log(response);
            console.log(response.data);
            var element = document.createElement("h1")
            element.textContent = response.data[i].name + ' ' + response.data[i].description + ' Price: ' + response.data[i].price ;
            if(response.data[i].isComplete === true){
                element.style.textDecoration = 'line-through'
            }
            document.body.appendChild(element)
        }
    })
    .catch(error => console.log(error))
})