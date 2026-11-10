/* ==========================================================================
   CRÉDIT 360° – BANQUE POPULAIRE
   Page: Reporting (Executive BI Dashboard, Production Charts & KPIs)
   ========================================================================== */

import { Icons } from '../icons.js';

export function renderReporting(): string {
  return `
    <div class="reporting-view">

      <!-- TOPBAR -->
      <div class="page-topbar">
        <div class="page-title-group">
          <h1 class="page-heading">
            <span class="text-orange">${Icons.barChart}</span>
            Reporting & Indicateurs de Performance (BI)
          </h1>
          <div class="page-breadcrumb">
            <span>Accueil</span>
            <span class="sep">/</span>
            <span>Direction Commerciale</span>
            <span class="sep">/</span>
            <span class="text-orange font-semibold">Tableau de bord de pilotage d'octroi</span>
          </div>
        </div>
        <div class="page-actions-group">
          <button class="btn btn-secondary" onclick="alert('Exportation du rapport exécutif PDF en cours...')">
            ${Icons.download} Exporter Rapport PDF
          </button>
          <button class="btn btn-primary" onclick="alert('Extraction brute des données au format CSV / Excel...')">
            ${Icons.download} Données Brutes Excel
          </button>
        </div>
      </div>

      <!-- KPI METRIC ROW -->
      <div class="stat-card-row" style="margin-bottom: 22px;">
        <div class="kpi-card">
          <div class="kpi-data">
            <span class="kpi-label">Production Globale YTD</span>
            <span class="kpi-value text-blue">142.5 M DH</span>
          </div>
          <div class="kpi-icon" style="background: var(--bp-blue-light); color: var(--bp-blue);">${Icons.trendingUp}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-data">
            <span class="kpi-label">Taux d'Approbation</span>
            <span class="kpi-value text-green">78.4 %</span>
          </div>
          <div class="kpi-icon" style="background: var(--bp-green-light); color: var(--bp-green);">${Icons.check}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-data">
            <span class="kpi-label">Délai Moyen Décision</span>
            <span class="kpi-value text-orange">42 Heures</span>
          </div>
          <div class="kpi-icon" style="background: var(--bp-orange-light); color: var(--bp-orange);">${Icons.clock}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-data">
            <span class="kpi-label">Coût du Risque Agence</span>
            <span class="kpi-value">0.42 %</span>
          </div>
          <div class="kpi-icon" style="background: var(--bg-muted); color: #334155;">${Icons.shieldCheck}</div>
        </div>
      </div>

      <!-- CHARTS ROW: BAR CHART & DISTRIBUTION DONUT -->
      <div style="display: grid; grid-template-columns: 1.6fr 1fr; gap: 20px; margin-bottom: 22px;">

        <!-- BAR CHART: PRODUCTION MENSUELLE (JAN - SEP 2026) -->
        <div class="bp-card">
          <div class="card-header">
            <div class="card-title-group">
              <div class="card-title-icon icon-orange">${Icons.barChart}</div>
              <span class="card-title">Volume de Crédit Octroyé par Mois (en Millions DH)</span>
            </div>
            <span class="badge badge-valide">+14.8% vs 2025</span>
          </div>
          <div class="card-body">

            <div class="bar-chart-container">
              <!-- Jan -->
              <div class="bar-col">
                <div class="bar-tube" style="height: 55%;" data-tooltip="Jan: 11.2 M DH"></div>
                <span class="bar-label">Jan</span>
              </div>
              <!-- Fév -->
              <div class="bar-col">
                <div class="bar-tube" style="height: 62%;" data-tooltip="Fév: 12.8 M DH"></div>
                <span class="bar-label">Fév</span>
              </div>
              <!-- Mar -->
              <div class="bar-col">
                <div class="bar-tube" style="height: 78%;" data-tooltip="Mar: 16.4 M DH"></div>
                <span class="bar-label">Mar</span>
              </div>
              <!-- Avr -->
              <div class="bar-col">
                <div class="bar-tube" style="height: 68%;" data-tooltip="Avr: 14.1 M DH"></div>
                <span class="bar-label">Avr</span>
              </div>
              <!-- Mai -->
              <div class="bar-col">
                <div class="bar-tube" style="height: 85%;" data-tooltip="Mai: 18.0 M DH"></div>
                <span class="bar-label">Mai</span>
              </div>
              <!-- Juin -->
              <div class="bar-col">
                <div class="bar-tube" style="height: 92%;" data-tooltip="Juin: 19.5 M DH"></div>
                <span class="bar-label">Juin</span>
              </div>
              <!-- Juil -->
              <div class="bar-col">
                <div class="bar-tube" style="height: 72%;" data-tooltip="Juil: 15.2 M DH"></div>
                <span class="bar-label">Juil</span>
              </div>
              <!-- Août -->
              <div class="bar-col">
                <div class="bar-tube" style="height: 65%;" data-tooltip="Août: 13.8 M DH"></div>
                <span class="bar-label">Août</span>
              </div>
              <!-- Sep (En cours) -->
              <div class="bar-col">
                <div class="bar-tube secondary" style="height: 98%;" data-tooltip="Sep (Projection): 21.5 M DH"></div>
                <span class="bar-label" style="color: var(--bp-blue); font-weight: 800;">Sep</span>
              </div>
            </div>

            <div class="flex justify-between items-center" style="margin-top: 14px; font-size: 11.5px; color: var(--text-muted);">
              <span>Moyenne mensuelle : <strong>15.8 M DH</strong></span>
              <span class="flex items-center gap-2">
                <span style="display: inline-block; width: 10px; height: 10px; background: var(--bp-orange); border-radius: 2px;"></span> Réalisé
                <span style="display: inline-block; width: 10px; height: 10px; background: var(--bp-blue); border-radius: 2px; margin-left: 8px;"></span> Mois en cours
              </span>
            </div>

          </div>
        </div>

        <!-- REPARTITION PAR PRODUIT -->
        <div class="bp-card card-accent-blue">
          <div class="card-header">
            <div class="card-title-group">
              <div class="card-title-icon icon-blue">${Icons.coins}</div>
              <span class="card-title">Répartition par Famille de Crédit</span>
            </div>
            <span class="badge badge-neutre">Exercice 2026</span>
          </div>
          <div class="card-body">
            <div class="flex" style="flex-direction: column; gap: 14px;">

              <!-- Prod 1: Immobilier -->
              <div>
                <div class="flex justify-between" style="font-size: 12px; margin-bottom: 4px;">
                  <span class="font-bold text-primary">Crédit Immobilier (Salaf Sakane)</span>
                  <span class="font-bold text-blue">42 % (59.8 M DH)</span>
                </div>
                <div class="progress-container" style="height: 8px;">
                  <div class="progress-fill progress-fill-blue" style="width: 42%;"></div>
                </div>
              </div>

              <!-- Prod 2: Auto -->
              <div>
                <div class="flex justify-between" style="font-size: 12px; margin-bottom: 4px;">
                  <span class="font-bold text-primary">Crédit Auto (Salaf Sayara)</span>
                  <span class="font-bold text-orange">28 % (39.9 M DH)</span>
                </div>
                <div class="progress-container" style="height: 8px;">
                  <div class="progress-fill progress-fill-orange" style="width: 28%;"></div>
                </div>
              </div>

              <!-- Prod 3: Personnel / Conso -->
              <div>
                <div class="flex justify-between" style="font-size: 12px; margin-bottom: 4px;">
                  <span class="font-bold text-primary">Prêt Personnel (Salaf Al Ousra)</span>
                  <span class="font-bold text-green">18 % (25.6 M DH)</span>
                </div>
                <div class="progress-container" style="height: 8px;">
                  <div class="progress-fill progress-fill-green" style="width: 18%;"></div>
                </div>
              </div>

              <!-- Prod 4: Équipement Pro -->
              <div>
                <div class="flex justify-between" style="font-size: 12px; margin-bottom: 4px;">
                  <span class="font-bold text-primary">Équipement Professionnel</span>
                  <span class="font-bold" style="color: #64748b;">12 % (17.2 M DH)</span>
                </div>
                <div class="progress-container" style="height: 8px;">
                  <div class="progress-fill" style="width: 12%; background: #64748b;"></div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <!-- BRANCH BENCHMARK TABLE -->
      <div class="bp-card">
        <div class="card-header">
          <div class="card-title-group">
            <div class="card-title-icon icon-orange">${Icons.trendingUp}</div>
            <span class="card-title">Classement des Agences Banque Populaire (Région Grand Casablanca)</span>
          </div>
          <span class="badge badge-valide">Notre Agence classée N°1</span>
        </div>
        <div class="card-body" style="padding: 0;">
          <div class="bp-table-wrapper" style="border: none;">
            <table class="bp-table">
              <thead>
                <tr>
                  <th>RANG</th>
                  <th>AGENCE</th>
                  <th>DOSSIERS TRAITÉS</th>
                  <th>PRODUCTION YTD</th>
                  <th>DÉLAI MOYEN</th>
                  <th>TAUX D'ACCORD</th>
                  <th>TAUX DE CONTENTIEUX</th>
                </tr>
              </thead>
              <tbody>
                <tr style="background: #fffaf0;">
                  <td class="font-bold text-orange">★ N° 1</td>
                  <td class="font-bold">Casablanca Anfa (Notre Agence)</td>
                  <td>124 dossiers</td>
                  <td class="font-bold text-blue">46.8 M DH</td>
                  <td>42 heures</td>
                  <td><span class="badge badge-valide">84.2 %</span></td>
                  <td><span class="badge badge-valide">0.42 %</span></td>
                </tr>
                <tr>
                  <td class="font-semibold">N° 2</td>
                  <td>Casablanca Maarif</td>
                  <td>110 dossiers</td>
                  <td class="font-bold">39.4 M DH</td>
                  <td>46 heures</td>
                  <td><span class="badge badge-valide">81.0 %</span></td>
                  <td><span class="badge badge-valide">0.58 %</span></td>
                </tr>
                <tr>
                  <td class="font-semibold">N° 3</td>
                  <td>Casablanca Gauthier</td>
                  <td>98 dossiers</td>
                  <td class="font-bold">34.1 M DH</td>
                  <td>48 heures</td>
                  <td><span class="badge badge-analyse">77.5 %</span></td>
                  <td><span class="badge badge-valide">0.62 %</span></td>
                </tr>
                <tr>
                  <td class="font-semibold">N° 4</td>
                  <td>Casablanca Sidi Maarouf</td>
                  <td>85 dossiers</td>
                  <td class="font-bold">29.6 M DH</td>
                  <td>52 heures</td>
                  <td><span class="badge badge-analyse">74.8 %</span></td>
                  <td><span class="badge badge-alerte">0.89 %</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  `;
}
