"use client";

import Image from "next/image";
import Script from "next/script";
import React, { useState } from "react";

// ============================================================================
// PORTFOLIO CONFIGURATION - Feudal Japan Low-Poly 3D Asset Pack
// ============================================================================
interface Asset {
  id: string;
  name: string;
  category: "characters" | "buildings" | "blocks" | "props" | "trees";
  description: string;
  tris: number;
  textures: string;
  rigged: boolean;
  animations?: string[];
  keyFeature: string;
}

const CHARACTER_ANIMATIONS = [
  "action_pick",
  "attack",
  "land",
  "jump",
  "hit",
  "fall",
  "run",
  "walk_normal",
  "death",
  "equip/holster_weapon",
  "action_bow",
];

const ASSET_LIST: Asset[] = [
  // Characters (12)
  {
    id: "char-samurai",
    name: "Samurai",
    category: "characters",
    description:
      "Chibi 3D warrior stylized with cardboard folds. Features pre-configured lacquer armor plates and a removable katana.",
    tris: 1420,
    textures: "1x Atlas (2048x2048)",
    rigged: true,
    animations: CHARACTER_ANIMATIONS,
    keyFeature: "Detachable katana prop & stylized horn helmet",
  },
  {
    id: "char-archer",
    name: "Archer",
    category: "characters",
    description:
      "Chibi archer equipped with a low-poly yumi bow and arrow quiver mesh. Bow includes bones for animation drawing.",
    tris: 1180,
    textures: "1x Atlas (2048x2048)",
    rigged: true,
    animations: CHARACTER_ANIMATIONS,
    keyFeature: "Bending bow model with rig bones",
  },
  {
    id: "char-blacksmith",
    name: "Blacksmith",
    category: "characters",
    description:
      "Village crafter 3D model holding a heavy iron hammer, featuring a layered leather apron mesh.",
    tris: 1250,
    textures: "1x Atlas (2048x2048)",
    rigged: true,
    animations: CHARACTER_ANIMATIONS,
    keyFeature: "Separate hammer weapon prop & cloth setup ready",
  },
  {
    id: "char-lady-black",
    name: "Lady Black",
    category: "characters",
    description:
      "Stealthy agent model dressed in a sleek black folded kimono mesh, optimized for mobile game performance.",
    tris: 1050,
    textures: "1x Atlas (2048x2048)",
    rigged: true,
    animations: CHARACTER_ANIMATIONS,
    keyFeature: "Detachable fan blade weapon attachments",
  },
  {
    id: "char-lady-red",
    name: "Lady Red",
    category: "characters",
    description:
      "Court lady character wearing a decorative crimson kimono mesh, holding a stylized paper parasol.",
    tris: 1100,
    textures: "1x Atlas (2048x2048)",
    rigged: true,
    animations: CHARACTER_ANIMATIONS,
    keyFeature: "Fully modeled paper parasol accessory mesh",
  },
  {
    id: "char-lord",
    name: "Lord",
    category: "characters",
    description:
      "Shogun commander mesh featuring thick layered helmet horns, family crest decal, and banner support.",
    tris: 1550,
    textures: "1x Atlas (2048x2048)",
    rigged: true,
    animations: CHARACTER_ANIMATIONS,
    keyFeature: "Intricate helmet mesh & back-mounted war flag (Sashimono)",
  },
  {
    id: "char-shinobi",
    name: "Shinobi",
    category: "characters",
    description:
      "Agile scout character wrapped in dark fabric textures, equipped with dual low-poly ninjato swords.",
    tris: 1120,
    textures: "1x Atlas (2048x2048)",
    rigged: true,
    animations: CHARACTER_ANIMATIONS,
    keyFeature: "Dual back-mounted ninjato weapon attachments",
  },
  {
    id: "char-merchant",
    name: "Merchant",
    category: "characters",
    description:
      "Town vendor 3D model carrying a modular wooden backpack loaded with coins and scrolls.",
    tris: 1300,
    textures: "1x Atlas (2048x2048)",
    rigged: true,
    animations: CHARACTER_ANIMATIONS,
    keyFeature: "Highly detailed trade backpack prop mesh",
  },
  {
    id: "char-ninja",
    name: "Ninja",
    category: "characters",
    description:
      "Classic spy/assassin character model designed for projectile weapon animations (shurikens).",
    tris: 1080,
    textures: "1x Atlas (2048x2048)",
    rigged: true,
    animations: CHARACTER_ANIMATIONS,
    keyFeature: "Includes 3 low-poly throwing weapon meshes",
  },
  {
    id: "char-monk",
    name: "Monk",
    category: "characters",
    description:
      "Serene priest model wearing round wooden beads and carrying a ringed monk staff (khakkhara).",
    tris: 980,
    textures: "1x Atlas (2048x2048)",
    rigged: true,
    animations: CHARACTER_ANIMATIONS,
    keyFeature: "Ornate khakkhara priest staff prop",
  },
  {
    id: "char-lady-samurai",
    name: "Lady Samurai",
    category: "characters",
    description:
      "Elite warrior model clad in light red-lacquered armor plates, wielding a long naginata polearm.",
    tris: 1340,
    textures: "1x Atlas (2048x2048)",
    rigged: true,
    animations: CHARACTER_ANIMATIONS,
    keyFeature: "Long reach naginata weapon mesh included",
  },
  {
    id: "char-farmer",
    name: "Farmer",
    category: "characters",
    description:
      "Simple villager 3D model wearing a wide conical hat, carrying a wooden rake prop.",
    tris: 950,
    textures: "1x Atlas (2048x2048)",
    rigged: true,
    animations: CHARACTER_ANIMATIONS,
    keyFeature: "Removable conical sun hat & rake meshes",
  },

  // Pre-Built Buildings (5)
  {
    id: "build-1",
    name: "Goju Pagoda Tower",
    category: "buildings",
    description:
      "A grand, five-tiered traditional Japanese pagoda tower. A majestic, high-altitude landmark.",
    tris: 4890,
    textures: "1x Atlas (2048x2048)",
    rigged: false,
    keyFeature: "5-tiered stackable pagoda structure",
  },
  {
    id: "build-2",
    name: "Minka Country Cottage",
    category: "buildings",
    description:
      "A traditional Japanese countryside home featuring a thick low-poly thatch roof and sliding paper shoji doors.",
    tris: 1780,
    textures: "1x Atlas (2048x2048)",
    rigged: false,
    keyFeature: "Detailed shoji doors & rustic thatch roof",
  },
  {
    id: "build-3",
    name: "Raised Shinto Pavilion",
    category: "buildings",
    description:
      "A raised wooden sanctuary featuring a wide veranda and a steep thatched roof, ideal for sacred village outskirts.",
    tris: 3100,
    textures: "1x Atlas (2048x2048)",
    rigged: false,
    keyFeature: "Elevated foundation pillars & steps",
  },
  {
    id: "build-4",
    name: "Lakeside Tea House",
    category: "buildings",
    description:
      "A scenic, raised pavilion complete with protective wooden railings, paper screen walls, and a tiled roof.",
    tris: 2150,
    textures: "1x Atlas (2048x2048)",
    rigged: false,
    keyFeature: "Wrap-around balcony deck & railings",
  },
  {
    id: "build-5",
    name: "Grand Dojo Hall",
    category: "buildings",
    description:
      "An impressive two-tiered assembly hall featuring double-layered roofs and wide sliding doors, serving as the town's training hub.",
    tris: 2450,
    textures: "1x Atlas (2048x2048)",
    rigged: false,
    keyFeature: "Double-layered roof & grand entry doors",
  },

  // Building Blocks

  {
    id: "modular-building",
    name: "Modular Building Pack",
    category: "blocks",
    description:
      "All individual modular building parts gathered together in one model to easily create structures in Unity.",
    tris: 3200,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Includes pillars, walls, roofs, and beams",
  },
  {
    id: "modular-wall",
    name: "Modular Outer Wall",
    category: "blocks",
    description:
      "Standard structural outer wall module optimized for grid-based snapping layouts around your village.",
    tris: 450,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Perfect pivot offsets for defense line snapping",
  },
  {
    id: "modular-gate",
    name: "Modular Outer Wall Gate",
    category: "blocks",
    description:
      "Grand entrance gateway frame designed to fit seamlessly with modular outer wall pieces.",
    tris: 1250,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Doors isolated on separate pivots for open/close animation",
  },

  // Other Props (18)
  {
    id: "prop-bridge",
    name: "Arched Bridge",
    category: "props",
    description:
      "Traditional arched wooden bridge for spanning garden streams or dry gravel paths.",
    tris: 420,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Perfect alignment snap for water planes",
  },
  {
    id: "prop-bullseye",
    name: "Training Bullseye",
    category: "props",
    description:
      "Archery target board painted with red rings, mounted on a wooden frame.",
    tris: 320,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Detachable board node for hit effects",
  },
  {
    id: "prop-cupboard",
    name: "Storage Cupboard",
    category: "props",
    description:
      "Classic wooden storage cupboard with detailed cabinet panels and sliding doors.",
    tris: 640,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Functional sliding cabinet doors",
  },
  {
    id: "prop-fence",
    name: "Garden Fence",
    category: "props",
    description:
      "Short bamboo and wood fence section for enclosing gardens and defining paths.",
    tris: 130,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Seamless tiling and corner snapping support",
  },
  {
    id: "prop-frog",
    name: "Ornamental Frog Statue",
    category: "props",
    description:
      "Cute low-poly stone frog statue, a traditional garden decoration for good luck.",
    tris: 150,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Highly optimized low-poly stone mesh",
  },
  {
    id: "prop-grass",
    name: "Grass Clump",
    category: "props",
    description:
      "Stylized low-poly grass cluster to add organic detail to scene bases and paths.",
    tris: 90,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Includes vertex paint for wind-sway shader integration",
  },
  {
    id: "prop-groundlamp",
    name: "Paper Ground Lamp",
    category: "props",
    description:
      "Low-profile paper and wood floor lantern emitting a soft warm glow.",
    tris: 280,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Hollow light chamber ready for emissive setup",
  },
  {
    id: "prop-lantern",
    name: "Stone Toro Lantern",
    category: "props",
    description:
      "Stylized traditional stone garden lantern. Model includes hollow light chambers.",
    tris: 480,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Pre-cut light chambers ready for point lights",
  },
  {
    id: "prop-mat",
    name: "Tatami Mat",
    category: "props",
    description:
      "Traditional woven straw tatami mat layout piece for indoor floor decoration.",
    tris: 60,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Seamless tiling layout snapping support",
  },
  {
    id: "prop-papertree",
    name: "Papercraft Shrub",
    category: "props",
    description:
      "Stylized paper-folded decorative bush asset for stylized outdoor settings.",
    tris: 320,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Vibrant low-poly folded leaf cards",
  },
  {
    id: "prop-pond",
    name: "Garden Pond",
    category: "props",
    description:
      "Small low-poly water pond featuring stone borders and water plane mesh.",
    tris: 780,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Separate stone borders and water plane layers",
  },
  {
    id: "prop-sandbox",
    name: "Zen Sand Box",
    category: "props",
    description:
      "Traditional miniature sandbox with raked sand pattern for peaceful garden setups.",
    tris: 420,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Highly detailed normal mapped sand ridges",
  },
  {
    id: "prop-stone-path",
    name: "Stepping Stone Path",
    category: "props",
    description:
      "Set of flat stepping stones to build natural looking garden walkways.",
    tris: 210,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Includes 4 modular stone layout elements",
  },
  {
    id: "prop-table",
    name: "Low Wooden Table",
    category: "props",
    description:
      "Traditional low-profile wood tea table for indoor dojo and cottage decoration.",
    tris: 160,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Perfect flat top collision bounds",
  },
  {
    id: "prop-teapot1",
    name: "Teapot Variant A",
    category: "props",
    description: "Stylized ceramic teapot for indoor tea ceremony scenes.",
    tris: 110,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Highly detailed lid and spout design",
  },
  {
    id: "prop-teapot2",
    name: "Teapot Variant B",
    category: "props",
    description:
      "Round earthenware kettle prop for hearth and kitchen settings.",
    tris: 90,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Rustic low-poly clay textures mapping",
  },
  {
    id: "prop-torigate",
    name: "Red Torii Gate",
    category: "props",
    description:
      "Traditional Japanese red shrine gateway arch for outlining paths.",
    tris: 650,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Accented stone base blocks & lintel styling",
  },
  {
    id: "prop-torilamp",
    name: "Tori Lantern Post",
    category: "props",
    description:
      "Tall wooden lantern post matching Torii gate colors for pathways.",
    tris: 320,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Integrated paper lantern hanging hook",
  },

  // Trees (7)
  {
    id: "tree-fir",
    name: "Fir Tree",
    category: "trees",
    description:
      "Classic evergreen fir tree model featuring layered stylized branch needles.",
    tris: 850,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Stylized low-poly leaf clusters",
  },
  {
    id: "tree-fir2",
    name: "Fir Tree 2",
    category: "trees",
    description:
      "Alternate variant of the evergreen fir tree with a dense needle cluster layout.",
    tris: 920,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Dense double needle cluster layout",
  },
  {
    id: "tree-oak",
    name: "Oak Tree",
    category: "trees",
    description:
      "Stately deciduous oak tree with broad shade-giving leafy canopies.",
    tris: 640,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Broad canopy shade model",
  },
  {
    id: "tree-oak2",
    name: "Oak Tree 2",
    category: "trees",
    description:
      "Large gnarly oak tree variant with detailed branch structures and a wide base.",
    tris: 780,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Thick gnarly trunk and branches",
  },
  {
    id: "tree-pine",
    name: "Pine Tree",
    category: "trees",
    description:
      "Tall pine tree with conical needle structures optimized for forest scenes.",
    tris: 1100,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Tall conical evergreen design",
  },
  {
    id: "tree-sakura",
    name: "Sakura Tree",
    category: "trees",
    description:
      "Stunning low-poly cherry blossom tree with puffy stylized pink flower clusters.",
    tris: 1850,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Puffy pink cherry blossom clusters",
  },
  {
    id: "tree-spruce",
    name: "Spruce Tree",
    category: "trees",
    description:
      "Layered needle branch spruce tree, perfect for high-altitude tabletop battlefields.",
    tris: 950,
    textures: "Shared Atlas",
    rigged: false,
    keyFeature: "Layered branch structure",
  },
];

const getAssetImagePath = (assetId: string): string | null => {
  if (
    assetId.startsWith("char-") ||
    assetId.startsWith("build-") ||
    assetId.startsWith("prop-")
  ) {
    return `/images/${assetId}.png`;
  }
  if (
    assetId === "modular-building" ||
    assetId === "block-toji-door" ||
    assetId === "block-toji-wall" ||
    assetId === "block-roof-corner"
  ) {
    return `/images/modu-building.png`;
  }
  if (assetId.startsWith("modular-")) {
    return `/images/${assetId}.png`;
  }
  const treeImageMapping: Record<string, string> = {
    "tree-fir": "tree-fir1.png",
    "tree-fir2": "tree-fir2.png",
    "tree-oak": "tree-oak1.png",
    "tree-oak2": "tree-oak2.png",
    "tree-pine": "tree-pine1.png",
    "tree-sakura": "tree-sakura.png",
    "tree-spruce": "tree-pine2.png",
  };
  if (treeImageMapping[assetId]) {
    return `/images/${treeImageMapping[assetId]}`;
  }
  return null;
};

const getAssetModelPath = (assetId: string): string => {
  if (
    assetId === "block-toji-door" ||
    assetId === "block-toji-wall" ||
    assetId === "block-roof-corner"
  ) {
    return `/models/modular-building.glb`;
  }
  return `/models/${assetId}.glb`;
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<
    "characters" | "buildings" | "blocks" | "trees" | "props"
  >("characters");
  const [activeAsset, setActiveAsset] = useState<Asset | null>(ASSET_LIST[0]);
  const [copied, setCopied] = useState(false);
  const [show3d, setShow3d] = useState(false);

  const filteredAssets = ASSET_LIST.filter(
    (asset) => asset.category === selectedCategory,
  );

  const copyEmail = () => {
    navigator.clipboard.writeText("sales@studiopapercraft.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen text-[#3a2e2b] font-sans selection:bg-[#e05a47]/20 selection:text-[#e05a47] pb-16">
      <Script
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"
        type="module"
        strategy="afterInteractive"
      />
      {/* Playful craft-style header pattern */}
      <div className="w-full h-2 bg-gradient-to-r from-[#e05a47] via-[#f4be41] to-[#5da2d5]" />

      {/* Header bar */}
      <header className="border-b-2 border-[#3a2e2b] bg-[#fdfaf2] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Stamp-like cardboard token */}
            <span className="w-10 h-10 rounded-xl bg-[#ffffff] border-2 border-[#3a2e2b] flex items-center justify-center font-display font-bold text-[#e05a47] shadow-cardboard-sm hover:scale-105 active:translate-y-0.5 active:shadow-none transition-all duration-100 select-none">
              <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="rounded-xl"
              />
            </span>
            <div>
              <span className="font-display font-extrabold text-xl tracking-tight text-[#3a2e2b]">
                Polyport
              </span>
              <span className="text-[9px] block font-mono text-[#8a7a6c] tracking-widest uppercase">
                🕹️ Unity 3D Asset Library
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#ebdcb9] text-[#3a2e2b] border-2 border-[#3a2e2b]">
              <span className="w-2 h-2 rounded-full bg-[#7cb342] animate-pulse" />
              Unity 2022.3+ Verified
            </span>
            <a
              href="#contact"
              className="px-4 py-1.5 rounded-xl text-xs font-bold bg-[#f4be41] hover:bg-[#e4ad2e] border-2 border-[#3a2e2b] text-[#3a2e2b] shadow-cardboard-sm hover:-translate-y-0.5 transition-all duration-150"
            >
              Request Custom Meshes
            </a>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <main className="max-w-7xl mx-auto px-6 py-12 relative">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#ebdcb9] text-[#3a2e2b] w-fit border-2 border-[#3a2e2b] shadow-cardboard-sm">
              <span>🎏 Low-Poly 3D Assets</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-none text-[#3a2e2b]">
              Chibi Papercraft <br />
              <span className="text-[#e05a47]">Feudal Japan Set</span>
            </h1>

            <p className="text-base text-[#6b5853] font-medium leading-relaxed">
              An optimized 3D asset package featuring 12 rigged chibi
              characters, 5 pre-built buildings, modular building blocks, and
              environment props. Perfect for mobile / pc games, RTS prototypes,
              or stylized VR simulators.
            </p>

            {/* Quick stats tags */}
            <div className="grid grid-cols-2 gap-3 py-2">
              <div className="bg-[#fcf8f2] border-2 border-[#3a2e2b] rounded-2xl p-3 shadow-cardboard-sm">
                <span className="text-[10px] text-[#8a7a6c] font-display font-bold uppercase tracking-wider block">
                  12 3D Characters
                </span>
                <span className="text-xs font-bold text-[#3a2e2b] mt-0.5">
                  FBX Meshes & Rigs with actions
                </span>
              </div>
              <div className="bg-[#fcf8f2] border-2 border-[#3a2e2b] rounded-2xl p-3 shadow-cardboard-sm">
                <span className="text-[10px] text-[#8a7a6c] font-display font-bold uppercase tracking-wider block">
                  5 Houses
                </span>
                <span className="text-xs font-bold text-[#3a2e2b] mt-0.5">
                  Dojo, Market, Cottages
                </span>
              </div>
              <div className="bg-[#fcf8f2] border-2 border-[#3a2e2b] rounded-2xl p-3 shadow-cardboard-sm">
                <span className="text-[10px] text-[#8a7a6c] font-display font-bold uppercase tracking-wider block">
                  Grid Blocks
                </span>
                <span className="text-xs font-bold text-[#3a2e2b] mt-0.5">
                  Modular walls and roofs
                </span>
              </div>
              <div className="bg-[#fcf8f2] border-2 border-[#3a2e2b] rounded-2xl p-3 shadow-cardboard-sm">
                <span className="text-[10px] text-[#8a7a6c] font-display font-bold uppercase tracking-wider block">
                  Hi-Q Textures
                </span>
                <span className="text-xs font-bold text-[#3a2e2b] mt-0.5">
                  High-res individual texture maps
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#explorer"
                className="px-6 py-3 rounded-xl bg-[#e05a47] hover:bg-[#d04633] text-white font-display font-bold shadow-cardboard hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-cardboard-sm transition-all duration-150 text-center text-sm border-2 border-[#3a2e2b]"
              >
                🎮 Explore 3D Assets
              </a>
              <a
                href="#specifications"
                className="px-6 py-3 rounded-xl bg-[#ebdcb9] hover:bg-[#dfca99] text-[#3a2e2b] font-display font-bold shadow-cardboard hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-cardboard-sm transition-all duration-150 text-center text-sm border-2 border-[#3a2e2b]"
              >
                📜 Unity Specs Sheet
              </a>
            </div>
          </div>

          {/* Main Visual Box (Cardboard cutout look) */}
          <div className="lg:col-span-7">
            <div className="relative group rounded-3xl border-2 border-[#3a2e2b] bg-[#ebdcb9] aspect-video shadow-cardboard flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:shadow-cardboard-lg hover:-translate-y-0.5">
              {/* Paper Grid background */}
              <div className="absolute inset-0 bg-[radial-gradient(#3a2e2b_1px,transparent_1px)] [background-size:1.5rem_1.5rem] opacity-15" />

              <div className="relative z-10 space-y-4">
                {/* Paper toy character icon box */}
                <div className="mx-auto w-16 h-16 rounded-2xl bg-[#fcf8f2] border-2 border-[#3a2e2b] flex items-center justify-center text-3xl shadow-cardboard-sm group-hover:scale-105 transition-transform duration-300">
                  📦
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-xl text-[#3a2e2b]">
                    Unity Village Demo Scene
                  </h3>
                  <p className="text-[10px] text-[#e05a47] font-mono tracking-wider uppercase font-bold">
                    ✨ Prefab Layout Scene Included
                  </p>
                  <p className="text-xs text-[#6b5853] max-w-md mx-auto mt-2 leading-relaxed">
                    Arrange the 12 cute chibi meshes and modular building
                    prefabs to construct customizable 3D tabletop battle fields
                    inside Unity.
                  </p>
                </div>
                <div className="inline-block px-4 py-1.5 bg-[#fdfaf2] border-2 border-[#3a2e2b] rounded-xl text-xs font-display font-bold shadow-cardboard-sm">
                  Drag & Drop .unitypackage
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explorer Section */}
        <section
          id="explorer"
          className="py-8 relative border-t-2 border-dashed border-[#3a2e2b]/30"
        >
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-display font-extrabold text-[#3a2e2b]">
                Asset Blueprints Explorer
              </h2>
              <p className="text-sm text-[#6b5853] font-medium mt-1">
                Select a chibi model, pre-built house, or modular block below to
                view mesh specs.
              </p>
            </div>

            {/* Category Select Filters as tabs/stickers */}
            <div className="flex flex-wrap gap-2 bg-[#ebdcb9]/40 p-2 rounded-2xl border-2 border-[#3a2e2b] shadow-cardboard-sm">
              <button
                onClick={() => {
                  setSelectedCategory("characters");
                  setShow3d(false);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-display font-bold transition-all duration-150 border-2 ${
                  selectedCategory === "characters"
                    ? "bg-[#e05a47] text-white border-[#3a2e2b] shadow-cardboard-sm -translate-y-0.5"
                    : "text-[#3a2e2b] border-transparent hover:border-[#3a2e2b]/30"
                }`}
              >
                Chibi Characters (12)
              </button>
              <button
                onClick={() => {
                  setSelectedCategory("buildings");
                  setShow3d(false);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-display font-bold transition-all duration-150 border-2 ${
                  selectedCategory === "buildings"
                    ? "bg-[#e05a47] text-white border-[#3a2e2b] shadow-cardboard-sm -translate-y-0.5"
                    : "text-[#3a2e2b] border-transparent hover:border-[#3a2e2b]/30"
                }`}
              >
                Buildings (5)
              </button>
              <button
                onClick={() => {
                  setSelectedCategory("blocks");
                  setShow3d(false);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-display font-bold transition-all duration-150 border-2 ${
                  selectedCategory === "blocks"
                    ? "bg-[#e05a47] text-white border-[#3a2e2b] shadow-cardboard-sm -translate-y-0.5"
                    : "text-[#3a2e2b] border-transparent hover:border-[#3a2e2b]/30"
                }`}
              >
                Building Blocks
              </button>
              <button
                onClick={() => {
                  setSelectedCategory("trees");
                  setShow3d(false);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-display font-bold transition-all duration-150 border-2 ${
                  selectedCategory === "trees"
                    ? "bg-[#e05a47] text-white border-[#3a2e2b] shadow-cardboard-sm -translate-y-0.5"
                    : "text-[#3a2e2b] border-transparent hover:border-[#3a2e2b]/30"
                }`}
              >
                Trees (7)
              </button>
              <button
                onClick={() => {
                  setSelectedCategory("props");
                  setShow3d(false);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-display font-bold transition-all duration-150 border-2 ${
                  selectedCategory === "props"
                    ? "bg-[#e05a47] text-white border-[#3a2e2b] shadow-cardboard-sm -translate-y-0.5"
                    : "text-[#3a2e2b] border-transparent hover:border-[#3a2e2b]/30"
                }`}
              >
                Props (18)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Asset Grid Column */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredAssets.map((asset) => (
                <div
                  key={asset.id}
                  onClick={() => {
                    setActiveAsset(asset);
                    setShow3d(false);
                  }}
                  className={`group relative flex flex-col justify-between rounded-2xl border-2 p-4 cursor-pointer transition-all duration-150 ${
                    activeAsset?.id === asset.id
                      ? "border-[#3a2e2b] bg-[#ebdcb9] shadow-cardboard-sm translate-y-0.5"
                      : "border-[#3a2e2b] bg-[#fcf8f2] shadow-cardboard hover:-translate-y-0.5 hover:shadow-cardboard-lg"
                  }`}
                >
                  <div className="flex justify-between items-start gap-2 mb-2">
                    {/* Cute tag label */}
                    <span className="text-[9px] font-display font-bold uppercase tracking-wider text-[#e05a47] px-2 py-0.5 rounded bg-[#f5ecd6] border border-[#3a2e2b]">
                      {asset.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#8a7a6c] bg-[#ebdcb9]/40 px-1.5 py-0.5 rounded border border-[#3a2e2b]/20">
                      {asset.tris} tris
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-[#3a2e2b] text-base group-hover:text-[#e05a47] transition-colors">
                    {asset.name}
                  </h3>
                  <p className="text-[11px] text-[#6b5853] font-medium line-clamp-2 mt-1.5 leading-normal">
                    {asset.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#7cb342]">
                      {asset.rigged ? "✨ Mecanim Rigged" : "📦 Static Mesh"}
                    </span>
                    <span className="text-[9px] text-[#8a7a6c] font-mono font-bold">
                      TAG-{asset.id.split("-")[1].substring(0, 4).toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Asset Inspector Panel Column */}
            <div className="lg:col-span-5 bg-[#fcf8f2] border-2 border-[#3a2e2b] rounded-3xl p-6 shadow-cardboard sticky top-24">
              {activeAsset ? (
                <div className="space-y-5">
                  <div className="flex justify-between items-start">
                    <div>
                      {/* Sticky-like tag */}
                      <span className="inline-block px-2.5 py-0.5 rounded-lg text-[10px] font-display font-bold uppercase tracking-wider bg-[#5da2d5] text-white border-2 border-[#3a2e2b] shadow-cardboard-sm">
                        {activeAsset.category}
                      </span>
                      <h3 className="text-2xl font-display font-extrabold text-[#3a2e2b] mt-2">
                        {activeAsset.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-display font-extrabold text-[#e05a47]">
                        {activeAsset.tris}
                      </div>
                      <div className="text-[9px] text-[#8a7a6c] font-mono uppercase font-bold">
                        Triangles
                      </div>
                    </div>
                  </div>

                  {/* 3D Model Render Viewport / Image Placeholder */}
                  <div className="relative aspect-square w-full rounded-2xl border-2 border-[#3a2e2b] bg-[#ebdcb9] flex flex-col items-center justify-center overflow-hidden shadow-cardboard-sm group/preview">
                    {/* Paper Grid background */}
                    <div className="absolute inset-0 bg-[radial-gradient(#3a2e2b_1.2px,transparent_1.2px)] [background-size:1.2rem_1.2rem] opacity-10" />

                    {/* Fold guides lines */}
                    <div className="absolute inset-4 border-2 border-dashed border-[#8a7a6c]/30 rounded-xl pointer-events-none" />

                    {show3d ? (
                      <div className="w-full h-full relative">
                        {React.createElement(
                          "model-viewer",
                          {
                            src: getAssetModelPath(activeAsset.id),
                            alt: activeAsset.name,
                            "auto-rotate": true,
                            "camera-controls": true,
                            "shadow-intensity": "1",
                            style: {
                              width: "100%",
                              height: "100%",
                              outline: "none",
                            },
                          } as any,
                          React.createElement(
                            "div",
                            {
                              slot: "poster",
                              className:
                                "absolute inset-0 bg-[#ebdcb9] flex flex-col items-center justify-center pointer-events-none z-20",
                            },
                            React.createElement(
                              "div",
                              {
                                className:
                                  "flex flex-col items-center justify-center p-6 bg-[#fcf8f2] border-2 border-[#3a2e2b] rounded-2xl shadow-cardboard-sm",
                              },
                              React.createElement("div", {
                                className:
                                  "w-8 h-8 border-4 border-[#e05a47] border-t-transparent rounded-full animate-spin mb-3",
                              }),
                              React.createElement(
                                "span",
                                {
                                  className:
                                    "font-display font-extrabold text-xs text-[#3a2e2b] tracking-wider uppercase",
                                },
                                "Loading 3D Model...",
                              ),
                            ),
                          ),
                        )}
                        <button
                          onClick={() => setShow3d(false)}
                          className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-[#fcf8f2] border-2 border-[#3a2e2b] text-[10px] font-bold font-display shadow-cardboard-sm hover:bg-[#ebdcb9] active:translate-y-0.5 transition-all text-[#3a2e2b]"
                        >
                          ❌ Close 3D
                        </button>
                      </div>
                    ) : (
                      <div className="w-full h-full p-4 flex flex-col items-center justify-between">
                        {getAssetImagePath(activeAsset.id) ? (
                          <div className="w-full flex-1 min-h-0 relative flex items-center justify-center">
                            <img
                              src={getAssetImagePath(activeAsset.id) || ""}
                              alt={activeAsset.name}
                              className="w-full h-full object-contain rounded-2xl border-2 border-[#3a2e2b] bg-[#000000] p-2 shadow-cardboard-sm"
                            />
                          </div>
                        ) : (
                          <div className="flex-1 flex flex-col items-center justify-center">
                            <span className="text-7xl mb-2 select-none filter drop-shadow-[3px_3px_0px_#3a2e2b] animate-bounce duration-1000">
                              {activeAsset.category === "characters"
                                ? "🎎"
                                : activeAsset.category === "buildings"
                                  ? "🏯"
                                  : activeAsset.category === "blocks"
                                    ? "🧱"
                                    : activeAsset.category === "trees"
                                      ? "🌲"
                                      : "🏺"}
                            </span>
                          </div>
                        )}
                        <div className="w-full mt-4 flex items-center justify-between gap-4 px-2 pb-2">
                          <span className="font-display font-extrabold text-sm text-[#3a2e2b] uppercase tracking-wider truncate">
                            {activeAsset.name}
                          </span>
                          <button
                            onClick={() => setShow3d(true)}
                            className="cursor-pointer z-10 px-4 py-2 bg-[#e05a47] hover:bg-[#d04633] text-white text-xs font-display font-bold border-2 border-[#3a2e2b] rounded-xl shadow-cardboard hover:-translate-y-0.5 active:translate-y-0.5 transition-all shrink-0"
                          >
                            ✨Interactive 3D Model
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Character animations list - kept compact */}
                  {activeAsset.category === "characters" &&
                    activeAsset.animations && (
                      <div className="space-y-2">
                        <h4 className="text-[10px] font-display font-bold uppercase tracking-wider text-[#8a7a6c]">
                          Mecanim Animations ({activeAsset.animations.length})
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {activeAsset.animations.map((anim, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 bg-[#ebdcb9] text-[#3a2e2b] font-mono text-[10px] rounded-lg border border-[#3a2e2b] font-bold"
                            >
                              {anim}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  {/* Download button row */}
                  <div className="pt-2 border-t-2 border-dashed border-[#3a2e2b]/30 flex gap-2">
                    <button className="flex-1 py-2.5 rounded-xl bg-[#fcf8f2] hover:bg-[#f5ecd6] border-2 border-[#3a2e2b] text-xs font-display font-bold text-[#3a2e2b] shadow-cardboard-sm hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-100 flex items-center justify-center gap-1.5">
                      📥 Request for Sample Asset
                    </button>
                  </div>
                </div>
              ) : (
                <div className="h-48 flex items-center justify-center text-[#8a7a6c] text-xs font-medium">
                  Select a chibi card to inspect specs
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Technical Specification Sheet / Assembly Manual */}
        <section
          id="specifications"
          className="py-12 border-t-2 border-dashed border-[#3a2e2b]/40 mt-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-3xl font-display font-extrabold text-[#3a2e2b]">
                📦 Developer Integration Specs
              </h2>
              <p className="text-[#6b5853] font-medium text-sm leading-relaxed">
                All models in this package follow standard 3D optimization
                rules, ensuring low draw calls and excellent mobile or VR
                performance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm text-[#6b5853] pt-2">
                <div className="flex gap-2.5 items-start">
                  <span className="w-6 h-6 rounded-lg bg-[#ebdcb9] border-2 border-[#3a2e2b] flex items-center justify-center text-[#e05a47] text-xs shrink-0 font-display font-bold shadow-cardboard-sm">
                    1
                  </span>
                  <div>
                    <span className="font-display font-bold text-[#3a2e2b] block">
                      Simple Custom Rigging
                    </span>
                    Rigged characters feature a simple, non-humanoid skeletal
                    hierarchy. Ideal for clean keyframe animations.
                  </div>
                </div>
                <div className="flex gap-2.5 items-start">
                  <span className="w-6 h-6 rounded-lg bg-[#ebdcb9] border-2 border-[#3a2e2b] flex items-center justify-center text-[#e05a47] text-xs shrink-0 font-display font-bold shadow-cardboard-sm">
                    2
                  </span>
                  <div>
                    <span className="font-display font-bold text-[#3a2e2b] block">
                      Low-Poly Geometry
                    </span>
                    800 - 1500 polygons per character. Clean polygon counts
                    optimized for crowds and lower-spec devices.
                  </div>
                </div>
                <div className="flex gap-2.5 items-start">
                  <span className="w-6 h-6 rounded-lg bg-[#ebdcb9] border-2 border-[#3a2e2b] flex items-center justify-center text-[#e05a47] text-xs shrink-0 font-display font-bold shadow-cardboard-sm">
                    3
                  </span>
                  <div>
                    <span className="font-display font-bold text-[#3a2e2b] block">
                      High-Quality Textures
                    </span>
                    Features high-resolution individual texture maps for each
                    asset rather than a shared atlas, ensuring crisp details.
                  </div>
                </div>
                <div className="flex gap-2.5 items-start">
                  <span className="w-6 h-6 rounded-lg bg-[#ebdcb9] border-2 border-[#3a2e2b] flex items-center justify-center text-[#e05a47] text-xs shrink-0 font-display font-bold shadow-cardboard-sm">
                    4
                  </span>
                  <div>
                    <span className="font-display font-bold text-[#3a2e2b] block">
                      Snap-to-Grid pivots
                    </span>
                    All modular building walls, decks, and roofs use snapped
                    pivot offsets for quick grid layout alignment.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#fcf8f2] border-2 border-[#3a2e2b] rounded-3xl p-6 shadow-cardboard space-y-4">
              <h3 className="font-display font-extrabold text-lg text-[#3a2e2b] flex items-center gap-2">
                📦 Package Content
              </h3>
              <ul className="space-y-2 text-xs text-[#6b5853] font-medium">
                <li className="flex justify-between py-1 border-b-2 border-dashed border-[#3a2e2b]/20">
                  <span>12 Rigged Chibi Characters (FBX)</span>
                  <span className="font-bold text-[#7cb342]">Included</span>
                </li>
                <li className="flex justify-between py-1 border-b-2 border-dashed border-[#3a2e2b]/20">
                  <span>5 Pre-Built Buildings</span>
                  <span className="font-bold text-[#7cb342]">Included</span>
                </li>
                <li className="flex justify-between py-1 border-b-2 border-dashed border-[#3a2e2b]/20">
                  <span>Modular Building Blocks</span>
                  <span className="font-bold text-[#7cb342]">Included</span>
                </li>
                <li className="flex justify-between py-1 border-b-2 border-dashed border-[#3a2e2b]/20">
                  <span>Dojo & Garden Props</span>
                  <span className="font-bold text-[#7cb342]">Included</span>
                </li>
                <li className="flex justify-between py-1 border-b-2 border-dashed border-[#3a2e2b]/20">
                  <span>Low-Poly Trees</span>
                  <span className="font-bold text-[#7cb342]">Included</span>
                </li>
                <li className="flex justify-between py-1">
                  <span>1 Demo Village Sandbox Scene</span>
                  <span className="font-bold text-[#7cb342]">Included</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact/Inquiry section */}
        <section
          id="contact"
          className="py-12 border-t-2 border-[#3a2e2b] mt-8"
        >
          <div className="bg-[#ebdcb9] border-2 border-[#3a2e2b] rounded-3xl p-6 sm:p-10 shadow-cardboard relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-2xl font-display font-extrabold text-[#3a2e2b]">
                Need custom 3D models?
              </h3>
              <p className="text-sm text-[#6b5853] font-medium leading-relaxed">
                Contact Polyport to license custom mesh extensions, custom
                textures, or unique architectural models matching the cardboard
                aesthetic.
              </p>
            </div>

            <div className="flex flex-col gap-2 shrink-0 min-w-[280px]">
              <label className="text-[10px] font-display font-bold uppercase tracking-wider text-[#8a7a6c]">
                Licensing & Support
              </label>
              <div className="flex items-center gap-2 p-1 bg-[#fdfaf2] border-2 border-[#3a2e2b] rounded-2xl shadow-cardboard-sm">
                <input
                  type="text"
                  readOnly
                  value="sales@studiopapercraft.com"
                  className="flex-1 bg-transparent px-3 text-sm text-[#3a2e2b] focus:outline-none font-mono font-bold"
                />
                <button
                  onClick={copyEmail}
                  className="px-3.5 py-2 rounded-xl bg-[#e05a47] hover:bg-[#d04633] text-white text-xs font-display font-bold border-2 border-[#3a2e2b] transition-all flex items-center gap-1"
                >
                  {copied ? <span>Copied!</span> : <span>Copy</span>}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-[#3a2e2b] bg-[#fdfaf2] py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8a7a6c] font-semibold">
          <p>
            © {new Date().getFullYear()} Polyport. All assets ready for
            download.
          </p>
          <div className="flex gap-4">
            <a
              href="https://unity.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3a2e2b] transition-colors"
            >
              Unity 3D
            </a>
            <span>•</span>
            <a
              href="https://artstation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3a2e2b] transition-colors"
            >
              ArtStation
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
