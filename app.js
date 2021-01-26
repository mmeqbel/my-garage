'use strict'

/****************************
***GLOABAL VARIABLE**********
****************************/ 

var cars=[];    //array that hold car object
var form=document.getElementById("form");

/****************************
******Constructor************
****************************/
function Car(name,model,year)
{
    this.name=name;
    this.model=model;
    this.year=year;
    cars.push(this);
}

Car.prototype.getRow= function() {
var root=document.createElement('div');
var imgView=document.createElement('img');
imgView.src=this.getImg();
var p =document.createElement('p');
p.innerHTML='Car Name :'+this.name+"<br>"+"Model Year: "+this.year;
root.append(imgView);
root.append(p);
return root;
}
Car.prototype.getImg=function() {
    if(this.model=="BMW"){
        return "img/bmw.png";
    }
    
    if(this.model=="Toyota"){
        return "img/toyota.png";
    }

    if(this.model=="Lexus"){//need img
        return "img/bmw.png";
    }

    if(this.model=="audi"){//need img
        return "img/bmw.png";
    }

    if(this.model=="Tesla"){
        return "img/tesla.png";
    }

    if(this.model=="Chevrolet"){
        return "img/chevrolet.png";
    }

    if(this.model=="Hyundai"){
        return "img/hyundai.png";
    }
    if(this.model=="KIA"){
        return "img/kia.png";
    }

return "";
}

/****************************
******Form Handler************
****************************/

form.addEventListener("submit",formHandler);
function formHandler(event) {
    event.preventDefault();
    var carName=event.target.carName.value;
    var carModel=event.target.categoryModel.value;
    var carYear=event.target.years.value;
    console.log(carName+" "+carYear+" "+carModel);
    var car =new Car(carName,carModel,carYear);

    saveCar();
}
function saveCar() {
    localStorage.setItem("cars",JSON.stringify(cars));
    cars=getCars();
    var root =document.getElementById("dataDiv");
    // while (root.firstChild) {
    //     root.removeChild(root.lastChild);
    // }
    // mainRender();
}

/****************************
*************MAIN************
****************************/
function render(car) {
    var root =document.getElementById("dataDiv");
    console.log("here");
    root.append(car.getRow());
}

function getCars() {
    if(localStorage.length>0){

        if(localStorage.getItem("cars")){

            var carJS=JSON.parse(localStorage.getItem("cars"));
            for (let index = 0; index < carJS.length; index++) {// convert json data to objects
                var carName=carJS[index].name;
                var carModel=carJS[index].model;
                var carYear=carJS[index].year;
                var car =new Car(carName,carModel,carYear);
            }//end for
        
            }//end if
    }
    
    return cars;
}
function mainRender(params) {
    console.log("fkanfnaksfmks")
    cars=getCars();
    for (let index = 0; index < cars.length; index++) {
        render(cars[index]);  
    }  
}
mainRender();



