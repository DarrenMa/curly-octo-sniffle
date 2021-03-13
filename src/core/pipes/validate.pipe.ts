import { Injectable, ArgumentMetadata, BadRequestException, ValidationPipe, UnprocessableEntityException } from '@nestjs/common';

@Injectable()
export class ValidateInputPipe extends ValidationPipe {
  public async transform(value, metadata: ArgumentMetadata) {
    try {
      return await super.transform(value, metadata);
    } catch (e) {
      if (e instanceof BadRequestException) {
        throw e;
      }
    }
  }

  // note breaking changes regarding validation schema https://docs.nestjs.com/migration-guide
}