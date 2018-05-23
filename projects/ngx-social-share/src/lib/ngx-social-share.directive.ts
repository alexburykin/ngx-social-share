import { Directive, HostListener, Input } from '@angular/core';

@Directive({ selector: '[socialShare]' })

export class SocialShareDirective {

  @Input('socialShare') socialShare: string;

  @HostListener('click') onMouseEnter() {

    const url = encodeURIComponent(window.location.href);

    switch (this.socialShare) {
      case 'fb':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
        break;
      case 'gp':
        window.open(`https://plus.google.com/share?url=${url}`);
        break;
      case 'tw':
        window.open(`https://twitter.com/home?status=${url}`);
        break;
      default:
        break;
    }

  }

}
