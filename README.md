# CRÉDIT 360° – Banque Populaire
## Prototype Frontend UI & Design System

Prototype complet de l'interface utilisateur web pour **CRÉDIT 360° – Banque Populaire**, conçu à partir de la charte graphique officielle et de la maquette de référence.

---

### 🏛️ Identité Visuelle & Charte Graphique
- **Marque :** Banque Populaire – *Grandir. Ensemble.*
- **Palette de Couleurs :**
  - **Orange Institutionnel BP :** `#e05a10` (boutons, puces actives, hub 360°)
  - **Navy & Slate Profond :** `#111a26`, `#1b2636` (barre latérale de navigation, cartes en contraste)
  - **Bleu Banque Populaire :** `#005691` (références, titres, jauges)
  - **Vert Succès & Validation :** `#10b981` (dossiers validés, crédits soldés, mainlevées)
  - **Rouge Alerte :** `#ef4444` (impayés, notifications urgentes)
- **Typographie :** Inter (Hiérarchie d'entreprise moderne) & typographie script pour le slogan de marque (*« Plus simple, Plus rapide, Plus proche de nos clients »*).

---

### 📄 Pages Implémentées (10 Pages Complètes)

1. **Dashboard / Accueil (`#accueil`)**
   - **Pipeline d'octroi en 5 étapes :** Demande de crédit, Constitution du dossier, Analyse et décision, Signature digitale, Mise en place du crédit.
   - **Hub Central Circulaire 360° :** Médaillon central Banque Populaire avec orbite interactive et 6 nœuds périphériques (Documents, Client, Signature, Financement, Alertes, Analytics).
   - **Suivi des dossiers récents :** Tableau filtrable des 5 dossiers clés (A. Karim, S. Amine, L. Nadia, M. Youssef, R. Salma).
   - **Alertes & Impayés :** Suivi des 3 premiers niveaux avec bandeau de relance automatique.
   - **Recharge / Nouveau Financement :** Synthèse chiffrée avec solde net à verser (130 000 DH).
   - **Mainlevée et Clôture :** Statut « Crédit soldé ! » et checklist de délivrance d'attestation.
   - **Assurances & Citation d'engagement BP.**
   - **Tableau de bord & Engagements :** 4 compteurs clés (124, 86, 18, 56) et les 6 engagements de service.

2. **Nouveau dossier (`#nouveau-dossier`)**
   - Sélecteur visuel de produits (Immobilier Salaf Sakane, Prêt Personnel Al Ousra, Crédit Auto Salaf Sayara, Équipement Professionnel).
   - Fiche d'identification client et vérification de la capacité d'endettement.
   - **Simulateur de financement interactif :** Curseurs dynamiques de montant (50 000 DH à 1 500 000 DH) et de durée (24 à 300 mois) avec calcul en temps réel de la mensualité, du taux d'endettement et du coût global.
   - Checklist documentaire avec zone de glisser-déposer (Dropzone).

3. **Mes dossiers (`#mes-dossiers`)**
   - Répertoire complet des demandes de crédit.
   - Barre d'outils avec recherche instantanée, filtres par statut (*Tous, En analyse, Validés, Signés, À compléter*).
   - Tableau avec badges de statut, barres de progression et pagination.

4. **Suivi des crédits (`#suivi-credits`)**
   - Suivi de l'encours actif (46.8 M DH) et portefeuille d'amortissement.
   - Cartes de suivi individuel avec barres visuelles de progression d'amortissement.
   - Échéancier type détaillé avec décomposition (Capital, Intérêts, Assurance ADI, Mensualité TTC).

5. **Alertes & impayés (`#alertes`)**
   - Matrice de risque et gradation des retards (30 jours, 60 jours, 90+ jours contentieux).
   - Actions immédiates (Relance amiable, Mise en demeure, Procédure judiciaire).
   - Modèle officiel intégré de lettre recommandée de mise en demeure conforme Bank Al-Maghrib.

6. **Recharges (`#recharges`)**
   - Comparateur entre ancien crédit et nouveau financement.
   - Curseur dynamique recalculant instantanément le versement net sur compte (Cash).
   - Historique des recharges accordées en agence.

7. **Mainlevées (`#mainlevees`)**
   - Gestion des crédits intégralement soldés (100% remboursés).
   - Aperçu authentique du document officiel d'attestation de mainlevée totale d'hypothèque avec sceau d'agence et mentions légales de la Conservation Foncière.

8. **Assurances (`#assurances`)**
   - Gamme bancassurance : ADI, MRH, Auto Tous Risques, Perte d'Emploi.
   - Registre des polices en cours rattachées aux dossiers de crédit.

9. **Reporting (`#reporting`)**
   - Graphiques CSS : Volume mensuel octroyé (Janvier à Septembre 2026).
   - Répartition de la production par famille de crédit (Immobilier 42%, Auto 28%, Personnel 18%, Équipement 12%).
   - Classement des agences Banque Populaire de la région Grand Casablanca.

10. **Paramètres (`#parametres`)**
    - Profil de la conseillère : Asmaa El Habachi (Agence Casablanca Anfa).
    - Jauge d'habilitation d'octroi (Niveau 2 - jusqu'à 500 000 DH).
    - Préférences de l'espace de travail et sécurité renforcée 2FA.

---

### 🚀 Démarrage Rapide

#### Option 1 : Script 1-Clic
Double-cliquer sur le fichier `start.bat` à la racine du projet.

#### Option 2 : En ligne de commande
```bash
# Compilation TypeScript
npm run build

# Démarrage du serveur web
npm start
# ou avec python :
python -m http.server 8080
```
Puis ouvrez votre navigateur sur [http://localhost:8080](http://localhost:8080).
