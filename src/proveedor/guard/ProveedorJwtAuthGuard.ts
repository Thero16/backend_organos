import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class ProveedorJwtAuthGuard extends AuthGuard('jwt-proveedor') {
  
}
