<?php
//Funciones

	function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
	{
	  $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;

	  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);

	  switch ($theType) {
	    case "text":
	      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
	      break;    
	    case "long":
	    case "int":
	      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
	      break;
	    case "double":
	      $theValue = ($theValue != "") ? "'" . doubleval($theValue) . "'" : "NULL";
	      break;
	    case "date":
	      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
	      break;
	    case "defined":
	      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
	      break;
	  }
	  return $theValue;
	}
	
	function validaEntrada()
	{
		$usuario = GetSQLValueString($_POST["usuario"], "text");
		$clave   = GetSQLValueString(md5($_POST["clave"]), "text");
		$respuesta = false;
		//Conexion al servidor de base de datos
		//Servidor, Usuario, Clave
		$conexion = mysql_connect("localhost", "root", "");//127.0.0.1
		//Conectarse a la BD
		mysql_select_db("cursopw");
		$validar = sprintf("select usuario, clave from usuarios where usuario=%s and clave=%s limit 1",$usuario,$clave); 
		//%d para valores decimales o numeros
		$resultado = mysql_query($validar);
		//Preguntamos si se trajo un registro
		if(mysql_num_rows($resultado) > 0)
		{
			$respuesta = true;
		} 
		$salidaJSON = array('respuesta' => $respuesta );
		//Devolvemos el resultado 
		print json_encode($salidaJSON);

	}


	$accion = $_POST["accion"];
	//Menu Principal
	switch ($accion) {
		case 'validarEntrada':
			# code...
			break;
		
		default:
			# code...
			break;
	}
?>