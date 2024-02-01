import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthDto } from './dto'

@Controller('auth')
// Call functions in Service and pass the return value from Service back to Controller
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    console.log({ dto })
    return this.authService.signup()
  }

  @Post('signin')
  signin() {
    return this.authService.signin()
  }
}
