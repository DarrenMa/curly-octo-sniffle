import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from '../../modules/users/users.service';

@Injectable()
export class DoesUserExist implements CanActivate {
  constructor(private readonly userService: UsersService) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  async validateRequest(request) {
    let userExist = await this.userService.findOneByEmail(request.body.email);
    if (userExist) {
      throw new ForbiddenException('Email address already exists');
    }

    // only validate unique phone number if phone number is provided during sign up
    if (request.body.phone) {
      userExist = await this.userService.findOneByPhone(request.body.phone);
      if (userExist) {
        throw new ForbiddenException('Phone number already exists');
      }
    }

    return true;
  }
}