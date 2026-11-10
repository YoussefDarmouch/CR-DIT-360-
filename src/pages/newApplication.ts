/* ==========================================================================
   CRÉDIT 360° – BANQUE POPULAIRE
   Page: Nouveau dossier (Interactive Credit Initiation & Simulator)
   ========================================================================== */

import { Icons } from '../icons.js';

export function renderNewApplication(): string {
  return `
    <div class="new-app-view">

      <!-- PAGE HEADER -->
      <div class="page-topbar">
        <div class="page-title-group">
          <h1 class="page-heading">
            <span class="text-orange">${Icons.filePlus}</span>
            Nouveau dossier de crédit
          </h1>
          <div class="page-breadcrumb">
            <span>Accueil</span>
            <span class="sep">/</span>
            <span>Parcours d'octroi</span>
            <span class="sep">/</span>
            <span class="text-orange font-semibold">Initiation dossier</span>
          </div>
        </div>
        <div class="page-actions-group">
          <button class="btn btn-secondary" onclick="window.location.hash='mes-dossiers'">
            ${Icons.folder} Consulter mes dossiers
          </button>
          <button class="btn btn-primary" id="btn-save-draft">
            ${Icons.check} Enregistrer en brouillon
          </button>
        </div>
      </div>

      <!-- STEPPER NAVIGATION -->
      <div class="form-stepper">
        <div class="step-item completed">
          <span class="step-bubble">${Icons.check}</span>
          <span>1. Choix du crédit</span>
        </div>
        <div class="step-divider-line"></div>
        <div class="step-item active">
          <span class="step-bubble">2</span>
          <span>2. Données client</span>
        </div>
        <div class="step-divider-line"></div>
        <div class="step-item">
          <span class="step-bubble">3</span>
          <span>3. Simulation financière</span>
        </div>
        <div class="step-divider-line"></div>
        <div class="step-item">
          <span class="step-bubble">4</span>
          <span>4. Pièces justificatives</span>
        </div>
        <div class="step-divider-line"></div>
        <div class="step-item">
          <span class="step-bubble">5</span>
          <span>5. Validation & Accord</span>
        </div>
      </div>

      <!-- SECTION 1: CHOIX DU TYPE DE CRÉDIT -->
      <div class="bp-card" style="margin-bottom: 22px;">
        <div class="card-header">
          <div class="card-title-group">
            <div class="card-title-icon icon-orange">${Icons.creditCard}</div>
            <span class="card-title">1. Sélection du produit de financement</span>
          </div>
          <span class="badge badge-analyse">Taux promotionnels Rentrée 2026</span>
        </div>
        <div class="card-body">
          <div class="credit-type-selector">

            <!-- Type 1: Immobilier -->
            <div class="credit-type-card selected" data-type="immo">
              <div class="type-card-top">
                <div class="type-icon">${Icons.homeSimple}</div>
                <span class="badge badge-valide">Taux dès 4.65%</span>
              </div>
              <div class="type-card-title">Crédit Immobilier</div>
              <div class="type-card-desc">Acquisition logement principal, secondaire, construction ou terrain. Salaf Sakane & Moukawala.</div>
              <div class="type-card-features">
                <span class="type-tag">Jusqu'à 300 mois</span>
                <span class="type-tag">Financement à 100%</span>
                <span class="type-tag">Assurance ADI</span>
              </div>
            </div>

            <!-- Type 2: Consommation / Personnel -->
            <div class="credit-type-card" data-type="conso">
              <div class="type-card-top">
                <div class="type-icon">${Icons.user}</div>
                <span class="badge badge-analyse">Décision 24h</span>
              </div>
              <div class="type-card-title">Prêt Personnel</div>
              <div class="type-card-desc">Financement des projets de vie, trésorerie personnelle, études, aménagement familial.</div>
              <div class="type-card-features">
                <span class="type-tag">Jusqu'à 150 000 DH</span>
                <span class="type-tag">Jusqu'à 60 mois</span>
                <span class="type-tag">Sans apport</span>
              </div>
            </div>

            <!-- Type 3: Automobile -->
            <div class="credit-type-card" data-type="auto">
              <div class="type-card-top">
                <div class="type-icon">${Icons.car}</div>
                <span class="badge badge-encours">Offre Salaf Sayara</span>
              </div>
              <div class="type-card-title">Crédit Auto</div>
              <div class="type-card-desc">Véhicules neufs ou occasions récentes. Partenariats concessionnaires agréés Banque Populaire.</div>
              <div class="type-card-features">
                <span class="type-tag">Taux 4.90%</span>
                <span class="type-tag">Jusqu'à 72 mois</span>
                <span class="type-tag">Garantie gage</span>
              </div>
            </div>

            <!-- Type 4: Équipement Pro -->
            <div class="credit-type-card" data-type="equipement">
              <div class="type-card-top">
                <div class="type-icon">${Icons.briefcase}</div>
                <span class="badge badge-completer">Professionnels & TPE</span>
              </div>
              <div class="type-card-title">Crédit Équipement</div>
              <div class="type-card-desc">Acquisition de matériel pro, véhicules utilitaires, machines outils et aménagement d'activité.</div>
              <div class="type-card-features">
                <span class="type-tag">Jusqu'à 1 000 000 DH</span>
                <span class="type-tag">Amortissement dégressif</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- SECTION 2: DONNÉES DU CLIENT -->
      <div class="bp-card" style="margin-bottom: 22px;">
        <div class="card-header">
          <div class="card-title-group">
            <div class="card-title-icon icon-blue">${Icons.user}</div>
            <span class="card-title">2. Identification du Client & Situation Financière</span>
          </div>
          <div class="flex items-center gap-2">
            <button class="btn btn-sm btn-secondary" id="btn-cin-lookup">
              ${Icons.search} Rapatrier données Banque Populaire
            </button>
          </div>
        </div>
        <div class="card-body">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Numéro CIN / Titre de séjour <span class="required">*</span></label>
              <input type="text" class="form-control" value="BK349102" id="client-cin" placeholder="Ex: BK349102">
            </div>
            <div class="form-group">
              <label class="form-label">Nom complet du client <span class="required">*</span></label>
              <input type="text" class="form-control" value="A. Karim" id="client-nom">
            </div>
            <div class="form-group">
              <label class="form-label">Numéro de Compte RIB (Banque Populaire)</label>
              <input type="text" class="form-control" value="127 780 0001234567890123 45" readonly style="background: var(--bg-subtle);">
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Situation matrimoniale</label>
              <select class="form-control">
                <option selected>Marié(e) - 2 enfants à charge</option>
                <option>Célibataire</option>
                <option>Divorcé(e)</option>
                <option>Veuf / Veuve</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Secteur d'activité / Employeur</label>
              <input type="text" class="form-control" value="Ingénieur Télécom - OCP SA Casablanca">
            </div>
            <div class="form-group">
              <label class="form-label">Type de contrat</label>
              <select class="form-control">
                <option selected>CDI (Titulaire > 6 ans)</option>
                <option>Fonctionnaire d'État</option>
                <option>Profession Libérale / Gérant</option>
                <option>Retraité(e)</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Revenu mensuel net moyen (DH) <span class="required">*</span></label>
              <input type="number" class="form-control" value="22500" id="client-revenu">
            </div>
            <div class="form-group">
              <label class="form-label">Charges mensuelles & autres crédits (DH)</label>
              <input type="number" class="form-control" value="2800" id="client-charges">
            </div>
            <div class="form-group">
              <label class="form-label">Capacité de remboursement résiduelle</label>
              <input type="text" class="form-control font-bold text-green" value="9 450 DH / mois (Endettement max 45%)" readonly style="background: #f0fdf4;">
            </div>
          </div>
        </div>
      </div>

      <!-- SECTION 3: SIMULATEUR DE FINANCEMENT INTERACTIF -->
      <div class="bp-card" style="margin-bottom: 22px;">
        <div class="card-header">
          <div class="card-title-group">
            <div class="card-title-icon icon-orange">${Icons.sliders}</div>
            <span class="card-title">3. Paramètres du Financement & Simulation</span>
          </div>
          <span class="badge badge-valide">Simulation temps réel</span>
        </div>
        <div class="card-body">
          <div class="simulator-panel">

            <!-- Left: Sliders -->
            <div class="flex" style="flex-direction: column; justify-content: center;">

              <!-- Montant Slider -->
              <div class="slider-group">
                <div class="slider-label-row">
                  <span class="slider-title">Montant emprunté</span>
                  <span class="slider-value-pill" id="slider-montant-val">480 000 DH</span>
                </div>
                <input type="range" class="bp-range-slider" id="input-range-montant" min="50000" max="1500000" step="10000" value="480000">
                <div class="flex justify-between text-muted" style="font-size: 10px; margin-top: 4px;">
                  <span>50 000 DH</span>
                  <span>750 000 DH</span>
                  <span>1 500 000 DH</span>
                </div>
              </div>

              <!-- Durée Slider -->
              <div class="slider-group">
                <div class="slider-label-row">
                  <span class="slider-title">Durée de remboursement</span>
                  <span class="slider-value-pill" id="slider-duree-val">240 mois (20 ans)</span>
                </div>
                <input type="range" class="bp-range-slider" id="input-range-duree" min="24" max="300" step="12" value="240">
                <div class="flex justify-between text-muted" style="font-size: 10px; margin-top: 4px;">
                  <span>24 mois (2 ans)</span>
                  <span>180 mois (15 ans)</span>
                  <span>300 mois (25 ans)</span>
                </div>
              </div>

              <!-- Taux d'intérêt -->
              <div class="form-row" style="margin-top: 6px;">
                <div class="form-group">
                  <label class="form-label">Taux d'intérêt fixe HT</label>
                  <input type="text" class="form-control font-bold" value="4.75 %" id="input-taux">
                </div>
                <div class="form-group">
                  <label class="form-label">Prime Assurance ADI (mensuelle)</label>
                  <input type="text" class="form-control" value="145 DH" readonly style="background: var(--bg-subtle);">
                </div>
              </div>

            </div>

            <!-- Right: Result Card -->
            <div class="simulator-result-card">
              <div>
                <div class="flex items-center justify-between" style="border-bottom: 1px solid rgba(255,255,255,0.15); padding-bottom: 10px; margin-bottom: 14px;">
                  <span style="font-size: 13px; font-weight: 700; letter-spacing: 0.5px; color: #cbd5e1;">RÉSULTAT DE SIMULATION</span>
                  <span class="badge badge-valide">Éligibilité Favorable</span>
                </div>

                <div class="sim-monthly-box">
                  <div style="font-size: 11px; text-transform: uppercase; color: #94a3b8; letter-spacing: 1px;">Mensualité TTC estimée</div>
                  <div class="sim-monthly-val" id="res-mensualite">3 102 DH</div>
                  <div style="font-size: 10.5px; color: #cbd5e1; margin-top: 4px;">Assurance décès-invalidité incluse</div>
                </div>

                <div class="flex" style="flex-direction: column; gap: 8px; font-size: 12px; color: #e2e8f0;">
                  <div class="flex justify-between">
                    <span style="color: #94a3b8;">Taux d'endettement après crédit:</span>
                    <span class="font-bold text-green" id="res-endettement">26.2 % (Conforme < 45%)</span>
                  </div>
                  <div class="flex justify-between">
                    <span style="color: #94a3b8;">Frais de dossier Banque Populaire:</span>
                    <span class="font-medium">1 650 DH (Offre 50%)</span>
                  </div>
                  <div class="flex justify-between">
                    <span style="color: #94a3b8;">Coût total du crédit:</span>
                    <span class="font-medium" id="res-cout-total">264 480 DH</span>
                  </div>
                </div>
              </div>

              <div style="margin-top: 18px;">
                <button class="btn btn-primary" style="width: 100%; justify-content: center;" onclick="alert('Simulation enregistrée dans le dossier client.')">
                  ${Icons.check} Valider ces paramètres financiers
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- SECTION 4: CONSTITUTION DU DOSSIER & PIÈCES JUSTIFICATIVES -->
      <div class="bp-card" style="margin-bottom: 22px;">
        <div class="card-header">
          <div class="card-title-group">
            <div class="card-title-icon icon-green">${Icons.folder}</div>
            <span class="card-title">4. Checklist Documentaire & Dépôt des pièces</span>
          </div>
          <span class="badge badge-encours">3 sur 5 pièces vérifiées</span>
        </div>
        <div class="card-body">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">

            <!-- Checklist items -->
            <div class="flex" style="flex-direction: column; gap: 10px;">

              <div class="flex items-center justify-between p-3" style="background: var(--bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-color); padding: 10px 14px;">
                <div class="flex items-center gap-3">
                  <span class="check-icon-circle">${Icons.check}</span>
                  <div>
                    <div class="font-semibold" style="font-size: 12.5px;">Copie certifiée conforme CIN biométrique</div>
                    <div class="text-muted" style="font-size: 10.5px;">Scannée le 21/09/2026 - Conforme</div>
                  </div>
                </div>
                <span class="badge badge-valide">Validé</span>
              </div>

              <div class="flex items-center justify-between p-3" style="background: var(--bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-color); padding: 10px 14px;">
                <div class="flex items-center gap-3">
                  <span class="check-icon-circle">${Icons.check}</span>
                  <div>
                    <div class="font-semibold" style="font-size: 12.5px;">Attestation de travail & 3 derniers bulletins</div>
                    <div class="text-muted" style="font-size: 10.5px;">Salaire net certifié conforme 22 500 DH</div>
                  </div>
                </div>
                <span class="badge badge-valide">Validé</span>
              </div>

              <div class="flex items-center justify-between p-3" style="background: var(--bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-color); padding: 10px 14px;">
                <div class="flex items-center gap-3">
                  <span class="check-icon-circle">${Icons.check}</span>
                  <div>
                    <div class="font-semibold" style="font-size: 12.5px;">Relevés bancaires des 3 derniers mois</div>
                    <div class="text-muted" style="font-size: 10.5px;">Rapatriés directement du système BP</div>
                  </div>
                </div>
                <span class="badge badge-valide">Automatisé</span>
              </div>

              <div class="flex items-center justify-between p-3" style="background: #fffaf0; border-radius: var(--radius-md); border: 1px dashed var(--bp-orange); padding: 10px 14px;">
                <div class="flex items-center gap-3">
                  <span style="color: var(--bp-orange);">${Icons.alertTriangle}</span>
                  <div>
                    <div class="font-semibold" style="font-size: 12.5px;">Compromis de vente / Titre foncier</div>
                    <div class="text-muted" style="font-size: 10.5px;">En attente de signature notaire</div>
                  </div>
                </div>
                <span class="badge badge-completer">À fournir</span>
              </div>

            </div>

            <!-- Drag & Drop Zone -->
            <div class="doc-dropzone" onclick="alert('Module de dépôt des documents activé.')">
              <div class="dropzone-icon">${Icons.filePlus}</div>
              <div class="font-bold" style="font-size: 13.5px; color: #1e293b;">Glisser & déposer les pièces justificatives ici</div>
              <div class="text-muted" style="font-size: 11.5px; max-width: 320px;">Formats acceptés : PDF, PNG, JPG (Max 25 Mo par fichier). Reconnaissance OCR automatique.</div>
              <button class="btn btn-sm btn-outline-orange" style="margin-top: 6px;">Parcourir les fichiers</button>
            </div>

          </div>
        </div>
      </div>

      <!-- BOTTOM ACTION BAR -->
      <div class="flex items-center justify-between p-4" style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 16px 20px;">
        <div class="flex items-center gap-2">
          <span class="badge badge-valide" style="font-size: 12px; padding: 6px 12px;">Score Risque : A+ Favorable</span>
          <span class="text-muted" style="font-size: 12px;">Conseillère : Asmaa El Habachi (Habilitation Niveau 1 jusqu'à 500 000 DH)</span>
        </div>
        <div class="flex items-center gap-3">
          <button class="btn btn-secondary" onclick="window.location.hash='accueil'">Annuler</button>
          <button class="btn btn-outline-orange" onclick="alert('Simulation imprimée.')">${Icons.download} Télécharger Simulation PDF</button>
          <button class="btn btn-primary" onclick="alert('Dossier CRD00125 soumis pour validation au comité d\'octroi !')">
            ${Icons.arrowRight} Soumettre le dossier au Comité
          </button>
        </div>
      </div>

    </div>
  `;
}
