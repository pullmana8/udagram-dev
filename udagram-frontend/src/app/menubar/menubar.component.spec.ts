import { MenubarComponent } from './menubar.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { environment } from '../../environments/environment';

describe('MenubarComponent', () => {
  let component: MenubarComponent;
  let fixture: ComponentFixture<MenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenubarComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(MenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('title should be environment.AppTitle', () => {
    const app = fixture.nativeElement;
    const title = app.querySelectorAll('ion-title');
    expect(title.length).toEqual(1);
    expect(title[0].innerText).toEqual(environment.appName);
  });
});
