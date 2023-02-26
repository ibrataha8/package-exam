let opt = [...document.querySelectorAll("input[type=radio]")]
let nom = document.querySelector("#nom")
let prenom = document.querySelector("#prenom")
let age = document.querySelector("#age")
let pseudo = document.querySelector("#pseudo")
let psw = document.querySelector("#psw")
let psw2 = document.querySelector("#psw2")
let select =document.querySelector("select")
let form = document.querySelector("form")
let nomve = /[0-9]/
function test() {
    if(!(opt[0].checked ==true || opt[1].checked== true)){
        alert("Checker your sex")
        return
    }
    if(nom.value.length<3 || nomve.test(nom.value)){
        alert('Vérifier votre nom')
        return
    } 
    
    if(prenom.value.length<3 || nomve.test(prenom.value)){
        alert('Vérifier votre prénom')
        return
    }
    if(!(age.value>=5 && age.value<=100)){
        alert("verifier age")
        return
    }
    if (pseudo.value.length<4 || nomve.test(pseudo.value)) {
        alert('verifier pseudo')
        return
    }
    if(psw.value.length<6 || !(nomve.test(psw.value))){
        alert('verifier psw')
        return
    }
    if(!(psw.value == psw2.value)){
        alert("les deux mot passe ne pas copie")
        return
    }
    if(select.selectedIndex == 0){
        alert("choisir une pays")
        return
    }

    }
function resetForm() {
        form.reset();
      }