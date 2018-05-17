var p="Le cube";
$('#bugrid').click(function(){//Fonction qui marcherai sur un appui de bouton et etendrai la box au max de sa taille.
	$('#flex').css('display','none');
	$('#grid').css('width','60%');//Cette ligne permet de donner toute la div en taille a notre espace (a condition d'avoir donné une taille 0 a son opposé avant)
	$('#exgrid').css('display','inline');//Exemple de ligne qui permettrai de modifier le flex
	$('#grid').css("border-radius","10px");
})
$('#reini').click(function(){
	$('#exgrid').css('display','');
	$('#flex').css('display','');
	$('#grid').css('width','50%');
	$('#grid').css('border-radius','');
	$('#helpgrid').css('display','none')
})
$('#grid-row').click(function(){
	$('#helpgrid').css('display','inline');
	$('#exgrid').css('display','none');
})
$('#helpgrid').dblclick(function(){
	$('#exgrid').css('display','inline');
	$('#helpgrid').css('display','none');
})