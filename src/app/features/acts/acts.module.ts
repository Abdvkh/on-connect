import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActListComponent } from './components/act-list/act-list.component';
import { ActListItemComponent } from './components/act-list-item/act-list-item.component';
import { ActDetailsComponent } from './components/act-details/act-details.component';
import { ActCategoriesComponent } from './components/act-categories/act-categories.component';



@NgModule({
  declarations: [
    ActListComponent,
    ActListItemComponent,
    ActDetailsComponent,
    ActCategoriesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ActsModule { }
