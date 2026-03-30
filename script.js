// ─── DATA ───
const rp = v => 'Rp ' + v.toLocaleString('id-ID');

const summaryData = {
  selatan: [
    { code:'A', name:'PEKERJAAN PERSIAPAN', total:43174209, weight:3.2 },
    { code:'B', name:'PEKERJAAN TANAH DAN PONDASI', total:127212321, weight:9.4 },
    { code:'C', name:'PEKERJAAN STRUKTUR ATAS', total:289846693, weight:21.5 },
    { code:'D', name:'PEKERJAAN PASANGAN DAN PLESTERAN', total:200021312, weight:14.8 },
    { code:'E', name:'PEKERJAAN KUSEN, PINTU, & JENDELA', total:171921622, weight:12.7 },
    { code:'F', name:'PEKERJAAN ATAP DAN PLAFON', total:136307702, weight:10.1 },
    { code:'G', name:'PEKERJAAN LANTAI DAN PELAPIS DINDING', total:147897561, weight:11.0 },
    { code:'H', name:'PEKERJAAN PENGECATAN', total:65600241, weight:4.9 },
    { code:'I', name:'PEKERJAAN SANITAIR & PLUMBING', total:73185081, weight:5.4 },
    { code:'J', name:'PEKERJAAN ELEKTRIKAL & TATA UDARA', total:94108258, weight:7.0 },
  ],
  utara: [
    { code:'A', name:'PEKERJAAN PERSIAPAN', total:43144587, weight:3.5 },
    { code:'B', name:'PEKERJAAN TANAH DAN PONDASI', total:112425361, weight:9.2 },
    { code:'C', name:'PEKERJAAN STRUKTUR ATAS', total:261899728, weight:21.6 },
    { code:'D', name:'PEKERJAAN PASANGAN DAN PLESTERAN', total:183553522, weight:15.0 },
    { code:'E', name:'PEKERJAAN KUSEN, PINTU, & JENDELA', total:153060008, weight:12.5 },
    { code:'F', name:'PEKERJAAN ATAP DAN PLAFON', total:122067622, weight:10.0 },
    { code:'G', name:'PEKERJAAN LANTAI DAN PELAPIS DINDING', total:130579612, weight:10.7 },
    { code:'H', name:'PEKERJAAN PENGECATAN', total:60528704, weight:5.0 },
    { code:'I', name:'PEKERJAAN SANITAIR & PLUMBING', total:74324054, weight:6.1 },
    { code:'J', name:'PEKERJAAN ELEKTRIKAL & TATA UDARA', total:78626802, weight:6.4 },
  ]
};

const boqData = {
  selatan: [
    { code:'A', name:'PEKERJAAN PERSIAPAN', subtotal:43174209, items:[
        {no:1,uraian:'Pembersihan lahan awal & perataan',sat:'ls',vol:'1,00',hsat:'5.372.790',total:'5.372.790'},
        {no:2,uraian:'Pengukuran & Pemasangan Bowplank',sat:'m1',vol:'55,00',hsat:'115.131',total:'6.332.205'},
        {no:3,uraian:'Direksi Keet & Gudang Material',sat:'ls',vol:'1,00',hsat:'12.280.664',total:'12.280.664'},
        {no:4,uraian:'Penyediaan Air & Listrik Kerja',sat:'ls',vol:'1,00',hsat:'7.675.415',total:'7.675.415'},
        {no:5,uraian:'Asuransi CAR & BPJS TK',sat:'ls',vol:'1,00',hsat:'11.513.135',total:'11.513.135'},
      ]},
    { code:'B', name:'PEKERJAAN TANAH DAN PONDASI', subtotal:127212321, note:'Ref: Dokumen Struktur — Strauss Pile / Footplat', items:[
        {no:1,uraian:'Galian tanah pondasi footplat & tie beam',sat:'m3',vol:'85,00',hsat:'130.482',total:'11.090.970'},
        {no:2,uraian:'Pengeboran Strauss Pile ø30cm, kedalaman 6m',sat:'m1',vol:'144,00',hsat:'268.640',total:'38.684.160'},
        {no:3,uraian:'Urugan pasir bawah pondasi & tie beam (t=5cm)',sat:'m3',vol:'6,50',hsat:'383.771',total:'2.494.512'},
        {no:4,uraian:'Lantai kerja (Lean Concrete) bawah pondasi',sat:'m3',vol:'4,20',hsat:'1.304.821',total:'5.480.248'},
        {no:5,uraian:'Pondasi Strauss Pile (Beton K-300, besi ulir)',sat:'m3',vol:'10,15',hsat:'3.837.707',total:'38.952.726'},
        {no:6,uraian:'Pondasi Footplat (Beton K-300)',sat:'m3',vol:'14,50',hsat:'1.458.329',total:'21.145.771'},
        {no:7,uraian:'Pembesian Footplat (Besi Ulir standar SNI)',sat:'kg',vol:'350,00',hsat:'21.491',total:'7.521.850'},
        {no:8,uraian:'Bekisting Pondasi',sat:'m2',vol:'12,00',hsat:'153.507',total:'1.842.084'},
      ]},
    { code:'C', name:'PEKERJAAN STRUKTUR ATAS (BETON K-250/300)', subtotal:289846693, items:[
        {no:1,uraian:'Tie Beam / Slog (Beton, Bekisting, Pembesian)',sat:'m3',vol:'6,80',hsat:'5.833.315',total:'39.666.542'},
        {no:2,uraian:'Kolom Utama (Dim. 15×30 / 15×40)',sat:'m3',vol:'8,50',hsat:'6.447.349',total:'54.802.467'},
        {no:3,uraian:'Kolom Praktis (15×15)',sat:'m1',vol:'180,00',hsat:'99.780',total:'17.960.400'},
        {no:4,uraian:'Balok Lantai 2 (Dim. 20×40 / 15×30)',sat:'m3',vol:'9,50',hsat:'6.907.873',total:'65.624.794'},
        {no:5,uraian:'Plat Lantai 2 (t=12cm, inc. multiplek & scaffolding)',sat:'m2',vol:'61,10',hsat:'1.151.312',total:'70.345.163'},
        {no:6,uraian:'Plat Atap Dak Beton (Area Terbatas)',sat:'m2',vol:'15,00',hsat:'1.228.066',total:'18.420.990'},
        {no:7,uraian:'Ring Balok Keliling (Beton K-250)',sat:'m3',vol:'2,50',hsat:'5.833.315',total:'14.583.288'},
        {no:8,uraian:'Tangga Beton Utama',sat:'unit',vol:'1,00',hsat:'8.443.049',total:'8.443.049'},
      ]},
    { code:'D', name:'PEKERJAAN PASANGAN DAN PLESTERAN', subtotal:200021312, items:[
        {no:1,uraian:'Pasangan Batu Bata Ringan (Hebel 10cm atau setara)',sat:'m2',vol:'420,00',hsat:'168.859',total:'70.920.780'},
        {no:2,uraian:'Plesteran Dinding (1:4, t=15mm)',sat:'m2',vol:'840,00',hsat:'84.430',total:'70.921.200'},
        {no:3,uraian:'Acian Dinding Interior & Eksterior',sat:'m2',vol:'840,00',hsat:'46.052',total:'38.683.680'},
        {no:4,uraian:'Tali Air Fasade & Sudutan',sat:'m1',vol:'150,00',hsat:'27.631',total:'4.144.650'},
        {no:5,uraian:'Batu Alam Panel Utama (atau setara, t=3cm)',sat:'m2',vol:'12,00',hsat:'767.541',total:'9.210.492'},
        {no:6,uraian:'Roster Beton Cetak (Fasad Top, 20×20cm)',sat:'m2',vol:'5,00',hsat:'460.525',total:'2.302.625'},
        {no:7,uraian:'Ornamen Fasad GRC/Kayu (profil custom)',sat:'set',vol:'1,00',hsat:'3.837.885',total:'3.837.885'},
      ]},
    { code:'E', name:'PEKERJAAN KUSEN, PINTU, & JENDELA', subtotal:171921622, items:[
        {no:1,uraian:'Kusen + Daun Pintu Utama (Solid Wood atau setara)',sat:'unit',vol:'1,00',hsat:'7.675.415',total:'7.675.415'},
        {no:2,uraian:'Kusen + Daun Pintu Kamar (Hollow Wood atau setara)',sat:'unit',vol:'3,00',hsat:'4.912.266',total:'14.736.798'},
        {no:3,uraian:'Kusen + Daun Pintu KM (Alumunium atau setara)',sat:'unit',vol:'3,00',hsat:'3.377.183',total:'10.131.549'},
        {no:4,uraian:'Jendela Alumunium Powder Coat + Kaca 5mm',sat:'m2',vol:'35,00',hsat:'2.302.624',total:'80.591.840'},
        {no:5,uraian:'Jendela Sliding Kaca Besar (Area Living)',sat:'set',vol:'2,00',hsat:'17.653.454',total:'35.306.908'},
        {no:6,uraian:'Engsel Pintu Utama (Heavy Duty SS atau setara)',sat:'pcs',vol:'4,00',hsat:'276.315',total:'1.105.260'},
        {no:7,uraian:'Smart Door Lock Utama (digital lock standar)',sat:'unit',vol:'1,00',hsat:'3.837.707',total:'3.837.707'},
        {no:8,uraian:'Handle Kunci Kamar (Mortise Lock atau setara)',sat:'set',vol:'5,00',hsat:'690.787',total:'3.453.935'},
        {no:9,uraian:'Engsel Pintu Kamar & KM (SS atau setara)',sat:'pcs',vol:'15,00',hsat:'84.430',total:'1.266.450'},
        {no:10,uraian:'Aksesoris Jendela (Rambuncis, Friction Stay)',sat:'set',vol:'20,00',hsat:'690.788',total:'13.815.760'},
      ]},
    { code:'F', name:'PEKERJAAN ATAP DAN PLAFON', subtotal:136307702, items:[
        {no:1,uraian:'Rangka Atap Baja Ringan (G550 atau setara)',sat:'m2',vol:'75,00',hsat:'283.990',total:'21.299.250'},
        {no:2,uraian:'Penutup Atap Genteng Flat Beton (atau setara)',sat:'m2',vol:'75,00',hsat:'337.718',total:'25.328.850'},
        {no:3,uraian:'Nok Atap',sat:'m1',vol:'18,00',hsat:'253.289',total:'4.559.202'},
        {no:4,uraian:'Lisplank Fiber Semen 20cm',sat:'m1',vol:'35,00',hsat:'191.885',total:'6.715.975'},
        {no:5,uraian:'Talang Air Zincalume (inc. downpipe)',sat:'m1',vol:'25,00',hsat:'199.561',total:'4.989.025'},
        {no:6,uraian:'Plafon Gypsum 9mm + Rangka Hollow',sat:'m2',vol:'110,00',hsat:'245.613',total:'27.017.430'},
        {no:7,uraian:'Plafon Water Resistance (Area Basah)',sat:'m2',vol:'25,00',hsat:'307.017',total:'7.675.425'},
        {no:8,uraian:'Drop Ceiling Set & Shadow Line',sat:'m1',vol:'85,00',hsat:'130.482',total:'11.090.970'},
        {no:9,uraian:'Waterproofing Dak Atap & Kanopi (atau setara)',sat:'m2',vol:'45,00',hsat:'614.035',total:'27.631.575'},
      ]},
    { code:'G', name:'PEKERJAAN LANTAI DAN PELAPIS DINDING', subtotal:147897561, items:[
        {no:1,uraian:'Lantai Utama Granit Tile 60×60 (atau setara)',sat:'m2',vol:'95,00',hsat:'583.332',total:'55.416.540'},
        {no:2,uraian:'Keramik Lantai KM (Anti Slip, atau setara)',sat:'m2',vol:'18,00',hsat:'414.472',total:'7.460.496'},
        {no:3,uraian:'Keramik Dinding KM (Full Height, atau setara)',sat:'m2',vol:'55,00',hsat:'460.525',total:'25.328.875'},
        {no:4,uraian:'Plint Lantai (h=8cm)',sat:'m1',vol:'120,00',hsat:'92.105',total:'11.052.600'},
        {no:5,uraian:'Batu Alam Fasad Eksterior (atau setara)',sat:'m2',vol:'35,00',hsat:'767.541',total:'26.863.935'},
        {no:6,uraian:'Waterproofing Area Basah Lantai KM',sat:'m2',vol:'26,00',hsat:'168.859',total:'4.390.334'},
        {no:7,uraian:'Lantai Teras / Carport (atau setara)',sat:'m2',vol:'45,30',hsat:'383.770',total:'17.384.781'},
      ]},
    { code:'H', name:'PEKERJAAN PENGECATAN', subtotal:65600241, items:[
        {no:1,uraian:'Cat Dinding Interior (premium atau setara, 3 lapis)',sat:'m2',vol:'450,00',hsat:'58.333',total:'26.249.850'},
        {no:2,uraian:'Cat Dinding Eksterior (weather protect atau setara)',sat:'m2',vol:'260,00',hsat:'84.430',total:'21.951.800'},
        {no:3,uraian:'Cat Plafon Gypsum (standar, 2 lapis)',sat:'m2',vol:'135,00',hsat:'49.123',total:'6.631.605'},
        {no:4,uraian:'Coating Batu Alam Exterior',sat:'m2',vol:'35,00',hsat:'214.912',total:'7.521.920'},
        {no:5,uraian:'Coating Ornamen Kayu Fasad',sat:'m2',vol:'15,10',hsat:'214.905',total:'3.245.066'},
      ]},
    { code:'I', name:'PEKERJAAN SANITAIR & PLUMBING', subtotal:73185081, note:'Ref: Dokumen MEP Evara Selatan', items:[
        {no:1,uraian:'Pipa Air Bersih PPR PN-10 (atau setara)',sat:'btg',vol:'35,00',hsat:'145.833',total:'5.104.155'},
        {no:2,uraian:'Pipa Air Kotor PVC AW (atau setara)',sat:'btg',vol:'25,00',hsat:'184.210',total:'4.605.250'},
        {no:3,uraian:'Fitting & Aksesoris Pipa',sat:'lot',vol:'1,00',hsat:'2.302.624',total:'2.302.624'},
        {no:4,uraian:'Bak Kontrol & Pipa Hujan PVC',sat:'ttk',vol:'4,00',hsat:'614.033',total:'2.456.132'},
        {no:5,uraian:'Closet Duduk Keramik (atau setara)',sat:'unit',vol:'3,00',hsat:'3.837.707',total:'11.513.121'},
        {no:6,uraian:'Shower Set (atau setara)',sat:'unit',vol:'2,00',hsat:'5.372.790',total:'10.745.580'},
        {no:7,uraian:'Wastafel + Kran Mixer + Cermin',sat:'set',vol:'3,00',hsat:'4.298.232',total:'12.894.696'},
        {no:8,uraian:'Floor Drain SS + Toilet Jet Shower',sat:'set',vol:'3,00',hsat:'1.151.312',total:'3.453.936'},
        {no:9,uraian:'Roof Tank Air 1000L (atau setara)',sat:'unit',vol:'1,00',hsat:'4.298.232',total:'4.298.232'},
        {no:10,uraian:'Pompa Dorong Booster (atau setara)',sat:'unit',vol:'1,00',hsat:'4.298.232',total:'4.298.232'},
        {no:11,uraian:'Instalasi Pipa AC & Drain AC',sat:'ttk',vol:'5,00',hsat:'1.228.066',total:'6.140.330'},
        {no:12,uraian:'Septic Tank Biofilter + Sumur Resapan',sat:'unit',vol:'1,00',hsat:'5.372.793',total:'5.372.793'},
      ]},
    { code:'J', name:'PEKERJAAN ELEKTRIKAL & TATA UDARA', subtotal:94108258, note:'Ref: Dokumen MEP Evara Selatan', items:[
        {no:1,uraian:'Kabel NYM 3×2.5mm (standar SNI atau setara)',sat:'roll',vol:'4,00',hsat:'1.842.100',total:'7.368.400'},
        {no:2,uraian:'Kabel NYM 2×1.5mm (standar SNI atau setara)',sat:'roll',vol:'3,00',hsat:'1.228.066',total:'3.684.198'},
        {no:3,uraian:'Pipa Conduit PVC 20mm (atau setara)',sat:'btg',vol:'60,00',hsat:'27.631',total:'1.657.860'},
        {no:4,uraian:'T-Doos / In-Doos',sat:'pcs',vol:'60,00',hsat:'7.675',total:'460.500'},
        {no:5,uraian:'Panel Utama (MCB Box 12 Way, atau setara)',sat:'set',vol:'1,00',hsat:'4.912.266',total:'4.912.266'},
        {no:6,uraian:'Titik Lampu Dalam (Downlight LED atau setara)',sat:'ttk',vol:'45,00',hsat:'337.718',total:'15.197.310'},
        {no:7,uraian:'Titik Lampu Luar (Spotlight IP65 atau setara)',sat:'ttk',vol:'15,00',hsat:'583.332',total:'8.749.980'},
        {no:8,uraian:'Saklar & Stop Kontak (atau setara)',sat:'ttk',vol:'55,00',hsat:'253.289',total:'13.930.895'},
        {no:9,uraian:'Lampu Strip LED (Indirect Ceiling)',sat:'m1',vol:'40,00',hsat:'184.210',total:'7.368.400'},
        {no:10,uraian:'Titik Kabel Data / LAN (CAT6 atau setara)',sat:'ttk',vol:'4,00',hsat:'767.541',total:'3.070.164'},
        {no:11,uraian:'Titik Antena TV + Kabel Coaxial',sat:'ttk',vol:'3,00',hsat:'537.279',total:'1.611.837'},
        {no:12,uraian:'Pemasangan Titik Arde / Grounding (< 2 ohm)',sat:'unit',vol:'1,00',hsat:'4.298.232',total:'4.298.232'},
        {no:13,uraian:'Unit AC Split 1 PK Inverter (atau setara)',sat:'unit',vol:'1,00',hsat:'6.447.349',total:'6.447.349'},
        {no:14,uraian:'Unit AC Split 1/2 PK Inverter (atau setara)',sat:'unit',vol:'2,00',hsat:'5.372.790',total:'10.745.580'},
        {no:15,uraian:'Pipa Freon, Kabel, Braket, Pipa Drain AC',sat:'ttk',vol:'3,00',hsat:'1.535.096',total:'4.605.287'},
      ]},
  ],
  utara: [
    { code:'A', name:'PEKERJAAN PERSIAPAN', subtotal:43144587, items:[
        {no:1,uraian:'Pembersihan lahan awal & perataan',sat:'ls',vol:'1,00',hsat:'5.456.407',total:'5.456.407'},
        {no:2,uraian:'Pengukuran & Pemasangan Bowplank',sat:'m1',vol:'49,00',hsat:'116.923',total:'5.729.227'},
        {no:3,uraian:'Direksi Keet & Gudang Material',sat:'ls',vol:'1,00',hsat:'12.471.787',total:'12.471.787'},
        {no:4,uraian:'Penyediaan Air & Listrik Kerja',sat:'ls',vol:'1,00',hsat:'7.794.867',total:'7.794.867'},
        {no:5,uraian:'Asuransi CAR & BPJS TK',sat:'ls',vol:'1,00',hsat:'11.692.299',total:'11.692.299'},
      ]},
    { code:'B', name:'PEKERJAAN TANAH DAN PONDASI', subtotal:112425361, note:'Ref: Dokumen Struktur — Strauss Pile / Footplat', items:[
        {no:1,uraian:'Galian tanah pondasi footplat & tie beam',sat:'m3',vol:'75,00',hsat:'132.513',total:'9.938.475'},
        {no:2,uraian:'Pengeboran Strauss Pile ø30cm, kedalaman 6m',sat:'m1',vol:'120,00',hsat:'272.820',total:'32.738.400'},
        {no:3,uraian:'Urugan pasir bawah pondasi & tie beam (t=5cm)',sat:'m3',vol:'5,80',hsat:'389.743',total:'2.260.509'},
        {no:4,uraian:'Lantai kerja (Lean Concrete) bawah pondasi',sat:'m3',vol:'3,50',hsat:'1.325.127',total:'4.637.945'},
        {no:5,uraian:'Pondasi Strauss Pile (Beton K-300, besi ulir)',sat:'m3',vol:'9,20',hsat:'3.897.433',total:'35.856.384'},
        {no:6,uraian:'Pondasi Footplat (Beton K-300)',sat:'m3',vol:'13,00',hsat:'1.481.025',total:'19.253.325'},
        {no:7,uraian:'Pembesian Footplat (Besi Ulir standar SNI)',sat:'kg',vol:'310,00',hsat:'21.826',total:'6.766.060'},
        {no:8,uraian:'Bekisting Pondasi',sat:'m2',vol:'6,25',hsat:'155.882',total:'974.263'},
      ]},
    { code:'C', name:'PEKERJAAN STRUKTUR ATAS (BETON K-250/300)', subtotal:261899728, items:[
        {no:1,uraian:'Tie Beam / Slog (Beton, Bekisting, Pembesian)',sat:'m3',vol:'6,10',hsat:'5.924.099',total:'36.137.004'},
        {no:2,uraian:'Kolom Utama (Dim. 15×30 / 15×40)',sat:'m3',vol:'7,60',hsat:'6.547.688',total:'49.762.429'},
        {no:3,uraian:'Kolom Praktis (15×15)',sat:'m1',vol:'160,00',hsat:'101.333',total:'16.213.280'},
        {no:4,uraian:'Balok Lantai 2 (Dim. 20×40 / 15×30)',sat:'m3',vol:'8,50',hsat:'7.015.380',total:'59.630.730'},
        {no:5,uraian:'Plat Lantai 2 (t=12cm, inc. multiplek & scaffolding)',sat:'m2',vol:'57,90',hsat:'1.169.230',total:'67.698.417'},
        {no:6,uraian:'Plat Atap Dak Beton (Area Terbatas)',sat:'m2',vol:'11,20',hsat:'1.247.179',total:'13.968.405'},
        {no:7,uraian:'Ring Balok Keliling (Beton K-250)',sat:'m3',vol:'2,20',hsat:'5.924.099',total:'13.033.018'},
        {no:8,uraian:'Tangga Beton Utama',sat:'unit',vol:'1,00',hsat:'5.456.445',total:'5.456.445'},
      ]},
    { code:'D', name:'PEKERJAAN PASANGAN DAN PLESTERAN', subtotal:183553522, items:[
        {no:1,uraian:'Pasangan Batu Bata Ringan (Hebel 10cm atau setara)',sat:'m2',vol:'380,00',hsat:'171.487',total:'65.165.060'},
        {no:2,uraian:'Plesteran Dinding (1:4, t=15mm)',sat:'m2',vol:'760,00',hsat:'85.744',total:'65.165.440'},
        {no:3,uraian:'Acian Dinding Interior & Eksterior',sat:'m2',vol:'760,00',hsat:'46.769',total:'35.544.440'},
        {no:4,uraian:'Tali Air Fasade & Sudutan',sat:'m1',vol:'130,00',hsat:'28.062',total:'3.648.060'},
        {no:5,uraian:'Batu Alam Panel Utama (atau setara, t=3cm)',sat:'m2',vol:'10,00',hsat:'779.487',total:'7.794.870'},
        {no:6,uraian:'Roster Beton Cetak (Fasad Top, 20×20cm)',sat:'m2',vol:'4,00',hsat:'467.692',total:'1.870.768'},
        {no:7,uraian:'Ornamen Fasad GRC/Kayu (profil custom)',sat:'set',vol:'1,00',hsat:'4.364.884',total:'4.364.884'},
      ]},
    { code:'E', name:'PEKERJAAN KUSEN, PINTU, & JENDELA', subtotal:153060008, note:'Evara Utara: 2 kamar tidur, kuantitas kusen & handle lebih sedikit.', items:[
        {no:1,uraian:'Kusen + Daun Pintu Utama (Solid Wood atau setara)',sat:'unit',vol:'1,00',hsat:'7.794.867',total:'7.794.867'},
        {no:2,uraian:'Kusen + Daun Pintu Kamar (Hollow Wood atau setara)',sat:'unit',vol:'2,00',hsat:'4.988.715',total:'9.977.430'},
        {no:3,uraian:'Kusen + Daun Pintu KM (Alumunium atau setara)',sat:'unit',vol:'2,00',hsat:'3.429.741',total:'6.859.482'},
        {no:4,uraian:'Jendela Alumunium Powder Coat + Kaca 5mm',sat:'m2',vol:'31,00',hsat:'2.338.460',total:'72.492.260'},
        {no:5,uraian:'Jendela Sliding Kaca Besar (Area Living)',sat:'set',vol:'2,00',hsat:'17.928.194',total:'35.856.388'},
        {no:6,uraian:'Engsel Pintu Utama (Heavy Duty SS atau setara)',sat:'pcs',vol:'4,00',hsat:'280.615',total:'1.122.460'},
        {no:7,uraian:'Smart Door Lock Utama (digital lock standar)',sat:'unit',vol:'1,00',hsat:'3.897.433',total:'3.897.433'},
        {no:8,uraian:'Handle Kunci Kamar (Mortise Lock atau setara)',sat:'set',vol:'4,00',hsat:'701.538',total:'2.806.152'},
        {no:9,uraian:'Engsel Pintu Kamar & KM (SS atau setara)',sat:'pcs',vol:'12,00',hsat:'85.744',total:'1.028.928'},
        {no:10,uraian:'Aksesoris Jendela (Rambuncis, Friction Stay)',sat:'set',vol:'16,00',hsat:'701.538',total:'11.224.608'},
      ]},
    { code:'F', name:'PEKERJAAN ATAP DAN PLAFON', subtotal:122067622, items:[
        {no:1,uraian:'Rangka Atap Baja Ringan (G550 atau setara)',sat:'m2',vol:'68,00',hsat:'288.410',total:'19.611.880'},
        {no:2,uraian:'Penutup Atap Genteng Flat Beton (atau setara)',sat:'m2',vol:'68,00',hsat:'342.974',total:'23.322.232'},
        {no:3,uraian:'Nok Atap',sat:'m1',vol:'15,00',hsat:'257.231',total:'3.858.465'},
        {no:4,uraian:'Lisplank Fiber Semen 20cm',sat:'m1',vol:'30,00',hsat:'194.872',total:'5.846.160'},
        {no:5,uraian:'Talang Air Zincalume (inc. downpipe)',sat:'m1',vol:'16,00',hsat:'202.667',total:'3.242.672'},
        {no:6,uraian:'Plafon Gypsum 9mm + Rangka Hollow',sat:'m2',vol:'98,00',hsat:'249.436',total:'24.444.728'},
        {no:7,uraian:'Plafon Water Resistance (Area Basah)',sat:'m2',vol:'22,00',hsat:'311.795',total:'6.859.490'},
        {no:8,uraian:'Drop Ceiling Set & Shadow Line',sat:'m1',vol:'75,00',hsat:'132.513',total:'9.938.475'},
        {no:9,uraian:'Waterproofing Dak Atap & Kanopi (atau setara)',sat:'m2',vol:'40,00',hsat:'623.588',total:'24.943.520'},
      ]},
    { code:'G', name:'PEKERJAAN LANTAI DAN PELAPIS DINDING', subtotal:130579612, items:[
        {no:1,uraian:'Lantai Utama Granit Tile 60×60 (atau setara)',sat:'m2',vol:'85,00',hsat:'592.410',total:'50.354.850'},
        {no:2,uraian:'Keramik Lantai KM (Anti Slip, atau setara)',sat:'m2',vol:'15,00',hsat:'420.923',total:'6.313.845'},
        {no:3,uraian:'Keramik Dinding KM (Full Height, atau setara)',sat:'m2',vol:'45,00',hsat:'467.692',total:'21.046.140'},
        {no:4,uraian:'Plint Lantai (h=8cm)',sat:'m1',vol:'110,00',hsat:'93.538',total:'10.289.180'},
        {no:5,uraian:'Batu Alam Fasad Eksterior (atau setara)',sat:'m2',vol:'30,00',hsat:'779.487',total:'23.384.610'},
        {no:6,uraian:'Waterproofing Area Basah Lantai KM',sat:'m2',vol:'21,00',hsat:'171.487',total:'3.601.227'},
        {no:7,uraian:'Lantai Teras / Carport (atau setara)',sat:'m2',vol:'40,00',hsat:'389.744',total:'15.589.760'},
      ]},
    { code:'H', name:'PEKERJAAN PENGECATAN', subtotal:60528704, items:[
        {no:1,uraian:'Cat Dinding Interior (premium atau setara, 3 lapis)',sat:'m2',vol:'410,00',hsat:'59.241',total:'24.288.810'},
        {no:2,uraian:'Cat Dinding Eksterior (weather protect atau setara)',sat:'m2',vol:'230,00',hsat:'85.744',total:'19.721.120'},
        {no:3,uraian:'Cat Plafon Gypsum (standar, 2 lapis)',sat:'m2',vol:'115,00',hsat:'49.887',total:'5.737.005'},
        {no:4,uraian:'Coating Batu Alam Exterior',sat:'m2',vol:'30,00',hsat:'218.256',total:'6.547.680'},
        {no:5,uraian:'Coating Ornamen Kayu Fasad',sat:'m2',vol:'19,40',hsat:'218.252',total:'4.234.089'},
      ]},
    { code:'I', name:'PEKERJAAN SANITAIR & PLUMBING', subtotal:74324054, note:'Gambar MEP menunjukkan 4 titik wet area meskipun 2 kamar tidur.', items:[
        {no:1,uraian:'Pipa Air Bersih PPR PN-10 (atau setara)',sat:'btg',vol:'35,00',hsat:'148.102',total:'5.183.570'},
        {no:2,uraian:'Pipa Air Kotor PVC AW (atau setara)',sat:'btg',vol:'25,00',hsat:'187.077',total:'4.676.925'},
        {no:3,uraian:'Fitting & Aksesoris Pipa',sat:'lot',vol:'1,00',hsat:'2.338.460',total:'2.338.460'},
        {no:4,uraian:'Bak Kontrol & Pipa Hujan PVC',sat:'ttk',vol:'4,00',hsat:'623.589',total:'2.494.356'},
        {no:5,uraian:'Closet Duduk Keramik (atau setara)',sat:'unit',vol:'3,00',hsat:'3.897.433',total:'11.692.299'},
        {no:6,uraian:'Shower Set (atau setara)',sat:'unit',vol:'2,00',hsat:'5.456.407',total:'10.912.814'},
        {no:7,uraian:'Wastafel + Kran Mixer + Cermin',sat:'set',vol:'3,00',hsat:'4.365.125',total:'13.095.375'},
        {no:8,uraian:'Floor Drain SS + Toilet Jet Shower',sat:'set',vol:'3,00',hsat:'1.169.230',total:'3.507.690'},
        {no:9,uraian:'Roof Tank Air 1000L (atau setara)',sat:'unit',vol:'1,00',hsat:'4.365.125',total:'4.365.125'},
        {no:10,uraian:'Pompa Dorong Booster (atau setara)',sat:'unit',vol:'1,00',hsat:'4.365.125',total:'4.365.125'},
        {no:11,uraian:'Instalasi Pipa AC & Drain AC',sat:'ttk',vol:'5,00',hsat:'1.247.179',total:'6.235.895'},
        {no:12,uraian:'Septic Tank Biofilter + Sumur Resapan',sat:'unit',vol:'1,00',hsat:'5.456.420',total:'5.456.420'},
      ]},
    { code:'J', name:'PEKERJAAN ELEKTRIKAL & TATA UDARA', subtotal:78626802, note:'Volume disesuaikan untuk 2 kamar tidur.', items:[
        {no:1,uraian:'Kabel NYM 3×2.5mm (standar SNI atau setara)',sat:'roll',vol:'4,00',hsat:'1.870.768',total:'7.483.072'},
        {no:2,uraian:'Kabel NYM 2×1.5mm (standar SNI atau setara)',sat:'roll',vol:'3,00',hsat:'1.247.179',total:'3.741.537'},
        {no:3,uraian:'Pipa Conduit PVC 20mm (atau setara)',sat:'btg',vol:'50,00',hsat:'28.062',total:'1.403.100'},
        {no:4,uraian:'T-Doos / In-Doos',sat:'pcs',vol:'50,00',hsat:'7.795',total:'389.750'},
        {no:5,uraian:'Panel Utama (MCB Box 12 Way, atau setara)',sat:'set',vol:'1,00',hsat:'4.988.715',total:'4.988.715'},
        {no:6,uraian:'Titik Lampu Dalam (Downlight LED atau setara)',sat:'ttk',vol:'38,00',hsat:'342.974',total:'13.033.012'},
        {no:7,uraian:'Titik Lampu Luar (Spotlight IP65 atau setara)',sat:'ttk',vol:'12,00',hsat:'592.410',total:'7.108.920'},
        {no:8,uraian:'Saklar & Stop Kontak (atau setara)',sat:'ttk',vol:'45,00',hsat:'257.231',total:'11.575.395'},
        {no:9,uraian:'Lampu Strip LED (Indirect Ceiling)',sat:'m1',vol:'32,00',hsat:'187.077',total:'5.986.464'},
        {no:10,uraian:'Titik Kabel Data / LAN (CAT6 atau setara)',sat:'ttk',vol:'3,00',hsat:'779.487',total:'2.338.461'},
        {no:11,uraian:'Titik Antena TV + Kabel Coaxial',sat:'ttk',vol:'2,00',hsat:'545.641',total:'1.091.282'},
        {no:12,uraian:'Pemasangan Titik Arde / Grounding (< 2 ohm)',sat:'unit',vol:'1,00',hsat:'4.365.125',total:'4.365.125'},
        {no:13,uraian:'Unit AC Split 1 PK Inverter (atau setara)',sat:'unit',vol:'1,00',hsat:'6.547.688',total:'6.547.688'},
        {no:14,uraian:'Unit AC Split 1/2 PK Inverter (atau setara)',sat:'unit',vol:'1,00',hsat:'5.456.407',total:'5.456.407'},
        {no:15,uraian:'Pipa Freon, Kabel, Braket, Pipa Drain AC',sat:'ttk',vol:'2,00',hsat:'1.558.937',total:'3.117.874'},
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
  const sT=1349275000,uT=1220210000,sG=1497695250,uG=1354433100;
  html += `<tr style="background:var(--gold-pale)"><td colspan="2" style="font-weight:600;color:var(--ink)">TOTAL KONSTRUKSI</td><td class="currency" style="text-align:right;font-weight:600">${rp(sT)}</td><td class="currency" style="text-align:right;font-weight:600">${rp(uT)}</td><td style="text-align:right"><span class="diff-plus">+${rp(sT-uT)}</span></td></tr><tr class="compare-grand"><td colspan="2">GRAND TOTAL (Inc. PPN 11%)</td><td class="currency" style="text-align:right">${rp(sG)}</td><td class="currency" style="text-align:right">${rp(uG)}</td><td style="text-align:right"><span class="diff-plus">+${rp(sG-uG)}</span></td></tr>`;
  tbody.innerHTML = html;
}

window.toggleSection = function(id, header) { document.getElementById(id).classList.toggle('collapsed'); header.classList.toggle('collapsed'); }
window.switchTab = function(tab) { document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active')); document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); document.getElementById('tab-'+tab).classList.add('active'); event.target.classList.add('active'); }

renderSummary('summary-selatan', summaryData.selatan, 1349275000, 148420250, 1497695250);
renderSummary('summary-utara', summaryData.utara, 1220210000, 134223100, 1354433100);
renderBoq('boq-selatan', boqData.selatan);
renderBoq('boq-utara', boqData.utara);
renderCompare();

