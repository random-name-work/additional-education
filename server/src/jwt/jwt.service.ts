import { Injectable } from '@nestjs/common';
import jwt from "jsonwebtoken"
@Injectable()
export class JwtService {
    
    generateJwt(id: number) {
        return jwt.sign(
          {
            id
          },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "7d" }
        );
      }
    
      checkToken(token: string){
        try {
            const jwtToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
            return jwtToken
        } catch (error) {
            return {
                status: 401,
                message: "Token not valid"
            }
        }
      }
}
