import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RepositoryListComponent } from './ui/components/repository-list/repository-list.component';
import { RepositoryDetailComponent } from './ui/components/repository-detail/repository-detail.component';
import { RepositoriesRoutingModule } from './repository-routing.module';

@NgModule({
  declarations: [RepositoryListComponent, RepositoryDetailComponent],
  providers: [],
  imports: [CommonModule,RouterModule, RepositoriesRoutingModule],
  exports: [RepositoryListComponent, RepositoryDetailComponent],
})
export class RepositoryModule {}
