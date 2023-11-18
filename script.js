/*1. Parašykite variable su jūsų vardu. Pasiklauskite, jei vardo ilgis trumpesnis nei 5 simboliai - tegul išmeta konsolėje "Short Name", kitaip - "Long Name".*/

var shortName = prompt("Įrašykite savo vardą");
var ats = shortName.length < 5 ? alert("Short Name") : alert("Long Name");
console.log(ats);


/*2. Sukurkite du kintamuosius: 'clientAge' ir 'legalAge'. Patikriname ar vartotojas gali vairuoti automobilį - t.y. clientAge didesnis arba lygus legalAge. Jei taip - išmeta 'Can Drive', kitaip 'Can't drive'.*/

var clientAge = prompt("Kliento amžius");
var legalAge = 33;
var canDrive = clientAge >= legalAge ? alert("Can Drive") : alert ("Can't Drive");
console.log(canDrive);

/*3. Ahh, o jeigu antrame pratime įvesti -1 kaip amžių? Darom double ternary operator - t.y. operatorius operatoriuje. Pirma paklausiame - jei amžius mažesnis nei 0; arba didesnis nei 120 - išmetame "Invalid Age". Jei vis tik ne - tada false statement'e bus dar vienas operatorius su antru pratimo klausimu.*/

var invalidgAge = prompt("Įveskite amžių");
var falseStatement = falseStatement <=0 || invalidgAge >= 120 ? alert("invalidgAge") : alert("falseStatement");
console.log(invalidgAge);

/*4. Sukurkite variable 'phone', kuris būtų lygus 'iPhone'. Taip pat sukurkite variable isIphoneUser, kuris turėtų būti prilygintas Boolean reikšmei (t.y. true arba false) priklausomai ar phone yra 'iPhone' ar bet koks kitas.*/


