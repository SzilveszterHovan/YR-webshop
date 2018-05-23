function sql(sqlText, keszfuggveny) {
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			console.log(xhttp.responseText);
			keszfuggveny(JSON.parse(xhttp.responseText));
		}
	};

	xhttp.open("POST", "http://127.0.0.1:3000/sql", true);
	xhttp.withCredentials = true;
	xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhttp.send(JSON.stringify({
		sql: sqlText
	}));
}

//Ebben a függvényben dolgozd fel a kapott objektumot: jelenítsd meg az adatokat az oldalon
function refreshDocument(jsonObject) {
	console.log(jsonObject);
	document.getElementById('content').innerText = JSON.stringify(jsonObject);
}

function termekmegjelenit(termekObjektum) {
	console.log(termekObjektum);
	var productTable = "<table><tr> <th>Termék név</th> <th>Paprika fajta</th><th>Erősség</th> <th>Szín</th><th>Kiszerelés</th><th>Ár</th> </tr>";

	for (var i = 0; i < termekObjektum.length; i++) {
		var termek = termekObjektum[i];
		productTable = productTable + "<tr><td>" + termek.termek_nev + "</td> <td>" + termek.fajta + "</td> <td>" + termek.ero + "</td><td>" + termek.szin + "</td><td>" + termek.kiszereles + "</td><td>" + termek.ar + "</td> </tr>";
	}

	productTable = productTable + "</table>";
	document.getElementById('content').innerHTML = productTable;
}

function nepszerusegmegj(nepszerusegObject) {
	console.log(nepszerusegObject);
	var nepszerusegTable = "<table><tr><th>Termék név</th></tr>";

	for (var j = 0; j < nepszerusegObject.length; j++) {
		var nepszeru = nepszerusegObject[j];
		nepszerusegTable = nepszerusegTable + "<tr><td>" + nepszeru.nepszeruseg + "</td></tr>";
	}
	nepszerusegTable = nepszerusegTable + "</table>";
	document.getElementById('content').innerHTML = nepszerusegTable;
}

function legtobbVevoHavimegj(legtobbObj) {
	console.log(legtobbObj)
	var vevotable = "<table><tr><th>Év</th><th>Hónap</th><th>Név</th><th>Összeg</th></tr>";

	for (var a = 0; a < legtobbObj.length; a++) {
		var vevo = legtobbObj[a];
		vevotable = vevotable + "<tr><td>" + vevo.ev + "</td><td>" + vevo.honap + "</td><td>" + vevo.nev + "</td><td>" + vevo.osszeg + "</td></tr>";

	}
	vevotable = vevotable + "</table>";
	document.getElementById('content').innerHTML = vevotable;
}

function legnagyobbVevo(legnagyobbVevoObj) {
	console.log(legnagyobbVevoObj)
	var legnagyobbVevoTable = "<table><tr><th>Név</th><th>Összeg</th></tr>"

	for (var b = 0; b < legnagyobbVevoObj.length; b++) {
		var legnagyobb = legnagyobbVevoObj[b];
		legnagyobbVevoTable = legnagyobbVevoTable + "<tr><td>" + legnagyobb.nev + "</td><td>" + legnagyobb.osszeg + "</td></tr>";
	}
	legnagyobbVevoTable = legnagyobbVevoTable + "</table>";
	document.getElementById('content').innerHTML = legnagyobbVevoTable;
}

function email(emailObj) {
	console.log(emailObj)
	var emailTable = "<table><tr><th>Név</th><th>Email</th></tr>"
	for (var c = 0; c < emailObj.length; c++) {
		var email2 = emailObj[c];
		emailTable = emailTable + "<tr><td>" + email2.nev + "</td><td>" + email2.email + "</td></tr>";
	}
	emailTable = emailTable + "</table>"
	document.getElementById('content').innerHTML = emailTable;
}

function termekarak(termekarakobj) {
	console.log(termekarakobj)
	var termekarakTable = "<table><tr><th>Ár</th></tr>"
	for (var q = 0; q < termekarakobj.length; q++) {
		var termekarak1 = termekarakobj[q];
		termekarakTable = termekarakTable + "<tr><td>" + termekarak1.osszeg + "</td></tr>"

	}
	termekarakTable = termekarakTable + "</table>"
	document.getElementById('content').innerHTML = termekarakTable;
}

function pesti(pestiObj) {
	console.log(pestiObj)
	var pestitable = "<table><tr><th>Pesti felhasználók</th></tr>"

		pestitable = pestitable + "<tr><td>" + pestiObj[0].pesti_felhasznalok_szama + "</td></tr>"

	pestitable = pestitable + "</table>"
	document.getElementById('content').innerHTML = pestitable;
}
function rendeles_arak(rendelesArakObj){
console.log(rendelesArakObj)
var rendelesArakTable = "<table><tr><th>Ár</th></tr>"

rendelesArakTable =rendelesArakTable+"<tr><td>"+rendelesArakObj[0].ar+"</td></tr></table>"
document.getElementById('content').innerHTML = rendelesArakTable; 
}
function dropdownChanged() {
	var kivalasztottErtek = document.getElementById("lekerdezes").value;
	switch (kivalasztottErtek) {
		case "OsszesTermek":
			var sqlText = "SELECT termek_nev, fajta, ero, szin, kiszereles, ar FROM termek ORDER BY ero DESC";
			sql(sqlText, termekmegjelenit);
			break;
		case "RendezesNevASC":
			var sqlText = "SELECT termek_nev, fajta, ero, szin, kiszereles, ar FROM termek ORDER BY termek_nev";
			sql(sqlText, termekmegjelenit);
			break;
		case "RendezesNevDesc":
			var sqlText = "SELECT termek_nev, fajta, ero, szin, kiszereles, ar FROM termek ORDER BY termek_nev DESC";
			sql(sqlText, termekmegjelenit);
			break;
		case "RendezesEroASC":
			var sqlText = "SELECT termek_nev, fajta, ero, szin, kiszereles, ar FROM termek ORDER BY ero";
			sql(sqlText, termekmegjelenit);
			break;
		case "RendezesEroDesc":
			var sqlText = "SELECT termek_nev, fajta, ero, szin, kiszereles, ar FROM termek ORDER BY ero DESC";
			sql(sqlText, termekmegjelenit);
			break;
		case "RendezesArASC":
			var sqlText = "SELECT termek_nev, fajta, ero, szin, kiszereles, ar FROM termek ORDER BY ar";
			sql(sqlText, termekmegjelenit);
			break;
		case "RendezesArDesc":
			var sqlText = "SELECT termek_nev, fajta, ero, szin, kiszereles, ar FROM termek ORDER BY ar DESC";
			sql(sqlText, termekmegjelenit);
			break;
		case "RendezesNepszeru":
			var sqlText = "SELECT termek.termek_nev AS nepszeruseg FROM kosar INNER JOIN termek ON termek.id=kosar.termek_id GROUP BY termek.termek_nev ORDER BY SUM(kosar.db) DESC";
			sql(sqlText, nepszerusegmegj, refreshDocument);
			break;
		case "legtobbVevoHavi":
			var sqlText = "SELECT * FROM (SELECT YEAR(kosar.datum) as ev, MONTH(kosar.datum) as honap, vasarlo.nev, SUM(kosar.db*kosar.ar) as osszeg FROM rendeles INNER JOIN vasarlo ON vasarlo.id=rendeles.vasarlo_id INNER JOIN kosar ON rendeles.id=kosar.rendeles_id GROUP BY vasarlo.nev, MONTH(kosar.datum), YEAR(kosar.datum) order by ev, honap, osszeg DESC) as vasarlasok GROUP BY honap";
			sql(sqlText, legtobbVevoHavimegj, refreshDocument);
			break;
		case "legtobbVevo":
			var sqlText = "SELECT vasarlo.nev, SUM(kosar.db*kosar.ar) as osszeg FROM rendeles INNER JOIN vasarlo ON vasarlo.id=rendeles.vasarlo_id INNER JOIN kosar ON rendeles.id=kosar.rendeles_id group BY vasarlo.nev Order by osszeg DESC limit 1";
			sql(sqlText, legnagyobbVevo, refreshDocument);
			break;
		case "Hirlevel":
			var sqlText = "SELECT vasarlo.nev, vasarlo.email FROM vasarlo LEFT JOIN rendeles ON vasarlo.id=rendeles.vasarlo_id WHERE rendeles.id is null and vasarlo.hirlevel <>0";
			sql(sqlText, email, refreshDocument);
			break;
		case "termekarak":
			var sqlText = "SELECT SUM(ar*keszlet) as osszeg FROM termek";
			sql(sqlText, termekarak, refreshDocument)
			break;
		case "pesti_felh":
			var sqlText = "SELECT COUNT(id) AS 'pesti_felhasznalok_szama' FROM vasarlo WHERE szamla_varos LIKE '%Budapest%'";
			sql(sqlText, pesti, refreshDocument)
			break;
			case "rendelesarak":
			var sqlText = "SELECT sum(ar) as ar FROM rendeles JOIN kosar ON rendeles.id=kosar.rendeles_id";
			sql(sqlText, rendeles_arak ,refreshDocument);
			break;

		default: 
			document.getElementById('content').innerText = "";
	}
}