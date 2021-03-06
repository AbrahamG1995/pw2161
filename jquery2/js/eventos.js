
var iniciaApp = function()
{
	var validarEntrada = function()
	{
		//Invalida los eventos que no corresponen a la función
		event.preventDefault();
		var usuario = $("#txtUsuario").val();
		var clave = $("#txtClave").val();
	//***************__validaciones__*****************
		// 1.-Que no sean vacios
		if(usuario == "")
		{
			alert("Usuario Vacio");
			$("#txtUsuario").focus();
		}
		if(clave == "")
		{
			alert("Contraseña Vacia");
			$("#txtContraseña").focus();
		}
		
		//verificar usuario y contraseña  *********** NO HACERLO **********
		// if(usuario == "pw" && clave == "1234")
		// {
		// 	//alert("Bienvenido " +usuario);
		// 	//Dar entrada al usuario
		// 	$("#datosUsuario").hide(); //el .hide sirve para esconder
		// 	$("nav").show("slow"); // para quitar el display: none y mostrar el menú
		// }
		// else
		// {
		// 	alert("Usuario y/o contraseña incorrecta");
		// }			

		// 2.-Verificar usuario y contraseña
		var parametros="accion=validarEntrada"+
						"&usuario="+usuario+"&clave="+clave+
						"&id="+Math.random();
		$.ajax({
			beforeSend:function(){
				console.log("Validar al usuario");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url: "php/funciones.php",
			data: parametros,
			success: function(response){
				if(response.respuesta){
					$("#datosUsuario").hide();
					$("nav").show("slow");
				}
				else{
					alert("Usuario/Contraseña incorrecto(s)");
					//$("txtUsuario").empty();
					document.getElementById('txtUsuario').value = "";
					document.getElementById('txtClave').value = "";
					$("#txtUsuario").focus();
					//txtContraseña = "";
				}
			},
			error: function(xhr, ajaxOptionx, thrownError){
				console.log("Algo salió mal");
			},

		});
		console.log("Se disparó el submit");
	}

	var Altas = function() {
		//Mostramos el formulario
		$("#altaUsuarios").show("slow");
		$("#altaUsuarios h2").html("Alta Usuarios");
		$("#bajaUsuarios").hide();
		$("#consultaUsuario").hide();
		$("#txtNombreUsuario").focus();
	}

	var AltaUsuario = function() {

		event.preventDefault();
		//alert($("#frmAltaUsuarios").serialize());
		var datos = $("#frmAltaUsuarios").serialize();
		var parametros = "accion=guardaUsuario&"+datos+"&id="+Math.random();

		$.ajax({
			beforeSend:function(){
				console.log("Guardar Usuario");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url: "php/funciones.php",
			data: parametros,
			success: function(response) {
				if(response.respuesta) {
					alert("Usuario registrado correctamente");
					document.getElementById('txtNombreUsuario').value = "";
					document.getElementById('txtClaveUsuario').value = "";
					document.getElementById('txtTipoUsuario').value = "vigente";
					document.getElementById('txtDepartamento').value = "";
					$("#txtNombreUsuario").focus();
				}
				else {
					alert("Usuario Repetido");
					document.getElementById('txtNombreUsuario').value = "";
					document.getElementById('txtClaveUsuario').value = "";
					document.getElementById('txtTipoUsuario').value = "vigente";
					document.getElementById('txtDepartamento').value = "";
					$("#txtNombreUsuario").focus();
				}
			},
			error: function(xhr,ajax,thrownError) {
				console.log("Algo salió mal");
			} 
		});
	}

	var Bajas = function() {
		//Mostramos el formulario
		$("#bajaUsuarios").show("slow");
		$("#bajaUsuarios h2").html("Baja Usuarios");
		$("#altaUsuarios").hide();
		$("#consultaUsuario").hide();
		$("#txtNombreU").focus();

	}

	var Mostrar = function() {

		if(event.keyCode == 13)
		{
			event.preventDefault();
			var usu = $("#txtNombreU").val();
			var parametros = "&accion=Mostrar"+"&Usuario="+usu+"&id="+Math.random();


			$.ajax({
			beforeSend:function(){
			console.log("Usuario Eliminado");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url: "php/funciones.php",
			data: parametros,
			success: function(response) {

			 	if(response.respuesta) {

			 		$("#txtClaveU").val(response.clave);
					
				}
				else {
				
				}
			},
			error: function(xhr,ajax,thrownError) {
				console.log("Algo salió mal");
			} 
		});
			
		}
	}

	var BajaUsuario = function() {

		event.preventDefault();

		var datos = $("#frmBajaUsuarios").serialize();
		var parametros = "accion=EliminaUsuario&"+datos+"&id="+Math.random();

		$.ajax({
			beforeSend:function(){
			console.log("Usuario Eliminado");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url: "php/funciones.php",
			data: parametros,
			success: function(response) {

			 	if(response.respuesta) {
					alert("Usuario Eliminado correctamente");							
					document.getElementById('txtNombreU').value = "";
					$("#txtNombreU").focus();
				}
				else {
					alert("No se pudo Eliminar");
					document.getElementById('txtNombreU').value = "";
					$("#txtNombreU").focus();
				}
			},
			error: function(xhr,ajax,thrownError) {
				console.log("Algo salió mal");
			} 
		});

	}

	var Consultas = function()
	{
		$("#consultaUsuario").show("slow");
		$("#bajaUsuarios").hide();
		$("#altaUsuarios").hide();

		var parametros = "accion=Consulta&"+"&id="+Math.random();

		$.ajax({
			beforeSend:function(){
				console.log("Consulta Eliminado");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url: "php/funciones.php",
			data: parametros,
			success: function(response) {
				if(response.respuesta)
				{
					$("#tablaConsultas").html(response.tabla);

				}
			},
			error: function(xhr,ajax,thrownError) {
				console.log("Algo salió mal");
			} 
		});

	}
	var BajaDinamica = function() 
	{
		var usuario = $(this).attr("id");
		console.log(usuario);
	}
	
	$("#frmValidaEntrada").on("submit",validarEntrada);
	$("#btnAltas").on("click",Altas);
	$("#frmAltaUsuarios").on("submit",AltaUsuario);
	$("#btnBajas").on("click",Bajas);
	$("#txtNombreU").on("keypress",Mostrar);
	$("#btnbajaUsuario").on("click",BajaUsuario);
	$("#btnConsultas").on("click",Consultas);
	//Eventos dinámicos
	$("#tablaConsultas").on("click","button",BajaDinamica);
	//Otra Forma
	//$("#tablaConsultas > input").on("click",BajaDinamica);
}

$(document).on("ready", iniciaApp);







