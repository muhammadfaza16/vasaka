// ─── DATA ───
const rp = v => 'Rp ' + v.toLocaleString('id-ID');

const summaryData = {
  selatan: [
    { code:'A', name:'Pekerjaan Persiapan', total:28125000, weight:3.2 },
    { code:'B', name:'Pekerjaan Tanah dan Pondasi', total:82870000, weight:9.4 },
    { code:'C', name:'Pekerjaan Struktur Atas (Beton & Baja)', total:188815000, weight:21.5 },
    { code:'D', name:'Pekerjaan Pasangan dan Plesteran', total:130300000, weight:14.8 },
    { code:'E', name:'Pekerjaan Kusen, Pintu, & Jendela', total:111995000, weight:12.7 },
    { code:'F', name:'Pekerjaan Atap dan Plafon', total:88795000, weight:10.1 },
    { code:'G', name:'Pekerjaan Lantai dan Pelapis Dinding', total:96345000, weight:11.0 },
    { code:'H', name:'Pekerjaan Pengecatan', total:42734000, weight:4.9 },
    { code:'I', name:'Pekerjaan Sanitair & Pemipaan (Plumbing)', total:47675000, weight:5.4 },
    { code:'J', name:'Pekerjaan Elektrikal & Tata Udara', total:61305000, weight:7.0 },
  ],
  utara: [
    { code:'A', name:'Pekerjaan Persiapan', total:27675000, weight:3.5 },
    { code:'B', name:'Pekerjaan Tanah dan Pondasi', total:72115000, weight:9.2 },
    { code:'C', name:'Pekerjaan Struktur Atas (Beton & Baja)', total:167995000, weight:21.5 },
    { code:'D', name:'Pekerjaan Pasangan dan Plesteran', total:117740000, weight:15.0 },
    { code:'E', name:'Pekerjaan Kusen, Pintu, & Jendela', total:98180000, weight:12.5 },
    { code:'F', name:'Pekerjaan Atap dan Plafon', total:78300000, weight:10.0 },
    { code:'G', name:'Pekerjaan Lantai dan Pelapis Dinding', total:83760000, weight:10.7 },
    { code:'H', name:'Pekerjaan Pengecatan', total:38826000, weight:5.0 },
    { code:'I', name:'Pekerjaan Sanitair & Pemipaan (Plumbing)', total:47675000, weight:6.1 },
    { code:'J', name:'Pekerjaan Elektrikal & Tata Udara', total:50435000, weight:6.4 },
  ]
};

const boqData = {
  selatan: [
    { code:'A', name:'PEKERJAAN PERSIAPAN', subtotal:28125000, items:[
        {no:1,uraian:'Pembersihan lahan awal & perataan',sat:'ls',vol:'1,00',hsat:'3.500.000',total:'3.500.000'},
        {no:2,uraian:'Pengukuran & Pemasangan Bowplank',sat:'m1',vol:'55,00',hsat:'75.000',total:'4.125.000'},
        {no:3,uraian:'Direksi Keet & Gudang Material',sat:'ls',vol:'1,00',hsat:'8.000.000',total:'8.000.000'},
        {no:4,uraian:'Penyediaan Air & Listrik Kerja',sat:'ls',vol:'1,00',hsat:'5.000.000',total:'5.000.000'},
        {no:5,uraian:'Asuransi CAR & BPJS TK',sat:'ls',vol:'1,00',hsat:'7.500.000',total:'7.500.000'},
      ]},
    { code:'B', name:'PEKERJAAN TANAH DAN PONDASI', subtotal:82870000, note:'Ref: Dokumen Struktur — Strauss Pile / Footplat', items:[
        {no:1,uraian:'Galian tanah pondasi footplat & tie beam',sat:'m3',vol:'85,00',hsat:'85.000',total:'7.225.000'},
        {no:2,uraian:'Pengeboran Strauss Pile ø30cm, kedalaman 6m',sat:'m1',vol:'144,00',hsat:'175.000',total:'25.200.000'},
        {no:3,uraian:'Urugan pasir bawah pondasi & tie beam (t=5cm)',sat:'m3',vol:'6,50',hsat:'250.000',total:'1.625.000'},
        {no:4,uraian:'Lantai kerja (Lean Concrete) bawah pondasi',sat:'m3',vol:'4,20',hsat:'850.000',total:'3.570.000'},
        {no:5,uraian:'Pondasi Strauss Pile (Beton K-300, besi ulir)',sat:'m3',vol:'10,15',hsat:'2.500.000',total:'25.375.000'},
        {no:6,uraian:'Pondasi Footplat (Beton K-300)',sat:'m3',vol:'14,50',hsat:'950.000',total:'13.775.000'},
        {no:7,uraian:'Pembesian Footplat (Besi Ulir standar SNI)',sat:'kg',vol:'350,00',hsat:'14.000',total:'4.900.000'},
        {no:8,uraian:'Bekisting Pondasi',sat:'m2',vol:'12,00',hsat:'100.000',total:'1.200.000'},
      ]},
    { code:'C', name:'PEKERJAAN STRUKTUR ATAS (BETON K-250/300)', subtotal:188815000, items:[
        {no:1,uraian:'Tie Beam / Slog (Beton, Bekisting, Pembesian)',sat:'m3',vol:'6,80',hsat:'3.800.000',total:'25.840.000'},
        {no:2,uraian:'Kolom Utama (Dim. 15×30 / 15×40)',sat:'m3',vol:'8,50',hsat:'4.200.000',total:'35.700.000'},
        {no:3,uraian:'Kolom Praktis (15×15)',sat:'m1',vol:'180,00',hsat:'65.000',total:'11.700.000'},
        {no:4,uraian:'Balok Lantai 2 (Dim. 20×40 / 15×30)',sat:'m3',vol:'9,50',hsat:'4.500.000',total:'42.750.000'},
        {no:5,uraian:'Plat Lantai 2 (t=12cm, inc. multiplek & scaffolding)',sat:'m2',vol:'61,10',hsat:'750.000',total:'45.825.000'},
        {no:6,uraian:'Plat Atap Dak Beton (Area Terbatas)',sat:'m2',vol:'15,00',hsat:'800.000',total:'12.000.000'},
        {no:7,uraian:'Ring Balok Keliling (Beton K-250)',sat:'m3',vol:'2,50',hsat:'3.800.000',total:'9.500.000'},
        {no:8,uraian:'Tangga Beton Utama',sat:'unit',vol:'1,00',hsat:'5.500.000',total:'5.500.000'},
      ]},
    { code:'D', name:'PEKERJAAN PASANGAN DAN PLESTERAN', subtotal:130300000, items:[
        {no:1,uraian:'Pasangan Batu Bata Ringan (Hebel 10cm atau setara)',sat:'m2',vol:'420,00',hsat:'110.000',total:'46.200.000'},
        {no:2,uraian:'Plesteran Dinding (1:4, t=15mm)',sat:'m2',vol:'840,00',hsat:'55.000',total:'46.200.000'},
        {no:3,uraian:'Acian Dinding Interior & Eksterior',sat:'m2',vol:'840,00',hsat:'30.000',total:'25.200.000'},
        {no:4,uraian:'Tali Air Fasade & Sudutan',sat:'m1',vol:'150,00',hsat:'18.000',total:'2.700.000'},
        {no:5,uraian:'Batu Alam Panel Utama (atau setara, t=3cm)',sat:'m2',vol:'12,00',hsat:'500.000',total:'6.000.000'},
        {no:6,uraian:'Roster Beton Cetak (Fasad Top, 20×20cm)',sat:'m2',vol:'5,00',hsat:'300.000',total:'1.500.000'},
        {no:7,uraian:'Ornamen Fasad GRC/Kayu (profil custom)',sat:'set',vol:'1,00',hsat:'2.500.000',total:'2.500.000'},
      ]},
    { code:'E', name:'PEKERJAAN KUSEN, PINTU, & JENDELA', subtotal:111995000, items:[
        {no:1,uraian:'Kusen + Daun Pintu Utama (Solid Wood atau setara)',sat:'unit',vol:'1,00',hsat:'5.000.000',total:'5.000.000'},
        {no:2,uraian:'Kusen + Daun Pintu Kamar (Hollow Wood atau setara)',sat:'unit',vol:'3,00',hsat:'3.200.000',total:'9.600.000'},
        {no:3,uraian:'Kusen + Daun Pintu KM (Alumunium atau setara)',sat:'unit',vol:'3,00',hsat:'2.200.000',total:'6.600.000'},
        {no:4,uraian:'Jendela Alumunium Powder Coat + Kaca 5mm',sat:'m2',vol:'35,00',hsat:'1.500.000',total:'52.500.000'},
        {no:5,uraian:'Jendela Sliding Kaca Besar (Area Living)',sat:'set',vol:'2,00',hsat:'11.500.000',total:'23.000.000'},
        {no:6,uraian:'Engsel Pintu Utama (Heavy Duty SS atau setara)',sat:'pcs',vol:'4,00',hsat:'180.000',total:'720.000'},
        {no:7,uraian:'Smart Door Lock Utama (digital lock standar)',sat:'unit',vol:'1,00',hsat:'2.500.000',total:'2.500.000'},
        {no:8,uraian:'Handle Kunci Kamar (Mortise Lock atau setara)',sat:'set',vol:'5,00',hsat:'450.000',total:'2.250.000'},
        {no:9,uraian:'Engsel Pintu Kamar & KM (SS atau setara)',sat:'pcs',vol:'15,00',hsat:'55.000',total:'825.000'},
        {no:10,uraian:'Aksesoris Jendela (Rambuncis, Friction Stay)',sat:'set',vol:'20,00',hsat:'450.000',total:'9.000.000'},
      ]},
    { code:'F', name:'PEKERJAAN ATAP DAN PLAFON', subtotal:88795000, items:[
        {no:1,uraian:'Rangka Atap Baja Ringan (G550 atau setara)',sat:'m2',vol:'75,00',hsat:'185.000',total:'13.875.000'},
        {no:2,uraian:'Penutup Atap Genteng Flat Beton (atau setara)',sat:'m2',vol:'75,00',hsat:'220.000',total:'16.500.000'},
        {no:3,uraian:'Nok Atap',sat:'m1',vol:'18,00',hsat:'165.000',total:'2.970.000'},
        {no:4,uraian:'Lisplank Fiber Semen 20cm',sat:'m1',vol:'35,00',hsat:'125.000',total:'4.375.000'},
        {no:5,uraian:'Talang Air Zincalume (inc. downpipe)',sat:'m1',vol:'25,00',hsat:'130.000',total:'3.250.000'},
        {no:6,uraian:'Plafon Gypsum 9mm + Rangka Hollow',sat:'m2',vol:'110,00',hsat:'160.000',total:'17.600.000'},
        {no:7,uraian:'Plafon Water Resistance (Area Basah)',sat:'m2',vol:'25,00',hsat:'200.000',total:'5.000.000'},
        {no:8,uraian:'Drop Ceiling Set & Shadow Line',sat:'m1',vol:'85,00',hsat:'85.000',total:'7.225.000'},
        {no:9,uraian:'Waterproofing Dak Atap & Kanopi (atau setara)',sat:'m2',vol:'45,00',hsat:'400.000',total:'18.000.000'},
      ]},
    { code:'G', name:'PEKERJAAN LANTAI DAN PELAPIS DINDING', subtotal:96345000, items:[
        {no:1,uraian:'Lantai Utama Granit Tile 60×60 (atau setara)',sat:'m2',vol:'95,00',hsat:'380.000',total:'36.100.000'},
        {no:2,uraian:'Keramik Lantai KM (Anti Slip, atau setara)',sat:'m2',vol:'18,00',hsat:'270.000',total:'4.860.000'},
        {no:3,uraian:'Keramik Dinding KM (Full Height, atau setara)',sat:'m2',vol:'55,00',hsat:'300.000',total:'16.500.000'},
        {no:4,uraian:'Plint Lantai (h=8cm)',sat:'m1',vol:'120,00',hsat:'60.000',total:'7.200.000'},
        {no:5,uraian:'Batu Alam Fasad Eksterior (atau setara)',sat:'m2',vol:'35,00',hsat:'500.000',total:'17.500.000'},
        {no:6,uraian:'Waterproofing Area Basah Lantai KM',sat:'m2',vol:'26,00',hsat:'110.000',total:'2.860.000'},
        {no:7,uraian:'Lantai Teras / Carport (atau setara)',sat:'m2',vol:'45,30',hsat:'250.000',total:'11.325.000'},
      ]},
    { code:'H', name:'PEKERJAAN PENGECATAN', subtotal:42734000, items:[
        {no:1,uraian:'Cat Dinding Interior (premium atau setara, 3 lapis)',sat:'m2',vol:'450,00',hsat:'38.000',total:'17.100.000'},
        {no:2,uraian:'Cat Dinding Eksterior (weather protect atau setara)',sat:'m2',vol:'260,00',hsat:'55.000',total:'14.300.000'},
        {no:3,uraian:'Cat Plafon Gypsum (standar, 2 lapis)',sat:'m2',vol:'135,00',hsat:'32.000',total:'4.320.000'},
        {no:4,uraian:'Coating Batu Alam Exterior',sat:'m2',vol:'35,00',hsat:'140.000',total:'4.900.000'},
        {no:5,uraian:'Coating Ornamen Kayu Fasad',sat:'m2',vol:'15,10',hsat:'140.000',total:'2.114.000'},
      ]},
    { code:'I', name:'PEKERJAAN SANITAIR & PLUMBING', subtotal:47675000, note:'Ref: Dokumen MEP Evara Selatan', items:[
        {no:1,uraian:'Pipa Air Bersih PPR PN-10 (atau setara)',sat:'btg',vol:'35,00',hsat:'95.000',total:'3.325.000'},
        {no:2,uraian:'Pipa Air Kotor PVC AW (atau setara)',sat:'btg',vol:'25,00',hsat:'120.000',total:'3.000.000'},
        {no:3,uraian:'Fitting & Aksesoris Pipa',sat:'lot',vol:'1,00',hsat:'1.500.000',total:'1.500.000'},
        {no:4,uraian:'Bak Kontrol & Pipa Hujan PVC',sat:'ttk',vol:'4,00',hsat:'400.000',total:'1.600.000'},
        {no:5,uraian:'Closet Duduk Keramik (atau setara)',sat:'unit',vol:'3,00',hsat:'2.500.000',total:'7.500.000'},
        {no:6,uraian:'Shower Set (atau setara)',sat:'unit',vol:'2,00',hsat:'3.500.000',total:'7.000.000'},
        {no:7,uraian:'Wastafel + Kran Mixer + Cermin',sat:'set',vol:'3,00',hsat:'2.800.000',total:'8.400.000'},
        {no:8,uraian:'Floor Drain SS + Toilet Jet Shower',sat:'set',vol:'3,00',hsat:'750.000',total:'2.250.000'},
        {no:9,uraian:'Roof Tank Air 1000L (atau setara)',sat:'unit',vol:'1,00',hsat:'2.800.000',total:'2.800.000'},
        {no:10,uraian:'Pompa Dorong Booster (atau setara)',sat:'unit',vol:'1,00',hsat:'2.800.000',total:'2.800.000'},
        {no:11,uraian:'Instalasi Pipa AC & Drain AC',sat:'ttk',vol:'5,00',hsat:'800.000',total:'4.000.000'},
        {no:12,uraian:'Septic Tank Biofilter + Sumur Resapan',sat:'unit',vol:'1,00',hsat:'3.500.000',total:'3.500.000'},
      ]},
    { code:'J', name:'PEKERJAAN ELEKTRIKAL & TATA UDARA', subtotal:61305000, note:'Ref: Dokumen MEP Evara Selatan', items:[
        {no:1,uraian:'Kabel NYM 3×2.5mm (standar SNI atau setara)',sat:'roll',vol:'4,00',hsat:'1.200.000',total:'4.800.000'},
        {no:2,uraian:'Kabel NYM 2×1.5mm (standar SNI atau setara)',sat:'roll',vol:'3,00',hsat:'800.000',total:'2.400.000'},
        {no:3,uraian:'Pipa Conduit PVC 20mm (atau setara)',sat:'btg',vol:'60,00',hsat:'18.000',total:'1.080.000'},
        {no:4,uraian:'T-Doos / In-Doos',sat:'pcs',vol:'60,00',hsat:'5.000',total:'300.000'},
        {no:5,uraian:'Panel Utama (MCB Box 12 Way, atau setara)',sat:'set',vol:'1,00',hsat:'3.200.000',total:'3.200.000'},
        {no:6,uraian:'Titik Lampu Dalam (Downlight LED atau setara)',sat:'ttk',vol:'45,00',hsat:'220.000',total:'9.900.000'},
        {no:7,uraian:'Titik Lampu Luar (Spotlight IP65 atau setara)',sat:'ttk',vol:'15,00',hsat:'380.000',total:'5.700.000'},
        {no:8,uraian:'Saklar & Stop Kontak (atau setara)',sat:'ttk',vol:'55,00',hsat:'165.000',total:'9.075.000'},
        {no:9,uraian:'Lampu Strip LED (Indirect Ceiling)',sat:'m1',vol:'40,00',hsat:'120.000',total:'4.800.000'},
        {no:10,uraian:'Titik Kabel Data / LAN (CAT6 atau setara)',sat:'ttk',vol:'4,00',hsat:'500.000',total:'2.000.000'},
        {no:11,uraian:'Titik Antena TV + Kabel Coaxial',sat:'ttk',vol:'3,00',hsat:'350.000',total:'1.050.000'},
        {no:12,uraian:'Pemasangan Titik Arde / Grounding (< 2 ohm)',sat:'unit',vol:'1,00',hsat:'2.800.000',total:'2.800.000'},
        {no:13,uraian:'Unit AC Split 1 PK Inverter (atau setara)',sat:'unit',vol:'1,00',hsat:'4.200.000',total:'4.200.000'},
        {no:14,uraian:'Unit AC Split 1/2 PK Inverter (atau setara)',sat:'unit',vol:'2,00',hsat:'3.500.000',total:'7.000.000'},
        {no:15,uraian:'Pipa Freon, Kabel, Braket, Pipa Drain AC',sat:'ttk',vol:'3,00',hsat:'1.000.000',total:'3.000.000'},
      ]},
  ],
  utara: [
    { code:'A', name:'PEKERJAAN PERSIAPAN', subtotal:27675000, items:[
        {no:1,uraian:'Pembersihan lahan awal & perataan',sat:'ls',vol:'1,00',hsat:'3.500.000',total:'3.500.000'},
        {no:2,uraian:'Pengukuran & Pemasangan Bowplank',sat:'m1',vol:'49,00',hsat:'75.000',total:'3.675.000'},
        {no:3,uraian:'Direksi Keet & Gudang Material',sat:'ls',vol:'1,00',hsat:'8.000.000',total:'8.000.000'},
        {no:4,uraian:'Penyediaan Air & Listrik Kerja',sat:'ls',vol:'1,00',hsat:'5.000.000',total:'5.000.000'},
        {no:5,uraian:'Asuransi CAR & BPJS TK',sat:'ls',vol:'1,00',hsat:'7.500.000',total:'7.500.000'},
      ]},
    { code:'B', name:'PEKERJAAN TANAH DAN PONDASI', subtotal:72115000, note:'Ref: Dokumen Struktur — Strauss Pile / Footplat', items:[
        {no:1,uraian:'Galian tanah pondasi footplat & tie beam',sat:'m3',vol:'75,00',hsat:'85.000',total:'6.375.000'},
        {no:2,uraian:'Pengeboran Strauss Pile ø30cm, kedalaman 6m',sat:'m1',vol:'120,00',hsat:'175.000',total:'21.000.000'},
        {no:3,uraian:'Urugan pasir bawah pondasi & tie beam (t=5cm)',sat:'m3',vol:'5,80',hsat:'250.000',total:'1.450.000'},
        {no:4,uraian:'Lantai kerja (Lean Concrete) bawah pondasi',sat:'m3',vol:'3,50',hsat:'850.000',total:'2.975.000'},
        {no:5,uraian:'Pondasi Strauss Pile (Beton K-300, besi ulir)',sat:'m3',vol:'9,20',hsat:'2.500.000',total:'23.000.000'},
        {no:6,uraian:'Pondasi Footplat (Beton K-300)',sat:'m3',vol:'13,00',hsat:'950.000',total:'12.350.000'},
        {no:7,uraian:'Pembesian Footplat (Besi Ulir standar SNI)',sat:'kg',vol:'310,00',hsat:'14.000',total:'4.340.000'},
        {no:8,uraian:'Bekisting Pondasi',sat:'m2',vol:'6,25',hsat:'100.000',total:'625.000'},
      ]},
    { code:'C', name:'PEKERJAAN STRUKTUR ATAS (BETON K-250/300)', subtotal:167995000, items:[
        {no:1,uraian:'Tie Beam / Slog (Beton, Bekisting, Pembesian)',sat:'m3',vol:'6,10',hsat:'3.800.000',total:'23.180.000'},
        {no:2,uraian:'Kolom Utama (Dim. 15×30 / 15×40)',sat:'m3',vol:'7,60',hsat:'4.200.000',total:'31.920.000'},
        {no:3,uraian:'Kolom Praktis (15×15)',sat:'m1',vol:'160,00',hsat:'65.000',total:'10.400.000'},
        {no:4,uraian:'Balok Lantai 2 (Dim. 20×40 / 15×30)',sat:'m3',vol:'8,50',hsat:'4.500.000',total:'38.250.000'},
        {no:5,uraian:'Plat Lantai 2 (t=12cm, inc. multiplek & scaffolding)',sat:'m2',vol:'57,90',hsat:'750.000',total:'43.425.000'},
        {no:6,uraian:'Plat Atap Dak Beton (Area Terbatas)',sat:'m2',vol:'11,20',hsat:'800.000',total:'8.960.000'},
        {no:7,uraian:'Ring Balok Keliling (Beton K-250)',sat:'m3',vol:'2,20',hsat:'3.800.000',total:'8.360.000'},
        {no:8,uraian:'Tangga Beton Utama',sat:'unit',vol:'1,00',hsat:'3.500.000',total:'3.500.000'},
      ]},
    { code:'D', name:'PEKERJAAN PASANGAN DAN PLESTERAN', subtotal:117740000, items:[
        {no:1,uraian:'Pasangan Batu Bata Ringan (Hebel 10cm atau setara)',sat:'m2',vol:'380,00',hsat:'110.000',total:'41.800.000'},
        {no:2,uraian:'Plesteran Dinding (1:4, t=15mm)',sat:'m2',vol:'760,00',hsat:'55.000',total:'41.800.000'},
        {no:3,uraian:'Acian Dinding Interior & Eksterior',sat:'m2',vol:'760,00',hsat:'30.000',total:'22.800.000'},
        {no:4,uraian:'Tali Air Fasade & Sudutan',sat:'m1',vol:'130,00',hsat:'18.000',total:'2.340.000'},
        {no:5,uraian:'Batu Alam Panel Utama (atau setara, t=3cm)',sat:'m2',vol:'10,00',hsat:'500.000',total:'5.000.000'},
        {no:6,uraian:'Roster Beton Cetak (Fasad Top, 20×20cm)',sat:'m2',vol:'4,00',hsat:'300.000',total:'1.200.000'},
        {no:7,uraian:'Ornamen Fasad GRC/Kayu (profil custom)',sat:'set',vol:'1,00',hsat:'2.800.000',total:'2.800.000'},
      ]},
    { code:'E', name:'PEKERJAAN KUSEN, PINTU, & JENDELA', subtotal:98180000, note:'Evara Utara: 2 kamar tidur, kuantitas kusen & handle lebih sedikit.', items:[
        {no:1,uraian:'Kusen + Daun Pintu Utama (Solid Wood atau setara)',sat:'unit',vol:'1,00',hsat:'5.000.000',total:'5.000.000'},
        {no:2,uraian:'Kusen + Daun Pintu Kamar (Hollow Wood atau setara)',sat:'unit',vol:'2,00',hsat:'3.200.000',total:'6.400.000'},
        {no:3,uraian:'Kusen + Daun Pintu KM (Alumunium atau setara)',sat:'unit',vol:'2,00',hsat:'2.200.000',total:'4.400.000'},
        {no:4,uraian:'Jendela Alumunium Powder Coat + Kaca 5mm',sat:'m2',vol:'31,00',hsat:'1.500.000',total:'46.500.000'},
        {no:5,uraian:'Jendela Sliding Kaca Besar (Area Living)',sat:'set',vol:'2,00',hsat:'11.500.000',total:'23.000.000'},
        {no:6,uraian:'Engsel Pintu Utama (Heavy Duty SS atau setara)',sat:'pcs',vol:'4,00',hsat:'180.000',total:'720.000'},
        {no:7,uraian:'Smart Door Lock Utama (digital lock standar)',sat:'unit',vol:'1,00',hsat:'2.500.000',total:'2.500.000'},
        {no:8,uraian:'Handle Kunci Kamar (Mortise Lock atau setara)',sat:'set',vol:'4,00',hsat:'450.000',total:'1.800.000'},
        {no:9,uraian:'Engsel Pintu Kamar & KM (SS atau setara)',sat:'pcs',vol:'12,00',hsat:'55.000',total:'660.000'},
        {no:10,uraian:'Aksesoris Jendela (Rambuncis, Friction Stay)',sat:'set',vol:'16,00',hsat:'450.000',total:'7.200.000'},
      ]},
    { code:'F', name:'PEKERJAAN ATAP DAN PLAFON', subtotal:78300000, items:[
        {no:1,uraian:'Rangka Atap Baja Ringan (G550 atau setara)',sat:'m2',vol:'68,00',hsat:'185.000',total:'12.580.000'},
        {no:2,uraian:'Penutup Atap Genteng Flat Beton (atau setara)',sat:'m2',vol:'68,00',hsat:'220.000',total:'14.960.000'},
        {no:3,uraian:'Nok Atap',sat:'m1',vol:'15,00',hsat:'165.000',total:'2.475.000'},
        {no:4,uraian:'Lisplank Fiber Semen 20cm',sat:'m1',vol:'30,00',hsat:'125.000',total:'3.750.000'},
        {no:5,uraian:'Talang Air Zincalume (inc. downpipe)',sat:'m1',vol:'16,00',hsat:'130.000',total:'2.080.000'},
        {no:6,uraian:'Plafon Gypsum 9mm + Rangka Hollow',sat:'m2',vol:'98,00',hsat:'160.000',total:'15.680.000'},
        {no:7,uraian:'Plafon Water Resistance (Area Basah)',sat:'m2',vol:'22,00',hsat:'200.000',total:'4.400.000'},
        {no:8,uraian:'Drop Ceiling Set & Shadow Line',sat:'m1',vol:'75,00',hsat:'85.000',total:'6.375.000'},
        {no:9,uraian:'Waterproofing Dak Atap & Kanopi (atau setara)',sat:'m2',vol:'40,00',hsat:'400.000',total:'16.000.000'},
      ]},
    { code:'G', name:'PEKERJAAN LANTAI DAN PELAPIS DINDING', subtotal:83760000, items:[
        {no:1,uraian:'Lantai Utama Granit Tile 60×60 (atau setara)',sat:'m2',vol:'85,00',hsat:'380.000',total:'32.300.000'},
        {no:2,uraian:'Keramik Lantai KM (Anti Slip, atau setara)',sat:'m2',vol:'15,00',hsat:'270.000',total:'4.050.000'},
        {no:3,uraian:'Keramik Dinding KM (Full Height, atau setara)',sat:'m2',vol:'45,00',hsat:'300.000',total:'13.500.000'},
        {no:4,uraian:'Plint Lantai (h=8cm)',sat:'m1',vol:'110,00',hsat:'60.000',total:'6.600.000'},
        {no:5,uraian:'Batu Alam Fasad Eksterior (atau setara)',sat:'m2',vol:'30,00',hsat:'500.000',total:'15.000.000'},
        {no:6,uraian:'Waterproofing Area Basah Lantai KM',sat:'m2',vol:'21,00',hsat:'110.000',total:'2.310.000'},
        {no:7,uraian:'Lantai Teras / Carport (atau setara)',sat:'m2',vol:'40,00',hsat:'250.000',total:'10.000.000'},
      ]},
    { code:'H', name:'PEKERJAAN PENGECATAN', subtotal:38826000, items:[
        {no:1,uraian:'Cat Dinding Interior (premium atau setara, 3 lapis)',sat:'m2',vol:'410,00',hsat:'38.000',total:'15.580.000'},
        {no:2,uraian:'Cat Dinding Eksterior (weather protect atau setara)',sat:'m2',vol:'230,00',hsat:'55.000',total:'12.650.000'},
        {no:3,uraian:'Cat Plafon Gypsum (standar, 2 lapis)',sat:'m2',vol:'115,00',hsat:'32.000',total:'3.680.000'},
        {no:4,uraian:'Coating Batu Alam Exterior',sat:'m2',vol:'30,00',hsat:'140.000',total:'4.200.000'},
        {no:5,uraian:'Coating Ornamen Kayu Fasad',sat:'m2',vol:'19,40',hsat:'140.000',total:'2.716.000'},
      ]},
    { code:'I', name:'PEKERJAAN SANITAIR & PLUMBING', subtotal:47675000, note:'Gambar MEP menunjukkan 4 titik wet area meskipun 2 kamar tidur.', items:[
        {no:1,uraian:'Pipa Air Bersih PPR PN-10 (atau setara)',sat:'btg',vol:'35,00',hsat:'95.000',total:'3.325.000'},
        {no:2,uraian:'Pipa Air Kotor PVC AW (atau setara)',sat:'btg',vol:'25,00',hsat:'120.000',total:'3.000.000'},
        {no:3,uraian:'Fitting & Aksesoris Pipa',sat:'lot',vol:'1,00',hsat:'1.500.000',total:'1.500.000'},
        {no:4,uraian:'Bak Kontrol & Pipa Hujan PVC',sat:'ttk',vol:'4,00',hsat:'400.000',total:'1.600.000'},
        {no:5,uraian:'Closet Duduk Keramik (atau setara)',sat:'unit',vol:'3,00',hsat:'2.500.000',total:'7.500.000'},
        {no:6,uraian:'Shower Set (atau setara)',sat:'unit',vol:'2,00',hsat:'3.500.000',total:'7.000.000'},
        {no:7,uraian:'Wastafel + Kran Mixer + Cermin',sat:'set',vol:'3,00',hsat:'2.800.000',total:'8.400.000'},
        {no:8,uraian:'Floor Drain SS + Toilet Jet Shower',sat:'set',vol:'3,00',hsat:'750.000',total:'2.250.000'},
        {no:9,uraian:'Roof Tank Air 1000L (atau setara)',sat:'unit',vol:'1,00',hsat:'2.800.000',total:'2.800.000'},
        {no:10,uraian:'Pompa Dorong Booster (atau setara)',sat:'unit',vol:'1,00',hsat:'2.800.000',total:'2.800.000'},
        {no:11,uraian:'Instalasi Pipa AC & Drain AC',sat:'ttk',vol:'5,00',hsat:'800.000',total:'4.000.000'},
        {no:12,uraian:'Septic Tank Biofilter + Sumur Resapan',sat:'unit',vol:'1,00',hsat:'3.500.000',total:'3.500.000'},
      ]},
    { code:'J', name:'PEKERJAAN ELEKTRIKAL & TATA UDARA', subtotal:50435000, note:'Volume disesuaikan untuk 2 kamar tidur.', items:[
        {no:1,uraian:'Kabel NYM 3×2.5mm (standar SNI atau setara)',sat:'roll',vol:'4,00',hsat:'1.200.000',total:'4.800.000'},
        {no:2,uraian:'Kabel NYM 2×1.5mm (standar SNI atau setara)',sat:'roll',vol:'3,00',hsat:'800.000',total:'2.400.000'},
        {no:3,uraian:'Pipa Conduit PVC 20mm (atau setara)',sat:'btg',vol:'50,00',hsat:'18.000',total:'900.000'},
        {no:4,uraian:'T-Doos / In-Doos',sat:'pcs',vol:'50,00',hsat:'5.000',total:'250.000'},
        {no:5,uraian:'Panel Utama (MCB Box 12 Way, atau setara)',sat:'set',vol:'1,00',hsat:'3.200.000',total:'3.200.000'},
        {no:6,uraian:'Titik Lampu Dalam (Downlight LED atau setara)',sat:'ttk',vol:'38,00',hsat:'220.000',total:'8.360.000'},
        {no:7,uraian:'Titik Lampu Luar (Spotlight IP65 atau setara)',sat:'ttk',vol:'12,00',hsat:'380.000',total:'4.560.000'},
        {no:8,uraian:'Saklar & Stop Kontak (atau setara)',sat:'ttk',vol:'45,00',hsat:'165.000',total:'7.425.000'},
        {no:9,uraian:'Lampu Strip LED (Indirect Ceiling)',sat:'m1',vol:'32,00',hsat:'120.000',total:'3.840.000'},
        {no:10,uraian:'Titik Kabel Data / LAN (CAT6 atau setara)',sat:'ttk',vol:'3,00',hsat:'500.000',total:'1.500.000'},
        {no:11,uraian:'Titik Antena TV + Kabel Coaxial',sat:'ttk',vol:'2,00',hsat:'350.000',total:'700.000'},
        {no:12,uraian:'Pemasangan Titik Arde / Grounding (< 2 ohm)',sat:'unit',vol:'1,00',hsat:'2.800.000',total:'2.800.000'},
        {no:13,uraian:'Unit AC Split 1 PK Inverter (atau setara)',sat:'unit',vol:'1,00',hsat:'4.200.000',total:'4.200.000'},
        {no:14,uraian:'Unit AC Split 1/2 PK Inverter (atau setara)',sat:'unit',vol:'1,00',hsat:'3.500.000',total:'3.500.000'},
        {no:15,uraian:'Pipa Freon, Kabel, Braket, Pipa Drain AC',sat:'ttk',vol:'2,00',hsat:'1.000.000',total:'2.000.000'},
      ]},
  ]
};

// ─── RENDER ───
function renderSummary(id, data, totalK, ppn, grand) {
  const tbody = document.getElementById(id);
  let html = '';
  data.forEach(r => {
    const barW = Math.round(r.weight / 22 * 100);
    html += `<tr><td class="code-col">${r.code}</td><td>${r.name}</td><td class="currency" style="text-align:right">${rp(r.total)}</td><td><div class="weight-bar-wrap"><div class="weight-bar"><div class="weight-bar-fill" style="width:${barW}%"></div></div><span class="weight-col">${r.weight.toFixed(1)}%</span></div></td></tr>`;
  });
  html += `<tr class="total-row"><td colspan="2"><strong>TOTAL ESTIMASI BIAYA KONSTRUKSI</strong></td><td class="currency" style="text-align:right"><strong>${rp(totalK)}</strong></td><td></td></tr><tr class="tax-row"><td colspan="2">PPN 11%</td><td class="currency" style="text-align:right">${rp(ppn)}</td><td></td></tr><tr class="grand-row"><td colspan="2"><strong>GRAND TOTAL (Inc. PPN)</strong></td><td class="currency" style="text-align:right"><strong>${rp(grand)}</strong></td><td></td></tr>`;
  tbody.innerHTML = html;
}

function renderBoq(containerId, data) {
  const container = document.getElementById(containerId);
  let html = '';
  data.forEach((section, idx) => {
    const sectionId = `${containerId}-sec-${idx}`;
    html += `<div class="boq-section"><div class="boq-section-header" onclick="toggleSection('${sectionId}', this)"><span class="boq-section-letter">${section.code}</span><span class="boq-section-name">${section.name}</span><span class="boq-section-total currency">${rp(section.subtotal)}</span><span class="chevron">▼</span></div><div class="boq-table-wrap" id="${sectionId}"><table class="boq-table"><thead><tr><th style="width:32px">No</th><th>Uraian Pekerjaan</th><th style="width:44px" class="right">Sat.</th><th style="width:64px" class="right">Vol.</th><th style="width:130px" class="right">Harga Satuan</th><th style="width:140px" class="right">Total Harga</th></tr></thead><tbody>${section.items.map(i=>`<tr><td class="no-col center">${i.no}</td><td>${i.uraian}</td><td class="right muted">${i.sat}</td><td class="right muted">${i.vol}</td><td class="right currency">${i.hsat}</td><td class="right currency">${i.total}</td></tr>`).join('')}<tr class="boq-subtotal"><td colspan="5" style="text-align:right;padding-right:16px;font-weight:600">Subtotal ${section.code}</td><td class="right currency">${rp(section.subtotal)}</td></tr></tbody></table>${section.note?`<div class="boq-note">📌 ${section.note}</div>`:''}</div></div>`;
  });
  container.innerHTML = html;
}

function renderCompare() {
  const tbody = document.getElementById('compare-table');
  const s = summaryData.selatan, u = summaryData.utara;
  let html = '';
  for (let i = 0; i < s.length; i++) {
    const diff = s[i].total - u[i].total;
    const diffStr = diff > 0 ? `<span class="diff-plus">+${rp(diff)}</span>` : `<span class="diff-minus">${rp(diff)}</span>`;
    html += `<tr><td style="color:var(--rust);font-weight:600">${s[i].code}</td><td>${s[i].name}</td><td class="currency" style="text-align:right">${rp(s[i].total)}</td><td class="currency" style="text-align:right">${rp(u[i].total)}</td><td style="text-align:right">${diffStr}</td></tr>`;
  }
  const sT=878959000,uT=782701000,sG=975644490,uG=868798110;
  html += `<tr style="background:var(--gold-pale)"><td colspan="2" style="font-weight:600;color:var(--ink)">TOTAL KONSTRUKSI</td><td class="currency" style="text-align:right;font-weight:600">${rp(sT)}</td><td class="currency" style="text-align:right;font-weight:600">${rp(uT)}</td><td style="text-align:right"><span class="diff-plus">+${rp(sT-uT)}</span></td></tr><tr class="compare-grand"><td colspan="2">GRAND TOTAL (Inc. PPN 11%)</td><td class="currency" style="text-align:right">${rp(sG)}</td><td class="currency" style="text-align:right">${rp(uG)}</td><td style="text-align:right"><span class="diff-plus">+${rp(sG-uG)}</span></td></tr>`;
  tbody.innerHTML = html;
}

window.toggleSection = function(id, header) { document.getElementById(id).classList.toggle('collapsed'); header.classList.toggle('collapsed'); }
window.switchTab = function(tab) { document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active')); document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); document.getElementById('tab-'+tab).classList.add('active'); event.target.classList.add('active'); }

renderSummary('summary-selatan', summaryData.selatan, 878959000, 96685490, 975644490);
renderSummary('summary-utara', summaryData.utara, 782701000, 86097110, 868798110);
renderBoq('boq-selatan', boqData.selatan);
renderBoq('boq-utara', boqData.utara);
renderCompare();
