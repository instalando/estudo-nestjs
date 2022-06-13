import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@/domain/entities';
import { RegisterDto } from '@/presentation/dto/auth';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async register(registerDto: RegisterDto) {
    const user = await this.userRepository.findOneBy({
      email: registerDto.email,
    });

    if (user) return new HttpException('User already exists', 409);

    const response = this.userRepository.save({
      uuid: uuidv4(),
      email: registerDto.email,
      password: await bcrypt.hash(registerDto.password, 10),
    });

    return response;
  }
}
