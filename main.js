window.addEventListener ("load", function(){

	document.getElementById("loader").classList.toggle("loader2")

});


(function(){

	$(function(){

		
		$('#btn-ventana').on('click', function(){
			$('#ventana-modal').modal();
		});

	});


}());