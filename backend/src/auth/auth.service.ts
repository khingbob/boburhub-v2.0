import { Injectable } from '@nestjs/common';
import parsePhoneNumberFromString from 'libphonenumber-js';
import { PrismaService } from 'src/prisma/prisma.service';
import { z } from 'zod';
import * as argon from 'argon2';
import { User } from '.prisma/client';
const signInDTO = z.object({
  email: z.string().email().toLowerCase().min(6).nullable(),
  password: z.string().min(6),
  phoneNumber: z.string().min(7).nullable(),
});
@Injectable()
export class AuthService {
  constructor(private db: PrismaService) {}

  async signIn(body: unknown) {
    try {
      const { email, phoneNumber: rawPhone, password } = signInDTO.parse(body);
      const hashedPass = await argon.hash(password);
      const phoneNumber = rawPhone
        ? parsePhoneNumberFromString(rawPhone, 'DE')
        : null;
      if (!email && !phoneNumber) {
        throw new Error('Email or phoneNumber is required');
      }
      if (email) {
        this.signInWithEmail(email, hashedPass);
      } else if (phoneNumber?.isValid()) {
        this.signInWithPhone(phoneNumber.format('E.164'), hashedPass);
      } else {
        throw new Error('Invalid phoneNumber number');
      }
    } catch (error) {
      console.log(error);
      throw new Error('Invalid Input data');
    }
  }
  async signUp(body: User) {
    try {
      const phoneNumber =
        body.phoneNumber && parsePhoneNumberFromString(body.phoneNumber, 'DE');

      const newUser = await this.db.user.create({
        data: {
          ...body,
          phoneNumber:
            phoneNumber && phoneNumber.isValid()
              ? phoneNumber?.format('E.164')
              : null,
          password: await argon.hash(body.password),
        },
        select: {
          nickName: true,
        },
      });
      console.log('New user created: ', newUser);
      return newUser;
    } catch (e) {
      console.log(e);
      return new Error('Invalid Input data');
    }
  }

  signInWithEmail(email: string, password: string) {
    console.log(email, password);
  }
  signInWithPhone(phoneNumber: string, password: string) {
    console.log(phoneNumber, password);
  }
}
