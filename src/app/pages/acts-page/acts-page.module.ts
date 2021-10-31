import { NgModule } from '@angular/core';
import { ActsPageComponent } from './acts-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ActsPageComponent],
  imports: [SharedModule],
  exports: [ActsPageComponent]
})
export class ActsPageModule {}
