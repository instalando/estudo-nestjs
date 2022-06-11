import { Module } from '@nestjs/common';
import { AppController } from '@/presentation/controllers';
import { AppService } from '@/data/services';

import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '@/main/config/database';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...databaseConfig,
      /* 
        ! Setting synchronize:
        ! true shouldn't be used in production 
        ! - otherwise you can lose production data.
      */
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
