function generarnueva(len){
    let random = '';
    let wordChars = 'qwertyuiopasdfghjklzxcvbnm0123456789';
        for (let i=0; i<len; i++){
            random += wordChars.charAt(Math.floor(Math.random()* wordChars.length));                        
        }
    document.getElementById("llave").value = random;       
}

function adoc(){
    var cth = document.getElementById("mcifrado").value;
    var blob = new Blob([cth], {type: "text/plain;charset=utf-8"});
    var nomarch = document.getElementById("nomarch").value;
    if(cth == ""){        
        //osea si no existe algun mensaje a cifrar, pues 
        //obviamente q voy a cifrar xd
        swal('Error', 'No hay un mensaje cifrado', 'error');
    }else{
        if(nomarch == ""){
            swal('Error','Da un nombre para tu archivo porfa', 'error');
        }else{
            saveAs(blob, nomarch+ ".doc");
        }
    }
}

//y pues lo mismo para los demas tipos de archivos, pdf y txt
//ctr +c 
function atxt(){
    var cth = document.getElementById("mcifrado").value;
    var blob = new Blob([cth], {type: "text/plain;charset=utf-8"});
    var nomarch = document.getElementById("nomarch").value;
    if(cth == ""){        
        //osea si no existe algun mensaje a cifrar, pues 
        //obviamente q voy a cifrar xd
        swal('Error', 'No hay un mensaje cifrado', 'error');
    }else{
        if(nomarch == ""){
            swal('Error', 'Da un nombre para tu archivo porfa', 'error');
        }else{
            saveAs(blob, nomarch+ ".txt");
        }
    }
}

function apdf(){
    var cth = document.getElementById("mcifrado").value;
    var blob = new Blob([cth], {type: "text/plain;charset=utf-8"});
    var nomarch = document.getElementById("nomarch").value;
    if(cth == ""){        
        //osea si no existe algun mensaje a cifrar, pues 
        //obviamente q voy a cifrar xd
        swal('No hay un mensaje cifrado');
    }else{
        if(nomarch == ""){
            swal('Error','Da un nombre para tu archivo porfa', 'error');
        }else{
            saveAs(blob, nomarch+ ".pdf");
        }
    }
}