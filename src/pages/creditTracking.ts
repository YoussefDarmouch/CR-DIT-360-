/* ==========================================================================
   CRÉDIT 360° – BANQUE POPULAIRE
   Page: Suivi des crédits (Active Loan Portfolio & Amortization Tracking)
   ========================================================================== */

import { Icons } from '../icons.js';

export function renderCreditTracking(): string {
  return `
    <div class="credit-tracking-view">

      <!-- TOPBAR -->
      <div class="page-topbar">
        <div class="page-title-group">
          <h1 class="page-heading">
            <span class="text-orange">${Icons.sliders}</span>
            Suivi des Crédits & Amortissements
          </h1>
          <div class="page-breadcrumb">
            <span>Accueil</span>
            <span class="sep">/</span>
            <span>Gestion des encours</span>
            <span class="sep">/</span>
            <span class="text-orange font-semibold">Tableau de suivi des remboursements</span>
          </div>
        </div>
        <div class="page-actions-group">
          <button class="btn btn-secondary" onclick="alert('Génération du relevé global des encours...')">
            ${Icons.download} Télécharger Synthèse Encours
          </button>
          <button class="btn btn-primary" onclick="window.location.hash='recharges'">
            ${Icons.refreshCw} Simuler une Recharge
          </button>
        </div>
      </div>

      <!-- PORTFOLIO STATS -->
      <div class="stat-card-row" style="margin-bottom: 22px;">
        <div class="kpi-card">
          <div class="kpi-data">
            <span class="kpi-label">Encours Global Actif</span>
            <span class="kpi-value text-blue">46.8 M DH</span>
          </div>
          <div class="kpi-icon" style="background: var(--bp-blue-light); color: var(--bp-blue);">${Icons.coins}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-data">
            <span class="kpi-label">Crédits en amortissement</span>
            <span class="kpi-value">218</span>
          </div>
          <div class="kpi-icon" style="background: var(--bg-muted); color: #334155;">${Icons.folder}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-data">
            <span class="kpi-label">Taux d'amortissement moyen</span>
            <span class="kpi-value text-green">54.2 %</span>
          </div>
          <div class="kpi-icon" style="background: var(--bp-green-light); color: var(--bp-green);">${Icons.trendingUp}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-data">
            <span class="kpi-label">Taux de régularité</span>
            <span class="kpi-value text-orange">99.1 %</span>
          </div>
          <div class="kpi-icon" style="background: var(--bp-orange-light); color: var(--bp-orange);">${Icons.shieldCheck}</div>
        </div>
      </div>

      <!-- ACTIVE LOAN TRACKING CARDS GRID -->
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 22px;">

        <!-- CARD 1 -->
        <div class="bp-card card-accent-blue">
          <div class="card-header">
            <div>
              <div class="font-bold text-primary" style="font-size: 13.5px;">A. Karim (BK349102)</div>
              <div class="text-muted" style="font-size: 11px;">Immobilier • Ref: CRD00125</div>
            </div>
            <span class="badge badge-valide">En règle</span>
          </div>
          <div class="card-body">
            <div class="flex justify-between" style="font-size: 12px; margin-bottom: 8px;">
              <span class="text-muted">Capital remboursé :</span>
              <span class="font-bold text-green">134 400 DH (28%)</span>
            </div>
            <div class="progress-container" style="height: 8px; margin-bottom: 12px;">
              <div class="progress-fill progress-fill-green" style="width: 28%;"></div>
            </div>

            <div class="recharge-summary-box" style="margin-bottom: 12px;">
              <div class="recharge-row">
                <span class="text-muted">Montant initial</span>
                <span class="font-semibold">480 000 DH</span>
              </div>
              <div class="recharge-row">
                <span class="text-muted">Capital restant dû</span>
                <span class="font-bold text-blue">345 600 DH</span>
              </div>
              <div class="recharge-row">
                <span class="text-muted">Mensualité actuelle</span>
                <span>3 102 DH / mois</span>
              </div>
              <div class="recharge-row">
                <span class="text-muted">Prochaine échéance</span>
                <span class="font-bold text-orange">21/10/2026</span>
              </div>
            </div>

            <div class="flex gap-2">
              <button class="btn btn-sm btn-secondary" style="flex: 1;" onclick="alert('Tableau d\'amortissement complet téléchargé.')">
                ${Icons.download} Échéancier
              </button>
              <button class="btn btn-sm btn-outline-orange" style="flex: 1;" onclick="window.location.hash='recharges'">
                ${Icons.refreshCw} Recharger
              </button>
            </div>
          </div>
        </div>

        <!-- CARD 2 -->
        <div class="bp-card card-accent-orange">
          <div class="card-header">
            <div>
              <div class="font-bold text-primary" style="font-size: 13.5px;">M. Youssef (BH492817)</div>
              <div class="text-muted" style="font-size: 11px;">Crédit Auto • Ref: CRD00128</div>
            </div>
            <span class="badge badge-valide">En règle</span>
          </div>
          <div class="card-body">
            <div class="flex justify-between" style="font-size: 12px; margin-bottom: 8px;">
              <span class="text-muted">Capital remboursé :</span>
              <span class="font-bold text-green">76 000 DH (40%)</span>
            </div>
            <div class="progress-container" style="height: 8px; margin-bottom: 12px;">
              <div class="progress-fill progress-fill-green" style="width: 40%;"></div>
            </div>

            <div class="recharge-summary-box" style="margin-bottom: 12px;">
              <div class="recharge-row">
                <span class="text-muted">Montant initial</span>
                <span class="font-semibold">190 000 DH</span>
              </div>
              <div class="recharge-row">
                <span class="text-muted">Capital restant dû</span>
                <span class="font-bold text-blue">114 000 DH</span>
              </div>
              <div class="recharge-row">
                <span class="text-muted">Mensualité actuelle</span>
                <span>3 577 DH / mois</span>
              </div>
              <div class="recharge-row">
                <span class="text-muted">Prochaine échéance</span>
                <span class="font-bold text-orange">18/10/2026</span>
              </div>
            </div>

            <div class="flex gap-2">
              <button class="btn btn-sm btn-secondary" style="flex: 1;" onclick="alert('Tableau d\'amortissement complet téléchargé.')">
                ${Icons.download} Échéancier
              </button>
              <button class="btn btn-sm btn-outline-orange" style="flex: 1;" onclick="window.location.hash='recharges'">
                ${Icons.refreshCw} Recharger
              </button>
            </div>
          </div>
        </div>

        <!-- CARD 3 -->
        <div class="bp-card card-accent-green">
          <div class="card-header">
            <div>
              <div class="font-bold text-primary" style="font-size: 13.5px;">M. Ahmed (BK109483)</div>
              <div class="text-muted" style="font-size: 11px;">Crédit Consommation • Soldé à 100%</div>
            </div>
            <span class="badge badge-solde">Prêt Soldé</span>
          </div>
          <div class="card-body">
            <div class="flex justify-between" style="font-size: 12px; margin-bottom: 8px;">
              <span class="text-muted">Amortissement total :</span>
              <span class="font-bold text-green">120 000 DH (100%)</span>
            </div>
            <div class="progress-container" style="height: 8px; margin-bottom: 12px;">
              <div class="progress-fill progress-fill-green" style="width: 100%;"></div>
            </div>

            <div class="recharge-summary-box" style="margin-bottom: 12px;">
              <div class="recharge-row">
                <span class="text-muted">Montant initial</span>
                <span class="font-semibold">120 000 DH</span>
              </div>
              <div class="recharge-row">
                <span class="text-muted">Solde restant dû</span>
                <span class="font-bold text-green">0 DH (Soldé)</span>
              </div>
              <div class="recharge-row">
                <span class="text-muted">Dernière échéance réglée</span>
                <span>15/08/2026</span>
              </div>
              <div class="recharge-row">
                <span class="text-muted">Statut clôture</span>
                <span class="font-bold text-green">Éligible Mainlevée</span>
              </div>
            </div>

            <button class="btn btn-sm btn-success" style="width: 100%;" onclick="window.location.hash='mainlevees'">
              ${Icons.fileCheck} Émettre l'attestation de mainlevée
            </button>
          </div>
        </div>

      </div>

      <!-- DETAILED AMORTIZATION SCHEDULE TABLE -->
      <div class="bp-card">
        <div class="card-header">
          <div class="card-title-group">
            <div class="card-title-icon icon-blue">${Icons.barChart}</div>
            <span class="card-title">Échéancier type détaillé (Dossier Ref: CRD00125 - A. Karim)</span>
          </div>
          <div class="flex gap-2">
            <span class="badge badge-analyse">Taux fixe: 4.75% HT</span>
            <button class="btn btn-sm btn-secondary" onclick="alert('Export PDF du tableau d\'amortissement...')">
              ${Icons.download} Exporter PDF
            </button>
          </div>
        </div>
        <div class="card-body" style="padding: 0;">
          <div class="bp-table-wrapper" style="border: none;">
            <table class="bp-table">
              <thead>
                <tr>
                  <th>ÉCHÉANCE N°</th>
                  <th>DATE PRÉLÈVEMENT</th>
                  <th>CAPITAL DÉBUT (DH)</th>
                  <th>PART CAPITAL (DH)</th>
                  <th>PART INTÉRÊTS (DH)</th>
                  <th>ASSURANCE ADI (DH)</th>
                  <th>MENSUALITÉ TTC (DH)</th>
                  <th>CAPITAL FIN (DH)</th>
                  <th>STATUT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="font-bold">01</td>
                  <td>21/10/2026</td>
                  <td>480 000.00</td>
                  <td>1 202.00</td>
                  <td>1 900.00</td>
                  <td>145.00</td>
                  <td class="font-bold text-primary">3 247.00</td>
                  <td>478 798.00</td>
                  <td><span class="badge badge-encours">Prochaine</span></td>
                </tr>
                <tr>
                  <td class="font-bold">02</td>
                  <td>21/11/2026</td>
                  <td>478 798.00</td>
                  <td>1 206.76</td>
                  <td>1 895.24</td>
                  <td>145.00</td>
                  <td class="font-bold text-primary">3 247.00</td>
                  <td>477 591.24</td>
                  <td><span class="badge badge-neutre">À venir</span></td>
                </tr>
                <tr>
                  <td class="font-bold">03</td>
                  <td>21/12/2026</td>
                  <td>477 591.24</td>
                  <td>1 211.53</td>
                  <td>1 890.47</td>
                  <td>145.00</td>
                  <td class="font-bold text-primary">3 247.00</td>
                  <td>476 379.71</td>
                  <td><span class="badge badge-neutre">À venir</span></td>
                </tr>
                <tr>
                  <td class="font-bold">04</td>
                  <td>21/01/2027</td>
                  <td>476 379.71</td>
                  <td>1 216.33</td>
                  <td>1 885.67</td>
                  <td>145.00</td>
                  <td class="font-bold text-primary">3 247.00</td>
                  <td>475 163.38</td>
                  <td><span class="badge badge-neutre">À venir</span></td>
                </tr>
                <tr>
                  <td class="font-bold">05</td>
                  <td>21/02/2027</td>
                  <td>475 163.38</td>
                  <td>1 221.14</td>
                  <td>1 880.86</td>
                  <td>145.00</td>
                  <td class="font-bold text-primary">3 247.00</td>
                  <td>473 942.24</td>
                  <td><span class="badge badge-neutre">À venir</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  `;
}
