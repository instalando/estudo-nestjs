import { Module } from '@nestjs/common';
import { AppController } from '@/presentation/controllers';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
