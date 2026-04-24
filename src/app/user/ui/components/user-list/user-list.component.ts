import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: Array<User> = [];
  selectedUser!: User;
  selected: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        console.log('¡Llegaron los usuarios!', this.users); 
      },
      error: (err) => console.error('Error al traer datos', err),
    });
  }

  onSelected(user: User): void {
    this.selected = true;
    this.selectedUser = user;
    console.log('Usuario seleccionado:', user.name);
  }
}
