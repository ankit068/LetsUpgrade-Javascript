window.onload = function () {
    let initialsuperheroes = [];
  
    if (localStorage.getItem("superheroes") == null) {
      localStorage.setItem("superheroes", JSON.stringify(initialsuperheroes));
    }
  };
  
  function display(superarray = undefined) {
    let tabledata = "";
    let superheroes;
    if (superarray == undefined) {
      superheroes = JSON.parse(localStorage.getItem("superheroes"));
    } else {
      superheroes = superarray;
    }
  
    superheroes.forEach(function (superhero, index) {
        let currentrow = `<tr>
        <td>${index + 1}</td>
        <td>${superhero.name}</td>
         <td>${superhero.source}</td>
         <td>${superhero.destination}</td>
         <td>${superhero.number}</td>
         <td>${superhero.capacity}</td>

        
        </tr>`;
  
      tabledata += currentrow;
    });
  
   
      document.getElementById("tdata").innerHTML = tabledata;
  }
  
  display();
  
  function addBus(e) {
    e.preventDefault();
    let superhero = {};
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let destination= document.getElementById("destination").value;
    let number = document.getElementById("number").value;
    let capacity = document.getElementById("capacity").value;
    superhero.name = name;
    superhero.source = source;
    superhero.destination = destination;
    superhero.number = number;
    superhero.capacity=capacity;
  
   
  
    let superheroes = JSON.parse(localStorage.getItem("superheroes"));
    superheroes.push(superhero);
    localStorage.setItem("superheroes", JSON.stringify(superheroes));
  
    display();
  
    document.getElementById("name").value = "";
    document.getElementById("source").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("number").value = "";
    document.getElementById("capacity").value = "";
  }
  
  function searchSource() {
    let searchValue = document.getElementById("searchname").value;
    let superheroes = JSON.parse(localStorage.getItem("superheroes"));
    let newdata = superheroes.filter(function (superhero) {
      return (
        superhero.source.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }
  
  function searchDestination() {
    let searchValue = document.getElementById("searchname1").value;
    let superheroes = JSON.parse(localStorage.getItem("superheroes"));
    let newdata = superheroes.filter(function (superhero) {
      return (
        superhero.destination.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }
  
  
  