(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.6";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

	$(document).ready(function(e) {
		var facebookPageId      = $("div#facebook").attr("data-facebook");
		var $facebookPage       = $('#facebook');
		var facebookPageWidth   = $facebookPage.width();
		var facebookPageContent = '<div class="fb-page" data-href="https://www.facebook.com/'+facebookPageId+'" data-tabs="timeline" data-width="440" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"></div>';
		
		$(window).resize(function(e) {
            $facebookPage.empty();
			$facebookPage.html(facebookPageContent);
			FB.XFBML.parse();
        });
	});