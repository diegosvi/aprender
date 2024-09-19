import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbecedarioPage } from './abecedario.page';

describe('AbecedarioPage', () => {
  let component: AbecedarioPage;
  let fixture: ComponentFixture<AbecedarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AbecedarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
