/* ==========================================================================
   CRÉDIT 360° – BANQUE POPULAIRE
   Page: Alertes & impayés (Risk Monitoring & Automated Recovery Workflow)
   ========================================================================== */

import { Icons } from '../icons.js';
import { alertesData } from '../data.js';

export function renderAlerts(): string {
  return `
    <div class="alerts-view">

      <!-- TOPBAR -->
      <div class="page-topbar">
        <div class="page-title-group">
          <h1 class="page-heading">
            <span class="text-orange">${Icons.bell}</span>
            Alertes, Retards de Règlement & Impayés
          </h1>
          <div class="page-breadcrumb">
            <span>Accueil</span>
            <span class="sep">/</span>
            <span>Gestion des risques</span>
            <span class="sep">/</span>
            <span class="text-orange font-semibold">Suivi du recouvrement amiable et contentieux</span>
          </div>
        </div>
        <div class="page-actions-group">
          <button class="btn btn-secondary" onclick="alert('Exportation de la liste des impayés pour la commission des risques...')">
            ${Icons.download} Exporter Rapport Risques
          </button>
          <button class="btn btn-danger" onclick="alert('Campagne de relance SMS groupée déclenchée pour les 9 dossiers de 1er impayé.')">
            ${Icons.mail} Relance SMS Groupée
          </button>
        </div>
      </div>

      <!-- KPI METRIC ROW -->
      <div class="stat-card-row" style="margin-bottom: 22px;">
        <div class="kpi-card">
          <div class="kpi-data">
            <span class="kpi-label">Dossiers en impayé</span>
            <span class="kpi-value text-red">18</span>
          </div>
          <div class="kpi-icon" style="background: var(--bp-red-light); color: var(--bp-red);">${Icons.alertTriangle}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-data">
            <span class="kpi-label">Montant Total en Souffrance</span>
            <span class="kpi-value text-orange">485 200 DH</span>
          </div>
          <div class="kpi-icon" style="background: var(--bp-orange-light); color: var(--bp-orange);">${Icons.coins}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-data">
            <span class="kpi-label">1ers Impayés (30 jours)</span>
            <span class="kpi-value text-amber">9</span>
          </div>
          <div class="kpi-icon" style="background: var(--bp-amber-light); color: var(--bp-amber);">${Icons.clock}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-data">
            <span class="kpi-label">Dossiers Contentieux (90j+)</span>
            <span class="kpi-value text-red">3</span>
          </div>
          <div class="kpi-icon" style="background: var(--bp-red-light); color: var(--bp-red);">${Icons.scale}</div>
        </div>
      </div>

      <!-- AUTOMATED NOTICE BANNER -->
      <div class="notice-banner notice-orange" style="margin-bottom: 20px; padding: 14px 18px;">
        ${Icons.mail}
        <div style="flex: 1;">
          <strong style="color: #9a3412;">Protocole Automatisé Banque Populaire :</strong>
          <span> Dès constatation du 2ème impayé non régularisé (60 jours), le système génère et expédie automatiquement la lettre recommandée de mise en demeure avec accusé de réception selon les directives Bank Al-Maghrib.</span>
        </div>
      </div>

      <!-- MAIN ALERTS TABLE -->
      <div class="bp-card" style="margin-bottom: 22px;">
        <div class="card-header" style="flex-wrap: wrap; gap: 12px;">
          <div class="card-title-group">
            <div class="card-title-icon icon-red">${Icons.alertTriangle}</div>
            <span class="card-title">Registre des impayés actifs</span>
          </div>

          <div class="flex items-center gap-2">
            <button class="btn btn-sm btn-primary">Tous (18)</button>
            <button class="btn btn-sm btn-secondary">1er impayé (9)</button>
            <button class="btn btn-sm btn-secondary">2ème impayé (6)</button>
            <button class="btn btn-sm btn-secondary">Contentieux (3)</button>
          </div>
        </div>

        <div class="card-body" style="padding: 0;">
          <div class="bp-table-wrapper" style="border: none;">
            <table class="bp-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>CLIENT & CIN</th>
                  <th>TÉLÉPHONE</th>
                  <th>CRÉDIT</th>
                  <th>RETARD</th>
                  <th>ÉCHÉANCE DUE</th>
                  <th>TOTAL EXIGIBLE</th>
                  <th>STATUT</th>
                  <th>PRIORITÉ</th>
                  <th style="text-align: right;">ACTION IMMÉDIATE</th>
                </tr>
              </thead>
              <tbody>
                ${alertesData.map(a => {
                  let badgeClass = 'badge-alerte';
                  if (a.statut === '3ème impayé' || a.statut === 'Contentieux') badgeClass = 'badge-impaye';
                  else if (a.statut === '2ème impayé') badgeClass = 'badge-completer';

                  let prioColor = 'color: #16a34a; font-weight: 700;';
                  if (a.niveauPriorite === 'Critique') prioColor = 'color: var(--bp-red); font-weight: 800;';
                  else if (a.niveauPriorite === 'Moyen') prioColor = 'color: var(--bp-amber); font-weight: 700;';

                  return `
                    <tr>
                      <td class="ref-cell">${a.id}</td>
                      <td>
                        <div class="client-cell">${a.client}</div>
                        <div class="text-muted" style="font-size: 10px;">CIN: ${a.cin}</div>
                      </td>
                      <td class="text-muted" style="font-size: 11px;">${a.telephone}</td>
                      <td><span class="badge badge-neutre">${a.creditType}</span></td>
                      <td class="amount-cell" style="color: ${a.joursRetard >= 90 ? 'var(--bp-red)' : a.joursRetard >= 60 ? 'var(--bp-orange)' : 'var(--text-primary)'}; font-size: 13px;">
                        ${a.joursRetard} jours
                      </td>
                      <td class="font-medium">${a.montantEcheance.toLocaleString('fr-FR')} DH</td>
                      <td class="font-bold text-red">${a.montantTotalDu.toLocaleString('fr-FR')} DH</td>
                      <td><span class="badge ${badgeClass}">${a.statut}</span></td>
                      <td style="${prioColor}">${a.niveauPriorite}</td>
                      <td style="text-align: right;">
                        <button class="btn btn-sm ${a.action === 'Relance' ? 'btn-outline-orange' : a.action === 'Mise en demeure' ? 'btn-primary' : 'btn-danger'}" onclick="alert('Action enclenchée : ${a.action} pour le client ${a.client}')">
                          ${a.action}
                        </button>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- LEGAL NOTICE PREVIEW DRAWER/CARD -->
      <div class="bp-card card-accent-orange">
        <div class="card-header">
          <div class="card-title-group">
            <div class="card-title-icon icon-orange">${Icons.mail}</div>
            <span class="card-title">Modèle Officiel : Lettre de Mise en Demeure (Générée automatiquement)</span>
          </div>
          <span class="badge badge-impaye">Modèle Juridique Conforme</span>
        </div>
        <div class="card-body">
          <div style="background: var(--bg-subtle); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 18px 24px; font-size: 12px; line-height: 1.7; color: #334155;">
            <div class="flex justify-between" style="border-bottom: 1px solid var(--border-color); padding-bottom: 10px; margin-bottom: 12px;">
              <div>
                <strong>BANQUE POPULAIRE DU MAROC</strong><br>
                Succursale Régionale Casablanca Anfa • Service Contentieux & Recouvrement
              </div>
              <div style="text-align: right;">
                Casablanca, le 21 Septembre 2026<br>
                <strong>LETTRE RECOMMANDÉE AVEC A.R.</strong>
              </div>
            </div>

            <p><strong>Objet :</strong> Mise en demeure avant transmission au pôle judiciaire – Dossier de Crédit N° CRD-IMP-2026</p>
            <p>Madame, Monsieur,</p>
            <p>Sauf erreur ou omission de notre part, nous constatons qu'en dépit de nos précédentes relances amiables, votre compte présente à ce jour des échéances impayées au titre de votre contrat de crédit consenti par notre établissement.</p>
            <p>Nous vous mettons formellement en demeure par la présente de procéder sous <strong>huit (8) jours ouvrés</strong> à compter de la réception de la présente au versement de la somme due.</p>
            <p>À défaut de régularisation intégrale dans ce délai, nous nous verrons dans l'obligation de prononcer la déchéance du terme et de transmettre votre dossier à notre avocat conseil pour saisie conservatoire et engagement de la procédure judiciaire.</p>

            <div class="flex justify-between items-center" style="margin-top: 14px; padding-top: 10px; border-top: 1px dashed var(--border-color);">
              <span class="text-muted" style="font-size: 11px;">Document généré électroniquement avec signature numérique certifiée Bank Al-Maghrib.</span>
              <button class="btn btn-sm btn-outline-orange" onclick="alert('Téléchargement du courrier recommandé au format PDF...')">
                ${Icons.download} Télécharger Spécimen LRAR PDF
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  `;
}
