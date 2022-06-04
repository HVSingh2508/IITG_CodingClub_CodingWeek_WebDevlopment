function searchProduct(){
    // DOM
    const input = document.getElementById("filter").value.toUpperCase();
    
    const cardContainer = document.getElementById("card-lists");

    const card = cardContainer.getElementsByClassName("temp");
    //console.log(card);


    var check = 0;
    var count = 0;
    for(let i = 0;i < card.length;i++){
        
        //let des = data.products[i].description;
        let title = card[i].querySelector(".card-body h5.card-title");
        let des = card[i].querySelector(".card-body div.class"+i);
        
        //console.log(title);

        if((title.innerText.toUpperCase().indexOf(input) > -1) || (des.innerText.toUpperCase().indexOf(input) > -1)){
        //if((title.innerText.toUpperCase().indexOf(input) > -1)){
            card[i].style.display = "";
            check = 1;
            count++;
        }
        else{
            card[i].style.display = "none";
        }
    }
    if(check == 0){
        document.getElementById("nothing").innerText = ": Sorry : "+input+" : Not Found :";
    }
    else if(input == ""){
        document.getElementById("nothing").innerText = "";
    }
    else{
        document.getElementById("nothing").innerText = ": Items Matching with : "+input+" : "+count+" Found :";
    }
}