import { Module } from '@nestjs/common';
import { SortController } from './sort.controller';
import { SortService } from './sort.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SortController],
  providers: [SortService]
})
export class SortModule {}
