<?php

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

	function BajaAlmacen()
	{
		$Almacen = GetSQLValueString($_POST["txtIdAlmacen"], "long");
		$Nombre   = GetSQLValueString($_POST["txtNombre"], "text");		

		$respuesta = false;
		$conexion = mysql_connect("localhost", "root", "");
		mysql_select_db("Examen");

		$Busqueda = sprintf("select idAlmacen from Almacenes where idAlmacen=%d",$Almacen);

		$resultado = mysql_query($Busqueda);

		if(mysql_num_rows($resultado) > 0)
		{
			$baja = sprintf("delete from Almacenes where idAlmacen=%d and Nombre=%s limit 1",$Almacen,$Nombre);
			mysql_query($baja);
			if(mysql_affected_rows() > 0)
			{
				$respuesta = true;
			}
		}	
		
		$salidaJSON = array('respuesta' => $respuesta);
		print json_encode($salidaJSON);
	}
	
	$accion = $_POST["accion"];

	switch ($accion) {
		case 'EliminaAlmacen':
			BajaAlmacen();
			# code...
			break;
		
		default:
			# code...
			break;
	}

?>