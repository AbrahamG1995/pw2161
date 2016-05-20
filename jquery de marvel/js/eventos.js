
var inicio = function()
{

	var clickboton = function()
	{
		$("#tabla").empty();
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

					var i=0;
					if(typeof dato.data.results !== 'undefined' && dato.data.results.length>0)
					{
<<<<<<< HEAD
						
						for(i;i<dato.data.results.length;i++)
						{
							var img=dato.data.results[i].thumbnail.path+"."+dato.data.results[i].thumbnail.extension;
							
							//$("#tabla").append();
							//$("#tabla").append();
							//$("#tabla").append();
							//$("#tabla").append();
							//$("#tabla").append();

							$("#tabla").append('<tr>'+'<td>' + '<img src='+img+' '+'alt="">'+'</td>'+'<td>' + dato.data.results[i].name + '</td>'+'<td>' + dato.data.results[i].description + '</td>'+'</tr>')
							//$("#fotoMarvel").attr("src", dato.data.results[i].thumbnail.path+"."+dato.data.results[i].thumbnail.extension);
							//$("#txtNombreMarvel").html(dato.data.results[i].name);
							//$("#txtDescripcion").html(dato.data.results[i].description);
						}		
								
=======
						console.log("ojnaoscn");
						$("#fotoMarvel").attr("src", dato.data.results[0].thumbnail.path+"."+dato.data.results[0].thumbnail.extension);
						$("#txtNombreMarvel").html(dato.data.results[0].name);
						$("#txtDescripcion").html(dato.data.results[0].description);
>>>>>>> 6e9c5ada3e283cced9dca319e84c90430b27e3a1
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