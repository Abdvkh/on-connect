import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from './login-page.component';
import { AuthModule } from 'src/app/features/auth/auth.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, AuthModule, SharedModule],
  exports: [LoginPageComponent]
})
export class LoginPageModule {}
