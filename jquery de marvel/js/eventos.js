
var inicio = function()
{

	var clickboton = function()
	{
		console.log("holaaa");
		if($("#Nombre").val()) {
			
			var Nombre=$("#Nombre").val();

			console.log("Aqui va...");

			$.ajax({
				beforeSend:function(){
					console.log("Espere...");
				},
				url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=917a152f0e410214e0bec334a3bf6128&hash=64c0db5c2d22a1c31bf436e4ecc37edd&nameStartsWith='+Nombre.replace(" ","%20"),
				dataType: 'json',
				success: function(dato){
					console.log(dato);

					if(typeof dato.data.results !== 'undefined' && dato.data.results.length>0)
					{
						console.log("ojnaoscn");
						$("#fotoMarvel").attr("src", dato.data.results[0].thumbnail.path+"."+dato.data.results[0].thumbnail.extension);
						$("#txtNombreMarvel").html(dato.data.results[0].name);
						$("#txtDescripcion").html(dato.data.results[0].description);
					}
					else
					{
						alert("No existe");
					}
					//mostramos la información en el HTML
					//$("#fotoPersona").attr("src", data.results[0].picture.medium);
					//$("#txtNombreUser").html(data.results[0].name.first);
					//$("#txtApellidoUser").html(data.results[0].name.last);
					
				},
				error:function(xhr,error,throws){
					console.log("Ocurrió un error");
				}
			});

		}
		else
		{
			alert("Esta Vacio");
		}
		
	}
	var teclaUnInput = function(tecla)
	{
		if(tecla.which == 13)
		{
			//que se posicione en otroInput
			$("#boton").click();
			//$("#boton").on("click", clickboton);
		}
	}
	$("#boton").on("click", clickboton);
	$("#Nombre").focus();
	$("#Nombre").on("keypress", teclaUnInput);

}

$(document).on("ready",inicio);