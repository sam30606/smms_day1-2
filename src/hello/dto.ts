import { ApiProperty } from '@nestjs/swagger';
export class FromBody {
  @ApiProperty()
  num: number;
}
export class FromHeaders {
  name: 'From';
}
export class FromParams {
  @ApiProperty({example:1})
  num: number;
}
export class FromQuerys {
  @ApiProperty({example:1})
  num: number;
}
