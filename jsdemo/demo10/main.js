//without creating an object
const pid=1001;
const pname="Pepsi 500ml";
const unitprice=30.00;

console.log("Product Id: "+pid);
console.log("Product name"+pname);
console.log("Unit Price "+unitprice);

//Object-> Single Unit to present the different attributes of a Thing 
// Object-> identity,state,behavior

// Way 1=> Create Object by using function Object()
console.log("using new Object()");
const product1=new Object();
product1.pid=1001;
product1.pname="Pepsi 500ml";
product1.unitprice=30.00;
console.log(product1);

// Print the details of a book 
//    bookname: Heal your self
//    author : Louise Hey
//    publisher : Hey house 

const book1=new Object();
book1.bookdId="B001";
book1.book_name="Heal your self";
book1.authorName="Louise Hey";
book1.publisher="Hey House";
console.log(book1);

// Way 1=> Create Object by using function Object()
console.log("using constructor logic");

function Product(pid,pname,unitPrice){
    this.pid=pid;
    this.pname=pname;
    this.unitPrice=unitPrice;
}

const product2=new Product(1002,"Maaza 500ml",30.00);
console.log(product2);

function Book(bookId,bookName,authorName,publisher){
    this.bookId=bookId;
    this.bookName=bookName;
    this.authorName=authorName;
    this.publisher=publisher;
}
const book2=new Book("B002","Monk Who Sold His Ferrari","Robin Sharma","Sharma");
console.log(book2);
