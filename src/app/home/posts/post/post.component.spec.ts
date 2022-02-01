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

  it ('Should have id with "some_id" (@Input() id)', () => {
    const someId = "some_id"
    component.id = someId;

    expect(component.id).toBe(someId)
  })

  it ('Should have post_image with "some_post_image" (@Input() post_image)', () => {
    const somePostImage = "some_post_image"
    component.post_image = somePostImage
    expect(component.post_image).toBe(somePostImage)
  })

  it ('Should have title with "some_title" (@Input() title)', () => {
    const someTitle = "some_title"
    component.title = someTitle
    expect(component.title).toBe(someTitle)
  })
})
