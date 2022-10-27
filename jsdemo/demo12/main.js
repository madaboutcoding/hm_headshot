//Anonymous functions 
function Product(pid,pname,unitPrice){
    this.pid=pid;
    this.pname=pname;
    this.unitPrice=unitPrice;
    this.display=function(){
        return "Pid= "+this.pid+" Pname="+this.pname+" UnitPrice="+this.unitPrice;
    }
}
const p1=new Product(1001,"Pepsi 500 ml",30.0);
console.log(p1.display());
// Create the Book constructor and its object as shown for product - 5 min
function Book(bookId,bookName,authorName){
    this.bookId=bookId;
    this.bookName=bookName;
    this.authorName=authorName;
    this.display=function(){
        return "Book Id: "+this.bookId+
               "Book Name: "+this.bookName+
               "Author Name: "+this.authorName;
    }
}
const book1=new Book(1001,"Wings of Fire","Dr. A. P. J. Kalam");
console.log(book1.display());
