import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoryService } from '../../../services/repository.service';
import { UserService } from '../../../../user/services/user.service';
import { Repository } from '../../../models/repository.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-repository-detail',
  templateUrl: './repository-detail.component.html',
  styleUrls: ['./repository-detail.component.css'],
  standalone: false,
})
export class RepositoryDetailComponent implements OnInit {
  repo?: Repository;
  owner: any;

  constructor(
    private route: ActivatedRoute,
    private repositoryService: RepositoryService,
    private userService: UserService,
    private cd: ChangeDetectorRef,
    private location: Location,
  ) {}

  goBack(): void {
    this.location.back();
  }
  
  ngOnInit(): void {
    const idFromRoute = this.route.snapshot.paramMap.get('id');
    const repoId = Number(idFromRoute);

    if (repoId) {
      this.repositoryService.getRepositories().subscribe({
        next: (allRepos) => {
          this.repo = allRepos.find((r) => r.id == repoId);

          if (this.repo) {
            const currentOwnerId = this.repo.ownerId;

            this.userService.getUsers().subscribe({
              next: (users) => {
                this.owner = users.find((u) => u.id == currentOwnerId);
                this.cd.detectChanges();
              },
            });
          }
          this.cd.detectChanges();
        },
        error: (err) => console.error('Error al cargar repositorios:', err),
      });
    }
  }
}
