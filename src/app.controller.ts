import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // @Get("helloworld")
  // returnHello(): string {
  //   return this.appService.getHello();
  // }
}
// @Controller("helloworld")
// export class HelloController {
//   constructor(private readonly appService: AppService) { }

//   @Get()
//   returnHello(): string {
//     return this.appService.getHello();
//   }
// }
