import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  Navigation, 
  Layers, 
  Building2, 
  Home, 
  Zap, 
  Compass, 
  ExternalLink, 
  CheckCircle2, 
  ChevronRight, 
  Maximize2, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Building
} from 'lucide-react';
import { ProjectItem } from '../data/projects';

export interface MapProjectMarker {
  id: string;
  name: string;
  category: 'commercial' | 'residential' | 'foundation' | 'steel' | 'solar' | 'civic';
  categoryLabel: string;
  locationName: string;
  district: string;
  coordinates: {
    lat: string;
    lng: string;
  };
  gridPosition: {
    x: number; // percentage 0-100
    y: number; // percentage 0-100
  };
  scope: string;
  year: string;
  status: 'Completed & Verified' | 'Operational' | 'Handed Over';
  image: string;
  highlight: string;
  linkProjectSlug?: string;
}

const AWKA_PROJECT_MARKERS: MapProjectMarker[] = [
  {
    id: 'radopin-plaza',
    name: 'Radopin Supermarket & Commercial Plaza',
    category: 'commercial',
    categoryLabel: 'Commercial Plaza',
    locationName: 'Aroma Junction / Club Road',
    district: 'Awka Urban Core',
    coordinates: { lat: "6°13'14\"N", lng: "7°04'19\"E" },
    gridPosition: { x: 50, y: 46 },
    scope: 'Multi-storey commercial shopping complex with underground storage, raft foundation & wide-span steel roof framing.',
    year: '2012 – Present',
    status: 'Completed & Verified',
    image: '/assets/images/COMMERCIAL BUILDING/commercial_plaza_radopin.jpg',
    highlight: 'Signature retail and commercial landmark serving the Awka metropolitan axis.',
    linkProjectSlug: 'radopin-supermarket-awka'
  },
  {
    id: 'cic-hotel-office',
    name: 'CIC Hotel & Administrative Commercial Complex',
    category: 'commercial',
    categoryLabel: 'Corporate Office',
    locationName: 'Agu-Awka GRA / Secretariat Road',
    district: 'Government Reserve Area',
    coordinates: { lat: "6°14'03\"N", lng: "7°05'28\"E" },
    gridPosition: { x: 72, y: 34 },
    scope: 'Full turnkey structural engineering, reinforced concrete frame, and architectural facade detailing.',
    year: '2019 – 2021',
    status: 'Completed & Verified',
    image: '/assets/images/COMMERCIAL BUILDING/commercial_office_cichotel.jpg',
    highlight: 'High-density commercial office hub in the administrative heart of Anambra State.',
    linkProjectSlug: 'commercial-office-complex-awka'
  },
  {
    id: 'ngozika-penthouse',
    name: 'Executive Villa & Cantilever Helical Staircase',
    category: 'residential',
    categoryLabel: 'Luxury Residential',
    locationName: 'Ngozika Housing Estate Phase II',
    district: 'Ngozika Estate Corridor',
    coordinates: { lat: "6°14'28\"N", lng: "7°03'54\"E" },
    gridPosition: { x: 42, y: 22 },
    scope: 'Cast-in-place spiral staircase, cantilevered foyer slab, structural framing and turnkey residential execution.',
    year: '2021',
    status: 'Handed Over',
    image: '/assets/images/STAIRCASE CONSTRUCTION/staircase_cantilever_foyer.jpg',
    highlight: 'Advanced architectural concrete craftsmanship with sweeping structural cantilevers.',
    linkProjectSlug: 'cantilever-foyer-staircase'
  },
  {
    id: 'industrial-steel-facility',
    name: 'Tubular Steel Space Frame Industrial Facility',
    category: 'steel',
    categoryLabel: 'Tubular Steel Frame',
    locationName: 'Awka Industrial Layout / Amansea Axis',
    district: 'Industrial Expressway',
    coordinates: { lat: "6°15'12\"N", lng: "7°06'30\"E" },
    gridPosition: { x: 84, y: 18 },
    scope: '36-meter column-free space frame truss, heavy machinery pedestals, and anti-corrosive industrial welding.',
    year: '2018 – 2019',
    status: 'Operational',
    image: '/assets/images/TUBULAR STEEL WORKS/20180706_110913.jpg',
    highlight: 'Engineered for high-volume storage, zero internal column obstructions, and high structural load tolerance.'
  },
  {
    id: 'amawbia-deep-foundation',
    name: 'Substructural Deep Basement & Retaining Wall System',
    category: 'foundation',
    categoryLabel: 'Deep Foundation',
    locationName: 'Amawbia Bypass / Ekwulobia Road',
    district: 'Amawbia Sector',
    coordinates: { lat: "6°11'52\"N", lng: "7°02'58\"E" },
    gridPosition: { x: 26, y: 72 },
    scope: 'Mass concrete retaining barrier, deep earthwork excavation, hydrostatic moisture isolation, and heavy raft slab.',
    year: '2020',
    status: 'Completed & Verified',
    image: '/assets/images/BASEMENT EXCAVATION/IMG_2744.JPG',
    highlight: 'Geotechnical stabilization on sloping topography preventing soil subsidence and moisture ingress.'
  },
  {
    id: 'unizik-solar-grid',
    name: 'Institutional 100kVA Solar Mini-Grid EPCC',
    category: 'solar',
    categoryLabel: 'Clean Energy EPCC',
    locationName: 'Ifite-Awka / UNIZIK Campus Fringe',
    district: 'Ifite Educational Zone',
    coordinates: { lat: "6°14'50\"N", lng: "7°07'12\"E" },
    gridPosition: { x: 88, y: 40 },
    scope: '100kVA hybrid lithium energy storage, rooftop & ground arrays, industrial surge protection and automated synchronizer.',
    year: '2022 – 2023',
    status: 'Operational',
    image: '/assets/images/EARTHING WORK ON REINFORCEMENT/IMG_20170819_114918.jpg',
    highlight: 'Decentralized institutional power ensuring uninterrupted operational resilience across essential facilities.'
  },
  {
    id: 'ameze-country-home',
    name: 'Multi-Tier Residential Country Mansion',
    category: 'residential',
    categoryLabel: 'Country Estate',
    locationName: 'Ameze Village, Aguleri Environs',
    district: 'Awka Capital Territory Region',
    coordinates: { lat: "6°20'40\"N", lng: "6°53'10\"E" },
    gridPosition: { x: 16, y: 15 },
    scope: '7-bedroom palatial mansion, suspended floor rebar slabs, retaining fences, and custom structural steel roof.',
    year: '2021 – 2023',
    status: 'Handed Over',
    image: '/assets/images/BUILDINGS UNDER CONDTRUCTION/residential country home at AMEZE VILLAGE AGULERI.jpg',
    highlight: 'Extensive private estate exemplifying high-grade structural reinforcement and bespoke finishing.',
    linkProjectSlug: 'residential-country-home-ameze'
  },
  {
    id: 'umudala-civic-centre',
    name: 'Umudala Civic & Community Infrastructure',
    category: 'civic',
    categoryLabel: 'Civic Infrastructure',
    locationName: 'Umudala Village, Nanka',
    district: 'Orumba / Awka South Corridor',
    coordinates: { lat: "6°08'24\"N", lng: "7°03'36\"E" },
    gridPosition: { x: 46, y: 88 },
    scope: 'Community civic auditorium, high-capacity drainage works, reinforced concrete portals and youth development facility.',
    year: '2022',
    status: 'Completed & Verified',
    image: '/assets/images/REINFORCEMENT WORKS/IMG_6566.JPG',
    highlight: 'Civic infrastructure project delivered under Arc. Uganeme’s community development mandate.'
  }
];

const CATEGORY_FILTERS = [
  { id: 'all', label: 'All Locations (8)', icon: Compass },
  { id: 'commercial', label: 'Commercial Plazas', icon: Building2 },
  { id: 'residential', label: 'Residential', icon: Home },
  { id: 'foundation', label: 'Deep Foundations', icon: Layers },
  { id: 'steel', label: 'Tubular Steel', icon: Building },
  { id: 'solar', label: 'Clean Energy', icon: Zap }
];

interface AwkaProjectReachMapProps {
  onNavigate?: (route: string) => void;
  onSelectProject?: (project: ProjectItem) => void;
}

export const AwkaProjectReachMap: React.FC<AwkaProjectReachMapProps> = ({
  onNavigate,
  onSelectProject
}) => {
  const [selectedMarkerId, setSelectedMarkerId] = useState<string>('radopin-plaza');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [mapTheme, setMapTheme] = useState<'blueprint' | 'tactical'>('blueprint');
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Filter markers based on chosen category
  const filteredMarkers = useMemo(() => {
    if (activeCategory === 'all') return AWKA_PROJECT_MARKERS;
    return AWKA_PROJECT_MARKERS.filter(m => m.category === activeCategory);
  }, [activeCategory]);

  // Selected marker details
  const activeMarker = useMemo(() => {
    return AWKA_PROJECT_MARKERS.find(m => m.id === selectedMarkerId) || AWKA_PROJECT_MARKERS[0];
  }, [selectedMarkerId]);

  const handleZoom = (delta: number) => {
    setZoomLevel(prev => {
      const next = prev + delta;
      return Math.min(Math.max(next, 0.9), 1.4);
    });
  };

  const handleReset = () => {
    setZoomLevel(1);
    setSelectedMarkerId('radopin-plaza');
    setActiveCategory('all');
  };

  return (
    <section className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-900 relative overflow-hidden" id="awka-reach-map">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 lg:mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
              <span className="w-2.5 h-0.5 bg-orange-500" />
              <span>Geographic Reach &amp; Regional Footprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              Key Projects Across Awka &amp; Anambra State
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
              Explore the physical execution footprint of Solugans &amp; Associates. From commercial plazas at Aroma Junction to deep foundations in Amawbia and industrial steel frameworks across the capital territory.
            </p>
          </div>

          {/* Quick Metrics Badge Cluster */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 self-start lg:self-auto">
            <div className="px-4 py-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800 flex items-center gap-3 shadow-md">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <div>
                <div className="text-[10px] font-mono uppercase text-neutral-400">Firm Footprint</div>
                <div className="text-xs font-bold text-white">8+ Key Awka Urban Sites</div>
              </div>
            </div>

            <div className="px-4 py-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800 flex items-center gap-3 shadow-md">
              <ShieldCheck className="w-4 h-4 text-orange-500 shrink-0" />
              <div>
                <div className="text-[10px] font-mono uppercase text-neutral-400">Quality Verified</div>
                <div className="text-xs font-bold text-white">100% Structural Safety</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-neutral-800/80">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full scrollbar-none">
            {CATEGORY_FILTERS.map(filter => {
              const Icon = filter.icon;
              const isActive = activeCategory === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveCategory(filter.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-orange-600 text-white shadow-md shadow-orange-950/40 font-semibold'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800/80'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{filter.label}</span>
                </button>
              );
            })}
          </div>

          {/* Theme & Map Controls */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <button
              onClick={() => setMapTheme(mapTheme === 'blueprint' ? 'tactical' : 'blueprint')}
              className="px-2.5 py-1.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white flex items-center gap-1.5 cursor-pointer transition-colors"
              title="Toggle Map Style"
            >
              <Layers className="w-3.5 h-3.5 text-orange-500" />
              <span className="hidden sm:inline">Theme:</span>
              <span className="capitalize text-white font-semibold">{mapTheme}</span>
            </button>
          </div>
        </div>

        {/* Main Map Visual Canvas & Detail Drawer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left/Center: Interactive Map Canvas (8 cols) */}
          <div className="lg:col-span-7 xl:col-span-8 bg-neutral-900/60 border border-neutral-800 rounded-2xl overflow-hidden relative shadow-2xl flex flex-col">
            
            {/* Canvas Sub-Header: Geodetic Datum & Coordinates */}
            <div className="px-4 py-3 bg-neutral-950/80 border-b border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-white font-semibold">AWKA METROPOLITAN CORRIDOR</span>
                <span className="hidden sm:inline text-neutral-600">|</span>
                <span className="hidden sm:inline text-neutral-500">DATUM: WGS84 · ZONE 32N</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-neutral-400">
                <span>LAT 6°13&apos;N</span>
                <span>LON 7°04&apos;E</span>
              </div>
            </div>

            {/* Interactive Vector Map Surface */}
            <div 
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#070c16] overflow-hidden select-none"
              style={{
                backgroundColor: mapTheme === 'blueprint' ? '#070f1e' : '#0a0d14'
              }}
            >
              {/* Map Zoom Wrapper */}
              <div 
                className="w-full h-full relative transition-transform duration-500 ease-out origin-center"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                {/* 1. Architectural Blueprint Grid Background */}
                <div 
                  className={`absolute inset-0 pointer-events-none opacity-20 ${
                    mapTheme === 'blueprint'
                      ? 'bg-[linear-gradient(to_right,#38bdf825_1px,transparent_1px),linear-gradient(to_bottom,#38bdf825_1px,transparent_1px)]'
                      : 'bg-[linear-gradient(to_right,#f25c0525_1px,transparent_1px),linear-gradient(to_bottom,#f25c0525_1px,transparent_1px)]'
                  } bg-[size:32px_32px]` }
                />

                {/* 2. Topographical Contours & River / Drainage Vectors */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25" viewBox="0 0 1000 700">
                  {/* Elevation contour rings */}
                  <path d="M 100,200 Q 300,150 500,220 T 900,180" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3,3" />
                  <path d="M 120,350 Q 350,300 600,420 T 880,340" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4,4" />
                  <path d="M 80,520 Q 400,480 650,560 T 920,490" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2,2" />
                  
                  {/* Natural Stream / Drainage channel */}
                  <path d="M 50,650 Q 250,500 420,380 T 800,120" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeOpacity="0.4" />
                </svg>

                {/* 3. Major Road Arteries of Awka (Expressway, Zik Ave, Aroma Junction) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 700">
                  {/* Enugu - Onitsha Expressway (Trunk A - Trans-African Highway) */}
                  <path 
                    d="M -50,380 C 250,370 480,340 750,220 L 1050,110" 
                    fill="none" 
                    stroke="#475569" 
                    strokeWidth="10" 
                    strokeLinecap="round" 
                  />
                  <path 
                    d="M -50,380 C 250,370 480,340 750,220 L 1050,110" 
                    fill="none" 
                    stroke="#f97316" 
                    strokeWidth="2.5" 
                    strokeDasharray="8,6" 
                  />

                  {/* Zik Avenue / Old Road through Eke Awka to Aroma */}
                  <path 
                    d="M 100,680 C 240,540 380,480 500,450 C 650,420 850,320 950,240" 
                    fill="none" 
                    stroke="#334155" 
                    strokeWidth="7" 
                  />
                  <path 
                    d="M 100,680 C 240,540 380,480 500,450 C 650,420 850,320 950,240" 
                    fill="none" 
                    stroke="#94a3b8" 
                    strokeWidth="1" 
                  />

                  {/* Club Road / Abakaliki Street & Secretariat Link */}
                  <path 
                    d="M 500,450 L 520,240 L 720,230" 
                    fill="none" 
                    stroke="#334155" 
                    strokeWidth="5" 
                  />

                  {/* Amawbia Bypass to Ekwulobia / Orumba */}
                  <path 
                    d="M 260,500 L 260,720" 
                    fill="none" 
                    stroke="#475569" 
                    strokeWidth="6" 
                  />

                  {/* Aroma Junction Roundabout (Epicenter) */}
                  <circle cx="500" cy="450" r="18" fill="#f25c05" fillOpacity="0.25" stroke="#f25c05" strokeWidth="2.5" />
                  <circle cx="500" cy="450" r="32" fill="none" stroke="#f25c05" strokeWidth="1" strokeDasharray="3,3" />

                  {/* Amawbia Junction Roundabout */}
                  <circle cx="260" cy="500" r="14" fill="#38bdf8" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="1.5" />

                  {/* UNIZIK Junction / Amansea Hub */}
                  <circle cx="850" cy="280" r="14" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="1.5" />
                </svg>

                {/* 4. Geography & Urban Sector Labels on Map */}
                <div className="absolute top-[48%] left-[45%] pointer-events-none transform -translate-x-1/2">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-orange-400/90 uppercase px-1.5 py-0.5 rounded bg-neutral-950/80 border border-orange-500/40">
                    Aroma Roundabout
                  </span>
                </div>

                <div className="absolute top-[28%] left-[68%] pointer-events-none">
                  <span className="text-[9px] font-mono text-neutral-400 tracking-wider uppercase">
                    Agu-Awka GRA
                  </span>
                </div>

                <div className="absolute top-[16%] left-[36%] pointer-events-none">
                  <span className="text-[9px] font-mono text-neutral-400 tracking-wider uppercase">
                    Ngozika Estate
                  </span>
                </div>

                <div className="absolute top-[68%] left-[18%] pointer-events-none">
                  <span className="text-[9px] font-mono text-neutral-400 tracking-wider uppercase">
                    Amawbia Sector
                  </span>
                </div>

                <div className="absolute top-[32%] left-[84%] pointer-events-none">
                  <span className="text-[9px] font-mono text-neutral-400 tracking-wider uppercase">
                    Ifite / UNIZIK Axis
                  </span>
                </div>

                <div className="absolute bottom-[8%] left-[38%] pointer-events-none">
                  <span className="text-[9px] font-mono text-neutral-500 tracking-widest uppercase">
                    Nanka / Orumba Highway ↓
                  </span>
                </div>

                <div className="absolute top-[8%] left-[8%] pointer-events-none">
                  <span className="text-[9px] font-mono text-neutral-500 tracking-widest uppercase">
                    ↖ Aguleri / Otuocha Corridor
                  </span>
                </div>

                {/* 5. Interactive Project Markers */}
                {filteredMarkers.map(marker => {
                  const isSelected = selectedMarkerId === marker.id;
                  const isPrimaryHub = marker.id === 'radopin-plaza';

                  return (
                    <button
                      key={marker.id}
                      type="button"
                      aria-label={`Select project marker: ${marker.name} in ${marker.locationName}, ${marker.district}`}
                      aria-pressed={isSelected}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 z-20 group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded-full"
                      style={{
                        left: `${marker.gridPosition.x}%`,
                        top: `${marker.gridPosition.y}%`,
                      }}
                      onClick={() => setSelectedMarkerId(marker.id)}
                    >
                      {/* Pulse Ring when selected */}
                      {isSelected && (
                        <div className="absolute -inset-3 rounded-full bg-orange-500/30 animate-ping pointer-events-none" />
                      )}

                      {/* Ripple background ring */}
                      <div className={`absolute -inset-1.5 rounded-full transition-all duration-300 ${
                        isSelected 
                          ? 'bg-orange-500/40 scale-125' 
                          : 'bg-neutral-800/40 group-hover:bg-orange-500/20 group-hover:scale-110'
                      }`} />

                      {/* Main Pin Node */}
                      <div className={`relative flex items-center justify-center rounded-full transition-all duration-300 shadow-xl ${
                        isSelected
                          ? 'w-10 h-10 sm:w-11 sm:h-11 bg-orange-600 text-white ring-4 ring-orange-400/40 scale-110'
                          : isPrimaryHub
                          ? 'w-8 h-8 sm:w-9 sm:h-9 bg-neutral-900 border-2 border-orange-500 text-orange-400 group-hover:bg-orange-600 group-hover:text-white'
                          : 'w-7 h-7 sm:w-8 sm:h-8 bg-neutral-900/95 border-2 border-neutral-600 text-neutral-300 group-hover:border-orange-500 group-hover:text-orange-400'
                      }`}>
                        {marker.category === 'commercial' && <Building2 className="w-4 h-4" />}
                        {marker.category === 'residential' && <Home className="w-3.5 h-3.5" />}
                        {marker.category === 'foundation' && <Layers className="w-3.5 h-3.5" />}
                        {marker.category === 'steel' && <Building className="w-3.5 h-3.5" />}
                        {marker.category === 'solar' && <Zap className="w-3.5 h-3.5" />}
                        {marker.category === 'civic' && <MapPin className="w-3.5 h-3.5" />}
                      </div>

                      {/* Floating Micro-Badge */}
                      <div className={`absolute top-full mt-1.5 left-1/2 -translate-x-1/2 transition-all duration-200 pointer-events-none whitespace-nowrap z-30 ${
                        isSelected 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100'
                      }`}>
                        <div className="px-2 py-0.5 rounded bg-neutral-950/95 border border-neutral-700 shadow-xl text-[10px] font-bold text-white flex items-center gap-1">
                          <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-orange-500' : 'bg-neutral-400'}`} />
                          <span className="truncate max-w-[140px] sm:max-w-[180px]">{marker.name}</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Map Floating HUD: Navigation & Zoom Tools */}
              <div className="absolute top-4 right-4 z-30 flex flex-col gap-1.5">
                <button
                  onClick={() => handleZoom(0.15)}
                  className="w-8 h-8 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 text-white flex items-center justify-center shadow-lg cursor-pointer transition-colors active:scale-95"
                  aria-label="Zoom in map"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleZoom(-0.15)}
                  className="w-8 h-8 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 text-white flex items-center justify-center shadow-lg cursor-pointer transition-colors active:scale-95"
                  aria-label="Zoom out map"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={handleReset}
                  className="w-8 h-8 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 text-neutral-300 hover:text-white flex items-center justify-center shadow-lg cursor-pointer transition-colors active:scale-95"
                  aria-label="Reset map view"
                  title="Reset Map"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Map Floating HUD: Compass & Scale */}
              <div className="absolute bottom-4 left-4 z-30 pointer-events-none flex items-center gap-3">
                {/* North Indicator */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-950/90 border border-neutral-800/80 text-[10px] font-mono text-neutral-300">
                  <Navigation className="w-3 h-3 text-orange-500 transform -rotate-45" />
                  <span>NORTH</span>
                </div>
                {/* Graphic Scale */}
                <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded bg-neutral-950/90 border border-neutral-800/80 text-[10px] font-mono text-neutral-400">
                  <div className="w-12 h-1 bg-neutral-600 relative">
                    <div className="absolute top-0 left-0 w-6 h-full bg-orange-500" />
                  </div>
                  <span>2.0 KM</span>
                </div>
              </div>

              {/* Map Floating Legend (Bottom Right) */}
              <div className="absolute bottom-4 right-4 z-30 hidden sm:flex items-center gap-2 text-[10px] font-mono bg-neutral-950/90 border border-neutral-800/80 px-3 py-1.5 rounded-lg text-neutral-400">
                <span className="flex items-center gap-1 text-orange-400">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  <span>Active Marker</span>
                </span>
                <span>·</span>
                <span>Click Pin to Inspect</span>
              </div>
            </div>

            {/* Quick Location Ribbon below canvas */}
            <div className="p-3 bg-neutral-950/90 border-t border-neutral-800 flex items-center gap-2 overflow-x-auto scrollbar-none">
              <span className="text-[11px] font-mono uppercase text-neutral-500 shrink-0 pl-1">
                Quick Jump:
              </span>
              {filteredMarkers.map(m => (
                <button
                  key={m.id}
                  onClick={() => setSelectedMarkerId(m.id)}
                  className={`px-2.5 py-1 rounded text-xs whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                    selectedMarkerId === m.id
                      ? 'bg-neutral-800 text-orange-400 font-semibold border border-neutral-700'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  {m.name.split(' ')[0]} ({m.district.split(' ')[0]})
                </button>
              ))}
            </div>
          </div>

          {/* Right: Selected Project Inspector Card (4/5 cols) */}
          <div className="lg:col-span-5 xl:col-span-4 bg-neutral-900/80 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col backdrop-blur-sm">
            
            {/* Project Photo Preview Frame */}
            <div className="relative aspect-[16/10] w-full bg-neutral-950 overflow-hidden group">
              <img
                src={activeMarker.image}
                alt={activeMarker.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
              
              {/* Category & Status Badges */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-orange-950/90 text-orange-400 border border-orange-800/80 shadow-md">
                  {activeMarker.categoryLabel}
                </span>

                <span className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-400 bg-neutral-950/80 border border-emerald-900/60 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>{activeMarker.status}</span>
                </span>
              </div>

              {/* Coordinates Overlay */}
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <div className="text-[10px] font-mono text-neutral-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  <span>{activeMarker.locationName}</span>
                </div>
                <div className="text-[10px] font-mono text-neutral-400 mt-0.5">
                  GPS: {activeMarker.coordinates.lat}, {activeMarker.coordinates.lng}
                </div>
              </div>
            </div>

            {/* Inspector Details Body */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-orange-400 mb-1">
                  {activeMarker.district}
                </div>
                <h3 className="text-xl font-bold text-white font-display leading-tight">
                  {activeMarker.name}
                </h3>
                <p className="text-xs text-neutral-300 mt-2.5 leading-relaxed font-sans">
                  {activeMarker.scope}
                </p>

                {/* Key Technical Highlight Callout */}
                <div className="mt-4 p-3 rounded-lg bg-neutral-950/80 border border-neutral-800 text-xs">
                  <div className="text-[10px] font-mono uppercase text-neutral-400 font-semibold mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-orange-500" />
                    <span>Engineering Significance</span>
                  </div>
                  <p className="text-neutral-300 italic">
                    &ldquo;{activeMarker.highlight}&rdquo;
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 border-t border-neutral-800/80 flex flex-col gap-2">
                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('projects');
                    }
                  }}
                  className="w-full py-2.5 px-4 rounded-lg bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-orange-950/40 hover:scale-[1.01]"
                >
                  <span>Explore in Project Portfolio</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('contact');
                    }
                  }}
                  className="w-full py-2 px-3 rounded-lg bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Inquire for Site Inspection in Awka</span>
                  <ExternalLink className="w-3.5 h-3.5 text-orange-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
