$('.m-nav-toggle').click(function(e){
e.preventDefault();
$('.m-right').toggleClass('is-open'); //permet de déclencher a classe is-open lorsque l'on appuie (le toggle ferme / ouvre le menu via le css translationX 0-100%)
$('.m-right').toggleClass('is-open');
})