import { TabsPage } from '../tabs/tabs'
import { TestBed } from '@angular/core/testing'
import { IonicModule, Platform } from 'ionic-angular';
import { PlatformMock, StatusBarMock, SplashScreenMock } from 'ionic-mocks'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

describe('TabsComponent', () => {
  let fixture, component;

  beforeEach(() =>  {
    TestBed.configureTestingModule({
      declarations: [
          TabsPage
        ],
        imports: [
          IonicModule.forRoot(TabsPage)
        ],
        providers: [
          { provide: Platform, useFactory: () => PlatformMock.instance() },
          { provide: StatusBar, useFactory: () => StatusBarMock.instance() },
          { provide: SplashScreen, useFactory: () => SplashScreenMock.instance() }
        ]
      })

      fixture = TestBed.createComponent(TabsPage);
      component = fixture.componentInstance;
  })

  it('should create the app',() => {
    expect(component).toBeTruthy();
    expect(component instanceof TabsPage).toEqual(true);
  });
})
