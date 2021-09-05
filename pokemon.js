const xhr = new XMLHttpRequest();
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/", true);
xhr.send();

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200){
        let data = JSON.parse(xhr.responseText);
        showData(data);
        console.log(data.results);
        console.log(xhr.responseText);
    } else if (xhr.readyState === 4 && xhr.status !== 200){
        console.log(xhr.responseText);
    }
}


function showData(data){
  for(i=0; i < data.results.length; i++){
      var pokemon = document.createElement('h1')
      pokemon.textContent = 'Name: ' + data.results[i].name + ' ' + 'URL: ' + data.results[i].url;
      document.body.appendChild(pokemon)
  }
}
