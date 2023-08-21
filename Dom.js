let form = document.querySelector("form");
let main = document.querySelector(".main");
form.addEventListener("submit",(event)=>{
  let name = event.target.name.value;
  let email = event.target.email.value;

  var userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  userData.push({
    'name':name,
    'email':email
  })

  localStorage.setItem("userDetails",JSON.stringify(userData))
  displayData();

  event.preventDefault();
})

let displayData=() =>{
  var userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  let finalData = '';
  userData.forEach((element,i) => {
    finalData+=`<div class = "items">
    <span>items</span>
    <h5>Name</h5>
    <div>${element.name}</div>

    <h5>Email</h5>
    <div>${element.email}</div>
  </div>`
  });

  main.innerHTML = finalData;
}