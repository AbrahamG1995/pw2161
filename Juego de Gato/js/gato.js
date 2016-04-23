
var contador=0;
var b1="", b2="", b3="", b4="", b5="", b6="", b7="", b8="", b9="";
var booleana=0;

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
		contador=contador+1;
		Resultado();
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
		contador=contador+1;
		Resultado();
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
		contador=contador+1;
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
		contador=contador+1;
		Resultado();
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
		contador=contador+1;
		Resultado();
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
		
		contador=contador+1;
		Resultado();
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
		contador=contador+1;
		Resultado();
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
		
		contador=contador+1;
		Resultado();
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
		contador=contador+1;
		Resultado();
	}
}

function Asignacion()
{
	
	b1=document.JuegoGato.b1.value;
	b2=document.JuegoGato.b2.value;
	b3=document.JuegoGato.b3.value;
	b4=document.JuegoGato.b4.value;
	b5=document.JuegoGato.b5.value;
	b6=document.JuegoGato.b6.value;
	b7=document.JuegoGato.b7.value;
	b8=document.JuegoGato.b8.value;
	b9=document.JuegoGato.b9.value;
}




var suma=parseInt(localStorage.getItem("partidas"));

function Resultado()
{
	
	  Asignacion();
	  if(contador>4)
		{
			if((b1==b2 && b2==b3 && b1!="")||(b4==b5 && b5==b6 && b4!="")||(b7==b8 && b8==b9 && b7!="")||(b1==b4 && b4==b7 && b1!="")
				||(b2==b5 && b5==b8 && b2!="")||(b3==b6 && b6==b9 && b3!="")||(b1==b5 && b5==b9 && b9!="")||(b3==b5 && b5==b7 && b7!=""))
			{
				
				if(contador%2==0)
				{
					alert("Felicades ha ganado player O");
					/*window.location.reload();*/
					suma=suma+1;
					
					document.JuegoGato.partidas.value=suma;
					if(suma>1)
					{
						document.JuegoGato.b1.value="";
						document.JuegoGato.b2.value="";
						document.JuegoGato.b3.value="";
						document.JuegoGato.b4.value="";
						document.JuegoGato.b5.value="";
						document.JuegoGato.b6.value="";
						document.JuegoGato.b7.value="";
						document.JuegoGato.b8.value="";
						document.JuegoGato.b9.value="";
					}
					
				}
				else
				{
					alert("Felicades ha ganado player X");
					/*window.location.reload();*/
					suma=suma+1;
					
					document.JuegoGato.partidas.value=suma;
					if(suma>1)
					{
						document.JuegoGato.b1.value="";
						document.JuegoGato.b2.value="";
						document.JuegoGato.b3.value="";
						document.JuegoGato.b4.value="";
						document.JuegoGato.b5.value="";
						document.JuegoGato.b6.value="";
						document.JuegoGato.b7.value="";
						document.JuegoGato.b8.value="";
						document.JuegoGato.b9.value="";
					}
					
				}
				document.JuegoGato.partidas.value=suma;
				
				contador=0;
			}
			else
			{
				if(contador>8)
				{
					alert("Habeís empatado.");
					suma=suma+1;
					
					document.JuegoGato.partidas.value=suma;
					if(suma>1)
					{
						document.JuegoGato.b1.value="";
						document.JuegoGato.b2.value="";
						document.JuegoGato.b3.value="";
						document.JuegoGato.b4.value="";
						document.JuegoGato.b5.value="";
						document.JuegoGato.b6.value="";
						document.JuegoGato.b7.value="";
						document.JuegoGato.b8.value="";
						document.JuegoGato.b9.value="";
					}
					contador=0;
				}
			}
		}
}

function actualizar()
{

}

/*function Contador()
{

	var numarriba=document.JuegoGato.partidas.value;
	if(booleana=1)
	{
		alert("lasf");
		window.location.reload();
		numarriba=numarriba+1;
	}
}*/










