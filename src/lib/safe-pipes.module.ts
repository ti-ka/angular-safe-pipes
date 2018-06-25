import { NgModule } from '@angular/core';
import { SafeHtmlPipe } from './safe-html.pipe';
import { SafeResourceUrlPipe } from './safe-resource.pipe';
import { SafeScriptPipe } from './safe-script.pipe';
import { SafeStylePipe } from './safe-style.pipe';
import { SafeUrlPipe } from './safe-url.pipe';

@NgModule({
    imports: [
    ],
    declarations: [
        SafeHtmlPipe,
        SafeResourceUrlPipe,
        SafeScriptPipe,
        SafeStylePipe,
        SafeUrlPipe,
    ],
    exports: [
        SafeHtmlPipe,
        SafeResourceUrlPipe,
        SafeScriptPipe,
        SafeStylePipe,
    ]
})
export class SafePipesModule { }
