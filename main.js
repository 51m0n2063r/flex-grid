$('flex').click(function(){//Fonction qui marcherai sur un appui de bouton et etendrai la box au max de sa taille.
	$('#divflex').css('height','200px')
	$('#divflex').css('width','100%')//Cette ligne permet de donner toute la div en taille a notre espace (a condition d'avoir donné une taille 0 a son opposé avant)
	$('#divflex').css('justify-content','center')//Exemple de ligne qui permettrai de modifier le flex
	$('#divflex').css('','')//Sur cette ligne un modèle pur et dur réutilisable pour chaque modif css a ajouter.
});