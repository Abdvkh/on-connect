import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MUIModule } from './mui/mui.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MUIModule],
  exports: [CommonModule, MUIModule]
})
export class SharedModule {}
