[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![npm version](https://badge.fury.io/js/ngx-social-share.svg)](https://badge.fury.io/js/ngx-social-share)


# Description
ngx-socilal-share - simple directive for sharing your pages via facebook, google+ or twitter

# Usage
Install package
```sh
npm i ngx-social-share
```
Add import to your module
```js
import { NgxSocialShareModule } from 'ngx-social-share';

@NgModule({
  imports: [
    ...
    NgxSocialShareModule,
    ],
  declarations: [],
  providers: []
})
```

Add `[socialShare]="label_here"` to any of your elements or components
```html
<div>
  <div [socialShare]="'fb'">Facebook</div>
  <div [socialShare]="'tw'">Twitter</div>
  <div [socialShare]="'in'">Linkdedin</div>
  <div [socialShare]="'tr'">Tumblr</div>
  <div [socialShare]="'rd'">Reddit</div>
  <div [socialShare]="'pn'">Pinterest</div>
</div>
```
On click this element will share `current opened` page to social

### Current Labels
- 'fb' - Facebook
- 'tw' - Twitter
- 'in' - LinkedIn
- 'tr' - Tumblr
- 'rd' - Reddit
- 'pn' - Pinterest
