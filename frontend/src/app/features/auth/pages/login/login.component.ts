import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'kiko-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-kiko-light dark:bg-kiko-dark-bg">
      <div class="card w-full max-w-md">
        <h1 class="text-3xl font-bold text-kiko-brand mb-2">KIKO</h1>
        <h2 class="text-lg font-semibold mb-6 text-gray-600">Commerce Intelligent</h2>
        
        <form [formGroup]="loginForm" (ngSubmit)="onLogin()" class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-2">Email</label>
            <input 
              type="email" 
              formControlName="email" 
              class="w-full px-4 py-2 border border-gray-300 rounded-kiko dark:bg-kiko-dark-card dark:border-gray-600"
              placeholder="user@example.com"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-2">Mot de passe</label>
            <input 
              type="password" 
              formControlName="password" 
              class="w-full px-4 py-2 border border-gray-300 rounded-kiko dark:bg-kiko-dark-card dark:border-gray-600"
              placeholder="••••••••"
            />
          </div>
          
          <button type="submit" [disabled]="loading" class="btn-primary w-full">
            {{ loading ? 'Connexion...' : 'Se connecter' }}
          </button>
        </form>
        
        <div *ngIf="error" class="mt-4 p-4 bg-red-100 text-red-700 rounded-kiko">
          {{ error }}
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) return;

    this.loading = true;
    this.error = '';

    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.error = err.error?.message || 'Erreur de connexion';
        this.loading = false;
      }
    });
  }
}
