import { Controller, Get } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller("helloworld")
export class HelloController {
  constructor(private readonly helloService: HelloService) { }

  @Get()
  returnHello(): string {
    return this.helloService.getHello();
  }
}
