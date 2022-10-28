productList = [
    { pid: 1001, pname: "Pepsi", unitPrice: 30.0, img: 'images/pepsi.jfif', stockQuantity: 100 },
    { pid: 1002, pname: "Thumsup", unitPrice: 30.0, img: 'images/thumsup.jfif', stockQuantity: 100 },
    { pid: 1003, pname: "Limca", unitPrice: 30.0, img: 'images/limca.jfif', stockQuantity: 100 }
]
const root = document.getElementById("root");

function onLoad() {
    for (let index in productList) {
        const p1=productList[index];
        const div_p1 = document.createElement("div");
        const pre_p1 = document.createElement("pre")

        const img_p1 = document.createElement("img");
        img_p1.src = p1.img;

        const span_pname_p1 = document.createElement("span");
        span_pname_p1.innerText = p1.pname;

        const btn_dec_p1 = document.createElement("button");
        btn_dec_p1.innerText = "-";

        const span_quantity_p1 = document.createElement("span");
        span_quantity_p1.innerText = 0;

        const btn_inc_p1 = document.createElement("button");
        btn_inc_p1.innerText = "+";


        pre_p1.append(img_p1);
        pre_p1.append(span_pname_p1);
        pre_p1.append(btn_dec_p1);
        pre_p1.append(span_quantity_p1)
        pre_p1.append(btn_inc_p1);

        div_p1.append(pre_p1);
        root.append(div_p1);
    }
}