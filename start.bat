@echo off
echo ======================================================================
echo    CREDIT 360 - BANQUE POPULAIRE : SERVEUR LOCAL DE DEVELOPPEMENT
echo ======================================================================
echo Demarrage du serveur HTTP sur http://localhost:8080 ...
start http://localhost:8080
python -m http.server 8080
pause
