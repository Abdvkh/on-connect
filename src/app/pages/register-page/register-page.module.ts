import { NgModule } from '@angular/core';

import { AuthModule } from 'src/app/features/auth/auth.module';
import { RegisterPageComponent } from './register-page.component';

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [AuthModule],
  exports: [RegisterPageComponent]
})
export class RegisterPageModule {}
