import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagRegiaoPage } from './pag-regiao.page';

describe('PagRegiaoPage', () => {
  let component: PagRegiaoPage;
  let fixture: ComponentFixture<PagRegiaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagRegiaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagRegiaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
