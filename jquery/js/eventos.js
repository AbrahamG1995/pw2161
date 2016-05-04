// jquery(etiquetas, clases, id)
// $ alias (un sobrenombre)
// $ == jquery

var inicio = function()
{
	var clicBoton = function()
	{
		console.log("Clic del Botón");
		$(".anuncioWeb").html("Clic del Botón");
		$(".anuncioWeb").append("Clic del Botón");
	}

	var clicBoton2 = function()
	{
		$.ajax({
			beforeSend:function(){
				console.log("Espere...");
			},
			url: 'https://randomuser.me/api/',
			dataType: 'json',
			success: function(data){
				console.log(data);
				//alert(data.results[0].name.first+" "
				//	+data.results[0].name.last);
				//mostramos la información en el HTML
				$("#fotoPersona").attr("src", data.results[0].picture.medium);
				$("#txtNombreUser").html(data.results[0].name.first);
				$("#txtApellidoUser").html(data.results[0].name.last);

			},
			error:function(xhr,error,throws){
				console.log("Ocurrió un error");
			}
		});
	}

	var teclaUnInput = function(tecla)
	{
		if(tecla.which == 13)
		{
			//que se posicione en otroInput
			$("#otroInput").focus();
		}
	}
	//Preparar los eventos de todos mis objetos
	$("#miBoton").on("click",clicBoton2);
	$("#miBoton").off("click",clicBoton);
	$("#unInput").on("keypress",teclaUnInput);
}

//Main
$(document).on("ready",inicio);