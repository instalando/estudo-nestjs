import { IsEmail, Length, IsString } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  @Length(1, 191)
  email: string;

  @IsString()
  @Length(8, 64)
  password: string;
}
