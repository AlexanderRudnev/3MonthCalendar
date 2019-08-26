<html>
<head>
	<title>3 Month Calendar</title>
	<style type="text/css">
		<?php include('css/main.css') ?>
	</style>
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="stylesheet" type="text/css" href="css/weather-icons.css">
	<link rel="stylesheet" type="text/css" href="css/font-awesome.css">
	<script type="text/javascript">
		var gitHash = '<?php echo trim(`git rev-parse HEAD`) ?>';
	</script>
	<meta name="google" value="notranslate" />
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	<meta http-equiv="refresh" content="6000" />
	<link rel="icon" href="data:;base64,iVBORw0KGgo=">
</head>
<body>
	<div class="calendar_area">
          <div class="monthcalendar">
            <table class="month_table" id="calendar-prev">
	    <tbody id="calendar-body-prev">
            </tbody></table>
            <table class="month_table" id="calendar-curr">
	    <tbody class="month_table_np" id="calendar-body-curr">
            </tbody></table>
            <table class="month_table" id="calendar-next">
	    <tbody id="calendar-body-next">
            </tbody></table>
          </div>
        </div>
	<!--<div class="top center-hor"><div class="currency_usd small dimmed"></div></div>-->
	<div class="top center-hor"><div class="date medium dimmed"></div></div>


<script src="js/currency/currency.js"></script><!-- -->
<script src="js/jquery.js"></script><!-- -->
<!--<script src="js/jquery.feedToJSON.js"></script><!-- -->
<!--<script src="js/ical_parser.js"></script><!-- -->
<script src="js/moment-with-locales.min.js"></script><!-- -->
<script src="js/config.js"></script><!-- -->
<!--<script src="js/rrule.js"></script><!-- -->
<!--<script src="js/version/version.js"></script><!-- -->
<!--<script src="js/calendar/calendar.js"></script><!-- -->
<script src="js/monthcalendar/monthcalendar.js"></script><!-- -->
<!--<script src="js/compliments/compliments.js"></script><!-- -->
<!--<script src="js/weather/weather.js"></script><!-- -->
<!--<script src="js/weather/weatherContainer.js"></script><!-- -->
<script src="js/time/time.js"></script><!-- -->
<!--<script src="js/news/news.js"></script><!-- -->
<!--<script src="js/temperature/temperature.js"></script><!-- -->

<script src="js/main.js?nocache=<?php echo md5(microtime()) ?>"></script>
<!-- <script src="js/socket.io.min.js"></script> -->
<?php  include(dirname(__FILE__).'/controllers/modules.php');?>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
</body>
</html>
