import SolidMarkdown from "solid-markdown";
import style from "./Article.css";

const markdown = `
# GEK530 Virtuelle Maschine installieren

Verfasser: *Benjamin Edlinger*

Datum: **11.10.2022**

## 1. Einführung 

Ziel dieser Aufgabe ist es eine vollständige und laufende Xubuntu VM zu haben und denn Grundaufbau von Virtuellen Maschinen zu verstehen.

## 2. Projektbeschreibung

Am Ende des Projekte sollte man eine laufende Xubuntu VM haben, mit installierter Gasterweiterung, einen gemeinsamen Ordner mit Host-System, eine Backupstrategie haben, verstehen was Snapshots sind, was der Unterschied zwischen pausieren und herunterfahren einer VM ist und verstehen was man mit der Hashfunktion SHA-256 machen kann. Mit der erweiterten Kompetenz weiß man wie man die VM nach VMware importiert.

## 3. Fragestellungen

### GK:

- Was sind die Mindestanforderungen an das Host-System für die aktuelle Version von VirtualBox (Hard- und Software)?

Unterstütze Betriebssysteme von VBox sind [4]:

- Windows Hosts:
  - Windows 8.1            
  - Windows 10            
  - Windows 11 21H2            
  - Windows Server 2012            
  - Windows Server 2012 R2            
  - Windows Server 2016            
  - Windows Server 2019            
  - Windows Server 2022
`

function Article() {
    return (
        <div>

            <main class="container">
                <article class="article">
                    <SolidMarkdown children={markdown} />
                </article>

            </main>
        </div>
    );
}

export default Article;



