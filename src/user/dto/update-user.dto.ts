import { IsEmail, IsOptional, MinLength } from 'class-validator';

export class UpdateUserDTO {
  @IsOptional()
  name: string;

  @IsEmail({}, { message: 'Invalid email' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'Password must be at least 6 characters' })
  @IsOptional()
  password: string;
}
