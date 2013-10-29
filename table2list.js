/* ****************************************
   
   table2list utility
   Author: Marcelo Guzman (marcelo@marceloguzman.com)
   https://github.com/marceloguzman/table2list

   **************************************** */



$(document).ready(function () {

	console.log("empieza trabajo..");

});

// ************************************************************************

function crear_cols(tabla) {

	var columns = $(tabla + ' thead th').map(function () {
		// This assumes that table headings exist and are suitable to be used as object keys. 
		return ($(this).text());
	});

	return columns;
}


function crear_filas(tabla, columns) {

	var tableObject = $(tabla + ' tbody  tr').map(function (i) {
		var row = {};

		// Find all of the table cells on this row.
		$(this).find('td').each(function (i) {
			row[columns[i]] = $(this).text(); //columns[i] is the the cell's column name
		});
		
		return row; //  return the row's object to be included in the result array.
		
	}).get();  // .get() => to convert the jQuery set to a regular array.


	return tableObject;
}

// ************************************************************************

function medio(tabla, primero, ultimo, otro) {

	var columns = crear_cols(tabla);
	var filas = crear_filas(tabla, columns);

	var resp = "";
	resp += "<ul class='table2list_result'> ";


	for (var i = 0; i < filas.length; i++) {

		var total = columns.length - 1;

		for (var n = 0; n <= total; n++) {
			if (n == 0) {
				resp += "<li>" + filas[i][columns[0]] + "<ul>";
			} else {

				resp += "<li>" + columns[n] + ": " + filas[i][columns[n]] + "</li>";
			}
			/*
			switch (n) {
			case 0:
				resp += primero;
				break;
			case total - 1:
				resp += ultimo;
				break;
			case total:
				resp += "";
				break;
			default:
				resp += otro;
			}
*/
			if (n == total) {
				resp += "</ul>";
			}
		}


		resp += "</li>";

	}


	resp += "</ul>";


	$(resp).insertAfter(tabla);
	//console.log (resp);
	return false;
}

// ************************************************************************

function basico(tabla, primero, ultimo, otro) {

	var columns = crear_cols(tabla);
	var filas = crear_filas(tabla, columns);

	var resp = "<ul class='table2list_result'> ";


	for (var i = 0; i < filas.length; i++) {
		resp += "<li>";

		var total = columns.length - 1;

		for (var n = 0; n <= total; n++) {
			resp += filas[i][columns[n]];

			switch (n) {
			case 0:
				resp += primero;
				break;
			case total - 1:
				resp += ultimo;
				break;
			case total:
				resp += "";
				break;

			default:
				resp += otro;
			}


		}


		resp += "</li>";

	}


	resp += "</ul>";



	$(resp).insertAfter(tabla);

	return false;
}

// ************************************************************************