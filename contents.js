const chevronLinkDown = 'Immagini/chevroncircledown.png';
const chevronLinkUp = 'Immagini/chevroncircleup.png';
const bookmarkStarLinkAdd = 'Immagini/bookmarkstar+.png';
const bookmarkStarLinkRemove = 'Immagini/bookmarkstar-.png';
const rightArrowPng = 'Immagini/right-arrow.png';
const leftArrowPng = 'Immagini/left-arrow.png';
const plusPng = 'Immagini/plus.png';

const essenceSheet = [
    {
        name: 'Abete Rosso',
        sample: 'Immagini/Essenze/Abete rosso Val di Fiemme.png',
        info: 'Legno storico con elevate proprietà di risonanza, leggero e flessibile. Impiegato nella realizzazione di tavole armoniche di tutti gli strumenti acustici.',
        idGBIF: 5284884
    },
    {
        name: 'Acero',
        sample: 'Immagini/Essenze/Acero.png',
        info: 'È uno dei legni più utilizzati per la costruzione di strumenti musicali. In particolare per manici di chitarra elettrica o fasce laterali, fondo e manico per gli strumenti ad arco, nonché strumenti a percussione.',
        idGBIF: 3189834
    },
    {
        name: 'Acero Marezzato',
        sample: 'Immagini/Essenze/Acero marezzato.png',
        info: 'Stesse caretteristiche e usi della variante liscia, ad eccezione di striature e zebrature che ne impreziosiscono il valore e lo rendono affascinante alla vista.',
        idGBIF: 3189834
    },
    {
        name: 'Amaranto',
        sample: 'Immagini/Essenze/Amaranto.png',
        info: 'Pochi legni come lo zebrano risentono gli alti e bassi della moda, forse a causa della sua troppo evidente venatura che tuttavia presenta ottime doti decorative.',
        idGBIF: 3085074
    },
    {
        name: 'Bocote',
        sample: 'Immagini/Essenze/Bocote.png',
        info: 'Il Bocote è un legno sudamericano, con una trama zebrata che permette di ottenere degli effetti ottici molto particolari.',
        idGBIF: 2900865
    },
    {
        name: 'Cedro',
        sample: 'Immagini/Essenze/Cedro.png',
        info: 'Spesso considerato come alternativa per la produzione di tavole armoniche in abete, da cui si differenzia per la resa acustica in genere più "calda" e per il colore bronzeo.',
        idGBIF: 3190157
    },
    {
        name: 'Ciliegio',
        sample: 'Immagini/Essenze/Ciliegio.png',
        info: 'Il legno ciliegio è pregiato e molto resistente. Viene usato in falegnameria per realizzare mobili eleganti, strumenti musicali e pavimenti di pregio.',
        idGBIF: 3020791
    },
    {
        name: 'Ebano Macassar',
        sample: 'Immagini/Essenze/Ebano macassar.png',
        info: 'Originario di Sulawesi è uno tra i legni più duri e densi che esistano, trova il suo impiego per questo in tastiere o ponticelli di chitarre e in tutta la famiglia degli archi.',
        idGBIF: 3030169
    },
    {
        name: 'Mogano',
        sample: 'Immagini/Essenze/Mogano.png',
        info: 'La buona lavorabilità e la minuziosa finitura fanno del mogano una scelta di classe per molti costruttori di mobili ed ebanisti. Viene usato poi per impiallacciature, falegnameria di interni, tornitura e strumenti musicali. Le specie americane sono anche utilizzate nella costruzione di imbarcazioni.',
        idGBIF: 3190483
    },
    {
        name: 'Noce',
        sample: 'Immagini/Essenze/Noce.png',
        info: 'Il noce è uno dei legni più pregiati e al tempo stesso più diffusi al mondo, apprezzato per le sue qualità meccaniche e la notevole durevolezza.',
        idGBIF: 3054368
    },
    {
        name: 'Ovangkol',
        sample: 'Immagini/Essenze/Ovangkol.png',
        info: 'Usato come massiccio per mobili di pregio e per pannellature. Trova anche impiego nella castruzione di parquet a mosaico, cornici e lavori al tornio.',
        idGBIF: 2964815
    },
    {
        name: 'Padouk',
        sample: 'Immagini/Essenze/Padouk.png',
        info: 'Generalmente utilizzato per l’interno, l’arredo della casa o quanto meno di appartamenti residenziali.Per mantenere la colorazione rosso vivo questo legno deve essere verniciato velocemente, evitando inoltre esposizione alla luce prolungata.',
        idGBIF: 5349273
    },
    {
        name: 'Palissandro',
        sample: 'Immagini/Essenze/Palissandro indiano.png',
        info: 'Ha un odore dolciastro molto persistente e per questo viene anche detto legno di rosa. Sostituisce in circostanze necessarie il più pesante ebano ed è per tradizione il legno di fondo e fasce per chitarre classiche di alta taratura.',
        idGBIF: 2968358
    },
    {
        name: 'Pioppo',
        sample: 'Immagini/Essenze/Pioppo.png',
        info: 'Il legno di pioppo è uno dei più impiegati nella produzione industriale di oggetti in legno. Nonostante la sua leggerezza i suoi utlizzi spaziano da tavoli a parti strutturali.',
        idGBIF: 3040183
    },
    {
        name: 'Sitka',
        sample: 'Immagini/Essenze/Sitka.png',
        info: 'Una variante di abete, è scelto per le sue qualità: venature dritte costanti ed uniformi, longevità e resistenza alla trazione.',
        idGBIF: 5284827
    },
    {
        name: 'Tiglio',
        sample: 'Immagini/Essenze/Tiglio.png',
        info: 'Il tiglio è un albero di essenza tenera, della famiglia delle latifoglie. Il legno è di molto facile incisione, idealre per lavori di intaglio, intarsio e scultura',
        idGBIF: 3152041
    },
    {
        name: 'Ulivo',
        sample: 'Immagini/Essenze/Ulivo.png',
        info: 'Difficile da utilizzare e da reperire in ampie tavole data la conformazione degli alberi, le sue venature irregolari creano disegni stupefacenti. ',
        idGBIF: 5415040
    },
    {
        name: 'Wenge',
        sample: 'Immagini/Essenze/Wenge.png',
        info: 'Il wenge è un tipo di legno molto pregiato ed esteticamente molto bello da vedere. Vanta una grande resistenza che lo rende la materia prima perfetta per la costruzione di arredi.',
        idGBIF: 5355672
    },
    {
        name: 'Zebrano',
        sample: 'Immagini/Essenze/Zebrano.png',
        info: 'Pochi legni come lo zebrano risentono gli alti e bassi della moda, forse a causa della sua troppo evidente venatura che tuttavia presenta ottime doti decorative.',
        idGBIF: 2941147
    },
    {
        name: 'Ziricote',
        sample: 'Immagini/Essenze/Ziricote.png',
        info: 'Legno affascinante grazie alle sue venature movimentate e ariose. Simile al Palissandro (anche negli usi) ma più armonioso, regala robustezza e grandi sensazioni estetiche.',
        idGBIF: 5662394
    }
];




