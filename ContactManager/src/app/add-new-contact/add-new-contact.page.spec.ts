import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddNewContactPage } from './add-new-contact.page';

describe('AddNewContactPage', () => {
  let component: AddNewContactPage;
  let fixture: ComponentFixture<AddNewContactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewContactPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddNewContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
