import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({ selector: 'app-create-template', templateUrl: './create-template.html', styleUrls: ['./create-template.css'] ,imports: [CommonModule, ReactiveFormsModule,FormsModule],})
export class CreateTemplate{
  htmlContent: string = '';

  constructor(private http: HttpClient,private router: Router) {}

  saveTemplate() {
    this.http.post('/api/templates', { content: this.htmlContent }).subscribe();
  }

  backToHome() {
    this.router.navigate(['/home']);
  }
}