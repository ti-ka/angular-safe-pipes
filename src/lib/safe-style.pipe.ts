import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'safeStyle', pure: false })
export class SafeStylePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }

    transform(content): SafeStyle {
        return this.sanitizer.bypassSecurityTrustStyle(content);
    }
}
