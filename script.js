const form = document.getElementById("studentForm");
 const table = document.getElementById("studentTable");

form.addEventListener("submit", function(e){

 e.preventDefault();

 let firstName = document.getElementById("firstName").value.trim();
 let lastName = document.getElementById("lastName").value.trim();
 let studentId = document.getElementById("studentId").value.trim();
 let email = document.getElementById("email").value.trim();
 let credit = document.getElementById("credit").value;
 let department = document.getElementById("department").value;

 if(firstName==""){
 alert("Enter First Name");
 return;
 }

 if(lastName==""){
 alert("Enter Last Name");
 return;
 }

 if(studentId.indexOf("-")==-1){
 alert("Student ID must contain '-'");
 return;
 }

 if(email.indexOf("@student.aiub.edu")==-1){
 alert("Invalid AIUB Email");
 return;
 }

 if(credit=="" || credit<0 || credit>=148){
 alert("Credit must be between 0 and 147");
 return;
 }

 if(department==""){
 alert("Select Department");
 return;
 }

 let row = table.insertRow(-1);

 row.insertCell(0).innerHTML = firstName;
 row.insertCell(1).innerHTML = lastName;
 row.insertCell(2).innerHTML = studentId;
 row.insertCell(3).innerHTML = email;
 row.insertCell(4).innerHTML = credit;
 row.insertCell(5).innerHTML = department;

 alert("Registration Successful");

 form.reset();

});