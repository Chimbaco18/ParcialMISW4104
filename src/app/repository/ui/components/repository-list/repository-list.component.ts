import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Repository } from '../../../models/repository.model';
import { RepositoryService } from '../../../services/repository.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css'],
  standalone: false,
})
export class RepositoryListComponent implements OnInit {
  repositories: Repository[] = [];

  getLanguageClass(language: string): string {
    const lang = language.toLowerCase();
    const colors: { [key: string]: string } = {
      typescript: 'bg-typescript',
      javascript: 'bg-javascript',
      python: 'bg-python',
      java: 'bg-java',
      go: 'bg-go',
      html: 'bg-html',
    };
    return colors[lang] || 'bg-default';
  }

  constructor(
    private RepositoryService: RepositoryService,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.RepositoryService.getRepositories().subscribe({
      next: (data) => {
        this.repositories = data;
        this.cd.detectChanges();
        console.log('Repositorios Listos', this.repositories.length);
      },
      error: (err) => console.error(err),
    });
  }
}

