# Graph Report - farmstomarket-vitrine  (2026-08-11)

## Corpus Check
- 77 files · ~1,285,247 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 386 nodes · 649 edges · 22 communities (16 shown, 6 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f4cf792f`
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
- [[_COMMUNITY_Community 21|Community 21]]

## God Nodes (most connected - your core abstractions)
1. `useLanguage()` - 67 edges
2. `useAnimateOnScroll()` - 54 edges
3. `compilerOptions` - 17 edges
4. `cn()` - 13 edges
5. `fadeUpVariants` - 12 edges
6. `staggerChildrenVariants` - 11 edges
7. `useReveal()` - 10 edges
8. `BlurFade()` - 7 edges
9. `tailwind` - 6 edges
10. `aliases` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Hero()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/Hero.tsx → src/contexts/LanguageContext.tsx
- `Navbar()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/Navbar.tsx → src/contexts/LanguageContext.tsx
- `CookieBanner()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/CookieBanner.tsx → src/contexts/LanguageContext.tsx
- `PWAInstallPrompt()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/PWAInstallPrompt.tsx → src/contexts/LanguageContext.tsx
- `VideoShowcase()` --calls--> `useAnimateOnScroll()`  [EXTRACTED]
  src/components/VideoShowcase.tsx → src/hooks/useAnimation.ts

## Import Cycles
- None detected.

## Communities (22 total, 6 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.06
Nodes (60): fadeInVariants, fadeLeftVariants, fadeRightVariants, fadeUpVariants, staggerChildrenVariants, zoomInVariants, AgroBank(), CapabilitiesGrid() (+52 more)

### Community 1 - "Community 1"
Cohesion: 0.29
Nodes (6): contentVariants, Step, TabData, TabKey, tabOrder, tabsData

### Community 2 - "Community 2"
Cohesion: 0.07
Nodes (26): inter, jsonLdOrganization, jsonLdWebApp, metadata, plusJakartaSans, urbanist, viewport, BackToTop() (+18 more)

### Community 3 - "Community 3"
Cohesion: 0.06
Nodes (31): dependencies, class-variance-authority, clsx, embla-carousel-react, framer-motion, lucide-react, next, @radix-ui/react-slot (+23 more)

### Community 4 - "Community 4"
Cohesion: 0.08
Nodes (16): EASE, Hero(), MOCKUP_SLIDES, ROTATING_PHRASES, APP_SCREENS, EASE, FARM_IMAGES, EASE (+8 more)

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
Cohesion: 0.06
Nodes (39): ICON_PATHS, SLIDES, cn(), AnimatedGradientText(), AnimatedGradientTextProps, BlurFade(), BlurFadeProps, MarginType (+31 more)

### Community 12 - "Community 12"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 21 - "Community 21"
Cohesion: 0.22
Nodes (4): EASE, FeatureRowProps, GALLERY_MOCKUPS, TestimonialProps

## Knowledge Gaps
- **177 isolated node(s):** `name`, `version`, `private`, `dev`, `build` (+172 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useLanguage()` connect `Community 0` to `Community 1`, `Community 2`, `Community 4`, `Community 6`, `Community 11`, `Community 21`?**
  _High betweenness centrality (0.160) - this node is a cross-community bridge._
- **Why does `useAnimateOnScroll()` connect `Community 0` to `Community 1`, `Community 2`, `Community 11`, `Community 4`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **Why does `cn()` connect `Community 11` to `Community 0`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **What connects `name`, `version`, `private` to the rest of the system?**
  _177 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.05965324713488099 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.06906906906906907 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.0625 - nodes in this community are weakly interconnected._