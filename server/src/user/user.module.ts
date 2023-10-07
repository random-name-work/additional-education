import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule } from 'src/jwt/jwt.module';
import { FilesModule } from 'src/files/files.module';
@Module({
  imports: [DatabaseModule, JwtModule, FilesModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
