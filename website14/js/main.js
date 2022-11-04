(function(){

//Model 
function Product(pid,pName,unitPrice,imageUrl,counter=0){
    this.pid=pid;
    this.pName=pName;
    this.unitPrice=unitPrice;
    this.imageUrl=imageUrl;
    this.counter=counter;
    this.incr=()=>{return ++this.counter;};
    this.decr=()=>{return --this.counter;};
    }
//list of Model
const productList=[
    new Product(1001,"Pepsi",30.0,"./images/pepsi.jfif"),
    new Product(1002,"Limca",30.0,"./images/limca.jfif"),
    new Product(1003,"ThumsUp",30.0,"./images/thumsup.jfif"),
]
// ##################### Controller of the page ######################################
function decrement(event){
    const btn_id=event.target.id;
    const pid=btn_id.substring(7,11);
    const p=productList.find(p=>p.pid==pid);
    const h3_counter=document.getElementById("h3counter"+pid);
    h3_counter.innerText=p.decr();
}
function increment(event){
    const btn_id=event.target.id;
    const pid=btn_id.substring(7,11);
    const p=productList.find(p=>p.pid==pid);
    const h3_counter=document.getElementById("h3counter"+pid);
    h3_counter.innerText=p.incr();
}
// ##################### View of the page ######################################
// get the root for dynamic view creation 
const root=document.getElementById("root");
for(p of productList){
    const div_p=document.createElement("div");
         div_p.id="divp"+p.pid;
         div_p.classList.add("product");
        //productName
        const h3_pName=document.createElement("h3");
              h3_pName.innerText=p.pName;
              h3_pName.id=p.pid;
        //unitPrice
        const h3_price=document.createElement("h3");
              h3_price.innerText=p.unitPrice;
        //imageUrl
        const img_url=document.createElement("img");
              img_url.src=p.imageUrl;              
        //decrButton      
        const decr_Btn=document.createElement("button");
              decr_Btn.id="decrBtn"+p.pid;
              decr_Btn.innerText="-";
              decr_Btn.onclick=decrement;

        //counter
        const h3_counter=document.createElement("span");
              h3_counter.innerText=p.counter;
              h3_counter.id="h3counter"+p.pid;
        //incrButton        
        const incr_Btn=document.createElement("button");
              incr_Btn.id="incrBtn"+p.pid;   
              incr_Btn.innerText="+";
              incr_Btn.onclick=increment;
              
        div_p.append(img_url);  
        div_p.append(h3_pName);
        div_p.append(h3_price);
        div_p.append(decr_Btn);
        div_p.append(h3_counter);
        div_p.append(incr_Btn);
        root.append(div_p);      
}

})();

