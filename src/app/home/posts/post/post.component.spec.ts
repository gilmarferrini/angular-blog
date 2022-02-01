import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostComponent } from './post.component';

describe(PostComponent.name, () => {

  let fixture: ComponentFixture<PostComponent>
  let component: PostComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(PostComponent)
    component = fixture.componentInstance
  })

  it ('Should create', () => {
    expect(component).toBeTruthy()
  })

})
