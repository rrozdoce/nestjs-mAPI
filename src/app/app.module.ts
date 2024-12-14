import { Module } from '@nestjs/common';
import { PropostaModule } from '../modules/proposta/proposta.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'src/providers/database.provider';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, PropostaModule],
})
export class AppModule {}
