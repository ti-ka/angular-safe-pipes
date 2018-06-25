import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({ name: 'safeUrl', pure: false })
export class SafeUrlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }

    transform(content): SafeUrl {
        return this.sanitizer.bypassSecurityTrustUrl(content);
    }
}
