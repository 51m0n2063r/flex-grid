/*$('#grid-row').click(function(){
	$('#helpgrid').css('display','inline');
	$('#exgrid').css('display','none');
	$('.one').css('grid-row','3');
	$('.three').css('grid-row','2');
	$('.four').css('grid-row','1');
	$('#cb1').css('display','inline');
	$('#cb3').css('display','inline');
	$('#cb4').css('display','inline');
})*/
// Agrandir Flex en cliquant dessus
$('#bflex').click(function(){//Fonction qui marcherai sur un appui de bouton et etendrai la box au max de sa taille. 
    $('#gridbloc').css('display','none');
	$('#flexbloc').css('width','100%');
	$('#flexbloc').css('display','');
});    
// Agrandir Grid en cliquant dessus
$('#bugrid').click(function(){
    $('#flexbloc').css('display','none');
	$('#gridbloc').css('width','100%');
	$('#gridbloc').css('display','');
});

// Remettre Flex/Grid à 50-50
$('#reini').click(function(){
    $('#flexbloc').css('width','100%');
	$('#gridbloc').css('width','100%');
	$('#flexbloc').css('display','');
	$('#gridbloc').css('display','');

});

// Quand j appuie sur les boutons....


/*$('.btncode').click(function(){
    $('#containeritem').css($(this).children('span.property').text(), $(this).children('span.value').text());
});*/
$('.gbtnchoice').click(function(){//Même système de bouton coté grid(un poil plus lisible)
	$('#grid').css($(this).attr('data'),$(this).attr('data-type'))
})
$('.grow').click(function(){
	$('.one').css($(this).attr('data'),'3');
	$('.three').css($(this).attr('data'),'2');
	$('.nine').css($(this).attr('data'),'1');
})
$('.gcolumn').click(function(){
	$('.one').css($(this).attr('data'),'3');
	$('.three').css($(this).attr('data'),'2');
	$('.nine').css($(this).attr('data'),'1');
})
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


	