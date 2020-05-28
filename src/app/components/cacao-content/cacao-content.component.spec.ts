import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CacaoContentComponent } from './cacao-content.component';

describe('CacaoContentComponent', () => {
  let component: CacaoContentComponent;
  let fixture: ComponentFixture<CacaoContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacaoContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacaoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
