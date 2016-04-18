//Trabajar con los numeros
//Variable Global
var operador = "";

function igual()
{
	var valor1 = document.calculadora.operando1.value;
	var valor2 = document.calculadora.operando2.value;
	var total = 0;
	document.calculadora.resultado.value = eval(valor1+operador+valor2);
	// if(operador=="+")
	// {
	// 	total = valor1 + valor2;
	// 	return total;
	// }
	// if(operador=="-")
	// {
	// 	total = valor1 - valor2;
	// }
	// if(operador=="*")
	// {
	// 	total = valor1 * valor2;
	// }
	// if(operador=="/")
	// {
	// 	total = valor1 / valor2;
	// }
}

function numeros(num)
{
	var valor = document.calculadora.operando1.value;
	if(operador=="") //Escribir en el operando1
	{
		if(valor == "0") //Vaciamos la caja
		{
			document.calculadora.operando1.value = "";
		}
		//concatenar los valores de num con los del operando1
		document.calculadora.operando1.value = document.calculadora.operando1.value + num;
	}
	else //Escribir en el operando2
	{
		var valor = document.calculadora.operando2.value;
		if(valor == "0") //Vaciamos la caja
		{
			document.calculadora.operando2.value = "";
		}
		//concatenar los valores de num con los del operando1
		document.calculadora.operando2.value = document.calculadora.operando2.value + num;
	}
}
//Trabaja con los operadores
function operadores(ope)
{
	operador = ope;
}

function borrar()
{
	operador = "";
	document.calculadora.operando1.value = 0;
	document.calculadora.operando2.value = 0;
	document.calculadora.resultado.value = 0;
}





