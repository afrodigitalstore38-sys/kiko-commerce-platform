import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'kiko-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 bg-kiko-light dark:bg-kiko-dark-bg min-h-screen">
      <h1 class="text-3xl font-bold text-kiko-dark dark:text-kiko-dark-text mb-6">Tableau de Bord</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="card">
          <h3 class="text-gray-600 text-sm font-medium">Chiffre d'affaires</h3>
          <p class="text-3xl font-bold text-kiko-brand mt-2">250,000 CFA</p>
        </div>
        
        <div class="card">
          <h3 class="text-gray-600 text-sm font-medium">Ventes du jour</h3>
          <p class="text-3xl font-bold text-kiko-success mt-2">45</p>
        </div>
        
        <div class="card">
          <h3 class="text-gray-600 text-sm font-medium">Stock alerte</h3>
          <p class="text-3xl font-bold text-kiko-warning mt-2">12</p>
        </div>
        
        <div class="card">
          <h3 class="text-gray-600 text-sm font-medium">Crédits actifs</h3>
          <p class="text-3xl font-bold text-kiko-danger mt-2">8</p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class DashboardComponent {}
