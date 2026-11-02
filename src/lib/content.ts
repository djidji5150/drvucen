export const clinic = {
  name: "Dr Vučen",
  tagline: "Laser centar",
  legal: "Zdravstvena ustanova · Specijalistička ordinacija",
  doctor: "prim. dr Mira Vučen",
  specialty: "specijalista dermatovenerolog",
  address: "Jovana Dučića 11",
  city: "78000 Banja Luka",
  region: "Republika Srpska, Bosna i Hercegovina",
  hours: "Radnim danima 08–20h",
  phones: [
    { label: "Ordinacija", tel: "+38751226020", display: "+387 51 226 020" },
    { label: "Linija 2", tel: "+38751226022", display: "+387 51 226 022" },
    { label: "Linija 3", tel: "+38751226021", display: "+387 51 226 021" },
  ],
  mapEmbed:
    "https://maps.google.com/maps?q=Jovana%20Du%C4%8Di%C4%87a%2011%20Banja%20Luka&z=16&output=embed",
  mapLink:
    "https://maps.google.com/?q=Jovana+Dučića+11,+Banja+Luka",
} as const;

export type Service = {
  slug: string;
  title: string;
  category: "opsta" | "laser" | "estetska";
  summary: string;
  body: string[];
};

export const categories = [
  {
    slug: "opsta-dermatovenerologija",
    id: "opsta" as const,
    title: "Opšta dermatovenerologija",
    summary:
      "Dijagnostika i liječenje bolesti kože, dlaka i noktiju, alergološka testiranja, dermoskopija i biopsija.",
  },
  {
    slug: "laserski-tretmani",
    id: "laser" as const,
    title: "Laserski tretmani",
    summary:
      "Fotona Nd:YAG, ER:YAG i QX-Max laseri za epilaciju, kapilare, ožiljke, tetovaže i benigni izrasline.",
  },
  {
    slug: "estetska-dermatologija",
    id: "estetska" as const,
    title: "Estetska dermatologija",
    summary:
      "Mezoterapija bez igle, hemijski pilinzi, tretman hiperhidroze i ultrazvučna kavitacija.",
  },
];

export const services: Service[] = [
  {
    slug: "bolesti-koze-dlaka-noktiju",
    title: "Bolesti kože, dlaka i noktiju",
    category: "opsta",
    summary:
      "Dermatološki pregled i liječenje poremećaja koji utiču na rad, komfor i izgled kože.",
    body: [
      "Dermatološki poremećaji mogu biti uzrok nesposobnosti za rad (ekcemi šaka, gljivične infekcije, psorijaza šaka, znojenje dlanova), smanjenja komfora (svrab, genitalni herpes) i otežane socijalne komunikacije (promjene na licu, vitiligo, psorijaza na licu).",
      "Nokti imaju značajnu ulogu u zaštiti prstiju šaka i stopala. Izgled noktiju može upozoriti da se nešto ozbiljno dešava unutar organizma.",
    ],
  },
  {
    slug: "spolno-prenosive-bolesti",
    title: "Liječenje spolno prenosivih bolesti",
    category: "opsta",
    summary:
      "Pregled, dijagnostika i terapija seksualno prenosivih infekcija.",
    body: [
      "Spolno prenosive bolesti prenose se seksualnim kontaktom. Uzročnici mogu preći sa osobe na osobu putem krvi, semena ili vaginalne tečnosti. Simptomi zavise od uzročnika i mogu biti akutni ili hronični.",
      "Antibiotici mogu izliječiti mnoge seksualno prenosive bolesti, uključujući gonoreju, sifilis, hlamidije i trihomonas. Terapija mora biti sprovedena u potpunosti i u punoj dozi, bez obzira na prestanak tegoba.",
      "Većina seksualno prenosivih virusnih infekcija nije izlječiva. Za HBV i HPV postoje vakcine.",
    ],
  },
  {
    slug: "alergoloska-testiranja",
    title: "Alergološka testiranja",
    category: "opsta",
    summary: "Prick i epikutani kožni testovi za otkrivanje alergena.",
    body: [
      "Alergijski testovi su nezamjenjivi u otkrivanju alergena. U ustanovi izvodimo Prick i epikutane kožne testove — jednostavne i bezbjedne procedure kojima se često brzo otkrije uzrok koprivnjače, atopijskog dermatitisa, alergijskog rinitisa i konjunktivitisa, bronhijalne astme i sličnih stanja.",
      "Prick testovi otkrivaju uzročnike ranih alergijskih reakcija. Testiramo inhalatorne i nutritivne alergene.",
      "Epikutani testovi otkrivaju alergene uzročnike ekcemskih reakcija. Na čistu kožu leđa nalijepi se flaster sa standardnom evropskom serijom od 18 alergena (nikl, kobalt hlorid, kalijum bihromat, neomicin, formalin, parafenilendiamin, peruvijanski balzam i dr.). Flaster se nosi 48 sati, nakon čega se očitavaju rezultati, po potrebi i nakon 72 sata. Tokom nošenja flaster se ne kvasi i ne skida.",
    ],
  },
  {
    slug: "biopsija-koze",
    title: "Biopsija kože i patohistološka verifikacija",
    category: "opsta",
    summary:
      "Uzimanje uzorka oboljele kože radi precizne dijagnoze i odluke o terapiji.",
    body: [
      "Biopsija kože je uzimanje uzorka oboljele kože radi precizne dijagnoze, potrebne za odluku o odgovarajućoj terapiji.",
      "Proceduru obavlja dermatolog u lokalnoj anesteziji. Nakon injekcije anestetika uzima se veoma mali segment kože skalpelom ili punch instrumentom.",
      "Rezultat patohistološke analize gotov je za tri do sedam dana. Na osnovu njega, uz klinički pregled, donosi se odluka o daljoj terapiji.",
    ],
  },
  {
    slug: "dermoskopija",
    title: "Dermoskopija",
    category: "opsta",
    summary:
      "Neinvazivni pregled mladeža i pigmentnih lezija, važan u ranom otkrivanju melanoma.",
    body: [
      "Dermoskopija je jednostavna, neinvazivna, brza i korisna metoda za pouzdaniju dijagnozu pigmentnih lezija i mladeža, posebno za razlikovanje melanoma od benignih pigmentnih promjena. Klinička pouzdanost dijagnostikovanja melanoma „golim okom“ procjenjuje se na 65%, a dermoskopski pregled je podiže na oko 90%.",
      "Dobijenu sliku moguće je sačuvati, kasnije uporediti ili poslati drugom dermatologu na dodatnu ekspertizu. Savjetujemo da se mladeži pregledaju dermoskopski najmanje jednom godišnje. Ako dermatolog procijeni da mladež treba ukloniti, to treba obaviti što prije.",
    ],
  },
  {
    slug: "laserska-epilacija",
    title: "Trajno uklanjanje dlaka sa lica i tijela",
    category: "laser",
    summary:
      "Nd:YAG laser Fotona SP Plus — sigurna epilacija za sve tipove kože.",
    body: [
      "Epilacija medicinskim laserom je najefikasnija i najtrajnija metoda uklanjanja neželjenih dlaka. Laser ima fototermičko dejstvo: svjetlosna energija se apsorbuje u melaninu korijena dlake i pretvara u toplotu koja uništava folikul.",
      "Laserska epilacija je metoda izbora za tamne dlake. Sjeda i izrazito svijetla dlaka ne može se uništiti laserom. Trajno se uništava samo folikul u anagenoj fazi rasta, pa je potreban veći broj tretmana u razmaku od 4 do 6 nedjelja.",
      "U ustanovi koristimo Fotona SP Plus Nd:YAG laser talasne dužine 1064 nm. To je siguran sistem za sve Fitzpatrick tipove kože jer stiže do najdublje smještenog korijena. Sistem hlađenja omogućava veće energije bez opekotina i ožiljaka. Skener od 42 cm² brzo tretira veće površine (noge, ruke, muška leđa).",
      "Prije tretmana obavezan je pregled i konsultacija sa ljekarom. Konsultacije su besplatne.",
    ],
  },
  {
    slug: "prosireni-kapilari",
    title: "Prošireni kapilari i krvni sudovi",
    category: "laser",
    summary:
      "Nd:YAG 1064 nm za trajno zatvaranje sitnih krvnih sudova na licu, tijelu i nogama.",
    body: [
      "Uklanjanje vaskularnih promjena Nd:YAG laserom (1064 nm) je siguran, bezbolan i efikasan modalitet za male krvne sudove prečnika 0,5–2,5 mm na licu, tijelu i nogama.",
      "Laserski snop se apsorbuje u pigmentnim ćelijama krvnog suda i dovodi do fototermokoagulacije — trajnog zatvaranja suda. Aparat ima kontinuirano hlađenje, pa je tretman gotovo bezbolan, a okolna koža ostaje neizmijenjena osim blagog prolaznog crvenila.",
      "Nekoliko dana nakon tretmana nanose se neutralne vitaminske masti. Tri do četiri nedjelje obavezna je fotoprotekcija (SPF iznad 25).",
      "Tretiramo teleangiektazije, spider naevus, cherry angiome, hemangiome i flebektazije. Za većinu promjena na licu dovoljan je jedan tretman; promjene na nogama obično zahtijevaju 2–4 tretmana u razmaku 4–5 nedjelja.",
    ],
  },
  {
    slug: "gljivicne-infekcije-noktiju",
    title: "Gljivične infekcije noktiju",
    category: "laser",
    summary:
      "Nd:YAG laser kao brza, bezbolna alternativa dugotrajnoj sistemskoj terapiji.",
    body: [
      "Gljivična infekcija nokta je često oboljenje, a liječenje je dugotrajno. Najčešće se primjenjuje sistemska terapija antimikoticima (6 do 12 nedjelja).",
      "Nd:YAG laser je brza, bezbolna procedura koja dovodi do sterilizacije izmijenjene nokatne ploče. To je metoda izbora kod osoba kojima su lijekovi kontraindikovani zbog oštećenja bubrega i jetre. Postupak traje nekoliko minuta, ponavlja se svakih 7 do 10 dana; do potpunog saniranja obično je potrebno 6 do 8 tretmana.",
    ],
  },
  {
    slug: "uklanjanje-bora-i-strija",
    title: "Uklanjanje bora i strija",
    category: "laser",
    summary: "ER:YAG Fraxel laser Fotona SP Plus za obnavljanje kože i strije.",
    body: [
      "ER:YAG Fraxel laser je rješenje za bore i znakove starenja. Na jednostavan način uklanjaju se promjene nastale štetnim dejstvom sunca. Nakon laserskog pilinga koža postaje glatka i zategnuta.",
      "Tretman je pogodan za osobe iznad 30 godina, sa umornom, sivom kožom bez tonusa, koje dugo borave na suncu ili u zadimljenim prostorijama.",
      "Frakcionirani laser stimuliše sintezu kolagena i koristi se za strije, vrat, dekolte, šake i podlaktice. Konačni efekat vidi se nakon dužeg niza tretmana. Najbolji rezultati postižu se kombinacijom laserskog resurfacinga i mezoterapije.",
    ],
  },
  {
    slug: "fraxel-er-yag",
    title: "Fraxel ER:YAG tretman",
    category: "laser",
    summary:
      "Frakcijska ablacija sa komforom neablativnog tretmana — ožiljci, bore i strije.",
    body: [
      "Fraxel ER:YAG postiže efekat hirurškog lasera uz komfor i sigurnost neablativnog tretmana. Ablacija je raspoređena u stupcima epidermisa i dermisa promjera oko 100 µm i dubine do 300 µm, čime se podstiče remodeliranje vezivnog tkiva.",
      "Trenutno je jedan od najboljih tretmana ožiljaka nakon akni. Oporavak je brz, bez neugodnog ljuštenja i krastica. Može se primijeniti i na osjetljivoj koži tinejdžera. Tretmani se ponavljaju na dva mjeseca i duže; obnova kolagena je dug proces, pa se konačni rezultat vidi nakon 6–12 mjeseci.",
    ],
  },
  {
    slug: "akne-i-oziljci",
    title: "Tretman akni i otklanjanje ožiljaka",
    category: "laser",
    summary: "Fraxel ER:YAG za ožiljke nakon akni, uz brži oporavak.",
    body: [
      "Ožiljci nakon akni su ozbiljan estetski problem. Fraxel ER:YAG remodelira vezivno tkivo frakcijskom ablacijom, uz brži oporavak nego kod klasičnog ablativnog ili dubokog hemijskog resurfacinga.",
      "Broj tretmana zavisi od indikacije i željenog rezultata. Tretmani se ponavljaju na dva mjeseca i duže. Konačni rezultat vidi se nakon 6–12 mjeseci.",
    ],
  },
  {
    slug: "benigne-izrasline",
    title: "Uklanjanje benignih izraslina na koži",
    category: "laser",
    summary:
      "Hirurški ER:YAG laser umjesto skalpela — bez krvarenja, kratko zarastanje.",
    body: [
      "Erbium:YAG laser koristi se za uklanjanje dobroćudnih promjena na koži lica i tijela bez krvarenja i skalpela: meki fibromi, seboroične keratoze, lentigo simplex, ksantelazme, siringomi, hiperplazija lojnih žlijezda i milije.",
      "Tretmani su ugodni; najčešće je dovoljna anestetska krema 30–60 minuta prije zahvata. Zarastanje traje 7 do 10 dana, nakon čega ostaje mlada koža bez neželjenih tragova.",
      "ER:YAG emituje svjetlost 2,94 µm koju apsorbuju molekule vode. Apsorpcija je oko 10 puta veća nego kod CO2 lasera, pa je dubina ablacije kontrolisana i smanjuje se rizik ožiljka.",
    ],
  },
  {
    slug: "uklanjanje-tetovaza",
    title: "Uklanjanje tetovaža",
    category: "laser",
    summary: "Fotona QX-Max Q-switch laser za tetovaže svih boja.",
    body: [
      "Q-switch laser uništava pigment tetovaže ekstremno kratkim impulsom (nanosekunde), dok okolno tkivo ostaje pošteđeno. Fotona QX-Max omogućava uklanjanje tetovaža svih boja bez rizika ožiljaka kada se radi pravilno.",
      "Prosječno je potrebno 3 do 5 tretmana za profesionalnu tetovažu; amaterske mogu zahtijevati više. Prvi tretman je slabiji radi procjene reakcije kože. Razmak je 6 do 8 nedjelja. Svježe tetovaže se u pravilu uklanjaju tek godinu dana nakon tetoviranja.",
      "Jednobojne tetovaže se najbolje uklanjaju. Nije moguće unaprijed predvidjeti tačan broj tretmana ni konačni rezultat.",
    ],
  },
  {
    slug: "znakovi-starenja",
    title: "Uklanjanje znakova starenja",
    category: "laser",
    summary: "Neablativni Nd:YAG za osvježenje kože i fine bore.",
    body: [
      "Neablativni Nd:YAG laser precizno zagrijava dermis i stimuliše fibroblaste na produkciju novog kolagena.",
      "Postiže se vidljivo osvježenje kože lica i vrata, poboljšanje turgora i elastičnosti, poravnavanje finih bora, redukcija proširenih pora i difuznog crvenila. Procedura je pogodna za žene i muškarce svih tipova kože sa prvim znacima starenja.",
    ],
  },
  {
    slug: "mezoterapija",
    title: "Mezoterapija bez igle",
    category: "estetska",
    summary:
      "Skeyndor no-needle mezoterapija — bez uboda, bola, otoka i podliva.",
    body: [
      "Mezoterapija bez igle je savremena, bezbolna procedura za njegu lica i tijela. Aktivne supstance doprema u dublje slojeve kože i potkožno tkivo. Koristi se za pigmentacije, bore, opuštenu i dehidriranu kožu, te ograničene masne naslage i celulit.",
      "Skeyndor pod dejstvom pulsne naizmjenične struje stvara privremene vodene kanale (mezopore) između epidermisa i dermisa. Proces ima četiri faze: aktivacija, hidroelektroforeza, elektroporacija i krioelektroforeza.",
      "Tretman traje 45–60 minuta. Apsorpcija aktivnih supstanci (hijaluron, kolagen, vitamini) značajno je veća nego kod svakodnevnih krema.",
    ],
  },
  {
    slug: "prekomjerno-znojenje",
    title: "Prekomjerno znojenje",
    category: "estetska",
    summary: "Botulinum toxin za hiperhidrozu dlanova, stopala i pazuha.",
    body: [
      "Hiperhidroza je lučenje znoja veće od potrebnog za hlađenje organizma. Najčešće je na dlanovima, stopalima i ispod pazuha i može ometati svakodnevne aktivnosti.",
      "Botulinum toxin (botoks) blokira nerve koji aktiviraju znojne žlijezde. Aplicira se potkožno u zahvaćene regije. Efekat traje 6 mjeseci do godinu dana. Na pazuhu procedura nije bolna; na dlanovima je nešto neprijatnija.",
    ],
  },
  {
    slug: "hemijski-pilinzi",
    title: "Hemijski pilinzi",
    category: "estetska",
    summary: "Glikolna kiselina i TCA piling lica, vrata, šaka i tijela.",
    body: [
      "Hemijski pilinzi rade se na licu, vratu, šakama, rukama i nogama. Dijele se na površne, srednje duboke i duboke.",
      "Glikolnom kiselinom: površni piling (20%) poboljšava izgled kože; srednje duboki (do 70%) sprovodi samo ljekar. TCA piling (15%, 25% ili 35%) koristi se za ožiljke, fine bore i oštećenja od sunca.",
      "Broj tretmana zavisi od stanja kože. Neki su zadovoljni jednim pilingom; najčešće je potrebno 3 do 6 ponavljanja.",
    ],
  },
  {
    slug: "celulit-i-visak-kilograma",
    title: "Eliminacija celulita i viška kilograma",
    category: "estetska",
    summary:
      "Ultrazvučna kavitacija za tvrdokorne masne naslage, bez operacije i oporavka.",
    body: [
      "Ultrazvučna kavitacija je neinvazivna, bezbolna terapija usmjerena na tvrdokorne naslage masti na bokovima, bedrima, stražnjici, koljenima, trbuhu i nadlakticama — naslage koje dijeta i sport često ne uklone.",
      "Energija ultrazvučnog vala selektivno razbija masne stanice ispod kože, dok površina kože, živci, žile i mišići ostaju netaknuti. Prvi rezultati često se vide već nakon prvog postupka; za pun efekat potrebno je nekoliko dodatnih tretmana.",
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function servicesByCategory(id: Service["category"]) {
  return services.filter((s) => s.category === id);
}

export const gallerySlots = [
  "Recepcija",
  "Ordinacija",
  "Laserska sala",
  "Konsultacije",
  "Fotona sistemi",
  "Dermoskopija",
  "Estetski kabinet",
  "Čekaonica",
  "Tretman lica",
];
