/* ==========================================================================
   CRÉDIT 360° – BANQUE POPULAIRE
   Page: Mes dossiers (Complete Credit Applications Listing & Filter Table)
   ========================================================================== */

import { Icons } from '../icons.js';
import { dossiersData } from '../data.js';

export function renderMyApplications(): string {
  return `
    <div class="my-apps-view">

      <!-- PAGE HEADER -->
      <div class="page-topbar">
        <div class="page-title-group">
          <h1 class="page-heading">
            <span class="text-orange">${Icons.folder}</span>
            Portefeuille & Suivi de Mes Dossiers
          </h1>
          <div class="page-breadcrumb">
            <span>Accueil</span>
            <span class="sep">/</span>
            <span>Gestion commerciale</span>
            <span class="sep">/</span>
            <span class="text-orange font-semibold">Mes dossiers de crédit</span>
          </div>
        </div>
        <div class="page-actions-group">
          <button class="btn btn-secondary" onclick="alert('Exportation de la liste vers Excel...')">
            ${Icons.download} Exporter Excel
          </button>
          <button class="btn btn-primary" onclick="window.location.hash='nouveau-dossier'">
            ${Icons.filePlus} Nouveau dossier
          </button>
        </div>
      </div>

      <!-- KPI METRIC ROW -->
      <div class="stat-card-row" style="margin-bottom: 20px;">
        <div class="kpi-card">
          <div class="kpi-data">
            <span class="kpi-label">Total dossiers gérés</span>
            <span class="kpi-value text-blue">124</span>
          </div>
          <div class="kpi-icon" style="background: var(--bp-blue-light); color: var(--bp-blue);">${Icons.folder}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-data">
            <span class="kpi-label">Dossiers en analyse</span>
            <span class="kpi-value text-orange">34</span>
          </div>
          <div class="kpi-icon" style="background: var(--bp-orange-light); color: var(--bp-orange);">${Icons.search}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-data">
            <span class="kpi-label">Dossiers validés</span>
            <span class="kpi-value text-green">86</span>
          </div>
          <div class="kpi-icon" style="background: var(--bp-green-light); color: var(--bp-green);">${Icons.check}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-data">
            <span class="kpi-label">À compléter / Alertes</span>
            <span class="kpi-value text-red">4</span>
          </div>
          <div class="kpi-icon" style="background: var(--bp-red-light); color: var(--bp-red);">${Icons.alertTriangle}</div>
        </div>
      </div>

      <!-- MAIN TABLE CARD -->
      <div class="bp-card">

        <!-- TOOLBAR: FILTER & SEARCH -->
        <div class="card-header" style="flex-wrap: wrap; gap: 14px; padding: 16px 20px;">
          <div class="search-input-box" style="max-width: 340px;">
            ${Icons.search}
            <input type="text" id="filter-dossier-search" placeholder="Rechercher par Référence, Client ou CIN...">
          </div>

          <!-- Quick Status Tabs -->
          <div class="flex items-center gap-2" style="flex-wrap: wrap;">
            <button class="btn btn-sm btn-primary active-status-filter" data-status="all">Tous (124)</button>
            <button class="btn btn-sm btn-secondary" data-status="analyse">En analyse (34)</button>
            <button class="btn btn-sm btn-secondary" data-status="valide">Validés (86)</button>
            <button class="btn btn-sm btn-secondary" data-status="signe">Signés (52)</button>
            <button class="btn btn-sm btn-secondary" data-status="completer">À compléter (4)</button>
          </div>

          <div class="flex items-center gap-2" style="margin-left: auto;">
            <select class="form-control" style="font-size: 12px; padding: 6px 12px; height: 34px;">
              <option selected>Tous les types</option>
              <option>Immobilier</option>
              <option>Équipement</option>
              <option>Personnel</option>
              <option>Auto</option>
              <option>Consommation</option>
            </select>
            <select class="form-control" style="font-size: 12px; padding: 6px 12px; height: 34px;">
              <option selected>Trier par Date MAJ (Récent)</option>
              <option>Montant décroissant</option>
              <option>Score d'octroi</option>
            </select>
          </div>
        </div>

        <!-- TABLE DATA -->
        <div class="card-body" style="padding: 0;">
          <div class="bp-table-wrapper" style="border: none; border-radius: 0;">
            <table class="bp-table">
              <thead>
                <tr>
                  <th>RÉFÉRENCE</th>
                  <th>CLIENT & CIN</th>
                  <th>TYPE DE CRÉDIT</th>
                  <th>MONTANT</th>
                  <th>DURÉE</th>
                  <th>MENSUALITÉ</th>
                  <th>PROGRESSION</th>
                  <th>STATUT</th>
                  <th>DATE MAJ</th>
                  <th style="text-align: right;">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                ${dossiersData.map(d => {
                  let badgeClass = 'badge-encours';
                  if (d.statut === 'Validé') badgeClass = 'badge-valide';
                  else if (d.statut === 'En analyse') badgeClass = 'badge-analyse';
                  else if (d.statut === 'Signé') badgeClass = 'badge-signe';
                  else if (d.statut === 'À compléter') badgeClass = 'badge-completer';
                  else if (d.statut === 'Rejeté') badgeClass = 'badge-impaye';

                  return `
                    <tr>
                      <td class="ref-cell">${d.reference}</td>
                      <td>
                        <div class="client-cell">${d.client}</div>
                        <div class="text-muted" style="font-size: 10px;">CIN: ${d.cin}</div>
                      </td>
                      <td>
                        <span class="badge badge-neutre">${d.type}</span>
                      </td>
                      <td class="amount-cell text-primary font-bold">
                        ${d.montant.toLocaleString('fr-FR')} DH
                      </td>
                      <td>${d.dureeMois} mois</td>
                      <td class="font-medium">${d.mensualite.toLocaleString('fr-FR')} DH</td>
                      <td style="min-width: 110px;">
                        <div class="flex items-center gap-2">
                          <div class="progress-container" style="height: 6px;">
                            <div class="progress-fill ${d.statut === 'Validé' || d.statut === 'Signé' ? 'progress-fill-green' : d.statut === 'En analyse' ? 'progress-fill-blue' : 'progress-fill-orange'}" style="width: ${d.progression}%;"></div>
                          </div>
                          <span style="font-size: 10px; font-weight: 700; color: var(--text-muted);">${d.progression}%</span>
                        </div>
                      </td>
                      <td><span class="badge ${badgeClass}">${d.statut}</span></td>
                      <td class="text-muted">${d.dateMaj}</td>
                      <td style="text-align: right;">
                        <div class="flex items-center justify-between gap-1" style="justify-content: flex-end;">
                          <button class="btn btn-sm btn-secondary" onclick="alert('Détails du dossier ${d.reference} pour le client ${d.client}')" title="Consulter la fiche">
                            ${Icons.fileText} Fiche
                          </button>
                          <button class="btn btn-sm btn-outline-orange" onclick="alert('Impression du contrat digital ${d.reference}')" title="Télécharger">
                            ${Icons.download}
                          </button>
                        </div>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- PAGINATION FOOTER -->
        <div class="card-footer" style="padding: 14px 20px;">
          <div class="text-muted" style="font-size: 12px;">
            Affichage de <strong>1 à 10</strong> sur <strong>124 dossiers</strong>
          </div>
          <div class="flex items-center gap-1">
            <button class="btn btn-sm btn-secondary" disabled>Précédent</button>
            <button class="btn btn-sm btn-primary">1</button>
            <button class="btn btn-sm btn-secondary">2</button>
            <button class="btn btn-sm btn-secondary">3</button>
            <button class="btn btn-sm btn-secondary">...</button>
            <button class="btn btn-sm btn-secondary">13</button>
            <button class="btn btn-sm btn-secondary">Suivant</button>
          </div>
        </div>

      </div>

    </div>
  `;
}
