import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DatabaseModule } from 'src/database/database.module';
import { FilesModule } from 'src/files/files.module';
@Module({
  imports: [DatabaseModule, FilesModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
