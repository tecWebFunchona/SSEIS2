<!DOCTYPE html>
<html lang="en">
<head>
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
    <!-- Stylesheets
    ============================================= -->
    <!--<link href="http://fonts.googleapis.com/css?family=Lato:300,400,400italic,600,700|Raleway:300,400,500,600,700|Crete+Round:400italic" rel="stylesheet" type="text/css" />-->
    <link rel="stylesheet" href="../../../css/bootstrap.css" type="text/css" />

    <link rel="stylesheet" href="../../../css/dark.css" type="text/css" />
    <link rel="stylesheet" href="../../../css/font-icons.css" type="text/css" />
    <link rel="stylesheet" href="../../../css/animate.css" type="text/css" />
    <link rel="stylesheet" href="../../../css/magnific-popup.css" type="text/css" />
    <link rel="stylesheet" href="../../../css/responsive.css" type="text/css" />
    <link rel="stylesheet" href="../../../css/colors.css" type="text/css" />
    <link rel="stylesheet" href="../../css/estilosescom.css" type="text/css" />
    <link rel="stylesheet" href="../../css/estilocontacto.css" type="text/css" />
	<link rel="stylesheet" href="../../../css/escom.css" type="text/css">
    <!--<link rel="stylesheet" href="css/estilos2.css">-->
	<link rel="stylesheet" href="css/video-js.css">
     <link rel="stylesheet" href="css/style.css">
 


    <!-- External JavaScripts
    ============================================= -->
    <script type="text/javascript" src="../../../js/jquery-2.1.4.min.js"></script>
    <script type="text/javascript" src="../../../js/plugins.js"></script>
    <script type="text/javascript" src="../../../js/flowtype.js"></script>
	<script type="text/javascript" src="../../../js/ctce.js"></script>
	<script src="js/video.js"></script>
    <script src="https://unpkg.com/scrollreveal/dist/scrollreveal.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function(e) {
            //Texto Responsivo
            $("body").flowtype({
                minimum:320,
                maximum:1920,
                minFont: 10,
                maxFont: 14
            });
        });
    </script>
    <title>SSEIS</title>
</head>
<body class="stretched" data-loader="12" data-loader-color="#006699">
	 <!-- Header
    ============================================= -->
    <header id="header" class="sticky-style-3" data-sticky-offset="110">
        <div class="container clearfix">
           <div id="menuSEPIPN"><?php include("../../../htmls/comunes/menuSEPIPN.html"); ?></div>
        </div>
        <div id="header-wrap">
            <div id="menuESCOM"><?php include("../../../htmls/comunes/menuESCOM.html"); ?></div>
        </div>
    </header>

    <div class="video-wrap">
			<video class="fm-video video-js vjs-fluid placeholder" controls preload="auto" data-setup="{}" controls id="fm-video">
			<source src="../../../images/videos/movilidad.mp4" type="video/mp4">
	</video>
			
	</div>



	
	   <!--  Sección del pie  -->
	   <footer id="footer" class="dark">
        <?php include("../../../htmls/comunes/pie.html"); ?>
          
            <!-- Fin de Sección del pie  -->
    </footer>
    
    <!-- Footer Scripts
    ============================================= -->
    <script type="text/javascript" src="../../../js/functions.js"></script>
    <script type="text/javascript" src="../../../js/facebook.js"></script>
    <script type="text/javascript" src="../../js/wow.min.js"></script>
    <script type="text/javascript" src="../../js/scripts.js"></script>

	<script>
		var reproductor = videojs('fm-video', {
			fluid: true
		});
	</script>
</body>
</html>