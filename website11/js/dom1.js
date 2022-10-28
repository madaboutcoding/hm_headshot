const bookList=[];
const ol_bookList=document.getElementById("bookList");
function addBook(){
    const bookName=document.getElementById("bookName").value ;
    if(bookName!=" "||bookName.length>0){
        bookList.push(bookName);
    }
    console.log(bookList);
    const li=document.createElement("li");
    li.innerText=bookName;
    ol_bookList.append(li);   
}

function removeBooks(){
    ol_bookList.remove();
}