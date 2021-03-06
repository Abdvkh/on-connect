import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MUIModule } from './mui/mui.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [CommonModule, RouterModule, MUIModule],
  exports: [CommonModule, RouterModule, MUIModule, HeaderComponent],
  declarations: [HeaderComponent]
})
export class SharedModule {}
