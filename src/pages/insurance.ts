/* ==========================================================================
   CRÉDIT 360° – BANQUE POPULAIRE
   Page: Assurances (Credit Insurance Portfolio, Products & Policy Management)
   ========================================================================== */

import { Icons } from '../icons.js';
import { assurancesData } from '../data.js';

export function renderInsurance(): string {
  return `
    <div class="insurance-view">

      <!-- TOPBAR -->
      <div class="page-topbar">
        <div class="page-title-group">
          <h1 class="page-heading">
            <span class="text-orange">${Icons.shieldCheck}</span>
            Assurances Emprunteur & Prévoyance
          </h1>
          <div class="page-breadcrumb">
            <span>Accueil</span>
            <span class="sep">/</span>
            <span>Bancassurance</span>
            <span class="sep">/</span>
            <span class="text-orange font-semibold">Gestion des contrats d'assurance liés aux crédits</span>
          </div>
        </div>
        <div class="page-actions-group">
          <button class="btn btn-secondary" onclick="alert('Exportation de l\'état des primes collectées vers la compagnie partenaire...')">
            ${Icons.download} Rapport Primes Compagnie
          </button>
          <button class="btn btn-primary" onclick="alert('Formulaire de souscription express ouvert.')">
            ${Icons.filePlus} Nouvelle Souscription Assurance
          </button>
        </div>
      </div>

      <!-- KPI METRIC ROW -->
      <div class="stat-card-row" style="margin-bottom: 22px;">
        <div class="kpi-card">
          <div class="kpi-data">
            <span class="kpi-label">Polices Actives</span>
            <span class="kpi-value text-blue">342</span>
          </div>
          <div class="kpi-icon" style="background: var(--bp-blue-light); color: var(--bp-blue);">${Icons.shieldCheck}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-data">
            <span class="kpi-label">Taux d'Affiliation Crédit</span>
            <span class="kpi-value text-green">98.2 %</span>
          </div>
          <div class="kpi-icon" style="background: var(--bp-green-light); color: var(--bp-green);">${Icons.trendingUp}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-data">
            <span class="kpi-label">Primes Mensuelles Collectées</span>
            <span class="kpi-value text-orange">185 400 DH</span>
          </div>
          <div class="kpi-icon" style="background: var(--bp-orange-light); color: var(--bp-orange);">${Icons.coins}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-data">
            <span class="kpi-label">Sinistres en Traitement</span>
            <span class="kpi-value">2</span>
          </div>
          <div class="kpi-icon" style="background: var(--bg-muted); color: #334155;">${Icons.alertTriangle}</div>
        </div>
      </div>

      <!-- 4 PRODUCT TIERS -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 22px;">

        <!-- CARD 1: ADI -->
        <div class="bp-card card-accent-blue">
          <div class="card-header">
            <span class="font-bold" style="font-size: 13.5px;">Assurance ADI</span>
            <span class="badge badge-valide">Obligatoire</span>
          </div>
          <div class="card-body">
            <div style="font-size: 11.5px; color: var(--text-secondary); margin-bottom: 12px; line-height: 1.4;">
              Décès & Invalidité Absolue et Définitive (IAD). Prise en charge intégrale du capital restant dû.
            </div>
            <div class="recharge-summary-box">
              <div class="recharge-row">
                <span class="text-muted">Tarif indicatif</span>
                <span class="font-bold text-blue">0.36 % an</span>
              </div>
              <div class="recharge-row">
                <span class="text-muted">Partenaire</span>
                <span>Marocaine Vie</span>
              </div>
            </div>
            <button class="btn btn-sm btn-secondary" style="width: 100%;" onclick="alert('Conditions générales ADI ouvertes.')">Voir conditions</button>
          </div>
        </div>

        <!-- CARD 2: MRH -->
        <div class="bp-card card-accent-orange">
          <div class="card-header">
            <span class="font-bold" style="font-size: 13.5px;">Multirisque Habitation</span>
            <span class="badge badge-analyse">Recommandée</span>
          </div>
          <div class="card-body">
            <div style="font-size: 11.5px; color: var(--text-secondary); margin-bottom: 12px; line-height: 1.4;">
              Protection du bien immobilier contre incendie, dégât des eaux, bris de glaces, catastrophes naturelles.
            </div>
            <div class="recharge-summary-box">
              <div class="recharge-row">
                <span class="text-muted">Prime mensuelle</span>
                <span class="font-bold text-orange">Dès 85 DH</span>
              </div>
              <div class="recharge-row">
                <span class="text-muted">Partenaire</span>
                <span>Saham / Sanlam</span>
              </div>
            </div>
            <button class="btn btn-sm btn-secondary" style="width: 100%;" onclick="alert('Conditions générales MRH ouvertes.')">Voir conditions</button>
          </div>
        </div>

        <!-- CARD 3: AUTO -->
        <div class="bp-card card-accent-green">
          <div class="card-header">
            <span class="font-bold" style="font-size: 13.5px;">Tous Risques Auto</span>
            <span class="badge badge-signe">Formule Sayara</span>
          </div>
          <div class="card-body">
            <div style="font-size: 11.5px; color: var(--text-secondary); margin-bottom: 12px; line-height: 1.4;">
              Tous risques, vol, incendie, assistance VIP 24h/24 au Maroc avec véhicule de prêt garanti.
            </div>
            <div class="recharge-summary-box">
              <div class="recharge-row">
                <span class="text-muted">Franchise</span>
                <span class="font-bold text-green">0 DH Pare-brise</span>
              </div>
              <div class="recharge-row">
                <span class="text-muted">Partenaire</span>
                <span>MCMA Assurances</span>
              </div>
            </div>
            <button class="btn btn-sm btn-secondary" style="width: 100%;" onclick="alert('Conditions générales Auto ouvertes.')">Voir conditions</button>
          </div>
        </div>

        <!-- CARD 4: PERTE EMPLOI -->
        <div class="bp-card">
          <div class="card-header">
            <span class="font-bold" style="font-size: 13.5px;">Perte d'Emploi</span>
            <span class="badge badge-neutre">Option Confort</span>
          </div>
          <div class="card-body">
            <div style="font-size: 11.5px; color: var(--text-secondary); margin-bottom: 12px; line-height: 1.4;">
              Prise en charge des mensualités de remboursement jusqu'à 12 mois consécutifs en cas de licenciement.
            </div>
            <div class="recharge-summary-box">
              <div class="recharge-row">
                <span class="text-muted">Plafond mensuel</span>
                <span class="font-bold text-primary">15 000 DH</span>
              </div>
              <div class="recharge-row">
                <span class="text-muted">Partenaire</span>
                <span>Marocaine Vie</span>
              </div>
            </div>
            <button class="btn btn-sm btn-secondary" style="width: 100%;" onclick="alert('Conditions générales Perte d\'emploi ouvertes.')">Voir conditions</button>
          </div>
        </div>

      </div>

      <!-- ACTIVE INSURANCE POLICIES TABLE -->
      <div class="bp-card">
        <div class="card-header">
          <div class="card-title-group">
            <div class="card-title-icon icon-blue">${Icons.folder}</div>
            <span class="card-title">Portefeuille des polices d'assurance en vigueur</span>
          </div>
          <span class="badge badge-valide">Synchronisation quotidienne</span>
        </div>
        <div class="card-body" style="padding: 0;">
          <div class="bp-table-wrapper" style="border: none;">
            <table class="bp-table">
              <thead>
                <tr>
                  <th>N° DE POLICE</th>
                  <th>CLIENT ASSURÉ</th>
                  <th>PRODUIT COUVERT</th>
                  <th>DOSSIER CRÉDIT</th>
                  <th>CAPITAL GARANTI</th>
                  <th>PRIME / MOIS</th>
                  <th>COMPAGNIE</th>
                  <th>STATUT</th>
                  <th>DATE EFFET</th>
                  <th style="text-align: right;">ACTION</th>
                </tr>
              </thead>
              <tbody>
                ${assurancesData.map(a => `
                  <tr>
                    <td class="ref-cell">${a.policeNumero}</td>
                    <td class="client-cell">${a.client}</td>
                    <td><strong>${a.typeAssurance}</strong></td>
                    <td style="font-family: monospace; color: var(--bp-blue);">${a.dossierRef}</td>
                    <td class="amount-cell font-bold">${a.capitalGaranti.toLocaleString('fr-FR')} DH</td>
                    <td class="font-bold text-orange">${a.primeMensuelle} DH</td>
                    <td>${a.compagnie}</td>
                    <td>
                      <span class="badge ${a.statut === 'Active' ? 'badge-valide' : 'badge-completer'}">${a.statut}</span>
                    </td>
                    <td class="text-muted">${a.dateEffet}</td>
                    <td style="text-align: right;">
                      <button class="btn btn-sm btn-secondary" onclick="alert('Attestation d\'assurance pour la police ${a.policeNumero} téléchargée.')">
                        ${Icons.fileText} Certificat
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  `;
}
