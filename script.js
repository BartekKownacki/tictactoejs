var board = [
				[0,0,0],
				[0,0,0],
				[0,0,0]
			];


// x-> 1 o-> 2 
var x = "x"
var o = "o"
function wczytaj_graczy()
{
	var Graczone = document.getElementById("name_graczone").value;
	var Gracztwo = document.getElementById("name_gracztwo").value;
	console.log(Graczone);
	console.log(Gracztwo);
}

function restart_disable()
{
	document.getElementById("breload").disabled = true;
}

function restart_able()
{
	document.getElementById("breload").disabled = false;
}


function sprawdz()
{
	//gracz 1
	if ((board[0][0] == 1 && board[0][1] == 1 && board[0][2] == 1) ||
		(board[1][0] == 1 && board[1][1] == 1 && board[1][2] == 1) ||
		(board[2][0] == 1 && board[2][1] == 1 && board[2][2] == 1) ||
		(board[0][0] == 1 && board[1][0] == 1 && board[2][0] == 1) ||
		(board[0][1] == 1 && board[1][1] == 1 && board[2][1] == 1) ||
		(board[0][2] == 1 && board[1][2] == 1 && board[2][2] == 1) ||
		(board[0][0] == 1 && board[1][1] == 1 && board[2][2] == 1) ||
		(board[0][2] == 1 && board[1][1] == 1 && board[2][0] == 1))
	{
		document.getElementById("player").innerHTML = "Gracz 1 wygrał!";
		restart_able()
		return 1;
	}
	//gracz 2
	else if ((board[0][0] == 2 && board[0][1] == 2 && board[0][2] == 2) ||
			 (board[1][0] == 2 && board[1][1] == 2 && board[1][2] == 2) ||
			 (board[2][0] == 2 && board[2][1] == 2 && board[2][2] == 2) ||
			 (board[0][0] == 2 && board[1][0] == 2 && board[2][0] == 2) ||
			 (board[0][1] == 2 && board[1][1] == 2 && board[2][1] == 2) ||
			 (board[0][2] == 2 && board[1][2] == 2 && board[2][2] == 2) ||
			 (board[0][0] == 2 && board[1][1] == 2 && board[2][2] == 2) ||
			 (board[0][2] == 2 && board[1][1] == 2 && board[2][0] == 2))
	{
		document.getElementById("player").innerHTML = "Gracz 2 wygrał!";
		restart_able()
		return 1;
	}
	// nikt
	else if(board[0][0]!=0 && board[0][1]!=0 && board[0][2]!=0 && 
			board[1][0]!=0 && board[1][1]!=0 && board[1][2]!=0 && 
			board[2][0]!=0 && board[2][1]!=0 && board[2][2]!=0)
	{
		document.getElementById("player").innerHTML = "Nikt nie wygrał!";
		restart_able()
		return 1;
	}
}

function block()
{
	document.getElementById("boneone").disabled = true;
	document.getElementById("bonetwo").disabled = true;
	document.getElementById("bonethree").disabled = true;
	document.getElementById("btwoone").disabled = true;
	document.getElementById("btwotwo").disabled = true;
	document.getElementById("btwothree").disabled = true;
	document.getElementById("bthreeone").disabled = true;
	document.getElementById("bthreetwo").disabled = true;
	document.getElementById("bthreethree").disabled = true;
}
function restart()
{
	window.location.reload();
}

function restart_button()
{
	var button = "<button id=\"breload\" onclick=\"restart()\">Restart!</button>";
	document.getElementById("reload").innerHTML = button;
}

//button functions

function oneone()
{
	var number = document.getElementById("number").innerHTML;
	if (parseInt(number) == 1)
	{
		document.getElementById("oneone").innerHTML = x.fontsize(20);
		board[0][0] = 1;
		console.log(board)
		document.getElementById("boneone").disabled = true;
	}
	else 
	{
		document.getElementById("oneone").innerHTML = o.fontsize(20);
		board[0][0] = 2;
		console.log(board)
		document.getElementById("boneone").disabled = true;
	}
	
	if (sprawdz() == 1)
	{
		block();
		console.log("Koniec gry!");
		alert("Koniec gry!");
		
	}
	else
	{
		number++;
		if(number>2)
		{
			window.number=1;
			document.getElementById("number").innerHTML = 1;
		}
		else
		{
		document.getElementById("number").innerHTML = 2;
		}
	}
}

function onetwo()
{
	var number = document.getElementById("number").innerHTML;
	if (parseInt(number) == 1)
	{
		document.getElementById("onetwo").innerHTML = x.fontsize(20);
		board[0][1] = 1;
		console.log(board)
		document.getElementById("bonetwo").disabled = true;
	}
	else 
	{
		document.getElementById("onetwo").innerHTML = o.fontsize(20);
		board[0][1] = 2;
		console.log(board)
		document.getElementById("bonetwo").disabled = true;
	}
	if (sprawdz() == 1)
	{
		restart_button();
		block();
		console.log("Koniec gry!");
		alert("Koniec gry!");
	}
	else
	{
		number++;
		if(number>2)
		{
			window.number=1;
			document.getElementById("number").innerHTML = 1;
		}
		else
		{
			document.getElementById("number").innerHTML = 2;
		}
	}
}

function onethree()
{
	var number = document.getElementById("number").innerHTML;
	if (parseInt(number) == 1)
	{
		document.getElementById("onethree").innerHTML = x.fontsize(20);
		board[0][2] = 1;
		console.log(board)
		document.getElementById("bonethree").disabled = true;
	}
	else 
	{
		document.getElementById("onethree").innerHTML = o.fontsize(20);
		board[0][2] = 2;
		console.log(board)
		document.getElementById("bonethree").disabled = true;
	}
	if (sprawdz() == 1)
	{
		block();
		console.log("Koniec gry!");
		alert("Koniec gry!");
	}
	else
	{
		number++;
		if(number>2)
		{
			window.number=1;
			document.getElementById("number").innerHTML = 1;
		}
		else
		{
			document.getElementById("number").innerHTML = 2;
		}
	}
}

function twoone()
{
	var number = document.getElementById("number").innerHTML;
	if (parseInt(number) == 1)
	{
		document.getElementById("twoone").innerHTML = x.fontsize(20);
		board[1][0] = 1;
		console.log(board)
		document.getElementById("btwoone").disabled = true;
	}
	else 
	{
		document.getElementById("twoone").innerHTML = o.fontsize(20);
		board[1][0] = 2;
		console.log(board)
		document.getElementById("btwoone").disabled = true;
	}
	if (sprawdz() == 1)
	{
		block();
		console.log("Koniec gry!");
		alert("Koniec gry!");
	}
	else
	{
		number++;
		if(number>2)
		{
			window.number=1;
			document.getElementById("number").innerHTML = 1;
		}
		else
		{
			document.getElementById("number").innerHTML = 2;
		}
	}
}

function twotwo()
{
	var number = document.getElementById("number").innerHTML;
	if (parseInt(number) == 1)
	{
		document.getElementById("twotwo").innerHTML = x.fontsize(20);
		board[1][1] = 1;
		console.log(board)
		document.getElementById("btwotwo").disabled = true;
	}
	else 
	{
		document.getElementById("twotwo").innerHTML = o.fontsize(20);
		board[1][1] = 2;
		console.log(board)
		document.getElementById("btwotwo").disabled = true;
	}
	if (sprawdz() == 1)
	{
		block();
		console.log("Koniec gry!");
		alert("Koniec gry!");
	}
	else
	{
		number++;
		if(number>2)
		{
			window.number=1;
			document.getElementById("number").innerHTML = 1;
		}
		else
		{
			document.getElementById("number").innerHTML = 2;
		}
	}
}

function twothree()
{
	var number = document.getElementById("number").innerHTML;
	if (parseInt(number) == 1)
	{
		document.getElementById("twothree").innerHTML = x.fontsize(20);
		board[1][2] = 1;
		console.log(board)
		document.getElementById("btwothree").disabled = true;
	}
	else 
	{
		document.getElementById("twothree").innerHTML = o.fontsize(20);
		board[1][2] = 2;
		console.log(board)
		document.getElementById("btwothree").disabled = true;
	}
	if (sprawdz() == 1)
	{
		block();
		console.log("Koniec gry!");
		alert("Koniec gry!");
	}
	else
	{
		number++;
		if(number>2)
		{
			window.number=1;
			document.getElementById("number").innerHTML = 1;
		}
		else
		{
			document.getElementById("number").innerHTML = 2;
		}
	}
}

function threeone()
{
	var number = document.getElementById("number").innerHTML;
	if (parseInt(number) == 1)
	{
		document.getElementById("threeone").innerHTML = x.fontsize(20);
		board[2][0] = 1;
		console.log(board)
		document.getElementById("bthreeone").disabled = true;
	}
	else 
	{
		document.getElementById("threeone").innerHTML = o.fontsize(20);
		board[2][0] = 2;
		console.log(board)
		document.getElementById("bthreeone").disabled = true;
	}
	if (sprawdz() == 1)
	{
		block();
		console.log("Koniec gry!");
		alert("Koniec gry!");
	}
	else
	{
		number++;
		if(number>2)
		{
			window.number=1;
			document.getElementById("number").innerHTML = 1;
		}
		else
		{
			document.getElementById("number").innerHTML = 2;
		}
	}
}

function threetwo()
{
	var number = document.getElementById("number").innerHTML;
	if (parseInt(number) == 1)
	{
		document.getElementById("threetwo").innerHTML = x.fontsize(20);
		board[2][1] = 1;
		console.log(board)
		document.getElementById("bthreetwo").disabled = true;
	}
	else 
	{
		document.getElementById("threetwo").innerHTML = o.fontsize(20);
		board[2][1] = 2;
		console.log(board)
		document.getElementById("bthreetwo").disabled = true;
	}
	if (sprawdz() == 1)
	{
		block();
		console.log("Koniec gry!");
		alert("Koniec gry!");
	}
	else
	{
		number++;
		if(number>2)
		{
			window.number=1;
			document.getElementById("number").innerHTML = 1;
		}
		else
		{
			document.getElementById("number").innerHTML = 2;
		}
	}
}

function threethree()
{
	var number = document.getElementById("number").innerHTML;
	if (parseInt(number) == 1)
	{
		document.getElementById("threethree").innerHTML = x.fontsize(20);
		board[2][2] = 1;
		console.log(board)
		document.getElementById("bthreethree").disabled = true;
	}
	else 
	{
		document.getElementById("threethree").innerHTML = o.fontsize(20);
		board[2][2] = 2;
		console.log(board)
		document.getElementById("bthreethree").disabled = true;
	}
	if (sprawdz() == 1)
	{
		block();
		console.log("Koniec gry!");
		alert("Koniec gry!");
	}
	else
	{
		number++;
		if(number>2)
		{
			window.number=1;
			document.getElementById("number").innerHTML = 1;
		}
		else
		{
			document.getElementById("number").innerHTML = 2;
		}
	}
}

