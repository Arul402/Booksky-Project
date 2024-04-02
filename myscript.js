var outlayer=document.querySelector(".bc")
var innerform=document.querySelector(".bc2")
var addbook=document.getElementById("btn")
var res=document.querySelector(".container")
addbook.addEventListener("click",function(){
    outlayer.style.display="block"
    innerform.style.display="block"
})
// Access the values from form
var title=document.getElementById("book-title")
var authname=document.getElementById("auth-name")
var des=document.getElementById("desc")
var add1=document.getElementById("ad1")
var close=document.getElementById("clo1")
// To Stop the Form to Sumbit and refresh
add1.addEventListener("click",function(event){
    event.preventDefault()
    //fetching the values
    var booktitle=title.value
    var bookauth=authname.value
    var bookdesc=des.value
    console.log(booktitle)
    console.log(bookauth)
    console.log(bookdesc)
    // check whether the input values are Null or Not
    if(booktitle==''){
        alert("Enter the Book Title...")
    }else if(bookauth==''){
        alert("Enter the Author Name...")
    }else if(bookdesc==''){
        alert("Enter the Description...")
    }else{

    var div=document.createElement("div")
    div.setAttribute("class","inner-container")
    div.innerHTML=`<h2>${booktitle}</h2><h3>${bookauth}</h3><p>${bookdesc}</p><button onclick="del(event)">Delete</button>`;  //`` --> it acts like template litrel  ${} --> to fetch value
    res.append(div)
    alert("Book Added !!!")
    outlayer.style.display="none"
    innerform.style.display="none"
    }
})
close.addEventListener("click",function(event){
    event.preventDefault()
    outlayer.style.display="none"
    innerform.style.display="none"
})
function del(event){
    event.target.parentElement.remove()
    alert("Book Deleted !!!")
}
