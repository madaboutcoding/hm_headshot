$(function () {
    // Make a call to 'http://localhost:3000/api/products'
    const basicUrl = 'http://localhost:3000/api/products';
    let products=null;
    if (typeof (Storage) !== undefined) {
        if(localStorage.getItem("products")===null){
            $.ajax({
                url: basicUrl,
                success: (data) => {
                    console.log("Data= " + data);
                    localStorage.setItem("products",JSON.stringify(data))
                }
            })
        }else{
        products=localStorage.getItem("products");
        // console.log(JSON.parse(products));
        if( products!==null){
            // console.log(products);
            const table =$("<table></table>");
            const tr=$("<tr></tr>");
            const th_pid=$("<th>PID</th>")
            const th_pname=$("<th>PName</th>")
            const th_unitPrice=$("<th>UnitPrice</th>")
            tr.append(th_pid,th_pname,th_unitPrice)
            table.append(tr);
            // for(let i=0; i<=products.length;i++){
            //     console.log(products[i]);
            // }
            products.forEach(product => {
                const td_pid=$("<td></td>").text(product.pid);
                const td_pname=$("<td></td>").text(product.pname);
                const td_unitPrice=$("<td></td>").text(product.unitPrice);
                const td_edit=$("<td></td>").html("<button id='ed_"+product.pid+"' >Edit</button>");
                const td_delete=$("<td></td>").html("<button id='del_"+product.pid+"'>Delete</button>");
                const tr=$("<tr></tr>").append(td_pid,td_pname,td_unitPrice,td_edit,td_delete);
                table.append(tr);
            });
            $("#root").append(table);
            
        }
        
        }
        
    } else {
        alert("Local Storage Not Supported")
    }
    // $("button[id]").on("click",()=>{
    //     console.log("Default click event on both button called")
    // })
    $("button[id^=ed]").on("click",(event)=>{
        console.log("button[id^=ed]"+event.target.id);
    })
    $("button[id^=del]").on("click",(event)=>{
        const pid=event.target.id.substring(4)
        console.log("button[id^=del]"+pid);
        console.log("Before : "+products.length);
        // products.forEach(p=>{
        //     if(p.pid==pid){
        //         console.log("in if :"+p);
        //         delete p;
        //     }else{
        //         console.log("in else :"+p);
        //     }

        // })
        // const newProducts=products.filter((p,i,a)=>{return pid!==p.pid})
        // localStorage.setItem("products",newProducts);
        // console.log("After : "+newProducts.length);

    })
});