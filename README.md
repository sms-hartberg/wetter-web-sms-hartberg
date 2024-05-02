### MS/SMS Hartberg Jahrebericht
Der Jahresbericht der MS/SMS Hartberg ist eine Zusammenfassung der erlebten Ereignisse des letzten Schuljahres. Jedes Jahr wird es am letzten Schultag ausgehändigt. Dieses Projekt wurde speziell für den Jahresbericht gestaltet, um den Kindern und Eltern zu zeigen, dass Computer und vorallem vollständiges Verständis rund um den Computer in dieser Schule eines der Wichtigsten Themen überhaupt ist.

### Mitwirkende
Folgende Lehrer möchte ich hier erwähnen, die bei diesen Projekt mitgeholfen haben:
 - **Dipl.-Päd. Großschedl Margit** - Frau Dipl.-Päd. Margit Großschedl, hat es mir ermöglicht, dieses Projekt zu starten und hat sich darum gekümmert, dass es einen Platz im Jahrebericht 2023/24 bekommt. Ebenfalls hat sie mir geholfen, eine Lösung zum Hosten dieser Webseite zu finden und umzusetzten
 - **Neuherz Mathias, BEd** - Der Computeradministrator der Schule - Mathias Neuherz - hat mir ebenfalls geholfen, den Server der Webseite aufzusetzen und das Networking korrekt einzurichten.
 - **Dir. Bianka Neuwirth, BEd** - Die Direktorin dieser Schule hat sich unter anderem darüber gekümmert, dass eine Domain für diese Webseite frei ist, damit man den Browser keine komischen IP-Adressen (eine zufällige Kette lauter Zahlen, das die "Adresse" des Netzwerkes angibt) füttern muss, um auf diese Webseite zu gelangen.

[Webseite der MS/SMS Hartberg für Interessierte](https://www.sms-hartberg.at/)
---
### Selfhosten der Webseite
Das Selfhosting dieser Webseite ist eigentlich ganz einfach. Folgende Schritte sind notwendig:

**Schritt 1** - Installieren von Node.JS.<br/>
Auf der [Homepage von Node.JS](https://www.nodejs.org/) findet man die detaillierten Installationsanleitung für das jeweilige Betriebsystem, jedoch fasse ich es hier kurz zusammen:<br/>
###### Windows
Entweder installiert man es direkt mit der Datei auf der Downloadsection der Homepage, oder man installiert es mit dem Package-Manager [Chocolatey](https://chocolatey.org/):

PowerShell</br>
```choco install nodejs.install```<br/><br/>

###### macOS
Wieder gibt es auf der [Homepage von Node.JS](https://www.nodejs.org/) den Downloadlink für das Paket für macOS, jedoch empfehle ich hier, den Package Manager [Homebrew](https://brew.sh/) zu verwenden:

ZSH<br/>
```brew install node```<br/><br/>

###### Linux
Auf Linux ist es ein bisschen schwieriger, aber dennoch machbar. Um NodeJS dort zu installieren, benutzt man den jeweiligen Package Manager. Hier sind ein paar Beispiele:

ZSH / Bash / ...<br/>
```
# Arch Linux
pacman -Sy nodejs

# Debian und Ubuntu (-based)
apt install nodejs

# Fedora
dnf module install nodejs:22/common
```
Für mehr Distros, bitte [hier](https://nodejs.org/en/download/package-manager/all/) nachschlagen.

<br/><br/><br/>

**Schritt 2** - Installieren der Abhänigkeiten

Für dieses Projekt sind mehrere Abhänigkeiten verwendet worden, die vorher installiert werden müssen:

```
# Next.JS
npm i next

# React Icons
npm install react-icons --save

# Tailwind CSS
npm i tailwindcss

# TypeScript
npm i typescript
```

<br/><br/><br/>

**Schritt 3** - Git Installieren

Dies möchte ich jetzt gerne Ihnen überlassen, da es wirklich fast der gleiche Ablauf ist wie im Schritt 1. Einfach [auf der Webseite von GIT](https://git-scm.com/) downloaden oder mit den jeweiligen Package Manager installieren. Für macOS empfehle ich wieder Homebrew.

<br/><br/><br/>

**Schritt 4** - Projekt klonen

PowerShell oder Konsole öffnen und zum Ordner navigieren ([Tutorial Windows](https://www.itprotoday.com/powershell/how-use-powershell-navigate-windows-folder-structure) [Tutorial macOS und/oder Linux](https://appletoolbox.com/navigate-folders-using-the-mac-terminal/))<br/>
<br/>
Projekt klonen: ```git clone https://github.com/tobix88/wetter-web-sms-hartberg```<br/><br/>
Abschließend in den Ordner navigieren.

<br/><br/><br/>

**Schritt 5** - Projekt starten

Ausführen folgender Befehle:<br/>
```npm run build``` - Bitte geduldig sein, könnte etwas dauern!<br/>
```npm start``` - Und schon läuft der Server auf Ihrem Computer!

<br/><br/><br/>

**Schritt 6** - Benutzen

Einfach den [localhost unter dem port 3000](http://localhost:3000/) in ihrem Browser öffnen (http://localhost:3000/)

<br/><br/><br/>

**Schritt 7** - Server beenden

Um den Server zu beenden, einfach ```STRG + C``` auf **Windows und Linux** drücken, oder
```Command + . (Punkt)``` auf **macOS** drücken
### Danke!
