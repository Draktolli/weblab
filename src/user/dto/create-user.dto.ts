import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  email: string;
  @ApiProperty()
  supertokensID: string;
}