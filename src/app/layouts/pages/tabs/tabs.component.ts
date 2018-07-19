import { Component, ViewEncapsulation, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-tabs-page',
  templateUrl: './tabs.component.html',
  styleUrls: ['./styles/tabs.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabsPageComponent {
  data: any = {};
  isBrowser: boolean;

  constructor(
    route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.data = route.snapshot.data['data'];
    // <canvas> element is not yet supported by the SSR DOM implementation
    // See: https://github.com/angular/universal-starter/issues/538#issuecomment-365518693
    this.isBrowser = isPlatformBrowser(platformId);
  }
}
