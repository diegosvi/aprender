import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OauthPage } from './oauth.page';

describe('OauthPage', () => {
  let component: OauthPage;
  let fixture: ComponentFixture<OauthPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OauthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
