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
      case 'tw':
        window.open(`https://twitter.com/home?status=${url}`);
        break;
      case 'in':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`);
        break;
      case 'tr':
        window.open(`https://www.tumblr.com/widgets/share/tool?canonicalUrl=${url}`);
        break;
      case 'dg':
        window.open(`http://digg.com/submit?url=${url}`);
        break;
      case 'rd':
        window.open(`https://reddit.com/submit?url=${url}`);
        break;
      case 'pn':
        window.open(`https://www.pinterest.com/pin/find/?url=${url}`);
        break;
      default:
        break;
    }

  }

}
