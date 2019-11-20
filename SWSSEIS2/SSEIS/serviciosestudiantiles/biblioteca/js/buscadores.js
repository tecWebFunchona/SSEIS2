(function() {
    $('#busquedadigital').click('submit', function () {
        var consulta = $('#bdigital').val();
        $('#busquedadigital').attr('href', 'http://www.busqueda.dirbibliotecas.ipn.mx/F/-/?func=find-b&find_code=WRD&request=' + consulta);
        $('#busquedadigital').attr('target', '_blank');
    });
    $('#busquedaconricyt').click('submit', function () {
        var consulta1 = $('#bconricyt').val();
        $('#busquedaconricyt').attr('href', 'http://conricyt1.summon.serialssolutions.com/search?fvf=IsFullText%2Ctrue%2Cf&ho=t&q=(' + consulta1 + ')');
        $('#busquedaconricyt').attr('target', '_blank');
    });
    $('#busquedatesis').click('submit', function () {
        var consulta2 = $('#btesis').val();
        $('#busquedatesis').attr('href', 'http://tesis.ipn.mx/discover?scope=%2F&query=' + consulta2);
        $('#busquedatesis').attr('target', '_blank');
    });
    $('#busquedarepositorio').click('submit', function () {
        var consulta3 = $('#brepo').val();
        $('#busquedarepositorio').attr('href', 'http://www.repositoriodigital.ipn.mx/simple-search?query=' + consulta3);
        $('#busquedarepositorio').attr('target', '_blank');
    });
    $('#busquedarevistas').click('submit', function () {
        var consulta4 = $('#brevista').val();
        $('#busquedarevistas').attr('href', 'http://rc9kc2hb9u.search.serialssolutions.com/ejp/?libHash=RC9KC2HB9U#/search/?searchControl=title&searchType=alternate_title_begins&criteria=' + consulta4);
        $('#busquedarevistas').attr('target', '_blank');
    });
})();
