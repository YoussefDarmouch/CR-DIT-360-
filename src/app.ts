/* ==========================================================================
   CRÉDIT 360° – BANQUE POPULAIRE
   Main Application Entry Point
   ========================================================================== */

import { Icons } from './icons.js';
import { navigationRoutes } from './data.js';
import { Router } from './router.js';

function buildSidebar(): void {
  const sidebarNav = document.getElementById('sidebar-nav');
  if (!sidebarNav) return;

  sidebarNav.innerHTML = navigationRoutes.map(item => {
    const iconSvg = (Icons as Record<string, string>)[item.iconName] || Icons.folder;
    const badgeHtml = item.badge ? `<span class="nav-badge">${item.badge}</span>` : '';

    return `
      <a href="#${item.id}" class="nav-item" data-route="${item.id}">
        ${iconSvg}
        <span>${item.label}</span>
        ${badgeHtml}
      </a>
    `;
  }).join('');
}

function initHeader(): void {
  const notifBtn = document.getElementById('btn-header-notifs');
  if (notifBtn) {
    notifBtn.addEventListener('click', () => {
      window.location.hash = 'alertes';
    });
  }

  const searchBtn = document.getElementById('btn-header-search');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      window.location.hash = 'mes-dossiers';
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Populate sidebar menu
  buildSidebar();
  // Init Header shortcuts
  initHeader();
  // Start client router
  new Router('view-mount-point');
  console.log('CRÉDIT 360° – Banque Populaire initialized successfully.');
});
