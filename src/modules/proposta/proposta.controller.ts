import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Put,
  Param,
} from '@nestjs/common';
import { CreatePropostaDto } from './dto/proposta.dto';
import { PropostaService } from './proposta.servicce';
import { Proposta } from './entities/proposta.entity';

@Controller('proposta')
export class PropostaController {
  constructor(private propostaService: PropostaService) {}

  @Post()
  async create(@Body() createPropostaDto: CreatePropostaDto) {
    this.propostaService.create(createPropostaDto);
  }

  @Put(':id')
  async changeProposta(
    @Param('id') id: number,
    @Body() propostaAtt: CreatePropostaDto,
  ) {
    this.propostaService.changeProposta(id, propostaAtt);
  }

  @Delete(':id')
  async deleteProposta(@Param('id') id: number): Promise<void> {
    this.propostaService.remove(id);
  }

  @Get()
  async findAll(): Promise<Proposta[]> {
    return this.propostaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Proposta | null> {
    return this.findOne(id);
  }
}
