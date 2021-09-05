var addName = document.getElementById('addName')
const stuff = document.getElementById('stuff');
var put1 = document.getElementById('put1')
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
   console.log(data);
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
todoForm.addEventListener('submit', e => {
  e.preventDefault();
   axios.get("http://api.bryanuniversity.edu/ZerrickPerry/list/")
   .then(response => {
  
    const newTodo = {
      name: todoForm.name.value,
      price: todoForm.price.value,
      description: todoForm.description.value
    }
    axios.post("http://api.bryanuniversity.edu/ZerrickPerry/list/", newTodo)
    .then(res => console.log(res))
    .catch(err => console.log(err)) 
    
    
     newData();
   })
   .catch(err => console.log(err))
})

