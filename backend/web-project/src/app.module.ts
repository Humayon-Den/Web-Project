import { Module } from '@nestjs/common';
import { AnimeModule } from './anime/anime.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'anibase',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // set to false in production
    }),
    
    AnimeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
