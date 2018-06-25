import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'safeResourceUrl', pure: false })
export class SafeResourceUrlPipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) {
    }

    transform(content): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(content);
    }
}
