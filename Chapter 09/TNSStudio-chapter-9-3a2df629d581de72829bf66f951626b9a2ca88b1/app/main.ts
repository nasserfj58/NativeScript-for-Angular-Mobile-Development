// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from 'nativescript-angular';

import { AppModule } from './app.module';

const platform = platformNativeScriptDynamic();
platform.bootstrapModule(AppModule);
