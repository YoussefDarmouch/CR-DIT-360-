/* ==========================================================================
   CRÉDIT 360° – BANQUE POPULAIRE
   Page: Paramètres (User Profile, Delegation Limits, System & Security)
   ========================================================================== */
import { Icons } from '../icons.js';
export function renderSettings() {
    return `
    <div class="settings-view">

      <!-- TOPBAR -->
      <div class="page-topbar">
        <div class="page-title-group">
          <h1 class="page-heading">
            <span class="text-orange">${Icons.settings}</span>
            Paramètres du Profil & Préférences Système
          </h1>
          <div class="page-breadcrumb">
            <span>Accueil</span>
            <span class="sep">/</span>
            <span>Configuration</span>
            <span class="sep">/</span>
            <span class="text-orange font-semibold">Profil conseiller & habilitations d'octroi</span>
          </div>
        </div>
        <div class="page-actions-group">
          <button class="btn btn-secondary" onclick="alert('Préférences réinitialisées aux valeurs par défaut.')">
            Réinitialiser
          </button>
          <button class="btn btn-primary" onclick="alert('Paramètres enregistrés avec succès dans l\'annuaire Banque Populaire !')">
            ${Icons.check} Enregistrer les Modifications
          </button>
        </div>
      </div>

      <!-- GRID LAYOUT -->
      <div style="display: grid; grid-template-columns: 1fr 1.6fr; gap: 20px; margin-bottom: 22px;">

        <!-- LEFT: USER PROFILE CARD -->
        <div class="flex" style="flex-direction: column; gap: 16px;">

          <div class="bp-card card-accent-orange">
            <div class="card-body" style="text-align: center; padding: 24px;">
              <div style="position: relative; width: 76px; height: 76px; margin: 0 auto 14px;">
                <div style="width: 100%; height: 100%; border-radius: 50%; background: #1e293b; color: #fff; font-size: 26px; font-weight: 800; display: flex; align-items: center; justify-content: center; border: 3px solid var(--bp-orange);">
                  AH
                </div>
                <div style="position: absolute; bottom: 2px; right: 2px; width: 16px; height: 16px; background: var(--bp-green); border: 2px solid #fff; border-radius: 50%;"></div>
              </div>

              <div style="font-size: 17px; font-weight: 800; color: #0f172a;">Asmaa El Habachi</div>
              <div style="font-size: 12px; color: var(--bp-orange); font-weight: 700; margin-top: 2px;">Conseillère Commerciale</div>
              <div style="font-size: 11.5px; color: var(--text-muted); margin-top: 2px;">Agence Casablanca Anfa (0214)</div>

              <div style="margin: 14px auto 0; padding: 8px 14px; background: #fff7ed; border-radius: var(--radius-md); font-family: var(--font-script); font-size: 14px; color: #9a3412; font-style: italic;">
                « Des solutions tout au long de la vie »
              </div>

              <div style="margin-top: 18px; border-top: 1px solid var(--border-light); padding-top: 14px; text-align: left; font-size: 11.5px; display: flex; flex-direction: column; gap: 8px;">
                <div class="flex justify-between">
                  <span class="text-muted">Matricule interne :</span>
                  <span class="font-bold">BP-789201</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-muted">Email professionnel :</span>
                  <span class="font-bold">a.elhabachi@cpm.co.ma</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-muted">Ligne directe agence :</span>
                  <span class="font-bold">+212 5 22 45 88 12</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-muted">Dernière connexion :</span>
                  <span class="font-bold text-green">Aujourd'hui à 08:32</span>
                </div>
              </div>
            </div>
          </div>

          <!-- DELEGATION CARD -->
          <div class="bp-card card-accent-blue">
            <div class="card-header">
              <div class="card-title-group">
                <div class="card-title-icon icon-blue">${Icons.shieldCheck}</div>
                <span class="card-title">Délégation de signature</span>
              </div>
              <span class="badge badge-valide">Niveau 2 Actif</span>
            </div>
            <div class="card-body">
              <div class="flex justify-between" style="font-size: 12px; margin-bottom: 6px;">
                <span class="text-muted">Plafond autonome sans visa :</span>
                <span class="font-bold text-blue">500 000 DH</span>
              </div>
              <div class="progress-container" style="height: 8px; margin-bottom: 12px;">
                <div class="progress-fill progress-fill-blue" style="width: 70%;"></div>
              </div>
              <div style="font-size: 11px; color: var(--text-muted); line-height: 1.4;">
                Au-delà de 500 000 DH, la validation du Directeur d'Agence ou du Comité Régional est automatiquement requise par le workflow.
              </div>
            </div>
          </div>

        </div>

        <!-- RIGHT: PREFERENCES & SECURITY FORMS -->
        <div class="flex" style="flex-direction: column; gap: 16px;">

          <!-- GENERAL SETTINGS -->
          <div class="bp-card">
            <div class="card-header">
              <div class="card-title-group">
                <div class="card-title-icon icon-orange">${Icons.settings}</div>
                <span class="card-title">Préférences de l'Espace de Travail</span>
              </div>
            </div>
            <div class="card-body">
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Langue de l'interface</label>
                  <select class="form-control">
                    <option selected>Français (Maroc)</option>
                    <option>العربية (المغرب)</option>
                    <option>English</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">Format de devise par défaut</label>
                  <select class="form-control">
                    <option selected>Dirham Marocain (DH) - Separateur espace</option>
                    <option>MAD (ISO Code)</option>
                  </select>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Agence de rattachement principal</label>
                  <input type="text" class="form-control" value="0214 - Casablanca Anfa Boulevard" readonly>
                </div>
                <div class="form-group">
                  <label class="form-label">Page de démarrage après connexion</label>
                  <select class="form-control">
                    <option selected>Accueil (Tableau de bord 360°)</option>
                    <option>Mes dossiers</option>
                    <option>Nouveau dossier</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- NOTIFICATIONS SETTINGS -->
          <div class="bp-card">
            <div class="card-header">
              <div class="card-title-group">
                <div class="card-title-icon icon-blue">${Icons.bell}</div>
                <span class="card-title">Canaux d'alertes & notifications en temps réel</span>
              </div>
            </div>
            <div class="card-body">
              <div class="flex" style="flex-direction: column; gap: 12px;">

                <label class="flex items-center justify-between" style="cursor: pointer;">
                  <div>
                    <div class="font-bold" style="font-size: 12.5px;">Alertes 2ème et 3ème impayé (Mise en demeure)</div>
                    <div class="text-muted" style="font-size: 11px;">Recevoir une alerte sonore et un email immédiat dès détection d'un retard de 60j+</div>
                  </div>
                  <input type="checkbox" checked style="width: 18px; height: 18px; accent-color: var(--bp-orange);">
                </label>

                <label class="flex items-center justify-between" style="cursor: pointer;">
                  <div>
                    <div class="font-bold" style="font-size: 12.5px;">Notification d'accord du Comité d'Octroi</div>
                    <div class="text-muted" style="font-size: 11px;">Alerte instantanée dès qu'un dossier passe au statut « Validé »</div>
                  </div>
                  <input type="checkbox" checked style="width: 18px; height: 18px; accent-color: var(--bp-orange);">
                </label>

                <label class="flex items-center justify-between" style="cursor: pointer;">
                  <div>
                    <div class="font-bold" style="font-size: 12.5px;">Détection automatique des crédits soldés (Mainlevée)</div>
                    <div class="text-muted" style="font-size: 11px;">Proposition d'émission de mainlevée dès dernière mensualité encaissée</div>
                  </div>
                  <input type="checkbox" checked style="width: 18px; height: 18px; accent-color: var(--bp-orange);">
                </label>

              </div>
            </div>
          </div>

          <!-- SECURITY & 2FA -->
          <div class="bp-card card-accent-green">
            <div class="card-header">
              <div class="card-title-group">
                <div class="card-title-icon icon-green">${Icons.shieldCheck}</div>
                <span class="card-title">Sécurité & Authentification Renforcée (2FA)</span>
              </div>
              <span class="badge badge-valide">Certifié Conforme BAM</span>
            </div>
            <div class="card-body">
              <div class="flex items-center justify-between" style="margin-bottom: 14px;">
                <div>
                  <div class="font-bold" style="font-size: 12.5px;">Double facteur par Clé Sécurisée / SMS OTP</div>
                  <div class="text-muted" style="font-size: 11px;">Obligatoire pour les opérations de validation de décaissement et de signature digitale.</div>
                </div>
                <span class="badge badge-valide">Activé</span>
              </div>

              <div class="flex gap-2">
                <button class="btn btn-sm btn-secondary" onclick="alert('Session de modification du mot de passe ouverte.')">
                  Modifier mot de passe
                </button>
                <button class="btn btn-sm btn-secondary" onclick="alert('Historique des sessions de connexion téléchargé.')">
                  Journal des connexions
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  `;
}
