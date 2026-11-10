/* ==========================================================================
   CRÉDIT 360° – BANQUE POPULAIRE
   Realistic Fictional Banking Dataset
   ========================================================================== */

import { Dossier, AlerteImpaye, RechargeFinancement, MainleveeDossier, ContratAssurance, NavigationRoute } from './types.js';

export const navigationRoutes: NavigationRoute[] = [
  { id: 'accueil', label: 'Accueil', iconName: 'home' },
  { id: 'nouveau-dossier', label: 'Nouveau dossier', iconName: 'filePlus' },
  { id: 'mes-dossiers', label: 'Mes dossiers', iconName: 'folder' },
  { id: 'suivi-credits', label: 'Suivi des crédits', iconName: 'sliders' },
  { id: 'alertes', label: 'Alertes & impayés', iconName: 'bell', badge: 3 },
  { id: 'recharges', label: 'Recharges', iconName: 'refreshCw' },
  { id: 'mainlevees', label: 'Mainlevées', iconName: 'fileCheck' },
  { id: 'assurances', label: 'Assurances', iconName: 'shieldCheck' },
  { id: 'reporting', label: 'Reporting', iconName: 'barChart' },
  { id: 'parametres', label: 'Paramètres', iconName: 'settings' }
];

export const dossiersData: Dossier[] = [
  {
    reference: 'CRD00125',
    client: 'A. Karim',
    cin: 'BK349102',
    type: 'Immobilier',
    montant: 480000,
    dureeMois: 240,
    statut: 'En analyse',
    dateMaj: '21/09/2026',
    tauxInteret: 4.75,
    mensualite: 3102,
    conseiller: 'Asmaa El Habachi',
    agence: 'Casablanca Anfa',
    score: 'A+ (Excellente solvabilité)',
    progression: 60
  },
  {
    reference: 'CRD00126',
    client: 'S. Amine',
    cin: 'BE118472',
    type: 'Équipement',
    montant: 320000,
    dureeMois: 60,
    statut: 'Validé',
    dateMaj: '20/09/2026',
    tauxInteret: 5.20,
    mensualite: 6065,
    conseiller: 'Asmaa El Habachi',
    agence: 'Casablanca Anfa',
    score: 'A (Solide trésorerie)',
    progression: 80
  },
  {
    reference: 'CRD00127',
    client: 'L. Nadia',
    cin: 'T298410',
    type: 'Personnel',
    montant: 85000,
    dureeMois: 48,
    statut: 'En cours',
    dateMaj: '19/09/2026',
    tauxInteret: 6.10,
    mensualite: 1998,
    conseiller: 'Asmaa El Habachi',
    agence: 'Casablanca Anfa',
    score: 'B+ (Profil stable)',
    progression: 45
  },
  {
    reference: 'CRD00128',
    client: 'M. Youssef',
    cin: 'BH492817',
    type: 'Auto',
    montant: 190000,
    dureeMois: 60,
    statut: 'Signé',
    dateMaj: '18/09/2026',
    tauxInteret: 4.90,
    mensualite: 3577,
    conseiller: 'Asmaa El Habachi',
    agence: 'Casablanca Anfa',
    score: 'A+ (Apport 30%)',
    progression: 90
  },
  {
    reference: 'CRD00129',
    client: 'R. Salma',
    cin: 'AA883201',
    type: 'Immobilier',
    montant: 750000,
    dureeMois: 300,
    statut: 'À compléter',
    dateMaj: '18/09/2026',
    tauxInteret: 4.80,
    mensualite: 4290,
    conseiller: 'Asmaa El Habachi',
    agence: 'Casablanca Anfa',
    score: 'B (Compromis manquant)',
    progression: 35
  },
  {
    reference: 'CRD00130',
    client: 'B. Omar',
    cin: 'CD540912',
    type: 'Consommation',
    montant: 45000,
    dureeMois: 36,
    statut: 'Validé',
    dateMaj: '17/09/2026',
    tauxInteret: 6.50,
    mensualite: 1379,
    conseiller: 'Asmaa El Habachi',
    agence: 'Casablanca Anfa',
    score: 'A (Fonctionnaire titulaire)',
    progression: 85
  },
  {
    reference: 'CRD00131',
    client: 'T. Mehdi',
    cin: 'BL209483',
    type: 'Auto',
    montant: 220000,
    dureeMois: 72,
    statut: 'En analyse',
    dateMaj: '16/09/2026',
    tauxInteret: 5.10,
    mensualite: 3556,
    conseiller: 'Asmaa El Habachi',
    agence: 'Casablanca Anfa',
    score: 'B+ (Vérification RIB)',
    progression: 55
  },
  {
    reference: 'CRD00132',
    client: 'Z. Imane',
    cin: 'EE761209',
    type: 'Immobilier',
    montant: 920000,
    dureeMois: 240,
    statut: 'Signé',
    dateMaj: '15/09/2026',
    tauxInteret: 4.65,
    mensualite: 5890,
    conseiller: 'Asmaa El Habachi',
    agence: 'Casablanca Anfa',
    score: 'A+ (Patrimoine garanti)',
    progression: 95
  },
  {
    reference: 'CRD00133',
    client: 'F. Othmane',
    cin: 'FA991043',
    type: 'Équipement',
    montant: 540000,
    dureeMois: 84,
    statut: 'En cours',
    dateMaj: '14/09/2026',
    tauxInteret: 5.40,
    mensualite: 7735,
    conseiller: 'Asmaa El Habachi',
    agence: 'Casablanca Anfa',
    score: 'A (Société SARL - 10 ans)',
    progression: 50
  },
  {
    reference: 'CRD00134',
    client: 'H. Leila',
    cin: 'GM348911',
    type: 'Personnel',
    montant: 60000,
    dureeMois: 48,
    statut: 'Rejeté',
    dateMaj: '12/09/2026',
    tauxInteret: 6.20,
    mensualite: 1414,
    conseiller: 'Asmaa El Habachi',
    agence: 'Casablanca Anfa',
    score: 'C (Endettement > 48%)',
    progression: 100
  }
];

export const alertesData: AlerteImpaye[] = [
  {
    id: 'IMP-01',
    client: 'E. Rachid',
    cin: 'BJ239841',
    creditType: 'CONSO',
    joursRetard: 30,
    statut: '1er impayé',
    action: 'Relance',
    montantEcheance: 1850,
    montantTotalDu: 1850,
    dateEcheance: '20/08/2026',
    telephone: '+212 6 61 24 55 89',
    niveauPriorite: 'Faible'
  },
  {
    id: 'IMP-02',
    client: 'K. Fatima',
    cin: 'BL981240',
    creditType: 'AUTO',
    joursRetard: 60,
    statut: '2ème impayé',
    action: 'Mise en demeure',
    montantEcheance: 3420,
    montantTotalDu: 6840,
    dateEcheance: '20/07/2026',
    telephone: '+212 6 62 89 11 34',
    niveauPriorite: 'Moyen'
  },
  {
    id: 'IMP-03',
    client: 'M. Hassan',
    cin: 'BK481902',
    creditType: 'IMMO',
    joursRetard: 90,
    statut: '3ème impayé',
    action: 'Procédure',
    montantEcheance: 4650,
    montantTotalDu: 13950,
    dateEcheance: '20/06/2026',
    telephone: '+212 6 70 45 92 18',
    niveauPriorite: 'Critique'
  },
  {
    id: 'IMP-04',
    client: 'D. Tariq',
    cin: 'AA459102',
    creditType: 'CONSO',
    joursRetard: 35,
    statut: '1er impayé',
    action: 'Relance',
    montantEcheance: 1200,
    montantTotalDu: 1200,
    dateEcheance: '15/08/2026',
    telephone: '+212 6 63 11 09 82',
    niveauPriorite: 'Faible'
  },
  {
    id: 'IMP-05',
    client: 'N. Souad',
    cin: 'BE841920',
    creditType: 'IMMO',
    joursRetard: 65,
    statut: '2ème impayé',
    action: 'Mise en demeure',
    montantEcheance: 5200,
    montantTotalDu: 10400,
    dateEcheance: '15/07/2026',
    telephone: '+212 6 64 33 21 00',
    niveauPriorite: 'Moyen'
  }
];

export const rechargeReference: RechargeFinancement = {
  client: 'M. Ahmed',
  cin: 'BK109483',
  creditExistant: 120000,
  soldeRestant: 60000,
  nouveauFinancement: 200000,
  remboursementAncienCredit: 60000,
  fraisEtAssurance: 10000,
  soldeAVerser: 130000,
  mensualiteNouvelle: 3450,
  dureeMois: 72
};

export const mainleveesData: MainleveeDossier[] = [
  {
    reference: 'MLV-2026-089',
    client: 'M. Ahmed',
    cin: 'BK109483',
    bienGarantie: 'Appartement Titre N° 45892/01 - Casablanca Gauthier',
    montantInitial: 450000,
    dateFinPret: '15/08/2026',
    notaire: 'Maître Bennani Jalil',
    conservationFonciere: 'Conservation Foncière Casablanca Anfa',
    statut: 'Prêt Soldé',
    dateGeneration: '20/09/2026'
  },
  {
    reference: 'MLV-2026-088',
    client: 'C. Wafaa',
    cin: 'BH391024',
    bienGarantie: 'Villa Titre N° 10294/C - Bouskoura Ville Verte',
    montantInitial: 1200000,
    dateFinPret: '01/09/2026',
    notaire: 'Maître Tahiri Fatima',
    conservationFonciere: 'Conservation Foncière Nouaceur',
    statut: 'Mainlevée Générée',
    dateGeneration: '12/09/2026'
  },
  {
    reference: 'MLV-2026-087',
    client: 'G. Yassine',
    cin: 'T190482',
    bienGarantie: 'Local Commercial Titre N° 33819/04 - Maarif',
    montantInitial: 680000,
    dateFinPret: '20/07/2026',
    notaire: 'Maître Alami Mourad',
    conservationFonciere: 'Conservation Foncière Casablanca Centre',
    statut: 'En cours Notaire',
    dateGeneration: '28/08/2026'
  },
  {
    reference: 'MLV-2026-086',
    client: 'S. Noureddine',
    cin: 'A481902',
    bienGarantie: 'Appartement Titre N° 78912/22 - Rabat Agdal',
    montantInitial: 550000,
    dateFinPret: '10/06/2026',
    notaire: 'Maître Cherkaoui Adil',
    conservationFonciere: 'Conservation Foncière Rabat',
    statut: 'Archivé',
    dateGeneration: '15/07/2026'
  }
];

export const assurancesData: ContratAssurance[] = [
  {
    policeNumero: 'POL-ADI-883921',
    client: 'A. Karim',
    typeAssurance: 'ADI (Décès-Invalidité)',
    dossierRef: 'CRD00125',
    capitalGaranti: 480000,
    primeMensuelle: 145,
    dateEffet: '21/09/2026',
    statut: 'Active',
    compagnie: 'Marocaine Vie'
  },
  {
    policeNumero: 'POL-AUTO-492019',
    client: 'M. Youssef',
    typeAssurance: 'Tous Risques Auto',
    dossierRef: 'CRD00128',
    capitalGaranti: 190000,
    primeMensuelle: 380,
    dateEffet: '18/09/2026',
    statut: 'Active',
    compagnie: 'MCMA'
  },
  {
    policeNumero: 'POL-MRH-102948',
    client: 'R. Salma',
    typeAssurance: 'MRH (Habitation)',
    dossierRef: 'CRD00129',
    capitalGaranti: 750000,
    primeMensuelle: 95,
    dateEffet: '18/09/2026',
    statut: 'En attente certificat médical',
    compagnie: 'Saham Assurance'
  },
  {
    policeNumero: 'POL-PERTE-774819',
    client: 'S. Amine',
    typeAssurance: 'Perte d\'Emploi',
    dossierRef: 'CRD00126',
    capitalGaranti: 320000,
    primeMensuelle: 110,
    dateEffet: '20/09/2026',
    statut: 'Active',
    compagnie: 'Marocaine Vie'
  }
];

export const dashboardOverviewStats = {
  dossiersEnCours: 124,
  dossiersValides: 86,
  impayes: 18,
  creditsSoldes: 56,
  volumeAccordeMois: '28.4 M DH',
  tauxSatisfaction: '98.4%',
  delaiMoyenDecision: '48 heures'
};
