import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/ui/components/user-list/user-list.component';
import { RepositoryListComponent } from './repository/ui/components/repository-list/repository-list.component';
import { RepositoryDetailComponent } from './repository/ui/components/repository-detail/repository-detail.component';

const routes: Routes = [
  { path: 'users', loadChildren: () => import('./user/users.module').then(m => m.UserModule) },
  { path: 'repositories', loadChildren: () => import('./repository/repository.module').then(m => m.RepositoryModule) },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/users'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
