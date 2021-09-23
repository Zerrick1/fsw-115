var addName = document.getElementById('addName')
const stuff = document.getElementById('stuff');
var put2 = document.getElementById('put2')
var put3 = document.getElementById('put3')
function getData() {
  axios.get("http://api.bryanuniversity.edu/ZerrickPerry/list/")
    .then(response => newData(response.data))
    .catch(error => console.log(error))
}




getData();

function clearData() {
  while (stuff.firstChild) {
    stuff.removeChild(stuff.firstChild)
    put2.value = ""
    put2.style.placeholder = "Price"
    put3.value = ""
    put3.style.placeholder = "Description"

  }
}


function newData(data) {
  clearData()
  for (let i = 0; i < data.length; i++) {

    let completed = data[i].isComplete;
    console.log('Completed: ', completed)
    let id = data[i]._id;
    const h1 = document.createElement('h1')
    h1.textContent = "Title:" + data[i].name + " Price: " + data[i].price + " Description: " + data[i].description ;
    var chkBox = document.createElement("INPUT")
    chkBox.setAttribute("type", "checkbox")
    stuff.appendChild(h1)
    stuff.appendChild(chkBox)
    chkBox.checked = data[i].isComplete;
    chkBox.onclick = function () {


      axios.put("http://api.bryanuniversity.edu/ZerrickPerry/list/" + data[i]._id, { "isComplete": !completed })
        .then(response => {
          getData()
        })
        .catch(error => console.log(error))
      stuff.appendChild(chkBox);
    }
    var span = document.createElement('span');
    span.innerHTML = "completed"
    stuff.appendChild(span)
    var x = document.createElement('button');
  
    x.innerHTML = "DELETE"

    stuff.appendChild(x)

    
    x.onclick = () => {


      axios.delete("http://api.bryanuniversity.edu/ZerrickPerry/list/" + id)
        .then(response => {
          getData()
        })
        .catch(error => console.log(error))
    }

    if (data[i].isComplete === true) {
      h1.style.textDecoration = 'line-through'

    }


  }

}



const todoForm = document.todoForm;
var post = document.getElementById('post')
post.addEventListener('click', e => {
  e.preventDefault();
   axios.get("https://rickandmortyapi.com/api/character")
   .then(response => {
     console.log(response.data.results[0].name)
    const newTodo2 = {
      name: response.data.results[0].name,
      price: todoForm.price.value,
      description: todoForm.description.value
    }
    const newTodo3 = {
      name: response.data.results[1].name,
      price: todoForm.price.value,
      description: todoForm.description.value
    }
    const newTodo4 = {
      name: response.data.results[2].name,
      price: todoForm.price.value,
      description: todoForm.description.value
    }
    const newTodo5 = {
      name: response.data.results[3].name,
      price: todoForm.price.value,
      description: todoForm.description.value
    }
    const newTodo6 = {
      name: response.data.results[4].name,
      price: todoForm.price.value,
      description: todoForm.description.value
    }
    window.location.reload();
  
     if(addName.value === "Rick Sanchez"){
       axios.post("http://api.bryanuniversity.edu/ZerrickPerry/list/", newTodo2)
     }
     if(addName.value === "Morty Smith"){
       axios.post("http://api.bryanuniversity.edu/ZerrickPerry/list/", newTodo3)
     }
     if(addName.value === "Summer Smith"){
       axios.post("http://api.bryanuniversity.edu/ZerrickPerry/list/", newTodo4)
     }
     if(addName.value === "Beth Smith"){
       axios.post("http://api.bryanuniversity.edu/ZerrickPerry/list/", newTodo5)
     }
     if(addName.value === "Jerry Smith"){
       axios.post("http://api.bryanuniversity.edu/ZerrickPerry/list/", newTodo6)
     }
     newData();
   })
   .catch(err => console.log(err))
  console.log('inside event listener')
})

