import { Module } from '@nestjs/common';
import { VideolectionController } from './videolection.controller';
import { VideolectionService } from './videolection.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [VideolectionController],
  providers: [VideolectionService]
})
export class VideolectionModule {}
