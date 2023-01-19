import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';
import { JwtPayload } from './interface/jwt.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  // async refirect()
  async validateUser(email, displayName, googleID) {
    let user = await this.userRepository.findOne({ where: { email } });
    if (!user)
      user = await this.userRepository.save({
        email,
        name: displayName,
        googleID,
      });
    return user;
  }

  async validateJwtUser(id: string) {
    return await this.userRepository.findOne({ where: { id } });
  }

  async signToken(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }
}
