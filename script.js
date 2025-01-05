//    <label for="Fname">First Name</label><br>
// <input type="text" id="first1 name="><br><br>
// <button type="button" onclick="submitbutton()">Submit</button>

function lable_create(labtagname, labattrname, labattrvalue, content) {
    var element = document.createElement(labtagname);
    element.setAttribute(labattrname, labattrvalue);
    element.innerHTML = content;
    return element;
}

function input_create(inptagname, inpattrname1, inpattrvalue1, inpattrname2, inpattrvalue2) {
    var input = document.createElement(inptagname);
    input.setAttribute(inpattrname1, inpattrvalue1);
    input.setAttribute(inpattrname2, inpattrvalue2);
    return input;
}

function button_create(buttagname,butattrname1,butattrvalur1,butattrname2, butattrvalur2,btrcontent){
    var button1 = document.createElement(buttagname);
    button1.setAttribute(butattrname1, butattrvalur1);
    button1.setAttribute(butattrname2, butattrvalur2);
    button1.innerHTML = btrcontent;
    return button1;
}

function line_break(){
    var linebr = document.createElement("br");
    return linebr;
}

function submitbutton(){
    var FName = document.getElementById("Fname").value;
    var MName = document.getElementById("Mname").value;
    var LName = document.getElementById("Lname").value;
    var mail = document.getElementById("email1").value;
    var pass = document.getElementById("pass1").value;
    console.log(FName);
    console.log(MName);
    console.log(LName);
    console.log(mail);
    console.log(pass);
}



var lab = lable_create("label","for","Fname","First Name");
var labbr1 = line_break();
var inp = input_create("input","type","text","id","Fname");
var inpbr1 = line_break();

var lab2 = lable_create("label","for","Mname","Middle Name");
var labbr2 = line_break();
var inp2 = input_create("input","type","text","id","Mname");
var inpbr2 = line_break();

var lab3 = lable_create("label","for","Lname","Last Name");
var labbr3 = line_break();
var inp3 = input_create("input","type","text","id","Lname");
var inpbr3 = line_break();

var lab4 = lable_create("label","for","email","Email");
var labbr4 = line_break();
var inp4 = input_create("input","type","email","id","email1");
var inpbr4 = line_break();

var lab5 = lable_create("label","for","pass1","Password");
var labbr5 = line_break();
var inp5 = input_create("input","type","password","id","pass1");
var inpbr5 = line_break();

//var submitfoo = submitbutton();

var but1 = button_create("button","type","button","onclick"," submitbutton()","Submit");

document.body.append(lab,labbr1,inp,inpbr1,lab2,labbr2,inp2,inpbr2,lab3,labbr3,inp3,inpbr3,lab4,labbr4,inp4,inpbr4,lab5,labbr5,inp5,inpbr5,but1);
