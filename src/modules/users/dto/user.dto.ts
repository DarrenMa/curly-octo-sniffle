import { IsNotEmpty, MinLength, IsEmail, IsPhoneNumber, Matches, IsOptional } from 'class-validator';

export class UserDto {
  readonly firstname: string;
  readonly surname: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6)
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/, { message: 'password too weak' })
  readonly password: string;

  @IsOptional()
  @IsPhoneNumber(null)
  readonly phone: string;
}