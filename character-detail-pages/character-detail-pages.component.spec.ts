import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailPagesComponent } from './character-detail-pages.component';

describe('CharacterDetailPagesComponent', () => {
  let component: CharacterDetailPagesComponent;
  let fixture: ComponentFixture<CharacterDetailPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterDetailPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterDetailPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
