@echo off
rem Ticaretin Yeni Cagi - sunumu tam ekran acar (internet gerekmez)
set "F=%~dp0sunum\index.html"
if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" (
  start "" "%ProgramFiles%\Google\Chrome\Application\chrome.exe" --new-window --start-fullscreen "%F%"
  exit /b
)
if exist "%LocalAppData%\Google\Chrome\Application\chrome.exe" (
  start "" "%LocalAppData%\Google\Chrome\Application\chrome.exe" --new-window --start-fullscreen "%F%"
  exit /b
)
if exist "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" (
  start "" "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" --new-window --start-fullscreen "%F%"
  exit /b
)
start "" "%F%"
