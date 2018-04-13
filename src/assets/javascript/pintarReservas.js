export function pintarReserva(){
  var filas = document.getElementsByTagName("tr");
  var celda = document.getElementsByTagName("td");
  for (var i=1; i<filas.length; i++) {
      if (i==1 && celda[1].innerHTML != "") {
         console.log(celda[1]);
         filas[i].className = "par";
      }
      else if (i==2 && celda[5].innerHTML != ""){
        console.log(celda[5]);
        filas[i].className = "par";
      }
      else if (i==3 && celda[9].innerHTML != ""){
        console.log(celda[9]);
        filas[i].className = "par";
      }
      else if (i==4 && celda[13].innerHTML != ""){
        console.log(celda[13]);
        filas[i].className = "par";
      }
      else if (i==5 && celda[17].innerHTML != ""){
        console.log(celda[17]);
        filas[i].className = "par";
      }
      else if (i==6 && celda[21].innerHTML != ""){
        console.log(celda[21]);
        filas[i].className = "par";
      }
      else if (i==7 && celda[25].innerHTML != ""){
        console.log(celda[25]);
        filas[i].className = "par";
      }
  }
}  
  