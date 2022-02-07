import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PostService } from './post.service';

const mockData = {
  api: 'http://localhost:3333/post',
  data: [
    {
      id: '1',
      post_image: '',
      user_id: 'some_id1',
      title: 'some title 1',
      body: 'some body 1',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: '2',
      post_image: '',
      user_id: 'some_id2',
      title: 'some title 2',
      body: 'some body 2',
      created_at: new Date(),
      updated_at: new Date()
    }
  ]
}

describe(PostService.name, () => {

  let httpController: HttpTestingController
  let service: PostService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ PostService ]
    }).compileComponents()

    httpController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(PostService)
  })

  it('Should return posts', done => {
    service.listPosts().subscribe(posts => {
      expect(posts[0].id).toBe('1')
      expect(posts[1].id).toBe('2')
      done();
    })

    httpController.expectOne(mockData.api).flush(mockData.data)
  })

})
