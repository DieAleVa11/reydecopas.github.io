
		function nuevoAjax()  {
			var xmlhttp=false;
			try
			{
                // Creacion del objeto AJAX para navegadores no IE
                xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
			}
			catch(e)
			{
                try
                {
                        // Creacion del objet AJAX para IE
                        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch(E)
                {
                        if (!xmlhttp && typeof XMLHttpRequest!="undefined") xmlhttp=new XMLHttpRequest();
                }
			}
			return xmlhttp;
		}

		function conversion(wsp,pixel) {
		
			var app = navigator.appName;
			var version = navigator.appVersion;
			var agente = navigator.userAgent

			var http = nuevoAjax();       
			http.open("GET", 'conversion.php?wsp='+wsp+'&pixel='+pixel+'&app='+app+'&version='+version+'&agente='+agente, true);
			http.onreadystatechange=function() {
			if(http.readyState == 1) {
				} else {
						if (this.readyState == 4 && this.status == 200) {
								
						}
				}
				}
			http.send(null);   		 	 

			return false;
		}	

	