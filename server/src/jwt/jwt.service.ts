import { Injectable } from '@nestjs/common';
import * as jwt from "jsonwebtoken"

@Injectable()
export class JwtService {

  generateJwt(phoneOrEmail: string) {
    try {
      const token: any = jwt.sign(
        { phoneOrEmail },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "7d" }
      );
      return token
    } catch (error) {
      return error
    }
  }

  checkToken(token: string) {
    try {
      const jwtToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
      return jwtToken
    } catch (error) {
      return error
    }
  }
}
