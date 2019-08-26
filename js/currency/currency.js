var currency = {
	usdLocation: '.currency_usd',
	updateInterval: 60000,
	dataIntervalId: null,
//	currentTemp: "--" + "&deg;",
};

/**
 * Updates the time that is shown on the screen
 */
currency.updateCurrency = function () {
	$.ajax({
		url:"http://cors-anywhere.herokuapp.com/" + 'http://www.cbr.ru/scripts/RssCurrency.asp',
		success: function (data) {

                    var $xml = $(data);
		    $xml.find("item").each(function() {

		    var $this = $(this),
			item = {
				title: $this.find("title").text(),
 				data: $this.find("description"),
			}

			var raw_data=item.data[0].textContent;

			var C = '\u0421';
			var Sh = '\u0428';
			var A = '\u0410';
			var idx = raw_data.indexOf(C+Sh+A);

			if (idx > 0) {
				raw_data = raw_data.substring(idx);
				end_idx = raw_data.indexOf("<br>");
				raw_data = $.trim(raw_data.substring(5, end_idx));
                                raw_data = "USD/RUR: " + raw_data;
				
			//var raw_data1=item.data[0].find("");
//find("CDATASection");
                        //alert(item.title);
				//alert(raw_data);
				$(currency.usdLocation).updateWithText(raw_data);
			}

                    });
                    
                    //temperature.currentTemp = currentTemp;
                    //$(currency.usdLocation).updateWithText(currentTemp);
		}

		
	});
}

currency.init = function () {

	this.updateCurrency(this.updateCurrency.bind(this));

	this.dataIntervalId = setInterval(function () {
		this.updateCurrency(this.updateCurrency.bind(this));
	}.bind(this), this.updateInterval);
}