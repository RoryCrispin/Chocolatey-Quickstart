// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// 
export * from './app.component';
// export * from './app.module';

// platformBrowserDynamic().bootstrapModule(AppModule);


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

