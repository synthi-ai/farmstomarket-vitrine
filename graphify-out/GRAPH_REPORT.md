# Graph Report - .  (2026-06-20)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 332 nodes · 554 edges · 21 communities (15 shown, 6 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `38029410`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]

## God Nodes (most connected - your core abstractions)
1. `useLanguage()` - 66 edges
2. `useAnimateOnScroll()` - 54 edges
3. `compilerOptions` - 17 edges
4. `fadeUpVariants` - 12 edges
5. `staggerChildrenVariants` - 11 edges
6. `useReveal()` - 10 edges
7. `tailwind` - 6 edges
8. `aliases` - 6 edges
9. `useReveal()` - 6 edges
10. `PersonaPageData` - 6 edges

## Surprising Connections (you probably didn't know these)
- `CookieBanner()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/CookieBanner.tsx → src/contexts/LanguageContext.tsx
- `Hero()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/Hero.tsx → src/contexts/LanguageContext.tsx
- `Navbar()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/Navbar.tsx → src/contexts/LanguageContext.tsx
- `PWAInstallPrompt()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/PWAInstallPrompt.tsx → src/contexts/LanguageContext.tsx
- `VideoShowcase()` --calls--> `useAnimateOnScroll()`  [EXTRACTED]
  src/components/VideoShowcase.tsx → src/hooks/useAnimation.ts

## Import Cycles
- None detected.

## Communities (21 total, 6 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.08
Nodes (46): AgroBank(), CapabilitiesGrid(), CapitalStats(), EASE, ConversionStats(), EASE, CredibilityStats(), CuttingEdgeFeatures() (+38 more)

### Community 1 - "Community 1"
Cohesion: 0.09
Nodes (23): fadeInVariants, fadeLeftVariants, fadeRightVariants, fadeUpVariants, staggerChildrenVariants, zoomInVariants, Category, CATEGORY_STYLES (+15 more)

### Community 2 - "Community 2"
Cohesion: 0.06
Nodes (28): inter, jsonLdOrganization, jsonLdWebApp, metadata, plusJakartaSans, urbanist, viewport, BackToTop() (+20 more)

### Community 3 - "Community 3"
Cohesion: 0.07
Nodes (29): dependencies, class-variance-authority, clsx, framer-motion, lucide-react, next, @radix-ui/react-slot, react (+21 more)

### Community 4 - "Community 4"
Cohesion: 0.08
Nodes (16): EASE, ICON_PATHS, EASE, Hero(), MOCKUP_SLIDES, ROTATING_PHRASES, APP_SCREENS, EASE (+8 more)

### Community 5 - "Community 5"
Cohesion: 0.12
Nodes (13): metadata, agrobankData, customerData, producerData, transporterData, metadata, PersonaBenefit, PersonaCta (+5 more)

### Community 6 - "Community 6"
Cohesion: 0.12
Nodes (11): metadata, APP_MOCKUPS, CHAPTERS, EASE, HowItWorks(), PartnersBar(), ProductSection(), ProductSectionProps (+3 more)

### Community 7 - "Community 7"
Cohesion: 0.14
Nodes (16): ACTIVITIES, ActivityGrid(), AppDownload(), EASE, Intro(), SoloQuote(), SOLUTION_CARDS, SolutionCards() (+8 more)

### Community 8 - "Community 8"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, forceConsistentCasingInFileNames, incremental, isolatedModules, jsx, lib (+12 more)

### Community 9 - "Community 9"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 10 - "Community 10"
Cohesion: 0.19
Nodes (9): EASE, Hero(), HERO_IMAGES, Leadership(), TEAM, useReveal(), WHY_CARDS, WhyUs() (+1 more)

### Community 11 - "Community 11"
Cohesion: 0.70
Nodes (3): cn(), Button(), buttonVariants

### Community 12 - "Community 12"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **154 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+149 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useLanguage()` connect `Community 0` to `Community 1`, `Community 2`, `Community 4`, `Community 6`?**
  _High betweenness centrality (0.127) - this node is a cross-community bridge._
- **Why does `useAnimateOnScroll()` connect `Community 0` to `Community 1`, `Community 2`, `Community 4`?**
  _High betweenness centrality (0.057) - this node is a cross-community bridge._
- **Why does `PersonaPageData` connect `Community 5` to `Community 1`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _154 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.07547169811320754 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.08859357696567 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.06282051282051282 - nodes in this community are weakly interconnected._