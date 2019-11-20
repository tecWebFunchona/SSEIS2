function infoDocente(docente){
	var imagen = "";
	if(docente[5] == "F") imagen = "../images/escomunidad/teacherw.png";
	else imagen = "../images/escomunidad/teacherm.png";
	//var doc = "<br><img src='"+imagen+"' width='96' height='96'><br><br><p class='lead'><a href='"+docente[8]+"' target='_blank'>"+docente[1]+" "+docente[2]+" "+docente[3]+" "+docente[4]+"</a><br>"+docente[6]+"</p>";
	var doc = "<br><img src='"+imagen+"' width='96' height='96'><br><br><p class='lead'><a>"+docente[1]+" "+docente[2]+" "+docente[3]+" "+docente[4]+"</a><br>"+docente[6]+"</p>";
	return doc;
}

function horarioDoc(horario){
	var numHor = horario.length;
	var tabla = "<div class='table-responsive'><table class='table table-striped' width='100%'><tr><th>Unidad de Aprendizaje</th><th>Grupo</th><th>Sal&oacute;n</th><th>Lunes</th><th>Martes</th><th>Miercoles</th><th>Jueves</th><th>Viernes</th></tr>";
	for(i=0; i<numHor; i++){
		if(horario[i]['iniLun'] == "00:00") horario[i]['iniLun'] = "";
		if(horario[i]['finLun'] == "00:00") horario[i]['finLun'] = "";
		if(horario[i]['iniMar'] == "00:00") horario[i]['iniMar'] = "";
		if(horario[i]['finMar'] == "00:00") horario[i]['finMar'] = "";
		if(horario[i]['iniMie'] == "00:00") horario[i]['iniMie'] = "";
		if(horario[i]['finMie'] == "00:00") horario[i]['finMie'] = "";
		if(horario[i]['iniJue'] == "00:00") horario[i]['iniJue'] = "";
		if(horario[i]['finJue'] == "00:00") horario[i]['finJue'] = "";
		if(horario[i]['iniVie'] == "00:00") horario[i]['iniVie'] = "";
		if(horario[i]['finVie'] == "00:00") horario[i]['finVie'] = "";
		tabla += "<tr><td>"+horario[i]['nombre']+"</td><td>"+horario[i]['grupo']+"</td><td>"+horario[i]['salon']+"</td><td>"+horario[i]['iniLun']+"-"+horario[i]['finLun']+"</td><td>"+horario[i]['iniMar']+'-'+horario[i]['finMar']+"</td><td>"+horario[i]['iniMie']+'-'+horario[i]['finMie']+"</td><td>"+horario[i]['iniJue']+'-'+horario[i]['finJue']+"</td><td>"+horario[i]['iniVie']+'-'+horario[i]['finVie']+"</td></tr>";
	}
	tabla += "</table></div><hr>";
	return tabla;
}
	
function infoUA(ua){
	//var x = "<br><p class='lead'><strong>Unidad de aprendizaje:</strong> <a href='"+ua[4]+"' target='_blank'>"+ua[1]+"</a><br><strong>Coordinador(a):</strong> "+ua[3]+"<br><strong>Academia:</strong> "+ua[2]+"</p>";
	var x = "<br><p class='lead'><strong>Unidad de aprendizaje:</strong><span style='color:#069;'> "+ua[1]+"</span><br><strong>Coordinador(a):</strong> "+ua[3]+"<br><strong>Academia:</strong> "+ua[2]+"</p>";
	return x;
}

function docsUA(dua){
	var numDUA = dua.length;
	var lista = "<p>Profesor@s que imparten la UA:</p><ul>";
	for(i=0; i<numDUA; i++){
		lista += "<li>"+dua[i]['profesores']+"</li>";
	}
	lista += "</ul><hr>";
	return lista;
}

function infoAca(aca){
	var x = "<br><p class='lead'><strong>Academia:</strong> "+aca[1]+"<br><strong>Presidente(a):</strong> "+aca[2]+" "+aca[3]+"<br><strong>Contacto:</strong> "+aca[4]+" / "+aca[5]+"<br><strong>Departamento:</strong> "+aca[6]+"</p>";
	return x;
}

function uasAca(uaa){
	var numUaa = uaa.length;
	var lista = "<p>UAs que pertenecen a la academia:</p><ul>";
	for(i=0; i<numUaa; i++){
		lista += "<li>"+uaa[i]['nombre']+"</li>";
	}
	lista += "</ul><hr>";
	return lista;
}
	
$(document).ready(function(e) {
	$("#cerrarD, #cerrarUA, #cerrarC").hide();
	
	$("#cerrarD").on("click",function(){
		$("#doc, #hor").html("");
		$("#docente, #uaprendizaje, #academia").val("");
		$(this).toggle();
	});
	
	$("#cerrarUA").on("click",function(){
		$("#ua, #dua").html("");
		$("#docente, #uaprendizaje, #academia").val("");
		$(this).toggle();
	});
	
	$("#cerrarC").on("click",function(){
		$("#aca, #uaa").html("");
		$("#docente, #uaprendizaje, #academia").val("");
		$(this).toggle();
	});
	
	$("#docente").on("change",function(){
		$("#cerrarD").toggle();
		$.ajax({
			type:"POST",
			url:"phps/horarios_AX.php",
			data:{docente:$(this).val(), flag:0},
			cache:false,
			success:function(data){
				var infDocente = $.parseJSON(data);
				var docente = infoDocente(infDocente);
				$("#respAX #doc").html(docente);
			}
		});
		$.ajax({
			type:"POST",
			url:"phps/horarios_AX.php",
			data:{docente:$(this).val(), flag:1},
			cache:false,
			success:function(data){
				var horDocente = $.parseJSON(data);
				var horario = horarioDoc(horDocente);
				$("#respAX #hor").html(horario);
			}
		});
		return false;
	});
	
	$("#uaprendizaje").on("change",function(){
		$("#cerrarUA").toggle();
		$.ajax({
			type:"POST",
			url:"phps/horarios_AX.php",
			data:{ua:$(this).val(), flag:2},
			cache:false,
			success:function(data){
				var infUA = $.parseJSON(data);
				var ua = infoUA(infUA);
				$("#ua").html(ua);
			}
		});
		$.ajax({
			type:"POST",
			url:"phps/horarios_AX.php",
			data:{ua:$(this).val(), flag:3},
			cache:false,
			success:function(data){
				var infDUA = $.parseJSON(data);
				var dua = docsUA(infDUA);
				$("#dua").html(dua);
			}
		});
		return false;
	});
	
	$("#academia").on("change",function(){
		$("#cerrarC").toggle();
		$.ajax({
			type:"POST",
			url:"phps/horarios_AX.php",
			data:{aca:$(this).val(), flag:4},
			cache:false,
			success:function(data){
				var infAca = $.parseJSON(data);
				var aca = infoAca(infAca);
				$("#aca").html(aca);
			}
		});
		$.ajax({
			type:"POST",
			url:"phps/horarios_AX.php",
			data:{aca:$(this).val(), flag:5},
			cache:false,
			success:function(data){
				var infUaa = $.parseJSON(data);
				var uaa = uasAca(infUaa);
				$("#uaa").html(uaa);
			}
		});
		return false;
	});
});