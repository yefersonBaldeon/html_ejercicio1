

var a=document.getElementById("texto")
var boton=document.getElementById("boton")
var lista=document.getElementById("lista")




boton.addEventListener("click",()=>{


if(a.value == ""){

alert("Rellenar el formualario")

a.setAttribute("class","error")





}


else{

var c=document.createElement("li");
var c1=document.createElement("a");
var texto=document.createTextNode(a.value)

c1.appendChild(texto)
c.appendChild(c1)
lista.appendChild(c)

a.value=""

a.addEventListener("click",()=>{

    a.setAttribute("class","")
    
    })
    
    
    for (let i = 0; i < lista.children.length; i++) {
        
        lista.children[i].addEventListener("click",function(){
    
            lista.removeChild(this);
    
        })
    
        
    }


}



})


a.addEventListener("click",()=>{

a.setAttribute("class","")

})


for (let i = 0; i < lista.children.length; i++) {
    
    lista.children[i].addEventListener("click",function(){

        lista.removeChild(this);

    })

    
}

















