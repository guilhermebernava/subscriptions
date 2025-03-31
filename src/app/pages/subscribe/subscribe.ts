import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({ selector: 'subscribe', templateUrl: './subscribe.html', styleUrls: ['./subscribe.css'] , imports: [CommonModule, ReactiveFormsModule,FormsModule],})
export class Subscribe implements OnInit {
  templates: any[] = [];
  selectedTemplate: string = '';
  email: string = '';

  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit() {
    this.http.get<any[]>('/api/templates').subscribe(data => this.templates = data);
  }

  sendEmail() {
    this.http.post('/api/send-email', { templateId: this.selectedTemplate, email: this.email }).subscribe();
  }
  
  backToHome() {
    this.router.navigate(['/home']);
  }
}