<!DOCTYPE html>
<html lang="es">
<head>
    <!--
        User: alanhernandez
        Date: 06/08/17
        Time: 01:47
        Description: Página principal de extensión y apoyos educativos
 -->
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta property="og:url" content="http://www.isc.escom.ipn.mx" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Escuela Superior de C&oacute;mputo - IPN" />
    <meta property="og:description" content="Sitio Web Oficial de la Escuela Superior de C&oacute;mputo del Instituto Polit&eacute;cnico Nacional." />
    <meta property="og:image" content="http://www.isc.escom.ipn.mx/images/escudoESCOM.jpg" />
    <meta property="og:image:width" content="1284" />
    <meta property="og:image:height" content="800" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="description" content="Sitio Web Oficial de la Escuela Superior de C&oacute;mputo del Instituto Polit&eacute;cnico Nacional">
    <meta name="keywords" content="ESCOM, IPN, ISC, Ingenier&iacute;a, Sistemas, Computacionales, Maestr&iacute;a, M&oacute;viles">
    <meta name="author" content="ESCOM-IPN">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="../../images/icon.png" type="image/png" sizes="32x32">

    <!-- Hojas de Estilos
    ============================================= -->
    <link rel="stylesheet" href="../../css/bootstrap.css" type="text/css" />
    <link rel="stylesheet" href="../../css/style.css" type="text/css" />
    <link rel="stylesheet" href="../../css/dark.css" type="text/css" />
    <link rel="stylesheet" href="../../css/font-icons.css" type="text/css" />
    <link rel="stylesheet" href="../../css/animate.css" type="text/css" />
    <link rel="stylesheet" href="../../css/magnific-popup.css" type="text/css" />
    <link rel="stylesheet" href="../css/estilosescom.css" type="text/css" />
    <link rel="stylesheet" href="../css/estilocontacto.css" type="text/css" />
    <link rel="stylesheet" href="../css/servicios.css" type="text/css" />
    <link rel="stylesheet" href="../../css/responsive.css" type="text/css" />
    <link rel="stylesheet" href="../../css/colors.css" type="text/css" />
    <link rel="stylesheet" href="../css/seisresponsive.css" type="text/css" />

    <!-- JavaScripts Externos
    ============================================= -->
    <script type="text/javascript" src="../../js/jquery-2.1.4.min.js"></script>
    <script type="text/javascript" src="../../js/plugins.js"></script>
    <script type="text/javascript" src="../../js/flowtype.js"></script>
    <script type="text/javascript" src="../../js/ctce.js"></script>
    <script type="text/javascript" src="../js/texto-responsive.js"></script>
    <title>..::SSEIS::Extensión y Apoyos Educativos::..</title>
</head>
<body class="stretched" data-loader="12" data-loader-color="#006699">
    <div id="wrapper" class="clearfix">
    <a id="inicio"></a>
    <!-- Barra del gobierno superior
        ============================================= -->
    <?php include("../../menus/menuGob.html"); ?>

    <!-- Encabezado del IPN y ESCOM
        ============================================= -->
    <header id="header" class="sticky-style-2">
        <?php include("../../menus/menuInstitucional.html"); ?>
        <?php include("../../menus/menuESCOM.html"); ?>
    </header>

    <!-- Contenido
        ============================================= -->
    <?php include('contenido/main.html'); ?>

    <!--  Sección del pie  -->
    <footer id="footer" class="dark">
        <?php
        include("../../contenido/pie.html");
        include("../../contenido/pieGob.html");
        ?>
        <!-- Fin de Sección del pie  -->
    </footer>

    <!-- Javascripts del pie de página
        ============================================= -->
    <script src="https://use.fontawesome.com/63277dbbde.js"></script>
    <script type="text/javascript" src="../../js/functions.js"></script>
    <script type="text/javascript" src="../../js/facebook.js"></script>
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-12373942-1', 'auto');
        ga('send', 'pageview');
    </script>
</body>
</html>




