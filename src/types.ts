/* ==========================================================================
   CRÉDIT 360° – BANQUE POPULAIRE
   TypeScript Domain Definitions & Data Types
   ========================================================================== */

export type CreditType = 'Immobilier' | 'Équipement' | 'Personnel' | 'Auto' | 'Consommation';

export type DossierStatus =
  | 'En analyse'
  | 'Validé'
  | 'En cours'
  | 'Signé'
  | 'À compléter'
  | 'Soldé'
  | 'Rejeté';

export interface Dossier {
  reference: string;
  client: string;
  cin: string;
  type: CreditType;
  montant: number; // in DH
  dureeMois: number;
  statut: DossierStatus;
  dateMaj: string;
  tauxInteret: number;
  mensualite: number;
  conseiller: string;
  agence: string;
  score: string;
  progression: number; // 0 to 100%
}

export interface AlerteImpaye {
  id: string;
  client: string;
  cin: string;
  creditType: string;
  joursRetard: number;
  statut: '1er impayé' | '2ème impayé' | '3ème impayé' | 'Contentieux';
  action: 'Relance' | 'Mise en demeure' | 'Procédure' | 'Visite terrain';
  montantEcheance: number;
  montantTotalDu: number;
  dateEcheance: string;
  telephone: string;
  niveauPriorite: 'Faible' | 'Moyen' | 'Critique';
}

export interface RechargeFinancement {
  client: string;
  cin: string;
  creditExistant: number;
  soldeRestant: number;
  nouveauFinancement: number;
  remboursementAncienCredit: number;
  fraisEtAssurance: number;
  soldeAVerser: number;
  mensualiteNouvelle: number;
  dureeMois: number;
}

export interface MainleveeDossier {
  reference: string;
  client: string;
  cin: string;
  bienGarantie: string;
  montantInitial: number;
  dateFinPret: string;
  notaire: string;
  conservationFonciere: string;
  statut: 'Prêt Soldé' | 'Mainlevée Générée' | 'En cours Notaire' | 'Archivé';
  dateGeneration: string;
}

export interface ContratAssurance {
  policeNumero: string;
  client: string;
  typeAssurance: 'ADI (Décès-Invalidité)' | 'MRH (Habitation)' | 'Tous Risques Auto' | 'Perte d\'Emploi';
  dossierRef: string;
  capitalGaranti: number;
  primeMensuelle: number;
  dateEffet: string;
  statut: 'Active' | 'En attente certificat médical' | 'Résiliée' | 'Sinistre déclaré';
  compagnie: 'Marocaine Vie' | 'MCMA' | 'Saham Assurance';
}

export interface NavigationRoute {
  id: string;
  label: string;
  iconName: string;
  badge?: number;
}
