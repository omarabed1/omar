let sum1=0;
let cunt=0;
function send(){
    let flag=0;
    let name=document.getElementById('name');
    let price=document.getElementById('price');
    let img=document.getElementById('img');


    let butt=document.getElementById('but');
    let x=name.value;
    let y=price.value;
    butt.innerHTML="a";
    if(x=''||x.length<3)
    {
        flag=1;
        alert("eror");
    }
    if(y=''||y>100 || y<0)
    {
        flag=2;
        alert("eror1");
    }
   if(flag==0) {
        addToTable(name.value, Number.parseInt(price.value),img.value);
        name.value='';
        price.value='';
    }
}
function addToTable(name,price,img){
    let Tbodyy = document.getElementById("Tbodyy");
    let cnt = document.getElementById("cnt");
    let sum = document.getElementById("sum");

    let tr = document.createElement("tr");
    let nameTd = document.createElement("td");
    let priceTd = document.createElement("td");
    let imgTd = document.createElement("td");

    let nameLabel = document.createElement("label");
    let priceLabel = document.createElement("label");
    let imgLabel = document.createElement("img");

    nameLabel.textContent = name;
    priceLabel.textContent = price;
    imgLabel.src=img;

    nameTd.appendChild(nameLabel);
    priceTd.appendChild(priceLabel);
    imgTd.appendChild(imgLabel);
    nameLabel.classList.add("reed");
    imgLabel.classList.add("wdiv"); 
    tr.appendChild(nameTd);
    tr.appendChild(priceTd);
    tr.appendChild(imgTd);

    Tbodyy.appendChild(tr);

    cunt++;
    sum1+=price;
    let avg = sum1 / cunt;
    cnt.textContent=cunt;
    sum.textContent=avg;
}

document.getElementById("hii").addEventListener("click",function(){
    alert("hi");
})