import { Module } from '@nestjs/common';
import { FormRegistryController } from './form-registry.controller';
import { FormRegistryService } from './form-registry.service';

@Module({
  controllers: [FormRegistryController],
  providers: [FormRegistryService]
})
export class FormRegistryModule {}
