var iniciaApp = function()
{

	var Inicio = function()
	{
		$("#BajaAlmacen").hide();
	}

	var Bajas = function()
	{
		$("#BajaAlmacen").show("slow");
	}

	var BajasAlmacen = function()
	{
		event.preventDefault();

		var datos = $("#frmBajaAlmacen").serialize();
		var parametros = "accion=EliminaAlmacen&"+datos;

		$.ajax({
			beforeSend:function(){
			console.log("Almacen Eliminado");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url: "php/funciones.php",
			data: parametros,
			success: function(response) {

			 	if(response.respuesta) {
					alert("Almacen Eliminado correctamente");							
					document.getElementById('txtIdAlmacen').value = "";
					document.getElementById('txtNombre').value = "";
					$("#txtIdAlmacen").focus();
				}
				else {
					alert("No se pudo Eliminar");
					document.getElementById('txtIdAlmacen').value = "";
					document.getElementById('txtNombre').value = "";
					$("#txtIdAlmacen").focus();
				}
			},
			error: function(xhr,ajax,thrownError) {
				console.log("Algo salió mal");
			} 
		});
	}

	$("#btnBajas").on("click", Bajas);
	$("#btnInicio").on("click", Inicio);
	$("#frmBajaAlmacen").on("submit", BajasAlmacen);
}

$(document).on("ready", iniciaApp);




