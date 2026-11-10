/* ==========================================================================
   CRÉDIT 360° – BANQUE POPULAIRE
   Application Router & Dynamic View Controller
   ========================================================================== */
import { renderDashboard } from './pages/dashboard.js';
import { renderNewApplication } from './pages/newApplication.js';
import { renderMyApplications } from './pages/myApplications.js';
import { renderCreditTracking } from './pages/creditTracking.js';
import { renderAlerts } from './pages/alerts.js';
import { renderRecharge } from './pages/recharge.js';
import { renderMainlevee } from './pages/mainlevee.js';
import { renderInsurance } from './pages/insurance.js';
import { renderReporting } from './pages/reporting.js';
import { renderSettings } from './pages/settings.js';
const routes = {
    'accueil': renderDashboard,
    'nouveau-dossier': renderNewApplication,
    'mes-dossiers': renderMyApplications,
    'suivi-credits': renderCreditTracking,
    'alertes': renderAlerts,
    'recharges': renderRecharge,
    'mainlevees': renderMainlevee,
    'assurances': renderInsurance,
    'reporting': renderReporting,
    'parametres': renderSettings
};
export class Router {
    viewContainer;
    constructor(containerId) {
        const el = document.getElementById(containerId);
        if (!el) {
            throw new Error(`Container with id "${containerId}" not found.`);
        }
        this.viewContainer = el;
        this.init();
    }
    init() {
        window.addEventListener('hashchange', () => this.handleRoute());
        // Initial routing on page load
        this.handleRoute();
    }
    navigate(routeId) {
        window.location.hash = routeId;
    }
    handleRoute() {
        let hash = window.location.hash.replace('#', '').trim();
        if (!hash || !routes[hash]) {
            hash = 'accueil';
        }
        // Render page view
        const renderFn = routes[hash];
        this.viewContainer.innerHTML = renderFn();
        // Update active state in sidebar
        this.updateSidebarActive(hash);
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Attach route-specific interactive enhancements
        this.attachPageHandlers(hash);
    }
    updateSidebarActive(currentRoute) {
        const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
        navItems.forEach(item => {
            const target = item.getAttribute('data-route');
            if (target === currentRoute) {
                item.classList.add('active');
            }
            else {
                item.classList.remove('active');
            }
        });
    }
    attachPageHandlers(route) {
        if (route === 'accueil') {
            this.initDashboardHandlers();
        }
        else if (route === 'nouveau-dossier') {
            this.initNewAppHandlers();
        }
        else if (route === 'recharges') {
            this.initRechargeHandlers();
        }
        else if (route === 'mes-dossiers') {
            this.initMyAppsHandlers();
        }
    }
    initDashboardHandlers() {
        const searchInput = document.getElementById('dashboard-search-input');
        const table = document.getElementById('dashboard-dossiers-table');
        if (searchInput && table) {
            searchInput.addEventListener('input', () => {
                const query = searchInput.value.toLowerCase().trim();
                const rows = table.querySelectorAll('tbody tr');
                rows.forEach(r => {
                    const text = (r.textContent || '').toLowerCase();
                    r.style.display = text.includes(query) ? '' : 'none';
                });
            });
        }
        // Allow clicking on rows to navigate to mes-dossiers
        const clickableRows = document.querySelectorAll('.clickable-row');
        clickableRows.forEach(row => {
            row.addEventListener('click', () => {
                this.navigate('mes-dossiers');
            });
        });
    }
    initNewAppHandlers() {
        // Credit type selection cards
        const typeCards = document.querySelectorAll('.credit-type-card');
        typeCards.forEach(card => {
            card.addEventListener('click', () => {
                typeCards.forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
            });
        });
        // Real-time Loan Simulator
        const rangeMontant = document.getElementById('input-range-montant');
        const rangeDuree = document.getElementById('input-range-duree');
        const valMontant = document.getElementById('slider-montant-val');
        const valDuree = document.getElementById('slider-duree-val');
        const resMensualite = document.getElementById('res-mensualite');
        const resEndettement = document.getElementById('res-endettement');
        const resCoutTotal = document.getElementById('res-cout-total');
        const updateCalc = () => {
            if (!rangeMontant || !rangeDuree)
                return;
            const P = parseFloat(rangeMontant.value) || 480000;
            const N = parseInt(rangeDuree.value, 10) || 240;
            const annualRate = 0.0475; // 4.75%
            const r = annualRate / 12;
            // Monthly payment formula
            const monthlyMortgage = (P * r * Math.pow(1 + r, N)) / (Math.pow(1 + r, N) - 1);
            const assurance = Math.round(P * 0.0003); // approx ADI
            const totalMonthly = Math.round(monthlyMortgage + assurance);
            if (valMontant)
                valMontant.textContent = `${P.toLocaleString('fr-FR')} DH`;
            const annees = (N / 12).toFixed(0);
            if (valDuree)
                valDuree.textContent = `${N} mois (${annees} ans)`;
            if (resMensualite)
                resMensualite.textContent = `${totalMonthly.toLocaleString('fr-FR')} DH`;
            // Debt ratio
            const income = 22500;
            const charges = 2800;
            const debtRatio = (((totalMonthly + charges) / income) * 100).toFixed(1);
            if (resEndettement) {
                resEndettement.textContent = `${debtRatio} % (Conforme < 45%)`;
            }
            const totalCost = Math.round((totalMonthly * N) - P);
            if (resCoutTotal) {
                resCoutTotal.textContent = `${totalCost.toLocaleString('fr-FR')} DH`;
            }
        };
        if (rangeMontant && rangeDuree) {
            rangeMontant.addEventListener('input', updateCalc);
            rangeDuree.addEventListener('input', updateCalc);
            updateCalc();
        }
    }
    initRechargeHandlers() {
        const slider = document.getElementById('recharge-slider');
        const amountVal = document.getElementById('recharge-new-amount-val');
        const calcMontantBrut = document.getElementById('calc-montant-brut');
        const calcSoldeNet = document.getElementById('calc-solde-net');
        if (slider && amountVal && calcMontantBrut && calcSoldeNet) {
            slider.addEventListener('input', () => {
                const nouveauMontant = parseInt(slider.value, 10);
                const ancienSolde = 60000;
                const frais = 10000;
                const netVerser = nouveauMontant - ancienSolde - frais;
                amountVal.textContent = `${nouveauMontant.toLocaleString('fr-FR')} DH`;
                calcMontantBrut.textContent = `+ ${nouveauMontant.toLocaleString('fr-FR')} DH`;
                calcSoldeNet.textContent = `${netVerser.toLocaleString('fr-FR')} DH`;
            });
        }
    }
    initMyAppsHandlers() {
        const search = document.getElementById('filter-dossier-search');
        const filterButtons = document.querySelectorAll('.active-status-filter, [data-status]');
        if (search) {
            search.addEventListener('input', () => {
                const query = search.value.toLowerCase().trim();
                const rows = document.querySelectorAll('.my-apps-view .bp-table tbody tr');
                rows.forEach(r => {
                    const text = (r.textContent || '').toLowerCase();
                    r.style.display = text.includes(query) ? '' : 'none';
                });
            });
        }
        if (filterButtons.length > 0) {
            filterButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterButtons.forEach(b => {
                        b.classList.remove('btn-primary');
                        b.classList.add('btn-secondary');
                    });
                    btn.classList.remove('btn-secondary');
                    btn.classList.add('btn-primary');
                    const status = btn.getAttribute('data-status') || 'all';
                    const rows = document.querySelectorAll('.my-apps-view .bp-table tbody tr');
                    rows.forEach(r => {
                        if (status === 'all') {
                            r.style.display = '';
                        }
                        else {
                            const text = (r.textContent || '').toLowerCase();
                            if (status === 'analyse' && text.includes('en analyse'))
                                r.style.display = '';
                            else if (status === 'valide' && text.includes('validé'))
                                r.style.display = '';
                            else if (status === 'signe' && text.includes('signé'))
                                r.style.display = '';
                            else if (status === 'completer' && text.includes('à compléter'))
                                r.style.display = '';
                            else
                                r.style.display = 'none';
                        }
                    });
                });
            });
        }
    }
}
