$('bflex').click(function(){//Fonction qui marcherai sur un appui de bouton et etendrai la box au max de sa taille.
	$('#flex').css('height','200px')
	$('#flex').css('width','100%')//Cette ligne permet de donner toute la div en taille a notre espace (a condition d'avoir donné une taille 0 a son opposé avant)
	$('#flex').css('justify-content','center')//Exemple de ligne qui permettrai de modifier le flex
	$('#flex').css('','')//Sur cette ligne un modèle pur et dur réutilisable pour chaque modif css a ajouter.
})