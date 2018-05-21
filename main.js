/*$('#bugrid').click(function(){//Fonction qui marcherai sur un appui de bouton et etendrai la box au max de sa taille.
	$('#flex').css('display','none');
	$('#grid').css('width','60%');//Cette ligne permet de donner toute la div en taille a notre espace (a condition d'avoir donné une taille 0 a son opposé avant)
	$('#exgrid').css('display','inline');//Exemple de ligne qui permettrai de modifier le flex
})*/
/*$('#reini').click(function(){
	$('#exgrid').css('display','');
	$('#flex').css('display','');
	$('#grid').css('width','50%');
	$('#helpgrid').css('display','none');
	$('#cb1').css('grid-row','1');
	$('#cb3').css('grid-row','1');
	$('#cb4').css('grid-row','3');
	//$('#css').replaceWith('<link id="css" href="css/styles.css">')
})*/
$('#grid-row').click(function(){
	$('#helpgrid').css('display','inline');
	$('#exgrid').css('display','none');
	$('.one').css('grid-row','3');
	$('.three').css('grid-row','2');
	$('.four').css('grid-row','1');
	$('#cb1').css('display','inline');
	$('#cb3').css('display','inline');
	$('#cb4').css('display','inline');
})
$('#helpgrid').dblclick(function(){
	$('#exgrid').css('display','inline');
	$('#helpgrid').css('display','none');
})



// Agrandir Flex en cliquant dessus
$('#flexbloc').click(function(){//Fonction qui marcherai sur un appui de bouton et etendrai la box au max de sa taille. 
    $('#gridbloc').css('width','0');
    $('#flexbloc').css('width','100%');
});
    
    
// Agrandir Griden cliquant dessus
$('#gridbloc').click(function(){
    $('#flexbloc').css('width','0');
    $('#gridbloc').css('width','100%');
});


// Remettre Flex/Grid à 50-50
$('.clickto').click(function(){
    $('#flexbloc').css('width','100%');
    $('#gridbloc').css('width','100%');
});

// Quand j appuie sur les boutons....


/*$('.btncode').click(function(){
    $('#containeritem').css($(this).children('span.property').text(), $(this).children('span.value').text());

});*/

$('.btnchoice').click(function(){
	$('#containeritem').css($(this).parent().children('p').text(), $(this).text());
})

	// fonction flex-grow

	// Ajout de la class "grow"
	var btnclicked='';

	$('.btnitemgrow').click(function(){		
		btnclicked = $(this).text();
		$('.item[data-number='+btnclicked+']').addClass('grow');
		$('#flexgros').css('display', 'block');
		return btnclicked;
	})




	// Selection de la valeur de flex-grow
	$('.btngrow').click(function(){
		$('.grow').css('flex-grow', $(this).text());
		$('.btngrowchoice[data-case='+btnclicked+']').text($(this).text());
		$('.item.grow').removeClass('grow');
		$('#flexgros').css('display', 'none');
		console.log(btnclicked);
	})


	