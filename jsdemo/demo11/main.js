
//Declaring a function within the Object constructor
function Product(pid,pname,unitPrice){
    this.pid=pid;
    this.pname=pname;
    this.unitPrice=unitPrice;
    this.display=printProductDetails;

    function printProductDetails(){
        return "Pid= "+this.pid+" Pname="+this.pname+" UnitPrice="+this.unitPrice;
    }
}

const p1=new Product(1001,"Pepsi 500ml",30.0);

console.log(p1.display());

// console.log(p1.printProductDetails());

// 1. Create Book constructor
// 2. bookid,bookname,authorname
// 3. display=printBookDetails
// 4. create book1 object 
// 5. call the book1.display();
function Book(bookId,bookName,authorName){
    this.bookId=bookId;
    this.bookName=bookName;
    this.authorName=authorName;
    this.display=printBookDetails;

    function printBookDetails(){
        return "Book Id: "+this.bookId+
               "Book Name: "+this.bookName+
               "Author Name: "+this.authorName;
    }

}

const book1=new Book(1001,"Wings of Fire","Dr. A. P. J. Kalam");
console.log(book1.display());

const book1=new Book(1001,"Wings of Fire","Dr. A. P. J. Kalam");
console.log(book1.display());




