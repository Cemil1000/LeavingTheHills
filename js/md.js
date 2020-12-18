const ecranGauche = document.querySelector(".ecranGauche");
const ecranDroite = document.querySelector(".ecranDroite");

//===================== CHAMP DE TEXTE ==================//
const textEditor = document.createElement("textArea");
textEditor.className = "w-100 textEditorJour";
ecranGauche.appendChild(textEditor);
//==================== RESULTAT ==========================//
const preview = document.createElement("div");
preview.className = "w-100 textEditorJour";
ecranDroite.appendChild(preview);

let input;

textEditor.addEventListener("keyup", function() {
    markdownConvertion(textEditor);
});
//================ FONCTION REGEX ===============//
function mdToHTML(text){
    input = text
        //======== TITRES =========//
        .replace(/^#{1} (.*$)/gim, '<h1>$1</h1>')
        .replace(/^#{2} (.*$)/gim, '<h2>$1</h2>')
        .replace(/^#{3} (.*$)/gim, '<h3>$1</h3>')
        .replace(/^#{4} (.*$)/gim, '<h4>$1</h4>')
        .replace(/^#{5} (.*$)/gim, '<h5>$1</h5>')
        .replace(/^#{6} (.*$)/gim, '<h6>$1</h6>')

        //======== PARAGRAPHES =========//
        .replace(/^\n\n(.*)$/gim,'<p>$1</p>')

        //======== CITATIONS =========//
        .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')

        //======== STYLE POLICE =========//
        .replace(/\*{2}(.*)\*{2}|\_{2}(.*)\_{2}/gim, '<strong>$1$2</strong>')
        .replace(/\*{1}(.*)\*{1}/gim, '<em>$1</em>')
        .replace(/\_{1}(.*)\_{1}/gim, '<em>$1</em>')
        .replace(/~~(.*)~~/gim, '<del>$1</del>')

        //======== IMAGES ET LIENS=========//
        .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
        .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")

        //break & horizontal rule
        .replace(/\n/gim, '<br />')
        .replace(/\s{2}/gim, '<br />')
        .replace(/-{3,}/gim, '<hr />')
    return input.trim()
}
//================ AFFICHER LE TEXTEDITOR EN MARKDOWN ===============//
function markdownConvertion(textEditor) {
    let typedText = textEditor.value;
    mdToHTML(typedText);
    preview.innerHTML = input;
}

let jour = document.getElementById('jour')
let nuit = document.getElementById('nuit')
const body = document.querySelector('.markdownBody')
const nav = document.querySelector('.markdownNavJour')
const navCadre = document.querySelector('.navTrucMarkdownJour')
const navH1 = document.querySelector('.markdownNavH1')
const markdownh2 = document.querySelector('.markdownH2Jour')
const icon = document.querySelector('iconJour')

jour.addEventListener('click', function(){
    body.className = 'bg-wight'
    nav.className = 'markdownNavJour navbar navbar-expand-lg justify-content-between'
    navCadre.className = 'bg-wight dropdown-menu'
    navH1.style = 'text-decoration: none; color: black;'
    textEditor.className = "w-100 textEditorJour"
    preview.className = "w-100 textEditorJour"
    markdownh2.className = 'markdownH2Jour text-center h1'
    jour.className = 'iconJour btn'
    nuit.className = 'iconJour btn'
})
nuit.addEventListener('click', function(){
    body.className = 'bg-dark'
    nav.className = 'markdownNavNuit navbar navbar-expand-lg justify-content-between'
    navCadre.className = 'bg-dark dropdown-menu'
    navH1.style = 'text-decoration: none; color: white;'
    textEditor.className = 'w-100 textEditorNuit'
    preview.className = 'w-100 textEditorNuit'
    markdownh2.className = 'markdownH2Nuit text-center h1'
    jour.className = 'iconNuit btn'
    nuit.className = 'iconNuit btn'
})