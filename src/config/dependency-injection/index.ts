import { asClass, createContainer, InjectionMode } from 'awilix';

import { StatusGetController } from '../../modules/status/controllers/StatusGetController';

const container = createContainer({ injectionMode: InjectionMode.CLASSIC, strict: true });

container.register({
	statusGetController: asClass(StatusGetController),
});

for (const registration of Object.keys(container.registrations)) {
	try {
		container.resolve(registration);
		console.log(`Dependency <${registration}> was resolved successfully`);
	} catch (error) {
		console.error(`Error resolving the dependency <${registration}>`, error);
	}
}

export default container;
