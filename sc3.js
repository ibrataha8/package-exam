let nco = document.querySelector('#nco');
let dis = document.querySelector('#dis');
let poid = document.querySelector('#poid');
let btn = document.querySelector('#btn');
let radio = [...document.querySelectorAll('input[type="radio"]')];
let verif = /[0-9]/;
let verif2 = /[A-z]/;
let res = document.querySelector('#res')
btn.addEventListener('click',()=>{
    if(nco.value=="" || dis.value=="" || poid.value==""){
        alert("Remplir tous les champs.");
    }
    if(!(nco.value.length==5) || (verif2.test(nco.value[0])==false || verif2.test(nco.value[1])==false) || (verif.test(nco.value[2])==false || verif.test(nco.value[3])==false || verif.test(nco.value[4])==false)){
        alert('Le N° de colis doit commencer par de 2 lettres suivies de 3 nombres.');
    }
    if ( !(verif.test(dis.value)) == true || (!(verif.test(poid.value)) == true)  ){
        alert('La distance et le poids non numérique')
        return
    }
    calcul()

});
var resultat = 0
function calcul() {
    if(poid.value<10){
    resultat = dis.value*0.5
    res.value=resultat
    }
    if(poid.value>10){
    resultat = dis.value * ((poid.value/10)*0.3)
    res.value = resultat
    }
    if (radio[0].checked){
        resultat = resultat + ( resultat * 0.2 )
        res.value = resultat
    }
}
