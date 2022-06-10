import { Module } from '@nestjs/common';
import { AppController } from '@/presentation/controllers';
import { AppService } from '@/data/services';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
