//Ehtolauseita1
function annaLuku() {
luku = document.getElementById("luku").value;
  if ( luku < 0 ) {
    document.getElementById('vastaus1').innerHTML = "Antamasi luku " + luku + " on negatiivinen!";
  }else {
    document.getElementById('vastaus1').innerHTML = "Antamasi luku " + luku + " on positiivinen!";
  }
}
//Ehtolauseita2
function viikonPaiva() {
nro = document.getElementById("nro").value;
var vastaus = " ";
  if (nro > 7) {
    alert("Anna numero väliltä 1-7!")
  }else {
    switch(nro) {
      case "1":
      vastaus = "Maanantai";
      break;
      case "2":
      vastaus = "Tiistai";
      break;
      case "3":
      vastaus = "Keskiviikko";
      break;
      case "4":
      vastaus = "Torstai";
      break;
      case "5":
      vastaus = "Perjantai";
      break;
      case "6":
      vastaus = "Lauantai";
      break;
      default:
      vastaus ="Sunnuntai"
      break;
    }
  }
    document.getElementById("vastaus2").innerHTML = "Antamasi numero on: " + vastaus + "!";
}
//Ehto2lauseita3
function vuosiluku() {
var luku;
  luku = document.getElementById("vuosi").value;
  if (luku % 4 == 0 && luku % 100 != 0) {
    document.getElementById("vastaus3").innerHTML = "Vuosi on karkausvuosi!"
  }else if (luku % 400 == 0) {
    document.getElementById("vastaus3").innerHTML = "Vuosi on karkausvuosi!"
  }else {
    document.getElementById("vastaus3").innerHTML = "Vuosi ei ole karkausvuosi!"
  }
}
//Ehto2lauseita4
function annaSummat() {
var luku1, luku2, luku3, luku4, luku5, summa, keskiarvo;
  luku1 = parseInt(document.getElementById('luku1').value);
  luku2 = parseInt(document.getElementById('luku2').value);
  luku3 = parseInt(document.getElementById('luku3').value);
  luku4 = parseInt(document.getElementById('luku4').value);
  luku5 = parseInt(document.getElementById('luku5').value);
  summa = luku1+luku2+luku3+luku4+luku5;
  keskiarvo = summa / 5;
    document.getElementById("vastaus4").innerHTML = "Antamasi lukujen summa on: " + summa + " ja lukujen keskiarvo on: " + keskiarvo + ".";
}
//Ehto2lauseita5
function lauseMuuttuja() {
  number1 = document.getElementById('number1').value;
var luku;
var lause = "";
var x;
  for (x = 1; x < 11; x++) {
    lause += number1 + " x " + x + " = " + number1 * x + "\</br>" + "\</br>";
  }
  document.getElementById("vastaus5").innerHTML = lause;
}
