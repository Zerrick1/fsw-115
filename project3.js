axios.get("https://rickandmortyapi.com/api/character")
.then(res => console.log(res , res.data.results[0].name))
.catch(err => console.log(err))

async function getData(){
    const data = await axios.get("https://rickandmortyapi.com/api/character")
    console.log(data)
    const cartoon = data.data.results;
    const pending = []
    for (i = 0; i < cartoon.length; i++){
        pending.push(cartoon[i]);
        const h4 = document.createElement('h4');
        h4.style.color = "HSL(114, 96.1%, 59.6%)"
        h4.style.wordSpacing = "15px"
        h4.textContent = "Name: "  + cartoon[i].name + "\n"  + "Created: " + cartoon[i].created + "\n"   + "Gender: " + cartoon[i].gender + "ID" + cartoon[i].id + "Image: " + cartoon[i].image + "Location: " + cartoon[i].location.name + "Origin: " + cartoon[i].origin.name + "Species: " + cartoon[i].species + "Status: " + cartoon[i].status  + "URL:" + cartoon[i].url;
        document.body.appendChild(h4);
    }

    const cartoon2 = await axios.get(data.data.info.next)
    const pending2 = []
    const cartoonData2 = cartoon2.data.results;
    for (i = 0; i < cartoonData2.length; i++){
        pending2.push(cartoonData2[i]);
        const h42 = document.createElement('h4');
        h42.style.color = "HSL(114, 96.1%, 59.6%)"
        h42.style.wordSpacing = "15px"
        h42.textContent = "Name: "  + cartoonData2[i].name + "\n"  + "Created: " + cartoonData2[i].created + "\n"   + "Gender: " + cartoonData2[i].gender + "ID" + cartoonData2[i].id + "Image: " + cartoonData2[i].image + "Location: " + cartoonData2[i].location.name + "Origin: " + cartoonData2[i].origin.name + "Species: " + cartoonData2[i].species + "Status: " + cartoonData2[i].status  + "URL:" + cartoonData2[i].url;
        document.body.appendChild(h42);
    }

    const cartoon3 = await axios.get(cartoon2.data.info.next)
    const pending3 = []
    const cartoonData3 = cartoon3.data.results;
    for (i = 0; i < cartoonData3.length; i++){
        pending3.push(cartoonData3[i]);
        const h43 = document.createElement('h4');
        h43.style.color = "HSL(114, 96.1%, 59.6%)"
        h43.style.wordSpacing = "15px"
        h43.textContent = "Name: "  + cartoonData3[i].name + "\n"  + "Created: " + cartoonData3[i].created + "\n"   + "Gender: " + cartoonData3[i].gender + "ID" + cartoonData3[i].id + "Image: " + cartoonData3[i].image + "Location: " + cartoonData3[i].location.name + "Origin: " + cartoonData3[i].origin.name + "Species: " + cartoonData3[i].species + "Status: " + cartoonData3[i].status  + "URL:" + cartoonData3[i].url;
        document.body.appendChild(h43);
    }

    Promise.all(pending, pending2, pending3)
    .then(res => console.log(data))
    .catch(err => console.log(data))
} 
getData();

