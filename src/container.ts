import {
  asFunction,
  asValue,
  AwilixContainer,
  createContainer,
  InjectionMode,
} from 'awilix';

import config, { Config } from './config';
import myStuff, { MyStaff } from './module';
import http, { HttpInterface } from './interfaces/http';

interface Registry {
  myStuff: MyStaff;
  config: Config;
  http: HttpInterface;
}

type Container = AwilixContainer<Registry>;
export type { Container, Registry };

export default () => {
  // Create the container
  const container = createContainer<Registry>({
    injectionMode: InjectionMode.PROXY,
  });

  // Register the classes
  container.register({
    myStuff: asValue(myStuff),
    config: asValue(config),
    http: asFunction(http).singleton(),
  });

  return {
    // Hide details specific to Awilix container
    resolve: container.cradle,
  };
};
