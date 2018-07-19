import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MessagesMenuService, NotificationsMenuService, SideMenuService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './styles/app.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  @ViewChild('drawerContainer') drawerContainer;
  @ViewChild('sideMenu') sideMenu;
  @ViewChild('sideNotifications') sideNotifications;

  notifications = [];
  messages = [];

  constructor(
    private sideMenuService: SideMenuService,
    private notificationsMenuService: NotificationsMenuService,
    private messagesMenuService: MessagesMenuService
  ) {
    notificationsMenuService.getNotifications().then((notifications: any) => {
      this.notifications = notifications;
    });
    messagesMenuService.getMessages().then((messages: any) => {
      this.messages = messages;
    });
  }

  ngAfterViewInit(): void {
    this.sideMenuService.sidenav = this.sideMenu;
    this.sideMenuService.drawerContainer = this.drawerContainer;
    this.notificationsMenuService.sidenav = this.sideNotifications;
  }
}
