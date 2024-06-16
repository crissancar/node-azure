import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { version } from '../../../../package.json';

export class StatusGetController {
	run(req: Request, res: Response): void {
		res.status(httpStatus.OK).json({ message: 'Hello Azure!', packageVersion: version });
	}
}
