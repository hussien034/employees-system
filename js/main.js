var theName=document.getElementById("theName");
var YourEmail=document.getElementById("YourEmail");
var YourSalery=document.getElementById("YourSalery");
var theGender=document.getElementById("theGender");
var theDsignation=document.getElementById("theDsignation");
var theCity=document.getElementById("theCity");
var buttonSub=document.getElementById("buttonSub");
var theFirstContent=document.getElementById("main-content1");
var Alerts=document.getElementById("Alerts");
var theEmployes=[];
if(JSON.parse(localStorage.getItem("emploee"))!=null)
{
    theEmployes=JSON.parse(localStorage.getItem("emploee"));
    displayData();
}
function addEmployes(){
    if(validationInput()){
        var employes={
        name: theName.value,
        email: YourEmail.value,
        salery:YourSalery.value,
        gender: theGender.value,
        dsignation: theDsignation.value,
        city: theCity.value,
    };
    theEmployes.push(employes);
    localStorage.setItem("emploee",JSON.stringify(theEmployes))
    clearData();
    displayData();    
    
}
else{
    window.alert("All inputs are required");
    
    buttonSub.disabled=false;
    theFirstContent.style.display=="none";
}

    }
 
function validationInput() {
    if ( theName.value != ""&& YourEmail.value!="" &&YourSalery.value!=""  && theGender.value != "" && theDsignation.value != "" && theCity.value != "") {
        return true;
    }
    else 
    {
        return false;
    }
}
function clearData(){
    theName.value="";
    YourEmail.value="";
    YourSalery.value="";
    theGender.value="";
    theDsignation.value="";
    theCity.value="";
}

function displayData(){
    var cartona='';
    for(var i=0;i<theEmployes.length;i++){
        cartona+=` <tr>
        <td>${i+1}</td>
        <td>${theEmployes[i].name}</td>
        <td>${theEmployes[i].email}</td>
        <td>${theEmployes[i].salery}</td>
        <td>${theEmployes[i].gender}</td>
        <td>${theEmployes[i].dsignation}</td>
        <td>${theEmployes[i].city}</td>
        <td><button class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
        </tr>`
    }
    document.getElementById("tableBody").innerHTML=cartona;
}
function search(val){
   var cartona='';
    for(var i=0; i<theEmployes.length;i++)
    if(theEmployes[i].name.toLowerCase().includes(val.toLowerCase())){
         cartona+=`
        <tr>
        <td>${i+1}</td>
        <td>${theEmployes[i].name}</td>
        <td>${theEmployes[i].email}</td>
        <td>${theEmployes[i].salery}</td>
        <td>${theEmployes[i].gender}</td>
        <td>${theEmployes[i].dsignation}</td>
        <td>${theEmployes[i].city}</td>
        <td><button class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
        </tr>
        `;
    }
    {
       
    }
    document.getElementById("trs").innerHTML=cartona;
}
function deleteData(index){
    theEmployes.splice(index,1);
    displayData();
    localStorage.setItem("emploee",JSON.stringify(theEmployes))
}
