import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

@Injectable()
export class LayoutsService {

  baseUrl = '';

  constructor(
    private http: HttpClient,
    @Inject(APP_BASE_HREF) private baseHref: string
  ) {
    this.baseUrl = baseHref;
  }

  getListsData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + '/assets/data/lists.json')
      .subscribe(
        data => resolve (data),
        err => reject()
      );
    });
  }

  getCardsData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + '/assets/data/cards.json')
      .subscribe(
        data => resolve (data),
        err => reject()
      );
    });
  }

}
