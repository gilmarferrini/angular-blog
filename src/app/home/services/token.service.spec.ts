import { TestBed } from '@angular/core/testing';
import { TokenService } from './token.service';

describe(TokenService.name, () => {

  let tokenService: TokenService

  beforeEach(async () => {
    tokenService = TestBed.inject(TokenService)

    localStorage.clear()
  })

  it(`#${TokenService.prototype.getToken.name} Should return null when trigger method`, () => {
    const token = tokenService.getToken()
    expect(token).toEqual(null)
  })

  it(`#${TokenService.prototype.getToken.name} Should return token when trigger method`, () => {
    localStorage.setItem('@token', 'some_token')
    const token = tokenService.getToken()
    expect(token).toBe('some_token')
  })

  it(`#${TokenService.prototype.isLoggedIn} Should return false when user is not logged`, () => {
    const isLogged = tokenService.isLoggedIn()
    expect(isLogged).toBeFalse()
  })
})
