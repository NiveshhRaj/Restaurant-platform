import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {

  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async login(email: string, password: string) {

    const user = await this.prisma.adminUser.findUnique({
      where: { email },
    })

    if (!user) {
      throw new UnauthorizedException('Invalid credentials')
    }

    const validPassword = await bcrypt.compare(password, user.passwordHash)

    if (!validPassword) {
      throw new UnauthorizedException('Invalid credentials')
    }

    const token = this.jwt.sign({
      userId: user.id,
      email: user.email,
      role: user.role,
    })

    return {
      access_token: token,
    }
  }

}