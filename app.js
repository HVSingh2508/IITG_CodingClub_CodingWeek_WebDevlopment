fetch("./data.json")
.then(function(responce){
    return responce.json();
})
.then(function(data){

    for(var i = 0;i < data.products.length;i++){
        let divElem = document.createElement("div");
        divElem.setAttribute("class","card temp card"+i);
        //divElem.setAttribute("class","card_2");
        divElem.setAttribute("onmouseover","mouseOver("+i+")");
        divElem.setAttribute("onmouseout","mouseOut("+i+")");

        let container = document.querySelector(".row");
        let first = document.querySelector(".end");

        container.insertBefore(divElem, first);
    }

    for(var i = 0; i < data.products.length;i++){
        var dynamic = document.querySelector(".card"+i);
        dynamic.innerHTML = `<img src="${data.products[i].thumbnail}"
        alt="image")>
        <div class="card-body">
            <h5 class="card-title"><a href="${data.products[i].thumbnail}" class="img_link">${data.products[i].title}</a></h5>
            <div class="des_class class${i}" style="display: none">${data.products[i].description}</div>
            <div class="pri_class pri${i}" style="display: none">Price : ${data.products[i].price}</div>
            <div class="des_class des${i}" style="display: none">Discount ${data.products[i].discountPercentage} %</div>
        </div>`
    }    
})

function mouseOver(i){
    document.querySelector(".pri"+i).style.display = "";
    document.querySelector(".des"+i).style.display = "";
}

function mouseOut(i){
    document.querySelector(".pri"+i).style.display = "none";
    document.querySelector(".des"+i).style.display = "none";
}