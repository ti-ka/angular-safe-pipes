# Safe Pipes for Angular Property Binding:
Note: use only when you know things are safe:

> Ever came across this issue and thought- URGHH!!! It's f*cking safe!
core.js:7930 WARNING: sanitizing unsafe URL value blob:http://localhost:4200/15ae0ef0-d628-4506-b574-7e5526e0b92d (see http://g.co/ng/security#xss)

Usage:
```html
<img [src]="url | safeUrl" />
<img [src]="blobUrl | safeResourceUrl" />
<div [innerHTML]="blobUrl | safeHTML" />
<div [style]="blobUrl | safeStyle" />
```
