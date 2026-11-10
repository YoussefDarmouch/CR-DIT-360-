/* ==========================================================================
   CRÉDIT 360° – BANQUE POPULAIRE
   Page: Mainlevées (Credit Closure & Mortgage/Pledge Release Certificate)
   ========================================================================== */

import { Icons } from '../icons.js';
import { mainleveesData } from '../data.js';

export function renderMainlevee(): string {
  const currentItem = mainleveesData[0];

  return `
    <div class="mainlevee-view">

      <!-- TOPBAR -->
      <div class="page-topbar">
        <div class="page-title-group">
          <h1 class="page-heading">
            <span class="text-orange">${Icons.fileCheck}</span>
            Mainlevée et Clôture des Crédits
          </h1>
          <div class="page-breadcrumb">
            <span>Accueil</span>
            <span class="sep">/</span>
            <span>Fin de cycle & Clôture</span>
            <span class="sep">/</span>
            <span class="text-orange font-semibold">Délivrance des attestations de mainlevée</span>
          </div>
        </div>
        <div class="page-actions-group">
          <button class="btn btn-secondary" onclick="alert('Téléchargement du registre des mainlevées du mois...')">
            ${Icons.download} Exporter Registre Notarial
          </button>
          <button class="btn btn-success" onclick="alert('Attestation de mainlevée générée et signée électroniquement avec succès !')">
            ${Icons.fileCheck} Générer & Signer Mainlevée
          </button>
        </div>
      </div>

      <!-- KPI METRIC ROW -->
      <div class="stat-card-row" style="margin-bottom: 22px;">
        <div class="kpi-card">
          <div class="kpi-data">
            <span class="kpi-label">Crédits Soldés ce Mois</span>
            <span class="kpi-value text-green">56</span>
          </div>
          <div class="kpi-icon" style="background: var(--bp-green-light); color: var(--bp-green);">${Icons.check}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-data">
            <span class="kpi-label">Mainlevées Délivrées</span>
            <span class="kpi-value text-blue">48</span>
          </div>
          <div class="kpi-icon" style="background: var(--bp-blue-light); color: var(--bp-blue);">${Icons.fileCheck}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-data">
            <span class="kpi-label">Délai Moyen d'Émission</span>
            <span class="kpi-value text-orange">24 Heures</span>
          </div>
          <div class="kpi-icon" style="background: var(--bp-orange-light); color: var(--bp-orange);">${Icons.clock}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-data">
            <span class="kpi-label">Dossiers en cours Notaire</span>
            <span class="kpi-value">8</span>
          </div>
          <div class="kpi-icon" style="background: var(--bg-muted); color: #334155;">${Icons.briefcase}</div>
        </div>
      </div>

      <!-- WORKFLOW CHECKLIST PIPELINE CARD -->
      <div class="bp-card card-accent-green" style="margin-bottom: 22px;">
        <div class="card-body" style="padding: 16px 20px;">
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px;">

            <div class="flex items-center gap-3">
              <span class="check-icon-circle">${Icons.check}</span>
              <div>
                <div class="font-bold" style="font-size: 12.5px; color: #166534;">1. Détection automatique</div>
                <div class="text-muted" style="font-size: 11px;">Crédit intégralement soldé (0 DH restant)</div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <span class="check-icon-circle">${Icons.check}</span>
              <div>
                <div class="font-bold" style="font-size: 12.5px; color: #166534;">2. Préparation acte</div>
                <div class="text-muted" style="font-size: 11px;">Renseignement automatique titre & garanties</div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <span class="check-icon-circle">${Icons.check}</span>
              <div>
                <div class="font-bold" style="font-size: 12.5px; color: #166534;">3. Signature digitale</div>
                <div class="text-muted" style="font-size: 11px;">Validation du Directeur et Sceau Agence</div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <span class="check-icon-circle">${Icons.check}</span>
              <div>
                <div class="font-bold" style="font-size: 12.5px; color: #166534;">4. Remise & Conservation</div>
                <div class="text-muted" style="font-size: 11px;">Transmission notaire & conservation foncière</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- TWO COLUMNS: LIST OF REPAID LOANS & OFFICIAL DOCUMENT PREVIEW -->
      <div style="display: grid; grid-template-columns: 1.1fr 1.3fr; gap: 20px;">

        <!-- LEFT: LIST OF SOLDED LOANS -->
        <div class="bp-card">
          <div class="card-header">
            <div class="card-title-group">
              <div class="card-title-icon icon-green">${Icons.folder}</div>
              <span class="card-title">Dossiers soldés en attente de mainlevée</span>
            </div>
            <span class="badge badge-solde">4 dossiers prioritaires</span>
          </div>
          <div class="card-body" style="padding: 0;">
            <div class="bp-table-wrapper" style="border: none;">
              <table class="bp-table">
                <thead>
                  <tr>
                    <th>RÉFÉRENCE</th>
                    <th>CLIENT & BIEN</th>
                    <th>MONTANT</th>
                    <th>STATUT</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  ${mainleveesData.map((m, idx) => `
                    <tr style="${idx === 0 ? 'background: #f0fdf4;' : ''}">
                      <td class="ref-cell">${m.reference}</td>
                      <td>
                        <div class="client-cell">${m.client}</div>
                        <div class="text-muted" style="font-size: 10px;">${m.bienGarantie}</div>
                      </td>
                      <td class="amount-cell">${m.montantInitial.toLocaleString('fr-FR')} DH</td>
                      <td>
                        <span class="badge ${m.statut === 'Prêt Soldé' ? 'badge-valide' : m.statut === 'Mainlevée Générée' ? 'badge-signe' : 'badge-encours'}">${m.statut}</span>
                      </td>
                      <td>
                        <button class="btn btn-sm ${idx === 0 ? 'btn-success' : 'btn-secondary'}" onclick="alert('Dossier ${m.reference} sélectionné pour aperçu.')">
                          ${Icons.fileCheck} Sélectionner
                        </button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- RIGHT: OFFICIAL CERTIFICATE SHEET PREVIEW -->
        <div class="bp-card card-accent-green">
          <div class="card-header">
            <div class="card-title-group">
              <div class="card-title-icon icon-green">${Icons.fileText}</div>
              <span class="card-title">Aperçu officiel de l'attestation de mainlevée</span>
            </div>
            <div class="flex gap-2">
              <button class="btn btn-sm btn-outline-orange" onclick="alert('Impression de l\'attestation officielle...')">
                ${Icons.download} PDF Certifié
              </button>
            </div>
          </div>
          <div class="card-body" style="background: #f8fafc; padding: 20px;">

            <!-- OFFICIAL CERTIFICATE DOCUMENT -->
            <div class="official-certificate-sheet">
              <div class="sheet-watermark">MAINLEVÉE</div>

              <div class="sheet-header">
                <div>
                  <div style="font-size: 15px; font-weight: 900; letter-spacing: 1px; color: #0f172a;">BANQUE CENTRALE POPULAIRE</div>
                  <div style="font-size: 11px; color: #475569;">Succursale Casablanca Anfa • Code Agence: 0214</div>
                </div>
                <div style="text-align: right; font-size: 11px; color: #475569;">
                  Réf: <strong>${currentItem.reference}</strong><br>
                  Date: <strong>21 Septembre 2026</strong>
                </div>
              </div>

              <div class="sheet-title">ATTESTATION DE MAINLEVÉE TOTALE D'HYPOTHÈQUE</div>

              <div class="sheet-body">
                <p>La <strong>BANQUE CENTRALE POPULAIRE DU MAROC</strong>, Société Anonyme à Conseil d'Administration, au capital de 2 033 133 980 DH, dont le siège social est à Casablanca, 101 Boulevard Mohamed Zerktouni ;</p>
                <p>Certifie et atteste par la présente que le crédit consenti à Monsieur <strong>${currentItem.client}</strong>, titulaire de la Carte d'Identité Nationale N° <strong>${currentItem.cin}</strong>, d'un montant initial en principal de <strong>${currentItem.montantInitial.toLocaleString('fr-FR')} Dirhams</strong>, a été intégralement soldé et remboursé en capital, intérêts, commissions et accessoires.</p>
                <p>En conséquence de quoi, la Banque Populaire donne son plein et entier consentement à la <strong>radiation définitive et totale</strong> de l'inscription d'hypothèque conventionnelle consentie au profit de notre établissement sur le bien immobilier désigné ci-après :</p>
                <p style="background: #f1f5f9; padding: 8px 12px; border-left: 3px solid var(--bp-orange); font-style: italic; font-size: 12px;">
                  « ${currentItem.bienGarantie} » auprès de la <strong>${currentItem.conservationFonciere}</strong>.
                </p>
                <p>La présente attestation est délivrée à l'intéressé pour valoir et servir ce que de droit, notamment auprès de Maître <strong>${currentItem.notaire}</strong>, Notaire instrumentaire.</p>
              </div>

              <div class="sheet-signatures">
                <div class="signature-box">
                  <div class="font-bold">Le Conseiller Commercial</div>
                  <div style="font-style: italic; font-size: 11px; color: #64748b; margin-top: 4px;">Asmaa El Habachi</div>
                  <div style="font-family: cursive; color: #1e3a8a; margin-top: 10px; font-size: 16px;">A. El Habachi</div>
                </div>

                <div class="signature-stamp">
                  BANQUE POPULAIRE<br>
                  ★ SCEAU OFFICIEL ★<br>
                  AGENCE ANFA
                </div>

                <div class="signature-box">
                  <div class="font-bold">Le Directeur d'Agence</div>
                  <div style="font-style: italic; font-size: 11px; color: #64748b; margin-top: 4px;">Visa & Clôture Définitive</div>
                  <div style="font-family: cursive; color: #166534; margin-top: 10px; font-size: 16px;">T. Benjelloun</div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  `;
}
