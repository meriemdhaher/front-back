import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './pages/category/category-list/category-list.component';
import { NewCategoryComponent } from './pages/category/new-category/new-category.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path:'dashboard', component: DashboardComponent },
  { path:'category', component: CategoryListComponent },
  { path: '', redirectTo: 'view-category', pathMatch: 'full' }, 
  { path:'new-category', component: NewCategoryComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
