
var contador=0;


function click1()
{
	if(document.JuegoGato.b1.value=="")
	{
		if(contador%2==0)
		{
			document.getElementById('b1').value="X";
		}
		else
		{
			document.getElementById('b1').value="O";
		}
		contador++;
	}
}

function click2()
{
	if(document.JuegoGato.b2.value=="")
	{
		if(contador%2==0)
		{
			document.getElementById('b2').value="X";
		}
		else
		{
			document.getElementById('b2').value="O";
		}
		contador++;
	}
}

function click3()
{
	if(document.JuegoGato.b3.value=="")
	{
		if(contador%2==0)
		{
			document.getElementById('b3').value="X";
		}
		else
		{
			document.getElementById('b3').value="O";
		}
		contador++;
		Resultado();
	}
}
function click4()
{
	if(document.JuegoGato.b4.value=="")
	{
		if(contador%2==0)
		{
			document.getElementById('b4').value="X";
		}
		else
		{
			document.getElementById('b4').value="O";
		}
		contador++;
	}
}

function click5()
{
	if(document.JuegoGato.b5.value=="")
	{
		if(contador%2==0)
		{
			document.getElementById('b5').value="X";
		}
		else
		{
			document.getElementById('b5').value="O";
		}
		contador++;
	}
}

function click6()
{
	if(document.JuegoGato.b6.value=="")
	{
		if(contador%2==0)
		{
			document.getElementById('b6').value="X";
		}
		else
		{
			document.getElementById('b6').value="O";
		}
		contador++;
	}
}

function click7()
{
	if(document.JuegoGato.b7.value=="")
	{
		if(contador%2==0)
		{
			document.getElementById('b7').value="X";
		}
		else
		{
			document.getElementById('b7').value="O";
		}
		contador++;
	}
}

function click8()
{
	if(document.JuegoGato.b8.value=="")
	{
		if(contador%2==0)
		{
			document.getElementById('b8').value="X";
		}
		else
		{
			document.getElementById('b8').value="O";
		}
		contador++;
	}
}

function click9()
{
	if(document.JuegoGato.b9.value=="")
	{
		if(contador%2==0)
		{
			document.getElementById('b9').value="X";
		}
		else
		{
			document.getElementById('b9').value="O";
		}
		contador++;
	}
}

function Resultado()

{
  if(contador>0)
	{
		alert("HOal");
		
		if(document.JuegoGato.b1.value==document.JuegoGato.b2.value && document.JuegoGato.b2.value==document.JuegoGato.b3.value)
		{

		alert("Ganador");
		 }
	}
}


