var inicio = new Date().getTime();

		function getRandomColor() 
		{
		  var letters = '0123456789ABCDEF';
		  var color = '#';
		  for (var i = 0; i < 6; i++) {
		    color += letters[Math.floor(Math.random() * 16)];
		  }
		  return color;
		}

		function aparecerForma()
		{
			var top = Math.random()*400;
			var left = Math.random()*400;
			var width = Math.random()*200+50;
			var colorAleatorio = getRandomColor();

			if (Math.random()>0.50) 
				{
					document.getElementById("forma").style.borderRadius = "50%";
				} 
				else 
				{
					document.getElementById("forma").style.borderRadius = "0%";
				}
			document.getElementById("forma").style.display = "block";
			document.getElementById("forma").style.top = top +"px";
			document.getElementById("forma").style.left = left+"px";
			document.getElementById("forma").style.width = width+"px";
			document.getElementById("forma").style.height = width+"px";
			document.getElementById("forma").style.backgroundColor = colorAleatorio;
			inicio = new Date().getTime();

			
		}
		function aparecerFormaTiempoAleatorio()
		{
			setTimeout(aparecerForma, Math.random() * 2000);
		}

		aparecerFormaTiempoAleatorio();

		document.getElementById("forma").onclick = function()
		{
			document.getElementById("forma").style.display = "none";

			var fin = new Date().getTime();
			var diferencia = (fin-inicio) / 1000; 
			document.getElementById("tiempoReaccion").innerHTML = diferencia+"s";

			aparecerFormaTiempoAleatorio();
		}
			