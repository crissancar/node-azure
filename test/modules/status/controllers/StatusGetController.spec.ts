import request from 'supertest';

import { App } from '../../../../src/server/App';

let _request: request.Test;
let _response: request.Response;
let app: App;

describe('StatusGetController', () => {
	it('should return 200', async () => {
		const url = '/status';

		_request = request(app.httpServer).get(url);

		_response = await _request.expect(200);
	});
});

beforeAll(async () => {
	app = new App();
	await app.start();
});

afterAll(async () => {
	await app.stop();
});
