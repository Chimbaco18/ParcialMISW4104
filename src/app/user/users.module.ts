import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './ui/components/user-list/user-list.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, UsersRoutingModule],
  exports: [UserListComponent]
})
export class UserModule {}
