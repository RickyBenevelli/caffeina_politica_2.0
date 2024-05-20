import Title from "@/components/Title";
import { Button } from "@/components/ui/Button";
import Petizione from "@/components/Petizione";
import Link from "next/link";

export default function Firma() {
  return (
      <main className="w-full max-w-5xl min-h-screen px-6">
        <Title/>
        <h2 className="text-2xl font-medium text-center">
          Lo spazio di dibattito pubblico
        </h2>
        <h2 className="text-2xl font-medium text-center">
          Da giovani per giovani
        </h2>
        <div className="w-full mt-10 text-lg">
          <p className="pb-10">
            Caffeina Politica è un&apos;iniziativa culturale di giovani, attiva sul territorio da ormai due anni, che si
            occupa di portare un approccio all’informazione e al dibattito politico e sociale basato su dati e fatti.
            Per saperne di più, clicca sul link.
            <br/>
            <br/>
            Con l&apos;avvicinarsi delle elezioni locali e un dibattito fossilizzato su nodi non centrali e una qualità
            delle informazioni mediocre, Caffeina Politica ha deciso di approfondire le questioni e ragionare con occhi
            il più possibile critici, basati su esperienze e dati, mantenendo un atteggiamento apartitico. Abbiamo
            innanzitutto individuato quelle che, a nostro parere, sono le quattro questioni fondamentali della città:
            Sicurezza, Centro Storico, Ambiente e Mobilità, Visione del Futuro. Per affrontare questi temi, abbiamo
            coinvolto esperti del settore con anni di esperienza e conoscenze acquisite in posizioni decisionali e
            persone a stretto contatto con queste problematiche. Ogni incontro era dedicato a una specifica tematica e
            vedeva gli esperti dibattere tra loro e con i cittadini, che si sono dimostrati particolarmente partecipi.
            <br/>
            Grazie agli spunti emersi da questi incontri, abbiamo formulato le seguenti considerazioni:
          </p>
          <Petizione title="Sicurezza">
            Il tema forse più caldo di questa campagna elettorale è stato la questione della sicurezza, il cui dibattito
            si è però fermato a un semplice slogan: esercito sì/esercito no. Questo approccio risulta a noi del tutto
            insufficiente: nonostante potremmo concordare sul fatto che una maggiore presenza delle forze dell’ordine
            farebbe sentire le persone più sicure in quella specifica zona, non sarebbe comunque una soluzione
            risolutiva.
            <br/>
            Riteniamo che il problema della sicurezza, soprattutto in zona stazione, vada affrontato attraverso una
            fitta rete di cooperazione tra realtà educative, sportive e assistenziali sul territorio che garantiscano
            una situazione ordinata e controllata per tutto l’arco delle ore pomeridiane, tutta la settimana. Inoltre,
            il tema dei minori stranieri non accompagnati nella città è sottovalutato, e crediamo vada reso più
            efficiente il dialogo tra comune e scuole per l’inserimento di questi ragazzi, per fornire loro più
            possibilità e una prospettiva di futuro reale, sottraendoli alla criminalità locale.
          </Petizione>

          <Petizione title="Ambiente e mobilità">
            È da anni che a Reggio assistiamo alla retorica riguardo il tema della mobilità sostenibile, il cui
            principale cavallo di battaglia è sempre stato quello di incentivare un maggior utilizzo dei mezzi di
            trasporto pubblico. L&apos;autobus è diventato però un mezzo a uso quasi esclusivo degli studenti, poco
            attrattivo per i lavoratori a causa della mancanza di affidabilità sugli orari. C’è anche la questione delle
            connessioni: alcune zone della città sono poco pratiche e immediate da raggiungere, tra cui il centro
            storico, soprattutto in alcuni giorni e orari.
            <br/>
            La sicurezza è però la problematica più dirimente: ad oggi l&apos;autobus è percepito da molti come un mezzo
            non sicuro. Molte ragazze, a causa del sovraffollamento in alcuni orari sui mezzi e delle conseguenti
            molestie da altri passeggeri, percepiscono questi mezzi come pericolosi. Continuare a ergersi come città
            della sostenibilità e poi non garantire le condizioni che rendano attrattivo ed efficiente l&apos;utilizzo
            dei mezzi pubblici risulta quantomeno miope.
          </Petizione>

          <Petizione title="Centro storico">
            La situazione è grave: se non ce ne rendiamo conto in tempo, rischiamo di affrontare conseguenze
            irreversibili. I locali vuoti in crescita generano degrado e diminuiscono l&apos;attrattiva della zona. Se
            non affrontiamo subito questa situazione, il valore del centro continuerà a calare, con negozi in
            difficoltà, locali sfitti e un crescente degrado che gli eventi occasionali non possono risolvere.
            <br/>
            <Link href="https://www.reggionline.com/studio-politecnico-milano-la-radiografia-al-centro-reggio-emilia/" className="font-medium underline underline-offset-2">Lo
              studio del Politecnico</Link> lo dimostra chiaramente: lo stato delle cose è grave. Le soluzioni attuali
            non stanno funzionando. Inoltre, i prezzi elevati richiesti da alcuni proprietari aggravano ulteriormente il
            problema. I commercianti del centro lamentano la mancanza di cura dei proprietari dei locali vuoti e affitti
            insostenibili nelle attuali condizioni economiche.
            <br/>
            Gli eventi occasionali sono apprezzabili, ma non risolvono il problema alla radice. È necessario agire ora,
            con una visione a medio e lungo termine, per invertire una tendenza che, se non fermata, porterà alla morte
            definitiva del centro.
          </Petizione>

        </div>
        <div className="w-full py-10">

        </div>
      </main>
  )
}