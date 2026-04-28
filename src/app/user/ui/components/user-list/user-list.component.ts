import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone: false,
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  selected: boolean = false;
  selectedUser: any;

  allRepos: any[] = [];
  userRepos: any[] = [];

  constructor(
    private userService: UserService,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.cd.detectChanges();
        console.log('Usuarios Listos', this.users.length);
      },
      error: (err) => console.error(err),
    });
    this.userService.getRepositories().subscribe({
      next: (data) => {
        this.allRepos = data;
        this.cd.detectChanges();
        console.log('Repositorios Listos', this.allRepos.length);
      },
      error: (err) => console.error(err),
    });
  }

  onSelected(user: any): void {
    this.selected = true;
    this.selectedUser = user;

    this.userRepos = this.allRepos.filter((repo: any) => user.repoIds.includes(repo.id));
    this.cd.detectChanges();
  }
}
