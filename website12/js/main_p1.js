//on load we should render a product using js logic
function Product(pid,pname,unitPrice,stockQuantity,img){
    this.pid=pid;
    this.pname=pname;
    this.unitPrice=unitPrice;
    this.stockQuantity=stockQuantity;
    this.img=img;
}

const p1=new Product(1001,"Pepsi 500ml",30.0,100,"images/pepsi.jfif");
let counter=0;
const root=document.getElementById("root");

function onLoad(){
    const div_p1=document.createElement("div");
    const pre_p1=document.createElement("pre")
    
    const img_p1=document.createElement("img");
    img_p1.src=p1.img;
    
    const span_pname_p1=document.createElement("span");
    span_pname_p1.innerText=p1.pname;

    const btn_dec_p1=document.createElement("button");
    btn_dec_p1.innerText="-";
    btn_dec_p1.onclick=onDec;

    const span_quantity_p1=document.createElement("span");
    span_quantity_p1.innerText=counter;
    span_quantity_p1.id=p1.pid;
    
    const btn_inc_p1=document.createElement("button");
    btn_inc_p1.innerText="+";
    btn_inc_p1.onclick=onIncr;


    pre_p1.append(img_p1);
    pre_p1.append(span_pname_p1);
    pre_p1.append(btn_dec_p1);
    pre_p1.append(span_quantity_p1)
    pre_p1.append(btn_inc_p1);

    div_p1.append(pre_p1);
    root.append(div_p1);

}

function onDec(){
    alert("onDec Called");
    const span_quantity_p1=document.getElementById("1001");
    counter=counter-1;
    span_quantity_p1.innerText=counter;

}
function onIncr(){
    alert("onInc Called");    
    const span_p1=document.getElementById("1001");
    counter=counter+1;
    span_p1.innerText=counter;
}