import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app2/app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
