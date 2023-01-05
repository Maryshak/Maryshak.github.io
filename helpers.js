// Interval throttling detector

(() => {
	let time = Date.now();

	setInterval(() => {
		if (Date.now() - time >= 1200) {
			console.warn('INTERVAL THROTTLE', Date.now() - time);
		}

		time = Date.now();
	}, 1000);
})();

