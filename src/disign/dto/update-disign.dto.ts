import { PartialType } from '@nestjs/mapped-types';
import { CreateDisignDto } from './create-disign.dto';

export class UpdateDisignDto extends PartialType(CreateDisignDto) {}
