/* Aquí va el script para generar la visualización. */

sparql(
    // Consulta
    "SELECT ?region ?comuna ?ano ?total " +
    "WHERE { GRAPH <http://verdata.cl/graphs/accidentesTransitoChile2010_2011_v2> { " +
	"?x <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.org/accidentes/vocabulary#Region> ."+
	"?x <http://www.w3.org/2000/01/rdf-schema#label> ?region ."+
	"?y <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.org/accidentes/vocabulary#Comuna> ."+
	"?y <http://example.org/accidentes/vocabulary#belong_to> ?x ."+
	"?y <http://example.org/accidentes/vocabulary#has_one> ?z ."+
	"?y <http://www.w3.org/2000/01/rdf-schema#label> ?comuna ."+
	"?z <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.org/accidentes/vocabulary#Atropello> ."+
	"?z <http://example.org/accidentes/vocabulary#cantidad> ?total ."+
	"?z <http://example.org/accidentes/vocabulary#year> 2010 ."+
	"?z <http://example.org/accidentes/vocabulary#year> ?ano . } }",
	
    // Acción
    function(data) {
	$.each(data.results.bindings, function(index, value) {
	    $('table#named-graph-list').append(
		$('<tr>')
		    .append($('<td>').text(value.region.value))
		    .append($('<td>').text(value.comuna.value))
		    .append($('<td>').text(value.ano.value))
			.append($('<td>').text(value.total.value))
	    );
	});
    });
