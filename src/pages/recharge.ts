/* ==========================================================================
   CRÉDIT 360° – BANQUE POPULAIRE
   Page: Recharges (Credit Recharge, Buyout & Additional Financing Simulator)
   ========================================================================== */

import { Icons } from '../icons.js';
import { rechargeReference } from '../data.js';

export function renderRecharge(): string {
  return `
    <div class="recharge-view">

      <!-- TOPBAR -->
      <div class="page-topbar">
        <div class="page-title-group">
          <h1 class="page-heading">
            <span class="text-orange">${Icons.refreshCw}</span>
            Recharge de Crédit & Nouveau Financement
          </h1>
          <div class="page-breadcrumb">
            <span>Accueil</span>
            <span class="sep">/</span>
            <span>Opérations de trésorerie</span>
            <span class="sep">/</span>
            <span class="text-orange font-semibold">Rachat & Recharge de crédit en cours</span>
          </div>
        </div>
        <div class="page-actions-group">
          <button class="btn btn-secondary" onclick="alert('Impression de l\'offre préalable de recharge...')">
            ${Icons.download} Imprimer Offre Préalable
          </button>
          <button class="btn btn-primary" onclick="alert('Dossier de recharge validé avec succès pour M. Ahmed ! Virement de 130 000 DH ordonné.')">
            ${Icons.check} Valider l'opération de recharge
          </button>
        </div>
      </div>

      <!-- CLIENT SELECTOR SEARCH -->
      <div class="bp-card" style="margin-bottom: 22px;">
        <div class="card-header">
          <div class="card-title-group">
            <div class="card-title-icon icon-orange">${Icons.search}</div>
            <span class="card-title">Sélection du dossier client éligible à la recharge</span>
          </div>
          <span class="badge badge-valide">Éligibilité Recharge : Accord Pré-établi</span>
        </div>
        <div class="card-body">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Client sélectionné</label>
              <input type="text" class="form-control font-bold" value="${rechargeReference.client} (${rechargeReference.cin})" readonly>
            </div>
            <div class="form-group">
              <label class="form-label">Type de crédit actuel</label>
              <input type="text" class="form-control" value="Prêt Personnel Salaf Al Ousra (BP Anfa)" readonly>
            </div>
            <div class="form-group">
              <label class="form-label">Historique de paiement Banque Populaire</label>
              <input type="text" class="form-control font-bold text-green" value="Impeccable (0 impayé sur 32 mois)" readonly style="background: #f0fdf4;">
            </div>
          </div>
        </div>
      </div>

      <!-- RECHARGE BREAKDOWN COMPARISON GRID -->
      <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 20px; margin-bottom: 22px;">

        <!-- LEFT: CURRENT LOAN VS NEW PROPOSAL -->
        <div class="flex" style="flex-direction: column; gap: 16px;">

          <!-- ANCIEN CRÉDIT -->
          <div class="bp-card">
            <div class="card-header">
              <div class="card-title-group">
                <div class="card-title-icon icon-blue">${Icons.folder}</div>
                <span class="card-title">1. Situation du crédit en cours</span>
              </div>
              <span class="badge badge-encours">Amorti à 50%</span>
            </div>
            <div class="card-body">
              <div class="recharge-summary-box">
                <div class="recharge-row">
                  <span class="text-muted">Capital initial emprunté</span>
                  <span class="font-bold">${rechargeReference.creditExistant.toLocaleString('fr-FR')} DH</span>
                </div>
                <div class="recharge-row">
                  <span class="text-muted">Capital restant dû à ce jour</span>
                  <span class="font-bold text-red">${rechargeReference.soldeRestant.toLocaleString('fr-FR')} DH</span>
                </div>
                <div class="recharge-row">
                  <span class="text-muted">Mensualité actuelle</span>
                  <span>2 450 DH / mois</span>
                </div>
                <div class="recharge-row">
                  <span class="text-muted">Échéances restantes</span>
                  <span>28 mois</span>
                </div>
              </div>
            </div>
          </div>

          <!-- NOUVEAU FINANCEMENT -->
          <div class="bp-card card-accent-orange">
            <div class="card-header">
              <div class="card-title-group">
                <div class="card-title-icon icon-orange">${Icons.refreshCw}</div>
                <span class="card-title">2. Paramètres du nouveau financement</span>
              </div>
              <span class="badge badge-valide">Taux fidélité 5.50%</span>
            </div>
            <div class="card-body">
              <div class="slider-group">
                <div class="slider-label-row">
                  <span class="slider-title">Montant total du nouveau prêt</span>
                  <span class="slider-value-pill" id="recharge-new-amount-val">${rechargeReference.nouveauFinancement.toLocaleString('fr-FR')} DH</span>
                </div>
                <input type="range" class="bp-range-slider" id="recharge-slider" min="100000" max="350000" step="10000" value="${rechargeReference.nouveauFinancement}">
                <div class="flex justify-between text-muted" style="font-size: 10px; margin-top: 4px;">
                  <span>100 000 DH</span>
                  <span>200 000 DH</span>
                  <span>350 000 DH</span>
                </div>
              </div>

              <div class="recharge-summary-box">
                <div class="recharge-row">
                  <span class="text-muted">Nouvelle durée</span>
                  <span class="font-semibold">${rechargeReference.dureeMois} mois (6 ans)</span>
                </div>
                <div class="recharge-row">
                  <span class="text-muted">Nouvelle mensualité estimée</span>
                  <span class="font-bold text-primary">${rechargeReference.mensualiteNouvelle.toLocaleString('fr-FR')} DH / mois</span>
                </div>
                <div class="recharge-row">
                  <span class="text-muted">Différentiel de charge mensuelle</span>
                  <span class="font-bold text-orange">+1 000 DH / mois</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- RIGHT: FINANCIAL BREAKDOWN OF DISBURSEMENT -->
        <div class="bp-card card-accent-green" style="display: flex; flex-direction: column;">
          <div class="card-header">
            <div class="card-title-group">
              <div class="card-title-icon icon-green">${Icons.coins}</div>
              <span class="card-title">3. Décompte Financier & Virement au Client</span>
            </div>
            <span class="badge badge-solde">Calcul automatisé</span>
          </div>
          <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">

            <div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 20px;">
              <table style="width: 100%; border-collapse: collapse; font-size: 13.5px;">
                <tbody>
                  <tr style="border-bottom: 1px solid var(--border-light);">
                    <td style="padding: 10px 0; color: #475569;">Nouveau montant brut financé</td>
                    <td style="padding: 10px 0; text-align: right; font-weight: 800; font-size: 15px; color: var(--bp-blue);" id="calc-montant-brut">
                      + ${rechargeReference.nouveauFinancement.toLocaleString('fr-FR')} DH
                    </td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-light);">
                    <td style="padding: 10px 0; color: #475569;">Remboursement de l'ancien crédit (Solde restant)</td>
                    <td style="padding: 10px 0; text-align: right; font-weight: 700; color: var(--bp-red);">
                      - ${rechargeReference.remboursementAncienCredit.toLocaleString('fr-FR')} DH
                    </td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-light);">
                    <td style="padding: 10px 0; color: #475569;">Pénalités de remboursement anticipé (Offre Fidélité)</td>
                    <td style="padding: 10px 0; text-align: right; font-weight: 700; color: var(--bp-green);">
                      Exonéré (0 DH)
                    </td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-light);">
                    <td style="padding: 10px 0; color: #475569;">Frais de dossier et prime assurance</td>
                    <td style="padding: 10px 0; text-align: right; font-weight: 700; color: #64748b;">
                      - ${rechargeReference.fraisEtAssurance.toLocaleString('fr-FR')} DH
                    </td>
                  </tr>
                  <tr style="background: #fff7ed;">
                    <td style="padding: 16px 12px; font-weight: 800; color: #9a3412; font-size: 15px;">
                      SOLDE NET À VERSER AU CLIENT (CASH)
                    </td>
                    <td style="padding: 16px 12px; text-align: right; font-weight: 900; font-size: 22px; color: var(--bp-orange);" id="calc-solde-net">
                      ${rechargeReference.soldeAVerser.toLocaleString('fr-FR')} DH
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="notice-banner notice-green" style="margin-top: 18px;">
                ${Icons.check}
                <span>Le montant de 130 000 DH sera crédité directement sur le compte courant BP de M. Ahmed dès signature électronique de l'avenant.</span>
              </div>
            </div>

            <div style="margin-top: 20px;">
              <button class="btn btn-primary btn-lg" style="width: 100%; justify-content: center;" onclick="alert('Opération de recharge soumise pour signature électronique !')">
                ${Icons.check} Valider l'opération et Éditer le Contrat
              </button>
            </div>

          </div>
        </div>

      </div>

      <!-- HISTORICAL RECHARGES TABLE -->
      <div class="bp-card">
        <div class="card-header">
          <div class="card-title-group">
            <div class="card-title-icon icon-blue">${Icons.folder}</div>
            <span class="card-title">Dernières opérations de recharge traitées en agence</span>
          </div>
          <span class="badge badge-valide">Taux de conversion : 92%</span>
        </div>
        <div class="card-body" style="padding: 0;">
          <div class="bp-table-wrapper" style="border: none;">
            <table class="bp-table">
              <thead>
                <tr>
                  <th>DATE</th>
                  <th>CLIENT</th>
                  <th>ANCIEN SOLDE</th>
                  <th>NOUVEAU CRÉDIT</th>
                  <th>NET CLIENT DÉCAISSÉ</th>
                  <th>STATUT</th>
                  <th>CONSEILLER</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>21/09/2026</td>
                  <td class="client-cell">M. Ahmed</td>
                  <td>60 000 DH</td>
                  <td class="font-bold text-blue">200 000 DH</td>
                  <td class="font-bold text-orange">130 000 DH</td>
                  <td><span class="badge badge-valide">Validé</span></td>
                  <td>Asmaa El Habachi</td>
                </tr>
                <tr>
                  <td>19/09/2026</td>
                  <td class="client-cell">S. Latifa</td>
                  <td>45 000 DH</td>
                  <td class="font-bold text-blue">150 000 DH</td>
                  <td class="font-bold text-orange">98 500 DH</td>
                  <td><span class="badge badge-signe">Décaissé</span></td>
                  <td>Asmaa El Habachi</td>
                </tr>
                <tr>
                  <td>16/09/2026</td>
                  <td class="client-cell">H. Tarik</td>
                  <td>80 000 DH</td>
                  <td class="font-bold text-blue">250 000 DH</td>
                  <td class="font-bold text-orange">162 000 DH</td>
                  <td><span class="badge badge-signe">Décaissé</span></td>
                  <td>Asmaa El Habachi</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  `;
}
