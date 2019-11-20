$(function () {
    var totalFotos = $(".galeria img");
    var imgActual = 0;

    $(".galeria img").click(function () {
        var img = new Image();
        imgActual = $(this).index();
        img.src = this.src;
        $('#modal-img').html(img);
        $("#myModal").modal({keyboard: true});
    });

    $('#izq').click(function () {
        if (imgActual === 0) {
            imgActual = totalFotos.length - 1;
        } else {
            imgActual--;
        }
        console.log(imgActual);
        var img = new Image();
        img.src = totalFotos[imgActual].src;
        $('#modal-img').html(img);
    });

    $('#der').click(function () {
        if (imgActual === (totalFotos.length - 1)) {
            imgActual = 0;
        } else {
            imgActual++;
        }
        var img = new Image();
        img.src = totalFotos[imgActual].src;
        $('#modal-img').html(img);
    });

    $(document).keydown(function (e) {
        switch (e.which) {
            case 37: // left
                $( "#izq" ).trigger( "click" );
                break;

            case 39: // right
                $( "#der" ).trigger( "click" );
                break;
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });
});
