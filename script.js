// ─── DATA ───
const rp = v => 'Rp ' + v.toLocaleString('id-ID');

const summaryData = {
  selatan: [
    { code:'A', name:'Pekerjaan Persiapan', total:45150000, weight:3.3 },
    { code:'B', name:'Pekerjaan Tanah dan Pondasi', total:115845000, weight:8.6 },
    { code:'C', name:'Pekerjaan Struktur Atas (Beton & Baja)', total:275600000, weight:20.4 },
    { code:'D', name:'Pekerjaan Pasangan dan Plesteran', total:198500000, weight:14.7 },
    { code:'E', name:'Pekerjaan Kusen, Pintu, & Jendela', total:185350000, weight:13.7 },
    { code:'F', name:'Pekerjaan Atap dan Plafon', total:135325000, weight:10.0 },
    { code:'G', name:'Pekerjaan Lantai dan Pelapis Dinding', total:158645000, weight:11.8 },
    { code:'H', name:'Pekerjaan Pengecatan', total:65450000, weight:4.9 },
    { code:'I', name:'Pekerjaan Sanitair & Pemipaan (Plumbing)', total:75650000, weight:5.6 },
    { code:'J', name:'Pekerjaan Elektrikal & Tata Udara', total:93760000, weight:7.0 },
  ],
  utara: [
    { code:'A', name:'Pekerjaan Persiapan', total:44490000, weight:3.6 },
    { code:'B', name:'Pekerjaan Tanah dan Pondasi', total:100860000, weight:8.3 },
    { code:'C', name:'Pekerjaan Struktur Atas (Beton & Baja)', total:243860000, weight:20.0 },
    { code:'D', name:'Pekerjaan Pasangan dan Plesteran', total:179350000, weight:14.7 },
    { code:'E', name:'Pekerjaan Kusen, Pintu, & Jendela', total:162960000, weight:13.4 },
    { code:'F', name:'Pekerjaan Atap dan Plafon', total:121240000, weight:9.9 },
    { code:'G', name:'Pekerjaan Lantai dan Pelapis Dinding', total:137915000, weight:11.3 },
    { code:'H', name:'Pekerjaan Pengecatan', total:59625000, weight:4.9 },
    { code:'I', name:'Pekerjaan Sanitair & Pemipaan (Plumbing)', total:75650000, weight:6.2 },
    { code:'J', name:'Pekerjaan Elektrikal & Tata Udara', total:93760000, weight:7.7 },
  ]
};

const boqData = {
  selatan: [
    { code:'A', name:'PEKERJAAN PERSIAPAN', subtotal:45150000,
      items:[
        {no:1,uraian:'Pembersihan lahan awal & perataan',sat:'ls',vol:'1,00',hsat:'5.500.000',total:'5.500.000'},
        {no:2,uraian:'Pengukuran & Pemasangan Bowplank',sat:'m1',vol:'55,00',hsat:'110.000',total:'6.050.000'},
        {no:3,uraian:'Direksi Keet & Gudang Material',sat:'ls',vol:'1,00',hsat:'15.000.000',total:'15.000.000'},
        {no:4,uraian:'Penyediaan Air & Listrik Kerja',sat:'ls',vol:'1,00',hsat:'8.000.000',total:'8.000.000'},
        {no:5,uraian:'Asuransi CAR & BPJS TK',sat:'ls',vol:'1,00',hsat:'10.600.000',total:'10.600.000'},
      ]},
    { code:'B', name:'PEKERJAAN TANAH DAN PONDASI', subtotal:115845000,
      note:'Ref: Dokumen Struktur Ketira Engineering — Strauss Pile / Footplat',
      items:[
        {no:1,uraian:'Galian tanah pondasi footplat & tie beam',sat:'m3',vol:'85,00',hsat:'125.000',total:'10.625.000'},
        {no:2,uraian:'Pengeboran Strauss Pile ø30cm, kedalaman 6m',sat:'m1',vol:'144,00',hsat:'250.000',total:'36.000.000'},
        {no:3,uraian:'Urugan pasir bawah pondasi & tie beam (t=5cm)',sat:'m3',vol:'6,50',hsat:'350.000',total:'2.275.000'},
        {no:4,uraian:'Lantai kerja (Lean Concrete) bawah pondasi',sat:'m3',vol:'4,20',hsat:'1.150.000',total:'4.830.000'},
        {no:5,uraian:'Pondasi Strauss Pile (Beton K-300 + Besi Ulir)',sat:'m3',vol:'10,15',hsat:'3.500.000',total:'35.525.000'},
        {no:6,uraian:'Pondasi Footplat (Beton K-300)',sat:'m3',vol:'14,50',hsat:'1.300.000',total:'18.850.000'},
        {no:7,uraian:'Pembesian Footplat (Besi Ulir TS)',sat:'kg',vol:'350,00',hsat:'18.000',total:'6.300.000'},
        {no:8,uraian:'Bekisting Pondasi',sat:'m2',vol:'12,00',hsat:'120.000',total:'1.440.000'},
      ]},
    { code:'C', name:'PEKERJAAN STRUKTUR ATAS (BETON BERTULANG K-250/300)', subtotal:275600000,
      items:[
        {no:1,uraian:'Tie Beam / Slog (Beton, Bekisting, Pembesian)',sat:'m3',vol:'6,80',hsat:'5.500.000',total:'37.400.000'},
        {no:2,uraian:'Kolom Utama (Dim. 15×30 / 15×40, inc. besi & bekisting)',sat:'m3',vol:'8,50',hsat:'6.200.000',total:'52.700.000'},
        {no:3,uraian:'Kolom Praktis (15×15)',sat:'m1',vol:'180,00',hsat:'95.000',total:'17.100.000'},
        {no:4,uraian:'Balok Lantai 2 (Dim. 20×40 / 15×30, inc. besi & bekisting)',sat:'m3',vol:'9,50',hsat:'6.400.000',total:'60.800.000'},
        {no:5,uraian:'Plat Lantai 2 (t=12cm, inc. multiplek & scaffolding)',sat:'m2',vol:'61,10',hsat:'1.100.000',total:'67.210.000'},
        {no:6,uraian:'Plat Atap Dak Beton (Area Terbatas)',sat:'m2',vol:'15,00',hsat:'1.150.000',total:'17.250.000'},
        {no:7,uraian:'Ring Balok Keliling (Beton K-250, inc. besi & bekisting)',sat:'m3',vol:'2,50',hsat:'5.500.000',total:'13.750.000'},
        {no:8,uraian:'Tangga Beton Utama (inc. besi, bekisting, finishing bordes)',sat:'unit',vol:'1,00',hsat:'9.390.000',total:'9.390.000'},
      ]},
    { code:'D', name:'PEKERJAAN PASANGAN DAN PLESTERAN', subtotal:198500000,
      items:[
        {no:1,uraian:'Pasangan Batu Bata Ringan (Hebel 10cm, MU 1:4)',sat:'m2',vol:'420,00',hsat:'165.000',total:'69.300.000'},
        {no:2,uraian:'Plesteran Dinding (1:4, t=15mm)',sat:'m2',vol:'840,00',hsat:'85.000',total:'71.400.000'},
        {no:3,uraian:'Acian Dinding Interior & Eksterior Premium',sat:'m2',vol:'840,00',hsat:'45.000',total:'37.800.000'},
        {no:4,uraian:'Tali Air Fasade & Sudutan',sat:'m1',vol:'150,00',hsat:'25.000',total:'3.750.000'},
        {no:5,uraian:'Batu Paras Taro / Palimanan Panel Utama (t=3cm)',sat:'m2',vol:'12,00',hsat:'850.000',total:'10.200.000'},
        {no:6,uraian:'Roster Beton Cetak (Fasad Top, 20×20cm)',sat:'m2',vol:'5,00',hsat:'450.000',total:'2.250.000'},
        {no:7,uraian:'Ukiran Kayu/GRC Tempel Fasad (profil custom)',sat:'set',vol:'1,00',hsat:'3.800.000',total:'3.800.000'},
      ]},
    { code:'E', name:'PEKERJAAN KUSEN, PINTU, & JENDELA', subtotal:185350000,
      items:[
        {no:1,uraian:'Kusen + Daun Pintu Utama (Solid Wood, 90×220cm)',sat:'unit',vol:'1,00',hsat:'8.500.000',total:'8.500.000'},
        {no:2,uraian:'Kusen + Daun Pintu Kamar (Hollow Wood, 80×210cm)',sat:'unit',vol:'3,00',hsat:'4.800.000',total:'14.400.000'},
        {no:3,uraian:'Kusen + Daun Pintu KM (Alumunium YKK, 70×210cm)',sat:'unit',vol:'3,00',hsat:'3.500.000',total:'10.500.000'},
        {no:4,uraian:'Jendela Alumunium Powder Coat + Kaca 6mm Tempered',sat:'m2',vol:'35,00',hsat:'2.600.000',total:'91.000.000'},
        {no:5,uraian:'Jendela Sliding Kaca Besar (Profil 4", Kaca 8mm, Area Living)',sat:'set',vol:'2,00',hsat:'18.500.000',total:'37.000.000'},
        {no:6,uraian:'Engsel Pintu Utama (Heavy Duty SS 304, 5")',sat:'pcs',vol:'4,00',hsat:'250.000',total:'1.000.000'},
        {no:7,uraian:'Smart Door Lock Utama (ex. Onasis/Yale)',sat:'unit',vol:'1,00',hsat:'4.500.000',total:'4.500.000'},
        {no:8,uraian:'Handle Kunci Kamar (Mortise Lock Dekson/setara)',sat:'set',vol:'5,00',hsat:'650.000',total:'3.250.000'},
        {no:9,uraian:'Engsel Pintu Kamar & KM (SS 304, 4")',sat:'pcs',vol:'15,00',hsat:'80.000',total:'1.200.000'},
        {no:10,uraian:'Aksesoris Jendela (Rambuncis, Friction Stay, Stopper)',sat:'set',vol:'20,00',hsat:'700.000',total:'14.000.000'},
      ]},
    { code:'F', name:'PEKERJAAN ATAP DAN PLAFON', subtotal:135325000,
      items:[
        {no:1,uraian:'Rangka Atap Baja Ringan (G550, Zincalume 0.75mm)',sat:'m2',vol:'75,00',hsat:'280.000',total:'21.000.000'},
        {no:2,uraian:'Penutup Atap Genteng Flat Cisangkan/Setara',sat:'m2',vol:'75,00',hsat:'350.000',total:'26.250.000'},
        {no:3,uraian:'Nok Atap',sat:'m1',vol:'18,00',hsat:'250.000',total:'4.500.000'},
        {no:4,uraian:'Lisplank Fiber Semen 20cm (inc. rangka & cat)',sat:'m1',vol:'35,00',hsat:'185.000',total:'6.475.000'},
        {no:5,uraian:'Talang Air Zincalume (inc. bracket & downpipe)',sat:'m1',vol:'25,00',hsat:'187.000',total:'4.675.000'},
        {no:6,uraian:'Plafon Gypsum 9mm + Rangka Hollow Galvalum',sat:'m2',vol:'110,00',hsat:'250.000',total:'27.500.000'},
        {no:7,uraian:'Plafon Water Resistance (Gypsum WR, Area Basah)',sat:'m2',vol:'25,00',hsat:'300.000',total:'7.500.000'},
        {no:8,uraian:'Drop Ceiling Set & Shadow Line detail',sat:'m1',vol:'85,00',hsat:'120.000',total:'10.200.000'},
        {no:9,uraian:'Waterproofing Dak Atap, Talang & Kanopi (Membran)',sat:'m2',vol:'45,00',hsat:'605.000',total:'27.225.000'},
      ]},
    { code:'G', name:'PEKERJAAN LANTAI DAN PELAPIS DINDING', subtotal:158645000,
      items:[
        {no:1,uraian:'Lantai Utama Granit Tile Homogenous 60×60 (ex. Niro/Roman)',sat:'m2',vol:'95,00',hsat:'650.000',total:'61.750.000'},
        {no:2,uraian:'Keramik Lantai KM (Anti Slip, 30×30, ex. Roman/Ikad)',sat:'m2',vol:'18,00',hsat:'450.000',total:'8.100.000'},
        {no:3,uraian:'Keramik/Granit Dinding KM (Full Height, 30×60)',sat:'m2',vol:'55,00',hsat:'500.000',total:'27.500.000'},
        {no:4,uraian:'Plint Lantai Granit/Kayu (h=8cm)',sat:'m1',vol:'120,00',hsat:'95.000',total:'11.400.000'},
        {no:5,uraian:'Pemasangan Batu Alam Fasad Eksterior (Palimanan, t=2cm)',sat:'m2',vol:'35,00',hsat:'850.000',total:'29.750.000'},
        {no:6,uraian:'Waterproofing Area Basah — Lantai KM (SikaTop 107/setara)',sat:'m2',vol:'26,00',hsat:'165.000',total:'4.290.000'},
        {no:7,uraian:'Lantai Teras / Carport (Batu Andesit Bakar / Sikat)',sat:'m2',vol:'45,30',hsat:'350.000',total:'15.855.000'},
      ]},
    { code:'H', name:'PEKERJAAN PENGECATAN', subtotal:65450000,
      items:[
        {no:1,uraian:'Cat Dinding Interior (Dulux Pentalite/setara, 3 lapis)',sat:'m2',vol:'450,00',hsat:'55.000',total:'24.750.000'},
        {no:2,uraian:'Cat Dinding Eksterior (Dulux Weathershield/setara, 3 lapis)',sat:'m2',vol:'260,00',hsat:'85.000',total:'22.100.000'},
        {no:3,uraian:'Cat Plafon Gypsum (Dulux Catylac/setara, 2 lapis)',sat:'m2',vol:'135,00',hsat:'45.000',total:'6.075.000'},
        {no:4,uraian:'Coating Batu Alam Exterior (Clear Propan/setara)',sat:'m2',vol:'35,00',hsat:'250.000',total:'8.750.000'},
        {no:5,uraian:'Coating Ornamen Kayu Fasad (Propan Ultran/setara)',sat:'m2',vol:'15,10',hsat:'250.000',total:'3.775.000'},
      ]},
    { code:'I', name:'PEKERJAAN SANITAIR & PLUMBING', subtotal:75650000,
      note:'Ref: Dokumen MEP Evara Selatan — 20260227',
      items:[
        {no:1,uraian:'Pipa Air Bersih PPR PN-10 (Wavin 1/2" & 3/4")',sat:'btg',vol:'35,00',hsat:'150.000',total:'5.250.000'},
        {no:2,uraian:'Pipa Air Kotor PVC AW (Rucika 3" & 4")',sat:'btg',vol:'25,00',hsat:'180.000',total:'4.500.000'},
        {no:3,uraian:'Fitting & Aksesoris Pipa (Knee, Tee, Socket, Valve)',sat:'lot',vol:'1,00',hsat:'2.500.000',total:'2.500.000'},
        {no:4,uraian:'Bak Kontrol Pasangan & Pipa Hujan PVC',sat:'ttk',vol:'4,00',hsat:'600.000',total:'2.400.000'},
        {no:5,uraian:'Closet Duduk Premium (TOTO CW421/CW630)',sat:'unit',vol:'3,00',hsat:'4.500.000',total:'13.500.000'},
        {no:6,uraian:'Shower Set (Tiang SS, Rain Head, Hand Shower — TOTO/Grohe)',sat:'unit',vol:'2,00',hsat:'5.500.000',total:'11.000.000'},
        {no:7,uraian:'Wastafel + Kran Mixer Chrome + Cermin Bevel',sat:'set',vol:'3,00',hsat:'4.200.000',total:'12.600.000'},
        {no:8,uraian:'Floor Drain SS, Toilet Jet Shower (Toto TX403SN/setara)',sat:'set',vol:'3,00',hsat:'1.300.000',total:'3.900.000'},
        {no:9,uraian:'Roof Tank Air (Penguin 1000L, inc. Radar Otomatis)',sat:'unit',vol:'1,00',hsat:'4.500.000',total:'4.500.000'},
        {no:10,uraian:'Pompa Dorong Booster (Wasser PB-218EA/setara)',sat:'unit',vol:'1,00',hsat:'4.500.000',total:'4.500.000'},
        {no:11,uraian:'Instalasi Pipa AC & Drain AC (Pipa PVC 3/4")',sat:'ttk',vol:'5,00',hsat:'1.200.000',total:'6.000.000'},
        {no:12,uraian:'Septic Tank Biofill (BF-08) + Instalasi Sumur Resapan',sat:'unit',vol:'1,00',hsat:'5.000.000',total:'5.000.000'},
      ]},
    { code:'J', name:'PEKERJAAN ELEKTRIKAL & TATA UDARA', subtotal:93760000,
      note:'Ref: Dokumen MEP Evara Selatan — 20260227',
      items:[
        {no:1,uraian:'Kabel NYM 3×2.5mm (Supreme/Eterna)',sat:'roll',vol:'4,00',hsat:'1.800.000',total:'7.200.000'},
        {no:2,uraian:'Kabel NYM 2×1.5mm (Supreme/Eterna)',sat:'roll',vol:'3,00',hsat:'1.200.000',total:'3.600.000'},
        {no:3,uraian:'Pipa Conduit PVC 20mm (Clipsal/setara)',sat:'btg',vol:'60,00',hsat:'25.000',total:'1.500.000'},
        {no:4,uraian:'T-Doos / In-Doos',sat:'pcs',vol:'60,00',hsat:'6.000',total:'360.000'},
        {no:5,uraian:'Panel Utama (MCB Box Schneider 12 Way + MCB 6A–20A)',sat:'set',vol:'1,00',hsat:'4.500.000',total:'4.500.000'},
        {no:6,uraian:'Titik Lampu Dalam (Downlight LED 9W Philips/Panasonic)',sat:'ttk',vol:'45,00',hsat:'350.000',total:'15.750.000'},
        {no:7,uraian:'Titik Lampu Luar (Spotlight IP65 / Wall Lamp Outdoor)',sat:'ttk',vol:'15,00',hsat:'600.000',total:'9.000.000'},
        {no:8,uraian:'Saklar & Stop Kontak (Panasonic Style / Schneider Vivace)',sat:'ttk',vol:'55,00',hsat:'250.000',total:'13.750.000'},
        {no:9,uraian:'Lampu Strip LED (Indirect Ceiling, 12W/m, IP20)',sat:'m1',vol:'40,00',hsat:'180.000',total:'7.200.000'},
        {no:10,uraian:'Titik Kabel Data / LAN (CAT6 + Faceplate)',sat:'ttk',vol:'4,00',hsat:'750.000',total:'3.000.000'},
        {no:11,uraian:'Titik Antena TV + Kabel Coaxial RG6',sat:'ttk',vol:'3,00',hsat:'500.000',total:'1.500.000'},
        {no:12,uraian:'Pemasangan Titik Arde / Grounding System (< 2 ohm)',sat:'unit',vol:'1,00',hsat:'4.400.000',total:'4.400.000'},
        {no:13,uraian:'Unit AC Split 1 PK Inverter — Master Bedroom (Daikin/Panasonic)',sat:'unit',vol:'1,00',hsat:'6.500.000',total:'6.500.000'},
        {no:14,uraian:'Unit AC Split 1/2 PK Inverter — Kamar Anak (Daikin/Panasonic)',sat:'unit',vol:'2,00',hsat:'5.500.000',total:'11.000.000'},
        {no:15,uraian:'Pipa Freon, Kabel Outdoor, Braket, Pipa Drain AC',sat:'ttk',vol:'3,00',hsat:'1.500.000',total:'4.500.000'},
      ]},
  ],

  utara: [
    { code:'A', name:'PEKERJAAN PERSIAPAN', subtotal:44490000,
      items:[
        {no:1,uraian:'Pembersihan lahan awal & perataan',sat:'ls',vol:'1,00',hsat:'5.500.000',total:'5.500.000'},
        {no:2,uraian:'Pengukuran & Pemasangan Bowplank',sat:'m1',vol:'49,00',hsat:'110.000',total:'5.390.000'},
        {no:3,uraian:'Direksi Keet & Gudang Material',sat:'ls',vol:'1,00',hsat:'15.000.000',total:'15.000.000'},
        {no:4,uraian:'Penyediaan Air & Listrik Kerja',sat:'ls',vol:'1,00',hsat:'8.000.000',total:'8.000.000'},
        {no:5,uraian:'Asuransi CAR & BPJS TK',sat:'ls',vol:'1,00',hsat:'10.600.000',total:'10.600.000'},
      ]},
    { code:'B', name:'PEKERJAAN TANAH DAN PONDASI', subtotal:100860000,
      note:'Ref: Dokumen Struktur Ketira Engineering — Strauss Pile / Footplat',
      items:[
        {no:1,uraian:'Galian tanah pondasi footplat & tie beam',sat:'m3',vol:'75,00',hsat:'125.000',total:'9.375.000'},
        {no:2,uraian:'Pengeboran Strauss Pile ø30cm, kedalaman 6m',sat:'m1',vol:'120,00',hsat:'250.000',total:'30.000.000'},
        {no:3,uraian:'Urugan pasir bawah pondasi & tie beam (t=5cm)',sat:'m3',vol:'5,80',hsat:'350.000',total:'2.030.000'},
        {no:4,uraian:'Lantai kerja (Lean Concrete) bawah pondasi',sat:'m3',vol:'3,50',hsat:'1.150.000',total:'4.025.000'},
        {no:5,uraian:'Pondasi Strauss Pile (Beton K-300 + Besi Ulir)',sat:'m3',vol:'9,20',hsat:'3.500.000',total:'32.200.000'},
        {no:6,uraian:'Pondasi Footplat (Beton K-300)',sat:'m3',vol:'13,00',hsat:'1.300.000',total:'16.900.000'},
        {no:7,uraian:'Pembesian Footplat (Besi Ulir TS)',sat:'kg',vol:'310,00',hsat:'18.000',total:'5.580.000'},
        {no:8,uraian:'Bekisting Pondasi',sat:'m2',vol:'6,25',hsat:'120.000',total:'750.000'},
      ]},
    { code:'C', name:'PEKERJAAN STRUKTUR ATAS (BETON BERTULANG K-250/300)', subtotal:243860000,
      items:[
        {no:1,uraian:'Tie Beam / Slog (Beton, Bekisting, Pembesian)',sat:'m3',vol:'6,10',hsat:'5.500.000',total:'33.550.000'},
        {no:2,uraian:'Kolom Utama (Dim. 15×30 / 15×40, inc. besi & bekisting)',sat:'m3',vol:'7,60',hsat:'6.200.000',total:'47.120.000'},
        {no:3,uraian:'Kolom Praktis (15×15)',sat:'m1',vol:'160,00',hsat:'95.000',total:'15.200.000'},
        {no:4,uraian:'Balok Lantai 2 (Dim. 20×40 / 15×30, inc. besi & bekisting)',sat:'m3',vol:'8,50',hsat:'6.400.000',total:'54.400.000'},
        {no:5,uraian:'Plat Lantai 2 (t=12cm, inc. multiplek & scaffolding)',sat:'m2',vol:'57,90',hsat:'1.100.000',total:'63.690.000'},
        {no:6,uraian:'Plat Atap Dak Beton (Area Terbatas)',sat:'m2',vol:'11,20',hsat:'1.150.000',total:'12.880.000'},
        {no:7,uraian:'Ring Balok Keliling (Beton K-250, inc. besi & bekisting)',sat:'m3',vol:'2,20',hsat:'5.500.000',total:'12.100.000'},
        {no:8,uraian:'Tangga Beton Utama (inc. besi, bekisting, finishing bordes)',sat:'unit',vol:'1,00',hsat:'4.920.000',total:'4.920.000'},
      ]},
    { code:'D', name:'PEKERJAAN PASANGAN DAN PLESTERAN', subtotal:179350000,
      items:[
        {no:1,uraian:'Pasangan Batu Bata Ringan (Hebel 10cm, MU 1:4)',sat:'m2',vol:'380,00',hsat:'165.000',total:'62.700.000'},
        {no:2,uraian:'Plesteran Dinding (1:4, t=15mm)',sat:'m2',vol:'760,00',hsat:'85.000',total:'64.600.000'},
        {no:3,uraian:'Acian Dinding Interior & Eksterior Premium',sat:'m2',vol:'760,00',hsat:'45.000',total:'34.200.000'},
        {no:4,uraian:'Tali Air Fasade & Sudutan',sat:'m1',vol:'130,00',hsat:'25.000',total:'3.250.000'},
        {no:5,uraian:'Batu Paras Taro / Palimanan Panel Utama (t=3cm)',sat:'m2',vol:'10,00',hsat:'850.000',total:'8.500.000'},
        {no:6,uraian:'Roster Beton Cetak (Fasad Top, 20×20cm)',sat:'m2',vol:'4,00',hsat:'450.000',total:'1.800.000'},
        {no:7,uraian:'Ukiran Kayu/GRC Tempel Fasad (profil custom)',sat:'set',vol:'1,00',hsat:'4.300.000',total:'4.300.000'},
      ]},
    { code:'E', name:'PEKERJAAN KUSEN, PINTU, & JENDELA', subtotal:162960000,
      note:'Evara Utara memiliki 2 kamar tidur, sehingga kuantitas kusen kamar & handle lebih sedikit dibanding Evara Selatan (3 kamar).',
      items:[
        {no:1,uraian:'Kusen + Daun Pintu Utama (Solid Wood, 90×220cm)',sat:'unit',vol:'1,00',hsat:'8.500.000',total:'8.500.000'},
        {no:2,uraian:'Kusen + Daun Pintu Kamar (Hollow Wood, 80×210cm)',sat:'unit',vol:'2,00',hsat:'4.800.000',total:'9.600.000'},
        {no:3,uraian:'Kusen + Daun Pintu KM (Alumunium YKK, 70×210cm)',sat:'unit',vol:'2,00',hsat:'3.500.000',total:'7.000.000'},
        {no:4,uraian:'Jendela Alumunium Powder Coat + Kaca 6mm Tempered',sat:'m2',vol:'31,00',hsat:'2.600.000',total:'80.600.000'},
        {no:5,uraian:'Jendela Sliding Kaca Besar (Profil 4", Kaca 8mm, Area Living)',sat:'set',vol:'2,00',hsat:'18.500.000',total:'37.000.000'},
        {no:6,uraian:'Engsel Pintu Utama (Heavy Duty SS 304, 5")',sat:'pcs',vol:'4,00',hsat:'250.000',total:'1.000.000'},
        {no:7,uraian:'Smart Door Lock Utama (ex. Onasis/Yale)',sat:'unit',vol:'1,00',hsat:'4.500.000',total:'4.500.000'},
        {no:8,uraian:'Handle Kunci Kamar (Mortise Lock Dekson/setara)',sat:'set',vol:'4,00',hsat:'650.000',total:'2.600.000'},
        {no:9,uraian:'Engsel Pintu Kamar & KM (SS 304, 4")',sat:'pcs',vol:'12,00',hsat:'80.000',total:'960.000'},
        {no:10,uraian:'Aksesoris Jendela (Rambuncis, Friction Stay, Stopper)',sat:'set',vol:'16,00',hsat:'700.000',total:'11.200.000'},
      ]},
    { code:'F', name:'PEKERJAAN ATAP DAN PLAFON', subtotal:121240000,
      items:[
        {no:1,uraian:'Rangka Atap Baja Ringan (G550, Zincalume 0.75mm)',sat:'m2',vol:'68,00',hsat:'280.000',total:'19.040.000'},
        {no:2,uraian:'Penutup Atap Genteng Flat Cisangkan/Setara',sat:'m2',vol:'68,00',hsat:'350.000',total:'23.800.000'},
        {no:3,uraian:'Nok Atap',sat:'m1',vol:'15,00',hsat:'250.000',total:'3.750.000'},
        {no:4,uraian:'Lisplank Fiber Semen 20cm (inc. rangka & cat)',sat:'m1',vol:'30,00',hsat:'185.000',total:'5.550.000'},
        {no:5,uraian:'Talang Air Zincalume (inc. bracket & downpipe)',sat:'m1',vol:'16,00',hsat:'200.000',total:'3.200.000'},
        {no:6,uraian:'Plafon Gypsum 9mm + Rangka Hollow Galvalum',sat:'m2',vol:'98,00',hsat:'250.000',total:'24.500.000'},
        {no:7,uraian:'Plafon Water Resistance (Gypsum WR, Area Basah)',sat:'m2',vol:'22,00',hsat:'300.000',total:'6.600.000'},
        {no:8,uraian:'Drop Ceiling Set & Shadow Line detail',sat:'m1',vol:'75,00',hsat:'120.000',total:'9.000.000'},
        {no:9,uraian:'Waterproofing Dak Atap, Talang & Kanopi (Membran)',sat:'m2',vol:'40,00',hsat:'645.000',total:'25.800.000'},
      ]},
    { code:'G', name:'PEKERJAAN LANTAI DAN PELAPIS DINDING', subtotal:137915000,
      items:[
        {no:1,uraian:'Lantai Utama Granit Tile Homogenous 60×60 (ex. Niro/Roman)',sat:'m2',vol:'85,00',hsat:'650.000',total:'55.250.000'},
        {no:2,uraian:'Keramik Lantai KM (Anti Slip, 30×30, ex. Roman/Ikad)',sat:'m2',vol:'15,00',hsat:'450.000',total:'6.750.000'},
        {no:3,uraian:'Keramik/Granit Dinding KM (Full Height, 30×60)',sat:'m2',vol:'45,00',hsat:'500.000',total:'22.500.000'},
        {no:4,uraian:'Plint Lantai Granit/Kayu (h=8cm)',sat:'m1',vol:'110,00',hsat:'95.000',total:'10.450.000'},
        {no:5,uraian:'Pemasangan Batu Alam Fasad Eksterior (Palimanan, t=2cm)',sat:'m2',vol:'30,00',hsat:'850.000',total:'25.500.000'},
        {no:6,uraian:'Waterproofing Area Basah — Lantai KM (SikaTop 107/setara)',sat:'m2',vol:'21,00',hsat:'165.000',total:'3.465.000'},
        {no:7,uraian:'Lantai Teras / Carport (Batu Andesit Bakar / Sikat)',sat:'m2',vol:'40,00',hsat:'350.000',total:'14.000.000'},
      ]},
    { code:'H', name:'PEKERJAAN PENGECATAN', subtotal:59625000,
      items:[
        {no:1,uraian:'Cat Dinding Interior (Dulux Pentalite/setara, 3 lapis)',sat:'m2',vol:'410,00',hsat:'55.000',total:'22.550.000'},
        {no:2,uraian:'Cat Dinding Eksterior (Dulux Weathershield/setara, 3 lapis)',sat:'m2',vol:'230,00',hsat:'85.000',total:'19.550.000'},
        {no:3,uraian:'Cat Plafon Gypsum (Dulux Catylac/setara, 2 lapis)',sat:'m2',vol:'115,00',hsat:'45.000',total:'5.175.000'},
        {no:4,uraian:'Coating Batu Alam Exterior (Clear Propan/setara)',sat:'m2',vol:'30,00',hsat:'250.000',total:'7.500.000'},
        {no:5,uraian:'Coating Ornamen Kayu Fasad (Propan Ultran/setara)',sat:'m2',vol:'19,40',hsat:'250.000',total:'4.850.000'},
      ]},
    { code:'I', name:'PEKERJAAN SANITAIR & PLUMBING', subtotal:75650000,
      note:'Meskipun Evara Utara hanya memiliki 2 kamar tidur, gambar MEP menunjukkan 4 titik wet area. Kuantitas 3 closet, 2 shower set, dan 3 wastafel sudah sesuai desain MEP.',
      items:[
        {no:1,uraian:'Pipa Air Bersih PPR PN-10 (Wavin 1/2" & 3/4")',sat:'btg',vol:'35,00',hsat:'150.000',total:'5.250.000'},
        {no:2,uraian:'Pipa Air Kotor PVC AW (Rucika 3" & 4")',sat:'btg',vol:'25,00',hsat:'180.000',total:'4.500.000'},
        {no:3,uraian:'Fitting & Aksesoris Pipa',sat:'lot',vol:'1,00',hsat:'2.500.000',total:'2.500.000'},
        {no:4,uraian:'Bak Kontrol Pasangan & Pipa Hujan PVC',sat:'ttk',vol:'4,00',hsat:'600.000',total:'2.400.000'},
        {no:5,uraian:'Closet Duduk Premium (TOTO CW421/CW630)',sat:'unit',vol:'3,00',hsat:'4.500.000',total:'13.500.000'},
        {no:6,uraian:'Shower Set (Tiang SS, Rain Head, Hand Shower — TOTO/Grohe)',sat:'unit',vol:'2,00',hsat:'5.500.000',total:'11.000.000'},
        {no:7,uraian:'Wastafel + Kran Mixer Chrome + Cermin Bevel',sat:'set',vol:'3,00',hsat:'4.200.000',total:'12.600.000'},
        {no:8,uraian:'Floor Drain SS, Toilet Jet Shower (Toto TX403SN/setara)',sat:'set',vol:'3,00',hsat:'1.300.000',total:'3.900.000'},
        {no:9,uraian:'Roof Tank Air (Penguin 1000L, inc. Radar Otomatis)',sat:'unit',vol:'1,00',hsat:'4.500.000',total:'4.500.000'},
        {no:10,uraian:'Pompa Dorong Booster (Wasser PB-218EA/setara)',sat:'unit',vol:'1,00',hsat:'4.500.000',total:'4.500.000'},
        {no:11,uraian:'Instalasi Pipa AC & Drain AC (Pipa PVC 3/4")',sat:'ttk',vol:'5,00',hsat:'1.200.000',total:'6.000.000'},
        {no:12,uraian:'Septic Tank Biofill (BF-08) + Instalasi Sumur Resapan',sat:'unit',vol:'1,00',hsat:'5.000.000',total:'5.000.000'},
      ]},
    { code:'J', name:'PEKERJAAN ELEKTRIKAL & TATA UDARA', subtotal:93760000,
      note:'Ref: Dokumen MEP Evara Utara — 20260227',
      items:[
        {no:1,uraian:'Kabel NYM 3×2.5mm (Supreme/Eterna)',sat:'roll',vol:'4,00',hsat:'1.800.000',total:'7.200.000'},
        {no:2,uraian:'Kabel NYM 2×1.5mm (Supreme/Eterna)',sat:'roll',vol:'3,00',hsat:'1.200.000',total:'3.600.000'},
        {no:3,uraian:'Pipa Conduit PVC 20mm (Clipsal/setara)',sat:'btg',vol:'60,00',hsat:'25.000',total:'1.500.000'},
        {no:4,uraian:'T-Doos / In-Doos',sat:'pcs',vol:'60,00',hsat:'6.000',total:'360.000'},
        {no:5,uraian:'Panel Utama (MCB Box Schneider 12 Way + MCB 6A–20A)',sat:'set',vol:'1,00',hsat:'4.500.000',total:'4.500.000'},
        {no:6,uraian:'Titik Lampu Dalam (Downlight LED 9W Philips/Panasonic)',sat:'ttk',vol:'45,00',hsat:'350.000',total:'15.750.000'},
        {no:7,uraian:'Titik Lampu Luar (Spotlight IP65 / Wall Lamp Outdoor)',sat:'ttk',vol:'15,00',hsat:'600.000',total:'9.000.000'},
        {no:8,uraian:'Saklar & Stop Kontak (Panasonic Style / Schneider Vivace)',sat:'ttk',vol:'55,00',hsat:'250.000',total:'13.750.000'},
        {no:9,uraian:'Lampu Strip LED (Indirect Ceiling, 12W/m, IP20)',sat:'m1',vol:'40,00',hsat:'180.000',total:'7.200.000'},
        {no:10,uraian:'Titik Kabel Data / LAN (CAT6 + Faceplate)',sat:'ttk',vol:'4,00',hsat:'750.000',total:'3.000.000'},
        {no:11,uraian:'Titik Antena TV + Kabel Coaxial RG6',sat:'ttk',vol:'3,00',hsat:'500.000',total:'1.500.000'},
        {no:12,uraian:'Pemasangan Titik Arde / Grounding System (< 2 ohm)',sat:'unit',vol:'1,00',hsat:'4.400.000',total:'4.400.000'},
        {no:13,uraian:'Unit AC Split 1 PK Inverter — Master Bedroom (Daikin/Panasonic)',sat:'unit',vol:'1,00',hsat:'6.500.000',total:'6.500.000'},
        {no:14,uraian:'Unit AC Split 1/2 PK Inverter — Kamar Anak (Daikin/Panasonic)',sat:'unit',vol:'2,00',hsat:'5.500.000',total:'11.000.000'},
        {no:15,uraian:'Pipa Freon, Kabel Outdoor, Braket, Pipa Drain AC',sat:'ttk',vol:'3,00',hsat:'1.500.000',total:'4.500.000'},
      ]},
  ]
};

// ─── RENDER SUMMARY ───
function renderSummary(id, data, totalKonstruksi, ppn, grandTotal) {
  const tbody = document.getElementById(id);
  let html = '';
  data.forEach(r => {
    const barW = Math.round(r.weight / 21 * 100);
    html += `<tr>
      <td class="code-col">${r.code}</td>
      <td>${r.name}</td>
      <td class="currency" style="text-align:right">${rp(r.total)}</td>
      <td>
        <div class="weight-bar-wrap">
          <div class="weight-bar"><div class="weight-bar-fill" style="width:${barW}%"></div></div>
          <span class="weight-col">${r.weight.toFixed(1)}%</span>
        </div>
      </td>
    </tr>`;
  });
  html += `
    <tr class="total-row"><td colspan="2"><strong>TOTAL ESTIMASI BIAYA KONSTRUKSI</strong></td><td class="currency" style="text-align:right"><strong>${rp(totalKonstruksi)}</strong></td><td></td></tr>
    <tr class="tax-row"><td colspan="2">PPN 11%</td><td class="currency" style="text-align:right">${rp(ppn)}</td><td></td></tr>
    <tr class="grand-row"><td colspan="2"><strong>GRAND TOTAL (Inc. PPN)</strong></td><td class="currency" style="text-align:right"><strong>${rp(grandTotal)}</strong></td><td></td></tr>
  `;
  tbody.innerHTML = html;
}

// ─── RENDER BOQ ───
function renderBoq(containerId, data) {
  const container = document.getElementById(containerId);
  let html = '';
  data.forEach((section, idx) => {
    const sectionId = `${containerId}-sec-${idx}`;
    html += `
      <div class="boq-section">
        <div class="boq-section-header" onclick="toggleSection('${sectionId}', this)">
          <span class="boq-section-letter">${section.code}</span>
          <span class="boq-section-name">${section.name}</span>
          <span class="boq-section-total currency">${rp(section.subtotal)}</span>
          <span class="chevron">▼</span>
        </div>
        <div class="boq-table-wrap" id="${sectionId}">
          <table class="boq-table">
            <thead>
              <tr>
                <th style="width:32px">No</th>
                <th>Uraian Pekerjaan</th>
                <th style="width:44px" class="right">Sat.</th>
                <th style="width:64px" class="right">Vol.</th>
                <th style="width:130px" class="right">Harga Satuan</th>
                <th style="width:140px" class="right">Total Harga</th>
              </tr>
            </thead>
            <tbody>
              ${section.items.map(i => `
                <tr>
                  <td class="no-col center">${i.no}</td>
                  <td>${i.uraian}</td>
                  <td class="right muted">${i.sat}</td>
                  <td class="right muted">${i.vol}</td>
                  <td class="right currency">${i.hsat}</td>
                  <td class="right currency">${i.total}</td>
                </tr>
              `).join('')}
              <tr class="boq-subtotal">
                <td colspan="5" style="text-align:right;padding-right:16px;font-weight:600">Subtotal ${section.code}</td>
                <td class="right currency">${rp(section.subtotal)}</td>
              </tr>
            </tbody>
          </table>
          ${section.note ? `<div class="boq-note">📌 ${section.note}</div>` : ''}
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

// ─── RENDER COMPARE ───
function renderCompare() {
  const tbody = document.getElementById('compare-table');
  const s = summaryData.selatan;
  const u = summaryData.utara;
  let html = '';
  for (let i = 0; i < s.length; i++) {
    const diff = s[i].total - u[i].total;
    const diffStr = diff > 0
      ? `<span class="diff-plus">+${rp(diff)}</span>`
      : `<span class="diff-minus">${rp(diff)}</span>`;
    html += `<tr>
      <td style="color:var(--rust);font-weight:600">${s[i].code}</td>
      <td>${s[i].name}</td>
      <td class="currency" style="text-align:right">${rp(s[i].total)}</td>
      <td class="currency" style="text-align:right">${rp(u[i].total)}</td>
      <td style="text-align:right">${diffStr}</td>
    </tr>`;
  }
  // totals
  const sTotal = 1349275000, uTotal = 1219710000;
  const sGrand = 1497695250, uGrand = 1353878100;
  const diffTotal = sTotal - uTotal;
  const diffGrand = sGrand - uGrand;
  html += `
    <tr style="background:var(--gold-pale)">
      <td colspan="2" style="font-weight:600;color:var(--ink)">TOTAL KONSTRUKSI</td>
      <td class="currency" style="text-align:right;font-weight:600">${rp(sTotal)}</td>
      <td class="currency" style="text-align:right;font-weight:600">${rp(uTotal)}</td>
      <td style="text-align:right"><span class="diff-plus">+${rp(diffTotal)}</span></td>
    </tr>
    <tr class="compare-grand">
      <td colspan="2">GRAND TOTAL (Inc. PPN 11%)</td>
      <td class="currency" style="text-align:right">${rp(sGrand)}</td>
      <td class="currency" style="text-align:right">${rp(uGrand)}</td>
      <td style="text-align:right"><span class="diff-plus">+${rp(diffGrand)}</span></td>
    </tr>
  `;
  tbody.innerHTML = html;
}

// ─── TOGGLE SECTION ───
window.toggleSection = function(id, header) {
  const wrap = document.getElementById(id);
  const isCollapsed = wrap.classList.contains('collapsed');
  wrap.classList.toggle('collapsed');
  header.classList.toggle('collapsed');
}

// ─── SWITCH TAB ───
window.switchTab = function(tab) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  event.target.classList.add('active');
}

// ─── INIT ───
renderSummary('summary-selatan', summaryData.selatan, 1349275000, 148420250, 1497695250);
renderSummary('summary-utara',   summaryData.utara,   1219710000, 134168100, 1353878100);
renderBoq('boq-selatan', boqData.selatan);
renderBoq('boq-utara',   boqData.utara);
renderCompare();
