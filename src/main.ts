
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error('An error occurred during bootstrap:', err));
