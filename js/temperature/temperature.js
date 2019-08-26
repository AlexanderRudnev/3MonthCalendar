var temperature = {
	temperatureLocation: '.temperature',
	updateInterval: 60000,
	dataIntervalId: null,
	currentTemp: "--" + "&deg;",
};

/**
 * Updates the time that is shown on the screen
 */
temperature.updateTemperature = function () {
	$.ajax({
		url:'i2c_temperature',
		success: function (data) {
		    var currentTemp;
		    if (data.length < 10) {
	  		currentTemp = $.trim(data) + '&deg;';
		    } else {
			currentTemp = "";
		    }
                    temperature.currentTemp = currentTemp;
                    $(temperature.temperatureLocation).updateWithText(currentTemp);
		}
	});
}

temperature.init = function () {

	this.updateTemperature(this.updateTemperature.bind(this));

	this.dataIntervalId = setInterval(function () {
		this.updateTemperature(this.updateTemperature.bind(this));
	}.bind(this), this.updateInterval);
}