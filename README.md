# Live Streaming Graphics

Questo progetto realizza la grafica per la live streaming di un concorso di canto, pensata per essere integrata in una regia video tramite OBS Studio.

## Architettura

All'avvio, tramite Docker vengono creati due container separati:

- **Frontend** — applicazione web che espone i due componenti descritti sotto
- **Backend** — servizio che gestisce lo stato del cantante attualmente selezionato e lo sincronizza tra i due componenti frontend

## Componenti frontend

Il frontend mette a disposizione due viste, pensate per due utilizzi distinti:

| Rotta      | Componente         | Utilizzo                                                                                                                       |
| ---------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `/`        | Dashboard di regia | Interfaccia con i bottoni per selezionare il cantante; cliccando su un nominativo, il suo nome viene mostrato nell'overlay OBS |
| `/singers` | Overlay OBS        | Vista pulita e trasparente da inserire come **Browser Source** in OBS, che mostra a schermo il nome del cantante selezionato   |

Il regista lavora sulla dashboard (`/`) su un dispositivo separato, mentre l'overlay (`/singers`) viene caricato all'interno di OBS per comparire nella diretta.

## Avvio del progetto

```bash
docker compose up
```

Questo comando avvia entrambi i container (frontend e backend).

## Configurazione OBS

1. In OBS, aggiungi una nuova **Browser Source**
2. Imposta l'URL sulla rotta `/singers` del frontend (es. `http://localhost:<porta>/singers`)
3. Imposta larghezza e altezza in base al layout della scena
4. La dashboard di regia resta accessibile da browser separato alla rotta `/`

## Note

- I due componenti condividono lo stato tramite il backend, quindi ogni selezione effettuata dalla dashboard si riflette in tempo reale sull'overlay OBS.
- In questo progetto è stata usata AI per la grafica (Claude) e per l'intero progetto GitHub Copilot
