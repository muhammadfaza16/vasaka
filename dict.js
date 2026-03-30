// ═══════ TRANSLATION ENGINE ═══════
// Prinsip: product names, kode teknis, dan istilah lazim di Indonesia TIDAK diterjemahkan.
// Hanya UI labels, nama divisi, dan uraian pekerjaan generik yang diterjemahkan.
window.currentLang = 'en';

// ── 1. EXACT MAP (full-string match) ──
const EXACT_MAP = {
  // Division headers
  "PRELIMINARIES": "PEKERJAAN PERSIAPAN",
  "STRUCTURE": "STRUKTUR",
  "ARCHITECTURE": "ARSITEKTUR",
  "MEP": "MEP",
  "SUBSTRUCTURE": "PEKERJAAN TANAH & PONDASI",
  "CONCRETE WORKS": "PEKERJAAN BETON",
  "STEEL WORKS": "PEKERJAAN BAJA",
  "ROOF WORKS": "PEKERJAAN ATAP",
  "STRUCTURE BOUNDARY WALL & CARPORT": "STRUKTUR DINDING BATAS & CARPORT",
  "METAL WORKS": "PEKERJAAN METAL",
  "THERMAL & MOISTURE PROTECTION": "PERLINDUNGAN TERMAL & KEDAP AIR",
  "MASONRY": "PEKERJAAN PASANGAN DINDING",
  "FINISHES": "PEKERJAAN FINISHING",
  "DOORS AND WINDOW": "PINTU & JENDELA",
  "IRONMONGERY": "HANDLE & KUNCI PINTU",
  "ACCESSORIES (PROVISIONAL SUMMARY)": "AKSESORIS (PROVISIONAL)",
  "SANITARY": "PERALATAN SANITAIR",
  "EXTERNAL": "PEKERJAAN LUAR",
  "ELECTRICAL WORK": "PEKERJAAN LISTRIK",
  "PLUMBING WORKS": "PEKERJAAN PLUMBING",
  "AIR CONDITIONING WORK": "PEKERJAAN AC",

  // Group headers (exact)
  "General Cost": "Biaya Umum",
  "Labour Cost": "Biaya Tenaga Kerja",
  "Construction Plant": "Peralatan Konstruksi",
  "Temporary Building": "Bangunan Sementara",
  "Lighting and Power": "Penerangan & Daya Listrik",
  "Safety": "Keselamatan Kerja (K3)",
  "Preliminary": "Pekerjaan Persiapan",
  "Excavation": "Galian Tanah",
  "Compacted sand bed": "Urugan Pasir Padat",
  "Termite prevention": "Pencegahan Rayap",
  "Vapour barrier": "Lapisan Kedap Air",
  "Bataco masonry works": "Pekerjaan Pasangan Batako",
  "Stone masonry works": "Pekerjaan Pasangan Batu Kali",
  "Lean concrete": "Lantai Kerja (Lean Concrete)",
  "Staircase": "Tangga",
  "Roof Structure": "Struktur Rangka Atap",
  "Pond finishes": "Finishing Kolam",
  "Ceiling Paint": "Pengecatan Plafon",
  "External": "Eksterior",
  "Smooth finish (acian)": "Acian halus",

  // UI labels
  "Final Summary": "Rekapitulasi Akhir",
  "Description": "Uraian Pekerjaan",
  "Amount (Rp)": "Jumlah Harga (Rp)",
  "Unit": "Satuan",
  "Qty": "Volume",
  "Rate (Rp)": "Harga Satuan (Rp)",
  "No.": "No.",
  "Total Rate (Rp)": "Total Harga (Rp)",
  "Bobot": "Bobot",
  "REAL COST": "BIAYA KONSTRUKSI",
  "GRAND TOTAL": "TOTAL KESELURUHAN",
  "GRAND TOTAL (Inc. PPN)": "TOTAL KESELURUHAN (Termasuk PPN)",
  "Biaya per m²": "Biaya per m²",
  "Exclude": "Tidak Termasuk",
  "By Owner": "Oleh Owner",
  "Structure, Architecture & MEP": "Struktur, Arsitektur & MEP",
};

// ── 2. PATTERN REPLACEMENTS (order matters — specific first, generic last) ──
// RULES:
// - Product names (TOTO, ROCA, Cisangkan, QNQ, Valentino, Nippon, Jaindo, Union, dsb) → JANGAN translate
// - Kode teknis (K-300, TB1, TP1, BV01, P1-P10, NYM, PVC AW, PPR, dsb) → JANGAN translate
// - Istilah lazim di proyek Indonesia (Bouwplank, Sloof, Trasraam, Plint, Shadow line) → JANGAN translate
const PATTERNS = [
  // ──── PRELIMINARIES ────
  [/^Cost of test \(concrete cube & iron bar\)$/g, 'Biaya uji material (kubus beton & besi)'],
  [/^Cost of sample material$/g, 'Biaya contoh material'],
  [/^Site management staff & establishment cost$/g, 'Biaya staf & operasional proyek'],
  [/^Administration & Documentation$/g, 'Administrasi & Dokumentasi'],
  [/^Weekly Report to Project Management$/g, 'Laporan mingguan ke manajemen proyek'],
  [/^Shop drawing$/g, 'Gambar kerja (shop drawing)'],
  [/^As built drawing$/g, 'Gambar as-built'],
  [/^Workman Insurance$/g, 'Asuransi tenaga kerja'],
  [/^Temporary building for worker$/g, 'Bangunan sementara pekerja'],
  [/^Toilet \/ MCK$/g, 'Toilet / MCK'],
  [/^Retribution to local government "KIPEM"$/g, 'Retribusi pemerintah daerah "KIPEM"'],
  [/^Lift Material$/g, 'Alat angkat material'],
  [/^Rental Teodolit$/g, 'Sewa Teodolit'],
  [/^Water pump$/g, 'Pompa air'],
  [/^Setting out$/g, 'Pengukuran & setting out'],
  [/^Site office \(meeting room, contractor & consultant\)$/g, 'Kantor proyek (ruang rapat)'],
  [/^Storage and works shop$/g, 'Gudang & bengkel kerja'],
  [/^Security Pos$/g, 'Pos keamanan'],
  [/^Sanitation\/Toilet$/g, 'Sanitasi / Toilet'],
  [/^Temporary PLN connection$/g, 'Sambungan PLN sementara'],
  [/^PLN consumption for work$/g, 'Pemakaian listrik PLN'],
  [/^Water consumption for work \(deep well\)$/g, 'Pemakaian air kerja (sumur bor)'],
  [/^Telephone consumption for work$/g, 'Pemakaian telepon kerja'],
  [/^Contractor all risk \(insurance\)$/g, 'Asuransi CAR (Contractor All Risk)'],
  [/^Healthy for worker \(P3K\)$/g, 'P3K pekerja'],
  [/^Safe guarding the work \(lighting, Radio HT, equipment\)$/g, 'Pengamanan kerja (lampu, HT, peralatan)'],
  [/^Self Protection \(helmet, boots, safety belt, masker, etc\)$/g, 'APD (helm, sepatu, safety belt, masker, dll)'],
  [/^Sign \(K3 board, K3 Flag, briefing, evacuation route, etc\)$/g, 'Rambu K3 (papan, bendera, briefing, jalur evakuasi)'],
  [/^All permit "IMB"$/g, 'Perizinan "IMB/PBG"'],

  // ──── STRUCTURE — Excavation & Foundation ────
  [/^Excavation for Pad Footing$/g, 'Galian tanah pondasi tapak'],
  [/^Excavation for Tie Beam$/g, 'Galian tanah sloof'],
  [/^Excavation for Riverstone foundation$/g, 'Galian tanah pondasi batu kali'],
  [/^Excavation Continuous Foundation$/g, 'Galian pondasi menerus'],
  [/^Backfilling with excavated material$/g, 'Urugan kembali tanah galian'],
  [/^Backfilling$/g, 'Urugan kembali'],
  [/^Remove surplus ex excavation$/g, 'Buang kelebihan tanah galian'],
  [/^Termiban or equal approved termite protection$/g, 'Anti rayap Termiban atau setara'],
  [/^Plastic sheet 0\.2mm thick under floor slab$/g, 'Plastik cor 0,2mm di bawah pelat lantai'],
  [/^Bataco masonry for Trasraam$/g, 'Pasangan batako untuk trasraam'],
  [/^Riverstone foundation \(1pc:5sand\)$/g, 'Pondasi batu kali (1pc:5ps)'],
  [/^Masonry with Red Brick 110mm wide$/g, 'Pasangan bata merah 110mm'],

  // ──── STRUCTURE — Compacted sand ────
  [/^100mm thick compacted sand layer under foundation & slab$/g, 'Urugan pasir padat 100mm bawah pondasi & pelat'],
  [/^100mm thick compacted sand layer$/g, 'Urugan pasir padat 100mm'],
  [/^100mm compacted sand layer$/g, 'Urugan pasir padat 100mm'],

  // ──── STRUCTURE — Lean concrete ────
  [/^50mm thick concrete under pad footing & slab$/g, 'Lantai kerja 50mm bawah pondasi tapak & pelat'],
  [/^50mm thick concrete under pad footing$/g, 'Lantai kerja 50mm bawah pondasi tapak'],
  [/^50mm thick lean concrete carport$/g, 'Lantai kerja 50mm carport'],

  // ──── STRUCTURE — Concrete (prefix match) ────
  [/^Concrete Pad Footing/g, 'Beton pondasi tapak'],
  [/^Concrete Tie Beam/g, 'Beton sloof'],
  [/^Concrete Column Pedestal/g, 'Beton pedestal kolom'],
  [/^Concrete Beam/g, 'Beton balok'],
  [/^Concrete Column/g, 'Beton kolom'],
  [/^Concrete Sloof/g, 'Beton sloof'],
  [/^Concrete Slab First Floor/g, 'Beton pelat lantai 1'],
  [/^Concrete Slab Type/g, 'Beton pelat tipe'],
  [/^Concrete Slab 150mm/g, 'Beton pelat 150mm'],
  [/^Concrete Stair/g, 'Beton tangga'],
  [/^Concrete B(\d)/g, 'Beton B$1'],
  [/^Concrete BA/g, 'Beton BA'],
  [/^Concrete BT/g, 'Beton BT'],

  // ──── STRUCTURE — Reinforcement ────
  [/^Reinforcement Pad Footings/g, 'Pembesian pondasi tapak'],
  [/^Reinforcement Tie Beams/g, 'Pembesian sloof'],
  [/^Reinforcement Beam/g, 'Pembesian balok'],
  [/^Reinforcement Column Pedestals/g, 'Pembesian pedestal kolom'],
  [/^Reinforcement Columns/g, 'Pembesian kolom'],
  [/^Reinforcement Column/g, 'Pembesian kolom'],
  [/^Reinforcement Slab/g, 'Pembesian pelat lantai'],
  [/^Reinforcement Stair/g, 'Pembesian tangga'],
  [/^Reinforcement Sloof/g, 'Pembesian sloof'],
  [/^Wiremesh/g, 'Wiremesh'],

  // ──── STRUCTURE — Formwork ────
  [/^Formwork Plywood Slab & Stair/g, 'Bekisting plywood pelat & tangga'],
  [/^Formwork Plywood Beam\/Column Pedestal/g, 'Bekisting plywood balok/pedestal'],
  [/^Formwork Plywood Columns/g, 'Bekisting plywood kolom'],
  [/^Formwork Plywood Slab/g, 'Bekisting plywood pelat lantai'],
  [/^Formwork Plywood Beams/g, 'Bekisting plywood balok'],
  [/^Formwork Plywood Col\+Beams/g, 'Bekisting plywood kolom+balok'],
  [/^Formwork Plywood Column\+Beams/g, 'Bekisting plywood kolom+balok'],
  [/^Formwork Bataco Pad Footings/g, 'Bekisting batako pondasi tapak'],
  [/^Formwork Bataco Tie Beams/g, 'Bekisting batako sloof'],
  [/^Formwork Sloof/g, 'Bekisting sloof'],

  // ──── STRUCTURE — Steel & Roof ────
  [/^Staircase Drying Area/g, 'Tangga area jemur'],
  [/^Metal Truss Roof Structure/g, 'Rangka atap baja ringan'],
  [/^Aluminium foil double layer$/g, 'Aluminium foil 2 lapis'],
  [/^Roof Covering \(Cisangkan Tile\)$/g, 'Penutup atap (Genteng Cisangkan)'],
  [/^Roof Ridge$/g, 'Nok atap'],
  [/^Roof Drain/g, 'Roof drain'],
  [/^Roof Carport/g, 'Atap carport'],
  [/^Skylight Tempered Glass/g, 'Skylight kaca tempered'],
  [/^Column Steel Pipe/g, 'Kolom pipa baja'],
  [/^Beam Pergola Steel Hollow/g, 'Balok pergola hollow baja'],
  [/^Accessories, plate, Anchor, Bolt, Weld etc$/g, 'Aksesoris, plat, angkur, baut, las dll'],

  // ──── ARCHITECTURE — Masonry ────
  [/^Masonry Citicon 100mm — Ground Floor$/g, 'Pasangan bata ringan Citicon 100mm — Lantai Dasar'],
  [/^Masonry Citicon 100mm — Upper Floor$/g, 'Pasangan bata ringan Citicon 100mm — Lantai Atas'],
  [/^Masonry Citicon 100mm \(Boundary\)$/g, 'Pasangan bata ringan Citicon 100mm (Batas)'],
  [/^Masonry Citicon 100mm$/g, 'Pasangan bata ringan Citicon 100mm'],

  // ──── ARCHITECTURE — Wall Finishes ────
  [/^Wall Finishes Ground Floor$/g, 'Finishing dinding lantai dasar'],
  [/^Wall Finishes Upper Floor$/g, 'Finishing dinding lantai atas'],

  // ──── ARCHITECTURE — Group headers (starts-with for group headers) ────
  [/^Wall finishes — Rendered plester 10mm$/g, 'Plesteran dinding 10mm'],
  [/^Wall — Rendered plester 10mm$/g, 'Plesteran dinding 10mm'],
  [/^Internal paint — Nippon Vinilex$/g, 'Cat dalam — Nippon Vinilex'],
  [/^External paint — Nippon Waterbond$/g, 'Cat luar — Nippon Waterbond'],
  [/^External paint Planter$/g, 'Cat luar planter'],
  [/^Rendered plester Boundary Wall$/g, 'Plesteran dinding batas'],
  [/^Rendered plester Planter$/g, 'Plesteran planter'],
  [/^Transram Batako$/g, 'Trasraam batako'],
  [/^Expose Concrete Ceiling$/g, 'Plafon beton ekspos'],

  // ──── ARCHITECTURE — Shadow line (DON'T translate "Ceiling" here, it refers to location) ────
  [/^Shadow line 10mm with aluminium profile U — Ground Floor$/g, 'Shadow line 10mm profil aluminium U — Lantai Dasar'],
  [/^Shadow line 10mm aluminium — Ground Floor$/g, 'Shadow line 10mm aluminium — Lantai Dasar'],
  [/^Shadow line — Upper Floor$/g, 'Shadow line — Lantai Atas'],

  // ──── ARCHITECTURE — Ceiling items (translate "Ceiling" to "Plafon" only for actual ceiling work) ────
  [/^Ceiling — 9mm Gypsum \(P1\) — Ground Floor$/g, 'Plafon — Gypsum 9mm (P1) — Lantai Dasar'],
  [/^Ceiling — 9mm Gypsum \(P1\) — Upper Floor$/g, 'Plafon — Gypsum 9mm (P1) — Lantai Atas'],
  [/^Ceiling — 9mm GRC \(P2\) — Ground Floor$/g, 'Plafon — GRC 9mm (P2) — Lantai Dasar'],
  [/^Ceiling — 9mm GRC \(P2\) — Upper Floor$/g, 'Plafon — GRC 9mm (P2) — Lantai Atas'],
  [/^Ceiling Gypsum Area GF$/g, 'Plafon gypsum lt. dasar'],
  [/^Ceiling Gypsum Area UF$/g, 'Plafon gypsum lt. atas'],
  [/^Ceiling GRC Board GF$/g, 'Plafon GRC lt. dasar'],
  [/^Ceiling GRC Board UF$/g, 'Plafon GRC lt. atas'],
  [/^Ceiling atas Pond$/g, 'Plafon atas kolam'],

  // Ceiling room names — "Ceiling X" → "Plafon X" for finishes context
  [/^Ceiling Terrace$/g, 'Plafon teras'],
  [/^Ceiling Guest Room & Living Room$/g, 'Plafon ruang tamu & keluarga'],
  [/^Ceiling Dining Room & Kitchen$/g, 'Plafon ruang makan & dapur'],
  [/^Ceiling Dining Room$/g, 'Plafon ruang makan'],
  [/^Ceiling Storage$/g, 'Plafon gudang'],
  [/^Ceiling Maid Toilet$/g, 'Plafon toilet ART'],
  [/^Ceiling Garage$/g, 'Plafon garasi'],
  [/^Ceiling Powder Room$/g, 'Plafon powder room'],
  [/^Ceiling Master Bedroom$/g, 'Plafon kamar tidur utama'],
  [/^Ceiling WIC & Koridor$/g, 'Plafon WIC & koridor'],
  [/^Ceiling WIC$/g, 'Plafon WIC'],
  [/^Ceiling Master Bathroom$/g, 'Plafon kamar mandi utama'],
  [/^Ceiling Bedroom 2$/g, 'Plafon kamar tidur 2'],
  [/^Ceiling Bathroom 1$/g, 'Plafon kamar mandi 1'],
  [/^Ceiling Maid Room$/g, 'Plafon kamar ART'],
  [/^Ceiling Master WIC$/g, 'Plafon master WIC'],
  [/^Ceiling Foyer & Staircase$/g, 'Plafon foyer & tangga'],
  [/^Ceiling Terrace Guest Room$/g, 'Plafon teras ruang tamu'],
  [/^Ceiling Terrace Dining Room$/g, 'Plafon teras ruang makan'],
  [/^Ceiling Back Terrace$/g, 'Plafon teras belakang'],

  // ──── ARCHITECTURE — Floor items ────
  [/^Floor & Wall Pond$/g, 'Lantai & dinding kolam'],
  [/^Floor Pond \(Loose Pebbles\)$/g, 'Lantai kolam (batu koral)'],
  [/^Floor Terrace Guest Room$/g, 'Lantai teras ruang tamu'],
  [/^Floor Terrace Dining Room$/g, 'Lantai teras ruang makan'],
  [/^Floor Terrace$/g, 'Lantai teras'],
  [/^Floor Back Terrace$/g, 'Lantai teras belakang'],
  [/^Floor Master Bathroom$/g, 'Lantai kamar mandi utama'],
  [/^Floor Master Bedroom$/g, 'Lantai kamar tidur utama'],
  [/^Floor Bedroom 2$/g, 'Lantai kamar tidur 2'],
  [/^Floor Master WIC$/g, 'Lantai master WIC'],
  [/^Floor Guest Room & Living Room$/g, 'Lantai ruang tamu & keluarga'],
  [/^Floor Dining Room & Kitchen$/g, 'Lantai ruang makan & dapur'],
  [/^Floor Dining Room$/g, 'Lantai ruang makan'],
  [/^Floor Stair GF to UF$/g, 'Lantai tangga lt. dasar ke lt. atas'],
  [/^Floor Stair to Powder Room$/g, 'Lantai tangga ke powder room'],
  [/^Floor Powder Room$/g, 'Lantai powder room'],
  [/^Floor Bathroom 1$/g, 'Lantai kamar mandi 1'],
  [/^Floor Storage$/g, 'Lantai gudang'],
  [/^Floor Garage$/g, 'Lantai garasi'],
  [/^Floor Maid Bedroom$/g, 'Lantai kamar ART'],
  [/^Floor Maid Toilet$/g, 'Lantai toilet ART'],
  [/^Floor Service Stair & Drying Area$/g, 'Lantai tangga servis & jemuran'],
  [/^Floor Stepping$/g, 'Lantai injakan'],
  [/^Floor Shower Master Bathroom$/g, 'Lantai shower kamar mandi utama'],
  [/^Floor Balcony Master Bedroom$/g, 'Lantai balkon kamar tidur utama'],
  [/^Floor Carport$/g, 'Lantai carport'],
  [/^Floor Toilet$/g, 'Lantai toilet'],

  // ──── ARCHITECTURE — Floor material group headers ────
  [/^Floor — Keramik Habitat Walnut 250x500mm$/g, 'Lantai — Keramik Habitat Walnut 250x500mm'],
  [/^Floor — Keramik Habitat \(Balcony\)$/g, 'Lantai — Keramik Habitat (Balkon)'],
  [/^Floor — HT QNQ Nevada 600x600mm \(Bathroom\)$/g, 'Lantai — HT QNQ Nevada 600x600mm (Kamar Mandi)'],
  [/^Floor — HT QNQ Nevada 600x600mm$/g, 'Lantai — HT QNQ Nevada 600x600mm'],
  [/^Floor — HT QNQ Nevada \(Shower Master Bath\)$/g, 'Lantai — HT QNQ Nevada (Shower Kamar Mandi Utama)'],
  [/^Floor — Parquet Laminate Montana$/g, 'Lantai — Parquet Laminate Montana'],
  [/^Floor — HT Valentino Gress Blunt Ivory 600x600mm$/g, 'Lantai — HT Valentino Gress Blunt Ivory 600x600mm'],
  [/^Floor — HT QNQ Alpine Wood 300x1200mm$/g, 'Lantai — HT QNQ Alpine Wood 300x1200mm'],
  [/^Floor — HT QNQ Sahara Coral 600x600mm$/g, 'Lantai — HT QNQ Sahara Coral 600x600mm'],
  [/^Floor — Ceramic Asia Tile Murano 300x300mm$/g, 'Lantai — Keramik Asia Tile Murano 300x300mm'],
  [/^Floor — Ceramic Asia Tile 300x300mm \(Maid\)$/g, 'Lantai — Keramik Asia Tile 300x300mm (ART)'],
  [/^Floor — Ceramic Asia Tile 300x300mm$/g, 'Lantai — Keramik Asia Tile 300x300mm'],
  [/^Floor — Rabatt Concrete$/g, 'Lantai — Rabat beton'],
  [/^Floor — Andesite Stone Black 200x200mm$/g, 'Lantai — Batu andesit hitam 200x200mm'],

  // ──── ARCHITECTURE — Wall material group headers ────
  [/^Ceramic Tile 300x300mm \(Maid Toilet\)$/g, 'Keramik 300x300mm (Toilet ART)'],
  [/^HT QNQ Nevada 600x600mm$/g, 'HT QNQ Nevada 600x600mm'],
  [/^Granite Tile Valentino Gress 600x600mm$/g, 'Granite Tile Valentino Gress 600x600mm'],

  // Wall items (specific room names)
  [/^Wall Powder Room$/g, 'Dinding powder room'],
  [/^Wall Maid Toilet$/g, 'Dinding toilet ART'],
  [/^Wall Bathroom 1$/g, 'Dinding kamar mandi 1'],
  [/^Wall Master Bathroom$/g, 'Dinding kamar mandi utama'],
  [/^Wall & Floor Master Bathroom$/g, 'Dinding & lantai kamar mandi utama'],
  [/^Wall & Floor Bathroom 1$/g, 'Dinding & lantai kamar mandi 1'],
  [/^Wall Service Area UF$/g, 'Dinding area servis lt. atas'],
  [/^Wall Service Area$/g, 'Dinding area servis'],
  [/^External Wall GF$/g, 'Dinding luar lt. dasar'],
  [/^External Wall UF$/g, 'Dinding luar lt. atas'],

  // ──── ARCHITECTURE — Doors (keep product codes, translate generic prefix) ────
  [/^Single swing PVC door/g, 'Pintu ayun PVC'],
  [/^Single swing engineer wood door/g, 'Pintu ayun kayu engineering'],
  [/^Single swing door/g, 'Pintu ayun'],
  [/^Single pivot door frameless glass/g, 'Pintu pivot kaca frameless'],
  [/^Double folding door/g, 'Pintu lipat ganda'],
  [/^Multiple folding door/g, 'Pintu lipat multi'],
  [/^Sliding door/g, 'Pintu geser'],
  [/^Folding door/g, 'Pintu lipat'],
  [/^Swing door\+fixed glass/g, 'Pintu ayun+kaca mati'],
  [/^Swing door\+glass window/g, 'Pintu ayun+jendela kaca'],
  [/^Swing\+fixed glass window/g, 'Jendela ayun+kaca mati'],
  [/^Fixed glass window/g, 'Jendela kaca mati'],

  // ──── ARCHITECTURE — Door frame group headers ────
  [/^Timber Frame Door — Ground Floor$/g, 'Kusen Pintu Kayu — Lantai Dasar'],
  [/^Timber Frame Door — Upper Floor$/g, 'Kusen Pintu Kayu — Lantai Atas'],
  [/^Timber Door — Ground Floor$/g, 'Pintu Kayu — Lantai Dasar'],
  [/^Timber Door — Upper Floor$/g, 'Pintu Kayu — Lantai Atas'],
  [/^Aluminium Door & Window — Ground Floor$/g, 'Pintu & Jendela Aluminium — Lantai Dasar'],
  [/^Aluminium Door & Window — Upper Floor$/g, 'Pintu & Jendela Aluminium — Lantai Atas'],

  // ── ARCHITECTURE — Ironmongery ────
  [/^Set ironmongery folding door/g, 'Set handle & kunci pintu lipat'],
  [/^Set ironmongery pivot door/g, 'Set handle & kunci pintu pivot'],
  [/^Set ironmongery door/g, 'Set handle & kunci pintu'],

  // ──── ARCHITECTURE — Railing & misc ────
  [/^Railing Stair$/g, 'Railing tangga'],
  [/^Railing Balcony Master Bedroom$/g, 'Railing balkon kamar tidur utama'],
  [/^Balcony$/g, 'Balkon'],
  [/^Balcony & Kitchen$/g, 'Balkon & Dapur'],
  [/^Plat dak roof$/g, 'Plat dak atap'],
  [/^Pond \(by tenant\)$/g, 'Kolam (oleh penghuni)'],

  // ──── ARCHITECTURE — Masonry External ────
  [/^Masonry — Boundary Wall$/g, 'Pasangan Dinding — Dinding Batas'],
  [/^Masonry — Planter Taman$/g, 'Pasangan Dinding — Planter Taman'],

  // ──── ARCHITECTURE — Tali air, Lisplank ────
  [/^Lisplank Fiber Semen/g, 'Lisplank fiber semen'],
  [/^Lisplank Aplus/g, 'Lisplank Aplus'],

  // ──── MEP — Electrical ────
  [/^Panel & Cable — Ground Floor$/g, 'Panel & Kabel — Lantai Dasar'],
  [/^Panel & Cable — First Floor$/g, 'Panel & Kabel — Lantai 1'],
  [/^Lighting Cable/g, 'Kabel penerangan'],
  [/^GPO AC Power Cable/g, 'Kabel stop kontak AC'],
  [/^GPO Pump Cable/g, 'Kabel stop kontak pompa'],
  [/^GPO Cable/g, 'Kabel stop kontak'],
  [/^Testing & Commissioning$/g, 'Testing & commissioning'],
  [/^Lighting Fixture — Ground Floor$/g, 'Titik lampu — Lantai Dasar'],
  [/^Lighting Fixture — First Floor$/g, 'Titik lampu — Lantai 1'],
  [/^Accessories — Ground Floor$/g, 'Aksesoris — Lantai Dasar'],
  [/^Accessories — First Floor$/g, 'Aksesoris — Lantai 1'],
  [/^Power Panel \(PB BOX\) c\/w Grounding$/g, 'Panel daya (PB BOX) c/w Grounding'],
  [/^1 Way 1 Gang Switch$/g, 'Saklar tunggal'],
  [/^1 Way 2 Gang Switch$/g, 'Saklar seri'],
  [/^2 Way 1 Gang Switch \(Hotel Switch\)$/g, 'Saklar hotel (2 way)'],
  [/^GPO 1 Phase 220V\/10A for Pump$/g, 'Stop kontak 1 fase 220V/10A untuk pompa'],
  [/^GPO 1 Phase 220V\/10A$/g, 'Stop kontak 1 fase 220V/10A'],
  [/^Switch Socket Outlet for AC/g, 'Stop kontak khusus AC'],

  // ──── MEP — Plumbing ────
  [/^Clean Water — Ground Floor$/g, 'Air Bersih — Lantai Dasar'],
  [/^Clean Water — First Floor$/g, 'Air Bersih — Lantai 1'],
  [/^Water Meter 25mm$/g, 'Meter air 25mm'],
  [/^Ground Water Tank/g, 'Tandon air tanah'],
  [/^Booster Pump/g, 'Pompa booster'],
  [/^Floating Valve/g, 'Pelampung katup'],
  [/^Check Valve/g, 'Check valve'],
  [/^PPR Pipe fitting$/g, 'Fitting pipa PPR'],
  [/^Pipe fitting \+ Testing$/g, 'Fitting pipa + testing'],
  [/^Pipe fitting PVC AW class \(AC\)$/g, 'Fitting pipa PVC AW (AC)'],
  [/^Pipe fitting PVC AW class$/g, 'Fitting pipa PVC AW'],

  // Sewage group headers
  [/^Sewage & Waste Water — Ground Floor$/g, 'Air Kotor & Limbah — Lantai Dasar'],
  [/^Sewage Water Pipe — Ground Floor$/g, 'Pipa Air Kotor — Lantai Dasar'],
  [/^Sewage — First Floor$/g, 'Air Kotor — Lantai 1'],
  [/^Storm Water Drainage — Roof$/g, 'Drainase Air Hujan — Atap'],
  [/^Storm Water — First Floor$/g, 'Air Hujan — Lantai 1'],
  [/^Storm Water — Ground Floor$/g, 'Air Hujan — Lantai Dasar'],

  [/^STP Biofilter/g, 'STP Biofilter'],
  [/^Kitchen Portable Grease Trap/g, 'Grease trap portable dapur'],
  [/^Box Control/g, 'Bak kontrol'],
  [/^Clean Out PVC/g, 'Clean out PVC'],
  [/^Clean Out dia/g, 'Clean out dia'],
  [/^Balcony Drain/g, 'Drain balkon'],

  // ──── MEP — AC ────
  [/^Refrigerant Pipe/g, 'Pipa refrigerant'],
  [/^Drain pipe PVC/g, 'Pipa drain PVC'],

  // ──── MEP — Room context group headers ────
  [/^Ground Floor — Powder Room$/g, 'Lantai Dasar — Powder Room'],
  [/^Ground Floor — Maid Room$/g, 'Lantai Dasar — Kamar ART'],
  [/^Upper Floor — Master Bathroom$/g, 'Lantai Atas — Kamar Mandi Utama'],
  [/^Upper Floor — Bathroom 1$/g, 'Lantai Atas — Kamar Mandi 1'],
  [/^Ground Floor$/g, 'Lantai Dasar'],
  [/^Upper Floor$/g, 'Lantai Atas'],
  [/^First Floor$/g, 'Lantai 1'],
  [/^Internal — Upper Floor$/g, 'Internal — Lantai Atas'],
  [/^External — Upper Floor$/g, 'Eksternal — Lantai Atas'],
  [/^Waterproofing Internal — Ground Floor$/g, 'Waterproofing Internal — Lantai Dasar'],
  [/^Cement base waterproofing \(Fosroc\/SIKA\) — Internal GF$/g, 'Waterproofing semen (Fosroc/SIKA) — Internal Lt. Dasar'],

  // ──── Catch-all for K-300/K-225 group headers ────
  [/^K-300 concrete — (.+)$/g, 'Beton K-300 — $1'],
  [/^K-225 concrete — (.+)$/g, 'Beton K-225 — $1'],
  [/^K-300 Beams/g, 'Balok K-300'],

  // ──── Formwork group headers ────
  [/^Formwork — Bataco$/g, 'Bekisting — Batako'],
  [/^Formwork — Plywood 9mm$/g, 'Bekisting — Plywood 9mm'],

  // ──── Reinforcement group headers ────
  [/^Reinforcement — Ground Floor$/g, 'Pembesian — Lantai Dasar'],
  [/^Reinforcement — Upper Floors$/g, 'Pembesian — Lantai Atas'],

  // ──── Temporary fence ────
  [/^Temporary fence/g, 'Pagar sementara'],
  [/^Temporary steel entrance door/g, 'Pintu masuk baja sementara'],
];

window.t = function(str) {
  if (currentLang === 'en') return str;
  if (!str) return str;

  // 1. Exact match
  if (EXACT_MAP[str]) return EXACT_MAP[str];

  // 2. Pattern match — try each regex against the full string
  let res = str;
  for (let i = 0; i < PATTERNS.length; i++) {
    // Reset lastIndex for patterns with /g flag
    PATTERNS[i][0].lastIndex = 0;
    const newRes = res.replace(PATTERNS[i][0], PATTERNS[i][1]);
    if (newRes !== res) {
      res = newRes;
      break; // first match wins — avoids double-replacement
    }
  }

  return res;
};

// ── Toggle language ──
window.toggleLang = function(lang) {
  currentLang = lang;

  // Update header subtitle
  document.getElementById('brand-doc').textContent = t("Structure, Architecture & MEP");

  // Update static HTML tags with data-en/data-id
  document.querySelectorAll('.code-tag-text').forEach(el => {
    if (el.dataset.en && el.dataset.id) {
      if (el.tagName === 'UL') {
        el.innerHTML = currentLang === 'id' ? el.dataset.id : el.dataset.en;
      } else {
        el.textContent = currentLang === 'id' ? el.dataset.id : el.dataset.en;
      }
    }
  });

  // Update .plbl labels
  document.querySelectorAll('.plbl').forEach(el => {
    if (el.dataset.en) {
      const map = { 'Project': 'Proyek', 'Owner': 'Pemilik', 'Location': 'Lokasi', 'Area': 'Luas' };
      el.textContent = currentLang === 'id' ? (map[el.dataset.en] || el.dataset.en) : el.dataset.en;
    }
  });

  // Re-render dynamic content
  renderSummary('summary-selatan', DATA_SELATAN);
  renderSummary('summary-utara', DATA_UTARA);
  buildTab('boq-selatan', DATA_SELATAN);
  buildTab('boq-utara', DATA_UTARA);
  renderCompare();

  // Update button state
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('lang-' + lang).classList.add('active');
};
