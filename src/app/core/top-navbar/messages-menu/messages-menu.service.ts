import { Injectable, Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

@Injectable()
export class MessagesMenuService {
  baseUrl = '';

  constructor(
    @Inject(APP_BASE_HREF) private baseHref: string
  ) {
    this.baseUrl = baseHref;
  }

  messages = [
    {
      image: this.baseUrl + '/assets/imgs/profiles/profile1.jpeg',
      username: 'Juana de Arco',
      title: 'Important message',
      text: 'Hello there',
      time: 'JUST NOW'
    },
    {
      image: this.baseUrl + '/assets/imgs/profiles/profile4.jpeg',
      username: 'Harley Wapasha',
      title: 'Important message',
      text: 'Hello there',
      time: 'Yesterday'
    },
    {
      image: this.baseUrl + '/assets/imgs/profiles/profile3.jpeg',
      username: 'Sandra Adams',
      title: 'Important message',
      text: 'Hello there',
      time: 'June 4'
    },
    {
      image: this.baseUrl + '/assets/imgs/profiles/profile2.jpeg',
      username: 'Ali Connors',
      title: 'Important message',
      text: 'Hello there',
      time: 'June 2'
    }
  ];

  getMessages(): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve (this.messages), 1000);
    });
  }

}
