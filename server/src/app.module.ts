import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [UserModule, DatabaseModule, RolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
