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

	function guardaUsuario() 
	{
		$usuario = GetSQLValueString($_POST["txtNombreUsuario"], "text");
		$clave   = GetSQLValueString(md5($_POST["txtClaveUsuario"]), "text");
		$tipo    = GetSQLValueString($_POST["txtTipoUsuario"], "text");
		$depto   = GetSQLValueString($_POST["txtDepartamento"], "long");

		$respuesta = false;
		//Conexion al servidor de base de datos
		//Servidor, Usuario, Clave
		$conexion = mysql_connect("localhost", "root", "");//127.0.0.1
		//Conectarse a la BD
		mysql_select_db("cursopw");

		$bandera = Buscar($usuario, $clave);

		if(!$bandera)
		{
			$guardar = sprintf("insert into usuarios values(%s,%s,%s,%d)",$usuario,$clave,$tipo,$depto);
			//Ejecutamos la consulta de guardar
			mysql_query($guardar);
			//Cuantos registros fueros afectados
			if(mysql_affected_rows() > 0) {
				$respuesta = true;
			}
		}
		
		$salidaJSON = array('respuesta' => $respuesta);
		print json_encode($salidaJSON);
	}

	function EliminaUsuario()
	{
		$usuario = GetSQLValueString($_POST["txtNombreU"], "text");
		//$clave   = GetSQLValueString(md5($_POST["txtClaveU"]), "text");		

		$respuesta = false;
		$conexion = mysql_connect("localhost", "root", "");
		mysql_select_db("cursopw");

		$clave = sprintf("select clave from usuarios where usuario=%s",$usuario);

		$resultado = mysql_query($clave);

		if(mysql_num_rows($resultado))
		{
			$baja = sprintf("delete from usuarios where usuario=%s limit 1",$usuario);
			mysql_query($baja);
			if(mysql_affected_rows()>0)
			{
				$respuesta = true;
			}
		}	
		
		$salidaJSON = array('respuesta' => $respuesta);
		print json_encode($salidaJSON);
	}

	function mostrar()
	{
		$usuario = GetSQLValueString($_POST["txtNombreU"], "text");

		$respuesta = false;
		$conexion = mysql_connect("localhost", "root", "");
		mysql_select_db("cursopw");

		$clave = sprintf("select clave from usuarios where usuario= '".$usuario."'");
		
		$tipousuario = sprintf("select tipousuario from usuarios where usuario=%s",$usuario);
		$departamento = sprintf("select departamento from usuarios where usuario=%s",$usuario);

		$resultado = mysql_query($clave);
		if($row = mysql_num_rows($resultado))
		{ 

			$clv = $resultado["clave"];
			$respuesta = true;
		}

		$salidaJSON = array('respuesta' => $respuesta, 'clave' => $clv);
		print json_encode($salidaJSON);
	}

	function Buscar($usuario,$clave)
	{
		$respuesta = false;
		$conexion = mysql_connect("localhost", "root", "");
		mysql_select_db("cursopw");

		$Busqueda = sprintf("select usuario, clave from usuarios where usuario=%s and clave=%s limit 1",$usuario,$clave);

		$resultado = mysql_query($Busqueda);
		//Preguntamos si se trajo un registro
		if(mysql_num_rows($resultado) > 0)
		{
			$respuesta = true;
		} 
		/*$salidaJSON = array('respuesta' => $respuesta );
		//Devolvemos el resultado 
		print json_encode($salidaJSON);*/
		return $respuesta;
	}



	$accion = $_POST["accion"];
	//Menu Principal
	switch ($accion) {
		case 'validarEntrada':
			validaEntrada();
			# code...
			break;
		case 'guardaUsuario':
			guardaUsuario();
			# code...
			break;
		case 'EliminaUsuario':
			EliminaUsuario();
			# code...
			break;
		case 'Mostrar':
			mostrar();
			# code...
			break;
		default:
			# code...
			break;
	}
?>