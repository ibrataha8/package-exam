let consoles = [
    {ref:'NINTENODO SWITCH OLED',prix:4500,manette:2,image:'img.png'},
    {ref:'PLAYSTATION CONSOLE',prix:8500,manette:4,image:'img1.png'},
    {ref:'XBOX 512G',prix:4600,manette:3,image:'img2.png'},
    {ref:'PLAYSTATION4',prix:5300,manette:1,image:'img3.png'}
  ];
  
  let quiant = document.querySelector("#quiantite");
  let select = document.querySelector("select");
  let btn1 = document.querySelector("#btn1");
  let res1 = document.querySelector("#res1");
  let res2 = document.querySelector("#res2");
  let table = document.querySelectorAll('table')[0];
  let resul = 0;
  let supperi = [...document.querySelectorAll(".supprimer")]

  function valid() {
    if (quiant.value < 1 || quiant.value > 20) {
      alert("La quantité doit être entre 1 et 20.");
    }
    if (select.selectedIndex == 0) {
      alert("Veuillez choisir une console.");
    }
  }
  
  function remplirConsole() {
    for (let i = 0; i < consoles.length; i++) {
      select.innerHTML += `<option>${consoles[i].ref}</option>`;
    }    
    
  }
  
  
  btn1.addEventListener("click", () => {
    template = "<tr><td>" + consoles[select.selectedIndex-1].ref + "</td>" +
               "<td>" + quiant.value + "</td>" +
               "<td>"+ consoles[select.selectedIndex-1].image +"</td>" +
               "<td>" + "<button class='supprimer'onclick='sup(this," + quiant.value* consoles[select.selectedIndex-1].prix + ")' >Supprimer</button>" + "</td></tr>";
    table.innerHTML += template;
    prix();
  });

function sup(btn,total) {
  btn.parentNode.parentNode.remove();
  rePrix(total)
}
function prix() {
  resul += parseInt(quiant.value) * parseInt(consoles[select.selectedIndex-1].prix);
  res1.innerHTML = resul + " Dh";
}
  function rePrix(total) {
    resul -= total;
    res1.innerHTML = resul

  }
  