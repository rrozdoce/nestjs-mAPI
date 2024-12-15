import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proposta } from 'src/modules/proposta/entities/proposta.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'test.sqlite',
      entities: [Proposta],
      synchronize: true, // teste
      logging: true,
    }),
  ],
})
export class DatabaseModule {}
