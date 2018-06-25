import { DomSanitizer, SafeScript } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'safeScript', pure: false })
export class SafeScriptPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }

    transform(content): SafeScript {
        return this.sanitizer.bypassSecurityTrustScript(content);
    }
}
