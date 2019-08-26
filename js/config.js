var config = {
    lang: 'ru',
    time: {
        timeFormat: 24,
        displaySeconds: true,
        digitFade: false,
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: [
		{
			q: 'Moscow, Russia',
			units: 'metric',
		        // if you want a different lang for the weather that what is set above, change it here
		        lang: 'ru',
		        APPID: '<your_app_id>'
	        },
		{
			q: 'Saint Petersburg, Russia',
			units: 'metric',
		        // if you want a different lang for the weather that what is set above, change it here
		        lang: 'ru',
		        APPID: '<your_app_id>'
	        },
		{
			q: 'Kingisepp, Russia',
			units: 'metric',
		        // if you want a different lang for the weather that what is set above, change it here
		        lang: 'ru',
		        APPID: '<your_app_id>'
	        },
		]
    },
    compliments: {
        interval: 30000,
        fadeInterval: 1,
        morning: [
        ],
        afternoon: [
        ],
        evening: [
        ]
    },
    calendar: {
        maximumEntries: 7, // Total Maximum Entries
		displaySymbol: true,
		defaultSymbol: 'calendar', // Fontawsome Symbol see http://fontawesome.io/cheatsheet/
        urls: [

		{
			symbol: 'calendar-plus-o', 
			url: '<put your calendar URL here>'
		},
		// {
			// symbol: 'mars',
			// url: "https://server/url/to/his.ics",
		// },
		// {
			// symbol: 'venus',
			// url: "https://server/url/to/hers.ics",
		// },
		// {
			// symbol: 'venus-mars',
			// url: "https://server/url/to/theirs.ics",
		// },
		]
    },
    news: {
        feed: 'http://static.feed.rbc.ru/rbc/internal/rss.rbc.ru/rbc.ru/mainnews.rss'
    }
}
