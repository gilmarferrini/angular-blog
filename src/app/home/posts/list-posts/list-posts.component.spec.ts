import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListPostsComponent } from './list-posts.component';

describe(ListPostsComponent.name, () => {

  let fixture: ComponentFixture<ListPostsComponent>
  let component: ListPostsComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPostsComponent ]
    }).compileComponents()

    fixture = TestBed.createComponent(ListPostsComponent)
    component = fixture.componentInstance
  })

  it ('Should create', () => {
    expect(component).toBeTruthy()
  })

})
