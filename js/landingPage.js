const main = document.querySelector('.dateDinamique');

const date = new Date()
let weekday = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//-------------------Container heure+date-------------------//
const date_heure = document.createElement('div');
date_heure.id = "date_heure";
main.appendChild(date_heure);

const conteneur = document.createElement('div');
conteneur.className = 'd-flex justify-content-center';
date_heure.appendChild(conteneur);

//-------------------Date-------------------//
const date_aujourdhui = document.createElement('div');
date_aujourdhui.style = 'font-size: 30px;'
date_aujourdhui.textContent = weekday[date.getDay()] + " " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();
conteneur.appendChild(date_aujourdhui);

const paraVide = document.createElement('p')
paraVide.className = 'mx-2'
paraVide.style = 'font-size: 30px;'
paraVide.textContent = '|'
conteneur.appendChild(paraVide)

const heure = document.createElement('div');
heure.id = 'heure';
heure.style = 'font-size: 30px;'
heure.textContent = date.toLocaleTimeString('fr-FR');
conteneur.appendChild(heure);

//-------------------Heure Dynamique-------------------//
function UR_Start(){
    UR_Nu = new Date();
    UR_Indhold = showFilled(UR_Nu.getHours())+ ":" + showFilled(UR_Nu.getMinutes()) + ":" + showFilled(UR_Nu.getSeconds());
    document.all.heure.innerHTML = UR_Indhold;
    setTimeout("UR_Start()",1000);
}
function showFilled(Value){
    return (Value > 9) ? "" + Value : "0" + Value;
} 

//-------------------Background Color-------------------//
let normal = document.getElementById('normal');
let colere = document.getElementById('colere');
const body = document.querySelector('.landingbody');

normal.addEventListener('click', function(){
    body.style.backgroundColor = '#7C87A2'
})
colere.addEventListener('click', function(){
    body.style.backgroundColor = '#454D62'
})