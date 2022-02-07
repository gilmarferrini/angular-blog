import { TestBed } from '@angular/core/testing';
import { TokenService } from './token.service';

describe(TokenService.name, () => {

  let tokenService: TokenService

  beforeEach(async () => {
    tokenService = TestBed.inject(TokenService)
  })

  it(`#${TokenService.prototype.getToken.name} Should return token when trigger method`, () => {
    localStorage.setItem('@token', 'some_token')
    const token = tokenService.getToken()
    expect(token).toBe('some_token')
  })

})
