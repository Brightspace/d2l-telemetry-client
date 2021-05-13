export class Client {
	constructor(options) {
		this.options = options;
	}

	logUserEvent(event) {
		if (!this.options.endpoint) {
			return;
		}

		var requestObject = {
			method: 'POST'
		};

		if (event) {
			requestObject.body = JSON.stringify(event.toJSON());
		}

		var request = new Request(this.options.endpoint, requestObject);
		return window.d2lfetch.fetch(request);
	}
}
