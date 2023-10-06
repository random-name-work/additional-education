import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule } from 'src/jwt/jwt.module';
@Module({
  imports: [DatabaseModule, JwtModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
