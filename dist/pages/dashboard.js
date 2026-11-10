/* ==========================================================================
   CRÉDIT 360° – BANQUE POPULAIRE
   Page: Accueil / Dashboard (Faithful Recreation of the Reference Design)
   ========================================================================== */
import { Icons } from '../icons.js';
import { dossiersData, alertesData, rechargeReference } from '../data.js';
export function renderDashboard() {
    // First 5 dossiers from dataset
    const topDossiers = dossiersData.slice(0, 5);
    // Top 3 alerts from dataset
    const topAlerts = alertesData.slice(0, 3);
    return `
    <div class="dashboard-view-wrapper">

      <!-- ================================================================== -->
      <!-- TOP 5-STEP WORKFLOW PIPELINE -->
      <!-- ================================================================== -->
      <div class="workflow-pipeline">

        <!-- STEP 1 -->
        <div class="workflow-card">
          <div class="workflow-card-header">
            <span class="workflow-step-num">1</span>
            <span class="workflow-step-title">Demande de crédit</span>
          </div>
          <div class="workflow-card-body">
            <div class="workflow-icon-col">
              <div class="workflow-icon-badge">
                ${Icons.user}
              </div>
            </div>
            <div class="workflow-list">
              <div class="workflow-list-item">${Icons.fileText} <span>Formulaire digital</span></div>
              <div class="workflow-list-item">${Icons.fileText} <span>Récupération des données client</span></div>
              <div class="workflow-list-item">${Icons.search} <span>Choix du type de crédit</span></div>
              <div class="workflow-list-item">${Icons.barChart} <span>Simulation instantanée</span></div>
              <div class="workflow-list-item">${Icons.arrowRight} <span>Soumission du dossier</span></div>
            </div>
          </div>
          <div class="workflow-arrow-next">${Icons.chevronRight}</div>
        </div>

        <!-- STEP 2 -->
        <div class="workflow-card">
          <div class="workflow-card-header">
            <span class="workflow-step-num">2</span>
            <span class="workflow-step-title">Constitution du dossier</span>
          </div>
          <div class="workflow-card-body">
            <div class="workflow-icon-col">
              <div class="workflow-icon-badge">
                ${Icons.folder}
              </div>
            </div>
            <div class="workflow-list">
              <div class="workflow-list-item">${Icons.fileText} <span>Checklist automatique des pièces</span></div>
              <div class="workflow-list-item">${Icons.fileText} <span>Dépôt des documents</span></div>
              <div class="workflow-list-item">${Icons.shieldCheck} <span>Contrôle de complétude</span></div>
              <div class="workflow-list-item">${Icons.alertTriangle} <span>Alertes en cas de pièce manquante</span></div>
            </div>
          </div>
          <div class="workflow-arrow-next">${Icons.chevronRight}</div>
        </div>

        <!-- STEP 3 -->
        <div class="workflow-card">
          <div class="workflow-card-header">
            <span class="workflow-step-num">3</span>
            <span class="workflow-step-title">Analyse et décision</span>
          </div>
          <div class="workflow-card-body">
            <div class="workflow-icon-col">
              <div class="workflow-icon-badge">
                ${Icons.settings}
              </div>
            </div>
            <div class="workflow-list">
              <div class="workflow-list-item">${Icons.refreshCw} <span>Workflow automatique</span></div>
              <div class="workflow-list-item">${Icons.search} <span>Analyse des risques</span></div>
              <div class="workflow-list-item">${Icons.shieldCheck} <span>Validation des niveaux habilités</span></div>
              <div class="workflow-list-item">${Icons.check} <span>Décision en temps réel</span></div>
              <div class="workflow-list-item">${Icons.bell} <span>Notification au client</span></div>
            </div>
          </div>
          <div class="workflow-arrow-next">${Icons.chevronRight}</div>
        </div>

        <!-- STEP 4 -->
        <div class="workflow-card">
          <div class="workflow-card-header">
            <span class="workflow-step-num">4</span>
            <span class="workflow-step-title">Signature digitale</span>
          </div>
          <div class="workflow-card-body">
            <div class="workflow-icon-col">
              <div class="workflow-icon-badge">
                ${Icons.penTool}
              </div>
            </div>
            <div class="workflow-list">
              <div class="workflow-list-item">${Icons.check} <span>Signature du client</span></div>
              <div class="workflow-list-item">${Icons.check} <span>Signature du conseiller</span></div>
              <div class="workflow-list-item">${Icons.check} <span>Signature des responsables habilités</span></div>
              <div class="workflow-list-item">${Icons.fileText} <span>Traçabilité et archivage</span></div>
              <div class="workflow-list-item">${Icons.check} <span>100 % sans papier</span></div>
            </div>
          </div>
          <div class="workflow-arrow-next">${Icons.chevronRight}</div>
        </div>

        <!-- STEP 5 -->
        <div class="workflow-card">
          <div class="workflow-card-header">
            <span class="workflow-step-num">5</span>
            <span class="workflow-step-title">Mise en place du crédit</span>
          </div>
          <div class="workflow-card-body">
            <div class="workflow-icon-col">
              <div class="workflow-icon-badge">
                ${Icons.coins}
              </div>
            </div>
            <div class="workflow-list">
              <div class="workflow-list-item">${Icons.fileText} <span>Génération automatique des documents</span></div>
              <div class="workflow-list-item">${Icons.shieldCheck} <span>Souscription de l'assurance</span></div>
              <div class="workflow-list-item">${Icons.refreshCw} <span>Remboursement des anciens crédits (si applicable)</span></div>
              <div class="workflow-list-item">${Icons.coins} <span>Virement de la différence au client</span></div>
              <div class="workflow-list-item">${Icons.mail} <span>Notification de mise en place</span></div>
            </div>
          </div>
        </div>

      </div>

      <!-- ================================================================== -->
      <!-- MIDDLE THREE-COLUMN GRID -->
      <!-- ================================================================== -->
      <div class="dashboard-middle-grid">

        <!-- LEFT COLUMN: SUIVI DES DOSSIERS + ALERTES & IMPAYÉS -->
        <div class="flex" style="flex-direction: column; gap: 16px;">

          <!-- SUIVI DES DOSSIERS -->
          <div class="bp-card">
            <div class="card-header">
              <div class="card-title-group">
                <div class="card-title-icon icon-blue">${Icons.folder}</div>
                <span class="card-title">Suivi des dossiers</span>
              </div>
            </div>
            <div class="card-body" style="padding-top: 10px;">
              <div class="search-input-box" style="margin-bottom: 12px;">
                ${Icons.search}
                <input type="text" id="dashboard-search-input" placeholder="Rechercher un client ou un dossier...">
              </div>

              <div class="bp-table-wrapper">
                <table class="bp-table" id="dashboard-dossiers-table">
                  <thead>
                    <tr>
                      <th>Référence</th>
                      <th>Client</th>
                      <th>Type</th>
                      <th>Statut</th>
                      <th>Date MAJ</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${topDossiers.map(d => {
        let badgeClass = 'badge-encours';
        if (d.statut === 'Validé')
            badgeClass = 'badge-valide';
        else if (d.statut === 'En analyse')
            badgeClass = 'badge-analyse';
        else if (d.statut === 'Signé')
            badgeClass = 'badge-signe';
        else if (d.statut === 'À compléter')
            badgeClass = 'badge-completer';
        return `
                        <tr class="clickable-row" data-route="mes-dossiers" style="cursor: pointer;">
                          <td class="ref-cell">${d.reference}</td>
                          <td class="client-cell">${d.client}</td>
                          <td>${d.type}</td>
                          <td><span class="badge ${badgeClass}">${d.statut}</span></td>
                          <td>${d.dateMaj}</td>
                        </tr>
                      `;
    }).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- ALERTES & IMPAYÉS -->
          <div class="bp-card card-accent-orange">
            <div class="card-header">
              <div class="card-title-group">
                <div class="card-title-icon icon-red">${Icons.bell}</div>
                <span class="card-title">Alertes & Impayés</span>
                <span class="badge badge-impaye" style="margin-left: 4px;">3</span>
              </div>
              <a href="#alertes" class="btn btn-sm btn-secondary" style="font-size: 11px;">Voir tout</a>
            </div>
            <div class="card-body">
              <div class="bp-table-wrapper" style="margin-bottom: 12px;">
                <table class="bp-table">
                  <thead>
                    <tr>
                      <th>Client</th>
                      <th>Crédit</th>
                      <th>Jours de retard</th>
                      <th>Statut</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${topAlerts.map(a => {
        let btnColor = 'btn-secondary';
        if (a.action === 'Relance')
            btnColor = 'btn-outline-orange';
        else if (a.action === 'Mise en demeure')
            btnColor = 'btn-secondary';
        else if (a.action === 'Procédure')
            btnColor = 'btn-danger';
        return `
                        <tr>
                          <td class="client-cell">${a.client}</td>
                          <td><span class="badge badge-neutre">${a.creditType}</span></td>
                          <td class="amount-cell" style="color: ${a.joursRetard >= 90 ? 'var(--bp-red)' : a.joursRetard >= 60 ? 'var(--bp-amber)' : 'var(--text-primary)'};">${a.joursRetard}</td>
                          <td>${a.statut}</td>
                          <td>
                            <button class="btn btn-sm ${btnColor}" onclick="window.location.hash='alertes'">${a.action}</button>
                          </td>
                        </tr>
                      `;
    }).join('')}
                  </tbody>
                </table>
              </div>

              <!-- Automated letter banner -->
              <div class="notice-banner notice-orange">
                ${Icons.mail}
                <span>Génération et envoi automatique de la lettre de mise en demeure à partir du N° impayé (selon la procédure interne)</span>
              </div>
            </div>
          </div>

        </div>

        <!-- CENTER COLUMN: CRÉDIT 360° CIRCULAR HUB -->
        <div class="hub-center-col">
          <div class="hub-360-container">

            <!-- Orbit rings -->
            <div class="hub-outer-ring"></div>
            <div class="hub-inner-ring"></div>

            <!-- Central Medallion -->
            <div class="hub-center-medallion" onclick="window.location.hash='nouveau-dossier'" title="Lancer un parcours Crédit 360°">
              <div style="width: 38px; height: 38px; color: var(--bp-orange); margin-bottom: 2px;">
                ${Icons.bpHorse}
              </div>
              <span class="hub-brand-name">BANQUE POPULAIRE</span>
              <div class="hub-core-title">CRÉDIT <span>360°</span></div>
              <span class="hub-slogan-text">Un crédit plus simple, une relation plus forte</span>
            </div>

            <!-- 6 Orbit Nodes around circle -->
            <!-- 1. Top-Left: Documents / Pièces -->
            <div class="hub-node node-orange node-pos-1" onclick="window.location.hash='nouveau-dossier'" title="Constitution du dossier & Pièces">
              ${Icons.folder}
            </div>

            <!-- 2. Top-Center: Client & Conseiller -->
            <div class="hub-node node-white node-pos-2" onclick="window.location.hash='nouveau-dossier'" title="Données client & Entretien">
              ${Icons.user}
            </div>

            <!-- 3. Top-Right: Signature Digitale -->
            <div class="hub-node node-dark node-pos-3" onclick="window.location.hash='suivi-credits'" title="Signature Digitale 100% sans papier">
              ${Icons.penTool}
            </div>

            <!-- 4. Bottom-Right: Financement & Mise en place -->
            <div class="hub-node node-orange node-pos-4" onclick="window.location.hash='recharges'" title="Mise en place & Décaissement">
              ${Icons.coins}
            </div>

            <!-- 5. Bottom-Center: Alerte & Impayés -->
            <div class="hub-node node-white node-pos-5" onclick="window.location.hash='alertes'" title="Alertes & Gestion des risques">
              ${Icons.bell}
              <span class="node-badge-alert">3</span>
            </div>

            <!-- 6. Bottom-Left: Tableau de bord & Décision -->
            <div class="hub-node node-dark node-pos-6" onclick="window.location.hash='reporting'" title="Tableau de bord & Analytics">
              ${Icons.barChart}
            </div>

          </div>
        </div>

        <!-- RIGHT COLUMN: RECHARGE + MAINLEVÉE + ASSURANCE + QUOTE -->
        <div class="flex" style="flex-direction: column; gap: 14px;">

          <!-- RECHARGE / NOUVEAU FINANCEMENT -->
          <div class="bp-card">
            <div class="card-header">
              <div class="card-title-group">
                <div class="card-title-icon icon-orange">${Icons.refreshCw}</div>
                <span class="card-title">Recharge / Nouveau Financement</span>
              </div>
            </div>
            <div class="card-body" style="padding-bottom: 12px;">
              <div class="recharge-summary-box">
                <div class="recharge-row">
                  <span class="text-muted">Client</span>
                  <span class="font-bold">${rechargeReference.client}</span>
                </div>
                <div class="recharge-row">
                  <span class="text-muted">Crédit existant</span>
                  <span class="font-medium">${rechargeReference.creditExistant.toLocaleString('fr-FR')} DH</span>
                </div>
                <div class="recharge-row">
                  <span class="text-muted">Solde restant</span>
                  <span class="font-medium">${rechargeReference.soldeRestant.toLocaleString('fr-FR')} DH</span>
                </div>
                <div class="recharge-row">
                  <span class="text-muted">Nouveau financement</span>
                  <span class="font-bold text-blue">${rechargeReference.nouveauFinancement.toLocaleString('fr-FR')} DH</span>
                </div>
                <div class="recharge-row">
                  <span class="text-muted">Remboursement ancien crédit</span>
                  <span>${rechargeReference.remboursementAncienCredit.toLocaleString('fr-FR')} DH</span>
                </div>
                <div class="recharge-row">
                  <span class="text-muted">Frais et assurance</span>
                  <span>${rechargeReference.fraisEtAssurance.toLocaleString('fr-FR')} DH</span>
                </div>
                <div class="recharge-row">
                  <span class="font-bold text-primary">Solde à verser au client</span>
                  <span class="recharge-highlight-val">${rechargeReference.soldeAVerser.toLocaleString('fr-FR')} DH</span>
                </div>
              </div>

              <button class="btn btn-primary" style="width: 100%;" onclick="window.location.hash='recharges'">
                ${Icons.check} Valider l'opération
              </button>
            </div>
          </div>

          <!-- MAINLEVÉE ET CLÔTURE -->
          <div class="bp-card card-accent-green">
            <div class="card-header">
              <div class="card-title-group">
                <div class="card-title-icon icon-green">${Icons.fileCheck}</div>
                <span class="card-title">Mainlevée et Clôture</span>
              </div>
            </div>
            <div class="card-body">
              <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 12px; align-items: center;">
                <div class="flex" style="flex-direction: column; gap: 6px;">
                  <div class="custom-check-item">
                    <span class="check-icon-circle">${Icons.check}</span>
                    <span>Détection automatique des crédits soldés</span>
                  </div>
                  <div class="custom-check-item">
                    <span class="check-icon-circle">${Icons.check}</span>
                    <span>Préparation du document de mainlevée</span>
                  </div>
                  <div class="custom-check-item">
                    <span class="check-icon-circle">${Icons.check}</span>
                    <span>Validation et signature digitale</span>
                  </div>
                  <div class="custom-check-item">
                    <span class="check-icon-circle">${Icons.check}</span>
                    <span>Remise au client et archivage</span>
                  </div>
                </div>

                <div class="flex" style="flex-direction: column; align-items: center; justify-content: center; text-align: center;">
                  <div style="width: 44px; height: 44px; border-radius: 50%; background: #dcfce7; color: #16a34a; display: flex; align-items: center; justify-content: center; margin-bottom: 6px;">
                    ${Icons.check}
                  </div>
                  <div style="font-size: 13.5px; font-weight: 800; color: #166534; margin-bottom: 8px;">Crédit soldé !</div>
                  <button class="btn btn-sm btn-success" onclick="window.location.hash='mainlevees'">Générer la mainlevée</button>
                </div>
              </div>
            </div>
          </div>

          <!-- ASSURANCE -->
          <div class="bp-card">
            <div class="card-header">
              <div class="card-title-group">
                <div class="card-title-icon icon-blue">${Icons.shieldCheck}</div>
                <span class="card-title">Assurance</span>
              </div>
            </div>
            <div class="card-body" style="padding: 12px 18px;">
              <div class="flex" style="flex-direction: column; gap: 5px;">
                <div class="custom-check-item">
                  <span class="check-icon-circle">${Icons.check}</span>
                  <span>Proposition automatique selon le type de crédit</span>
                </div>
                <div class="custom-check-item">
                  <span class="check-icon-circle">${Icons.check}</span>
                  <span>Souscription digitale</span>
                </div>
                <div class="custom-check-item">
                  <span class="check-icon-circle">${Icons.check}</span>
                  <span>Suivi des échéances</span>
                </div>
                <div class="custom-check-item">
                  <span class="check-icon-circle">${Icons.check}</span>
                  <span>Intégration dans le dossier</span>
                </div>
              </div>
            </div>
          </div>

          <!-- QUOTE CARD -->
          <div class="quote-card">
            <span class="quote-mark">“</span>
            <div class="quote-content">
              <div class="quote-text">« L'innovation au service de nos clients, aujourd'hui et demain. »</div>
              <div class="quote-author">BANQUE POPULAIRE</div>
            </div>
          </div>

        </div>

      </div>

      <!-- ================================================================== -->
      <!-- BOTTOM ROW: TABLEAU DE BORD & NOS ENGAGEMENTS -->
      <!-- ================================================================== -->
      <div class="dashboard-bottom-grid">

        <!-- TABLEAU DE BORD (4 STATS) -->
        <div class="bp-card">
          <div class="card-header" style="padding: 10px 14px;">
            <div class="card-title-group">
              <div class="card-title-icon icon-blue" style="width: 24px; height: 24px;">${Icons.barChart}</div>
              <span class="card-title" style="font-size: 12px;">Tableau de bord</span>
            </div>
          </div>
          <div class="card-body" style="padding: 10px 14px;">
            <div class="stats-counter-strip">
              <div class="counter-item c-blue">
                <span class="counter-title">Dossiers en cours</span>
                <span class="counter-num">124</span>
              </div>
              <div class="counter-item c-green">
                <span class="counter-title">Dossiers validés</span>
                <span class="counter-num">86</span>
              </div>
              <div class="counter-item c-red">
                <span class="counter-title">Impayés</span>
                <span class="counter-num">18</span>
              </div>
              <div class="counter-item c-orange">
                <span class="counter-title">Crédits soldés</span>
                <span class="counter-num">56</span>
              </div>
            </div>
          </div>
        </div>

        <!-- NOS ENGAGEMENTS (6 PILLS) -->
        <div class="bp-card">
          <div class="card-header" style="padding: 10px 14px;">
            <div class="card-title-group">
              <div class="card-title-icon icon-orange" style="width: 24px; height: 24px;">${Icons.shieldCheck}</div>
              <span class="card-title" style="font-size: 12px;">Nos engagements</span>
            </div>
          </div>
          <div class="card-body" style="padding: 10px 14px;">
            <div class="engagements-row">
              <div class="engagement-pill">
                <div class="engagement-icon-circle">${Icons.clock}</div>
                <span class="engagement-text">Gain de temps</span>
              </div>
              <div class="engagement-pill">
                <div class="engagement-icon-circle">${Icons.shieldCheck}</div>
                <span class="engagement-text">Moins d'erreurs</span>
              </div>
              <div class="engagement-pill">
                <div class="engagement-icon-circle">${Icons.smile}</div>
                <span class="engagement-text">Satisfaction client</span>
              </div>
              <div class="engagement-pill">
                <div class="engagement-icon-circle">${Icons.shieldCheck}</div>
                <span class="engagement-text">Meilleur suivi du risque</span>
              </div>
              <div class="engagement-pill">
                <div class="engagement-icon-circle">${Icons.trendingUp}</div>
                <span class="engagement-text">Productivité accrue</span>
              </div>
              <div class="engagement-pill">
                <div class="engagement-icon-circle">${Icons.scale}</div>
                <span class="engagement-text">Conformité réglementaire</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  `;
}
