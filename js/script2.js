let cabecera=document.head
console.log(cabecera)

let body=document.body
console.log(body)

let lpant=document.getElementById("antiguo")
console.log(lpant)

let nodos =lpant.childNodes
for(let i=0;i<nodos.length;i++){
    //  console.log(nodos[i])   
}

let arr_nodo =[]
for(let i=0;i<nodos.length;i++){
    if(nodos[i].nodeType==document.ELEMENT_NODE){
        arr_nodo.push(nodos[i].textContent)
    }
}

document.getElementById("rpta1").innerHTML=arr_nodo


//moderno

let lp_mod=document.getElementById("moderno")
nodos=lp_mod.childNodes

let arr_nodo2 =[]
for(let i=0;i<nodos.length;i++){
    if(nodos[i].nodeType==document.ELEMENT_NODE){
        arr_nodo2.push(nodos[i].textContent)
    }
}

document.getElementById("rpta2").innerHTML=arr_nodo2

//concat arr

let arr_rpta =arr_nodo.concat(arr_nodo2)
document.getElementById("rpta2").innerHTML=arr_rpta

let cadena =arr_nodo.join('**')
document.getElementById("rpta2").innerHTML=cadena

let posicion=arr_nodo2.indexOf("kotlin")
document.getElementById("rpta2").innerHTML=posicion


//insert

arr_nodo2.splice(1,0,'x','y','z')
document.getElementById("rpta8").innerHTML=arr_nodo2

arr_nodo2.splice(5,0,'x','y','z')
document.getElementById("rpta8").innerHTML=arr_nodo2

arr_nodo2.splice(1,3)
document.getElementById("rpta9").innerHTML=arr_nodo2

arr_nodo2.splice(4,3,'pepe_god','luchooo')
document.getElementById("rpta10").innerHTML=arr_nodo2

document.getElementById("rpta11").innerHTML=arr_nodo2.pop()
document.getElementById("rpta12").innerHTML=arr_nodo2.shift()

arr_nodo2.push("impacto genshico")
document.getElementById("rpta13").innerHTML=arr_nodo2

arr_nodo2[arr_nodo2.length]="honkai tren de estrella"
document.getElementById("rpta13").innerHTML=arr_nodo2

arr_nodo2.unshift("nada")
document.getElementById("rpta4").innerHTML=arr_nodos2

arr_nodo2.sort()
document.getElementById("rpta15").innerHTML=arr_nodo2

arr_nodo2.revese()
document.getElementById("rpta16").innerHTML=arr_nodo2

let rama = []
rama.push("<ol>")
    rama.push("<l1>")
        rama.push("digan algo")
    rama.push("</l1>")
    rama.push("<l1>")
        rama.push("las fijas")
    rama.push("</l1>")
rama.push("</ol>")

let cadena2=rama.join('')
document.getElementById("rpta17").innerHTML=cadena2
