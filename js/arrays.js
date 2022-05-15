const obrazyArray = [
  ////  alegorie
  {
    name: "alegoriePythia",
    z: 0,
    x: 1,
    tytul: `Pytia Delficka`,
    kategoria: `przedstawiona w półpostaci, zwrócona w lewo; prawą rękę wznosi nad głowę. Tło nieokreślone. Z lewej strony pada snop światła. W lewym górnym rogu widnieje napis: "PYTHJA", 1863, 12.7 cm x 11.2 cm (arkusz:16.0 cm x 13.8 cm), technika: akwaforta na papierze (MNK III-ryc.-10277)
    `,
    tekst: `<section>Pytia Delficka przedstawiona w półpostaci, zwrócona w lewo; prawą rękę wznosi nad głowę. Tło nieokreślone. Z lewej strony pada snop światła. W lewym górnym rogu widnieje napis: "PYTHJA", 1863, 12.7 cm x 11.2 cm (arkusz:16.0 cm x 13.8 cm), technika: akwaforta na papierze (MNK III-ryc.-10277) </section>`,
    distanceToObject: 0.6 // wprowadzam nową wartość dla uzyskania odpowiedniego dystansu do obiektu po przybliżeniu
  },
  {
    name: "alegorieMiasto",
    z: 0,
    x: 1,
    tytul: `Alegoria „Miasta"`,
    kategoria: `1861, 16 cm x 10.4 cm; technika: nieznana na papierze (MNK III-r.a-2666)
    `,
    tekst: `<section>Alegoria „Miasta", 1861, 16 cm x 10.4 cm; technika: nieznana na papierze (MNK III-r.a-2666)</section>`,
    distanceToObject: 0 // wprowadzam nową wartość dla uzyskania odpowiedniego dystansu do obiektu po przybliżeniu
  },
  {
    name: "alegorieSzesc",
    z: 0,
    x: 1,
    tytul: `Sześć scen odnoszących się do różnych etapów życia ludzkiego`,
    kategoria: `1852, 21.1 cm x 30.7 cm, technika nieznana na papierze (MNK XV-Rr.-2475)
        `,
    tekst: `<section>Sześć scen odnoszących się do różnych etapów życia ludzkiego, 1852, 21.1 cm x 30.7 cm, technika nieznana na papierze (MNK XV-Rr.-2475)  </section>`,
    distanceToObject: 0
  },

  {
    name: "alegorieSworza",
    z: 0,
    x: 1,
    tytul: `Lodovico Sforza w celi więziennej`,
    kategoria: ` lewą ręką odgarnia z czoła włosy, prawą przytrzymuje szatę. Z tyłu zakratowane okienko. W prawym narożniku napis "MARTYR" oraz monogram wiązany "XP", 1863, odcisk płyty: 13.2 cm x 11.3 cm (arkusz: 22.1 cm x 17.4 cm, technika: akwaforta na papierze (MNK III-ryc.-11049)
        `,
    tekst: `<section>Lodovico Sforza w celi więziennej, lewą ręką odgarnia z czoła włosy, prawą przytrzymuje szatę. Z tyłu zakratowane okienko. W prawym narożniku napis "MARTYR" oraz monogram wiązany "XP", 1863, odcisk płyty: 13.2 cm x 11.3 cm (arkusz: 22.1 cm x 17.4 cm, technika: akwaforta na papierze (MNK III-ryc.-11049)
     </section>`,
    distanceToObject: 0.6
  },
  {
    name: "alegoriePlochosc",
    z: 0,
    x: 1,
    tytul: `Alegoria płochości`,
    kategoria: `  1862,  21.2 cm x 27.8 cm, 
technika rysunkowa: tusz na papierze (MNK III-r.a-2664)
   `,
    tekst: `<section>Alegoria płochości, 1862,  21.2 cm x 27.8 cm, technika rysunkowa: tusz na papierze (MNK III-r.a-2664)  </section>`,
    distanceToObject: 0.1
  },

  ///////opis

  {
    name: "opis",
    z: 0,
    x: -1,
    tytul: ``,
    kategoria: ``,
    tekst: ``,
    distanceToObject: 2.4
  },

  /// sceny
  {
    name: "HALECKI",
    z: -1,
    x: 0,
    tytul: `Studia postaci ludzkich oraz zwierząt,`,
    kategoria: `1844-1846, 12.9 cm x 17.8 cm <br> technika rysunkowa: tusz na papierze <br>(MNK III-r.a-1818/13.)`,
    tekst: ``,
    distanceToObject: 0.28
  },
  {
    name: "scenyLuzne",
    z: -1,
    x: 0,
    tytul: `Luźne szkice, `,
    kategoria: `1844-1846, 12.9 cm x 17.8 cm
technika rysunkowa: tusz na papierze (MNK III-r.a-1818/14)    `,
    tekst: ``,
    distanceToObject: 0.12
  },
  {
    name: "scenyMnich",
    z: -1,
    x: 0,
    tytul: `Mnich, mężczyzna z fajką, pejzaż ze skałą i fragmentami ruin`,
    kategoria: `Mnich, mężczyzna z fajką, pejzaż ze skałą i fragmentami ruin, 1846-1847,
 22.0 cm x 28.5, technika rysunkowa: ołówek na papierze (MNK III-r.a-1892/1)    `,
    tekst: ``,
    distanceToObject: 0
  }, //
  {
    name: "scenyArystokrata",
    z: -1,
    x: 0,
    tytul: `Sxxxxzkic postaci arystokraty, mieszczanina i szlachcica`,
    kategoria: `1844-1846, 18.4 cm x 27.1 cm, technika rysunkowa: ołówek na papierze (MNK III-r.a-1894/11)
    `,
    tekst: ``,
    distanceToObject: 0.12
  },
  {
    name: "scenyGoscie",
    z: -1,
    x: 0,
    tytul: `xxxxGoście`,
    kategoria: `1844-1846, 18.4 cm x  27.1 cm, technika rysunkowa: ołówek na papierze (MNK III-r.a-1894/13)
    `,
    tekst: ``,
    distanceToObject: 0.12
  },
  {
    name: "scenyLuzne2",
    z: -1,
    x: 0,
    tytul: `Postaci ludzi i zwierząt`,
    kategoria: `1844-1846, 18.4 cm x 27.1 cm, <br>technika rysunkowa: ołówek na papierze (MNK III-r.a-1894/14)
    `,
    tekst: ``,
    distanceToObject: 0.12
  },
  {
    name: "scenyGlowy",
    z: -1,
    x: 0,
    tytul: `Głowy kobiece i męskie oraz szkice postaci`,
    kategoria: `1844-1846, 18.4 cm x 27.1 cm , technika rysunkowa: ołówek na papierze (MNK III-r.a-1894/16)
     `,
    tekst: ``,
    distanceToObject: 0.12
  },
  {
    name: "scenyPakowanie",
    z: -1,
    x: 0,
    tytul: `xxxxxSzkice różne: m.in. pudła na kapelusze, pies oraz sceny pakowania bagaży`,
    kategoria: `1844-1846, 18.4 cm x 27.1 cm, technika rysunkowa: ołówek na papierze, (MNK III-r.a-1894/20)
     `,
    tekst: ``,
    distanceToObject: 0.12
  },
  {
    name: "scenyTeatrzyk",
    z: -1,
    x: 0,
    tytul: `xxxxTeatrzyk wędrowny i inne szkice,`,
    kategoria: `1838,  31.2 cm x 20.4 cm, technika: ołówek na papierze (MNK III-r.a-7186)
         `,
    tekst: ``,
    distanceToObject: 0.31
  },

  //// slawni
  {
    name: "slawniLubomirski",
    z: 1,
    x: 0,
    tytul: `Książe Kazimierz Lubomirski`,
    kategoria: `1844-1846, 12.9 cm x. 17.8 cm, technika rysunkowa: ołówek na papierze (MNK III-r.a-1818/31)
    `,
    tekst: ``,
    distanceToObject: 0.25
  },
  {
    name: "slawniSobieski",
    z: 1,
    x: 0,
    tytul: `Szkic jeźdźca (Michała Sobieskiego?)`,
    kategoria: `1844-1846,  9.7 cm x  14.2 cm, technika rysunkowa: ołówek na papierze (MNK III-r.a-1818/17)
        `,
    tekst: ``,
    distanceToObject: 0
  },
  {
    name: "slawniTarnowski",
    z: 1,
    x: 0,
    tytul: `Jan Tarnowski`,
    kategoria: `1844-1846, 12.5 cm x 11,1 cm, technika rysunkowa: ołówek na papierze (MNK III-r.a-1818/44)
    `,
    tekst: ``,
    distanceToObject: 0.1
  },
  {
    name: "slawniSadowski",
    z: 1,
    x: 0,
    tytul: `Mężczyzna z cylindrem w dłoni oraz portret Michała Sadowskiego (?)`,
    kategoria: `1846-1847, 22.0 cm x 28.2 cm (MNK III-r.a-1892/10)
    `,
    tekst: ``,
    distanceToObject: 0.12
  },
  {
    name: "slawniKonstanty",
    z: 1,
    x: 0,
    tytul: `Książe Konstanty`,
    kategoria: `1846-1847, 15.9 cm x 13.5 cm, technika rysunkowa: ołówek na papierze (MNK III-r.a-1892/13)
        `,
    tekst: ``,
    distanceToObject: 0.2
  },
  {
    name: "slawniOrlikowski",
    z: 1,
    x: 0,
    tytul: `Feliks Orlikowski`,
    kategoria: `1844-1846, 18.4 cm x 27.1 cm, technika rysunkowa: ołówek na papierze (MNK III-r.a-1894/7
        `,
    tekst: ``,
    distanceToObject: 0.3
  },
  {
    name: "slawniLelewel",
    z: 1,
    x: 0,
    tytul: `Joachim Lelewel`,
    kategoria: `1844-1846, 18.4 cm x 27.1 cm, technika rysunkowa: ołówek, tusz  na papierze (MNK III-r.a-1894/22)
        `,
    tekst: ``,
    distanceToObject: 0.12
  },
  {
    name: "slawniSiemienski",
    z: 1,
    x: 0,
    tytul: `Szkice mężczyzn, wśród nich sportretowany Lucjan Siemieński i autoportret poety`,
    kategoria: `1844-1846,  18.4 cm x 27.1 cm, technika rysunkowa: ołówek na papierze (MNK III-r.a-1894/31)
        `,
    tekst: ``,
    distanceToObject: 0.12
  },
  {
    name: "slawniWodzicki",
    z: 1,
    x: 0,
    tytul: `Mężczyzna z laską (Władysław Wodzicki?), mężczyzna w cylindrze`,
    kategoria: `1844-1846, 18.4 cm x 27.1 cm, technika rysunkowa: ołówek na papierze (MNK III-r.a-1894/3)
            `,
    tekst: ``,
    distanceToObject: 0.12
  },
  {
    name: "slawniDembowski",
    z: 1,
    x: 0,
    tytul: `„Dembowski i zgubione jego systemata" `,
    kategoria: `1846-1847, 22.0 cm x 28.5 cm,  technika rysunkowa: ołówek na papierze (MNK III-r.a-1892/6)
     `,
    tekst: ``,
    distanceToObject: 0.15
  },
  {
    name: "TargetUp",
    z: -1, //powinno byc -1
    x: 0,
    tytul: `false`,
    kategoria: ``,
    tekst: ``
  },
  {
    name: "TargetR",
    z: 0,
    x: 1,
    tytul: ``,
    kategoria: ``,
    tekst: ``
  },
  {
    name: "TargetL",
    z: 0,
    x: -1,
    tytul: ``,
    kategoria: ``,
    tekst: ``
  },
  {
    name: "TargetDo",
    z: 1,
    x: 0,
    tytul: `false`,
    kategoria: ``,
    tekst: ``
  }
];
const textOnWall = [
  {
    text: `Professionals Prix`,
    x: -0.52,
    y: 2.2,
    z: -3.038,
    rx: 0,
    ry: 0,
    rz: 0
  },
  {
    text: `Studensts Honourable Mention`,
    x: 5.038,
    y: 2.2,
    z: -1.15,
    rx: 0,
    ry: -Math.PI / 2,
    rz: 0
  },
  {
    text: `Students Prix`,
    x: 0.3,
    y: 2.2,
    z: 3.038,
    rx: 0,
    ry: Math.PI,
    rz: 0
  },
  {
    text: `Professionals Honourable Mention`,
    x: -5.038,
    y: 2.2,
    z: 1.5,
    rx: 0,
    ry: Math.PI / 2,
    rz: 0
  }
];
export { obrazyArray, textOnWall };
