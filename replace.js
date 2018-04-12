var students = ['dani','karan','prabu','abu','mohan','maddi'];

var ul = document.createElement('ul');
ul.setAttribute('id','items');

document.getElementById('students').appendChild(ul);

for(i=0;i<students.length;i++){

    var li = document.createElement('li');
    var count = i+1;
    var span = document.createElement('span');
    span.setAttribute('class','count');
    var t = document.createTextNode(count);
    span.appendChild(t);
    //console.log('span',span);
    var tt = document.createTextNode(students[i]);
    li.appendChild(span);
    li.appendChild(tt);
    ul.appendChild(li);
}

// Basic Replace code
// function replace() {

//     var li = document.createElement('li');
//     var replace_name = document.createTextNode('Katara');
//     li.appendChild(replace_name);

//     var item = document.getElementById('items');
//     item.replaceChild(li,items.childNodes[1]); 
// }

/*
*replaceChild Method
* replace name by index number
*/
function replace() {
    var nwName = document.getElementById('newname').value;
    var number = document.getElementById('index').value;
    var index = number - 1;
    console.log('name',nwName);
    console.log("index",index);

    var span = document.createElement('span');
    span.setAttribute('class','count');
    var t = document.createTextNode(number);
    span.appendChild(t);

    var li = document.createElement("li");
    var text = document.createTextNode(nwName);
    li.appendChild(span);
    li.appendChild(text);

    var item = document.getElementById("items");
    item.replaceChild(li, item.childNodes[index]);
}

/*
*replaceChild Method
* replace name by New Name
*/
function replaceName() {
    var oldName = document.getElementsByName("oldname")[0].value;
    var newName = document.getElementsByName("newname")[0].value;
    console.log('name',oldName,newName);

    var index = students.indexOf(oldName);
    var count = index+1;
    students[index] = newName;

    var li = document.createElement('li');
    var newtext = document.createTextNode(newName);
    var span = document.createElement('span');
    span.setAttribute('class','count');
    var newIndex = document.createTextNode(count);
    span.appendChild(newIndex);
    li.appendChild(span);
    li.appendChild(newtext);

    var newList = document.getElementById('items');
    newList.replaceChild(li,newList.childNodes[index]);
}