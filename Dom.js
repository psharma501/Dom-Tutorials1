function test(){
  var uname = document.getElementById("name").value;
  var uemail = document.getElementById("email").value;
  

  var stname = localStorage.setItem("uname",uname);
  var stemail = localStorage.setItem("uemail",uemail);
}