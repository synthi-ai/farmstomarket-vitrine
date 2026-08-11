import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Sprout, ShoppingCart, Truck } from "lucide-react";

import { BorderBeam } from "@/components/ui/magicui/border-beam";
import { BlurFade } from "@/components/ui/magicui/blur-fade";
import { AnimatedGradientText } from "@/components/ui/magicui/animated-gradient-text";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  badge = "Pour qui est FarmsToMarket ?",
  heading = "Chaque acteur de la chaîne agricole y gagne.",
  description = "Producteur, acheteur ou transporteur — la plateforme est conçue pour que vous en tiriez le maximum dès le premier jour.",
  tabs = [
    {
      value: "tab-1",
      icon: <Sprout className="h-auto w-4 shrink-0" />,
      label: "Producteurs",
      content: {
        badge: "Pour les agriculteurs",
        title: "Vendez votre récolte au juste prix. Sans intermédiaires. Sans attendre.",
        description:
          "Publiez vos cultures en quelques minutes, recevez des offres d'acheteurs vérifiés et encaissez directement dans votre portefeuille AgroBank. Plus de 50 000 producteurs en témoignent.",
        buttonText: "Créer mon compte producteur",
        buttonHref: "/producer",
        imageSrc: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
        imageAlt: "Tableau de bord producteur FarmsToMarket",
      },
    },
    {
      value: "tab-2",
      icon: <ShoppingCart className="h-auto w-4 shrink-0" />,
      label: "Acheteurs",
      content: {
        badge: "Pour les commerçants & distributeurs",
        title: "Approvisionnez-vous en toute sécurité. Votre argent protégé jusqu'à la livraison.",
        description:
          "Parcourez des milliers de fermes vérifiées, négociez en direct et payez via séquestre — vos fonds ne sont libérés qu'après inspection et validation. Zéro risque, qualité garantie.",
        buttonText: "Créer mon compte acheteur",
        buttonHref: "/customer",
        imageSrc: "https://shadcnblocks.com/images/block/placeholder-dark-2.svg",
        imageAlt: "Marketplace acheteur FarmsToMarket",
      },
    },
    {
      value: "tab-3",
      icon: <Truck className="h-auto w-4 shrink-0" />,
      label: "Transporteurs",
      content: {
        badge: "Pour les transporteurs",
        title: "Remplissez vos camions dans les deux sens. Payé à chaque livraison.",
        description:
          "Le dispatch IA vous associe aux chargements les plus proches selon votre véhicule et votre itinéraire. Fini les retours à vide — et le paiement tombe automatiquement à la confirmation.",
        buttonText: "Rejoindre le réseau transport",
        buttonHref: "/transporter",
        imageSrc: "https://shadcnblocks.com/images/block/placeholder-dark-3.svg",
        imageAlt: "Interface transporteur FarmsToMarket",
      },
    },
  ],
}: Feature108Props) => {
  return (
    <section className="relative py-32 bg-gray-950 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div className="h-[500px] w-[800px] rounded-full bg-emerald-500/4 blur-[120px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <BlurFade inView delay={0}>
          <div className="flex flex-col items-center gap-4 text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              {badge}
            </span>
            <h2 className="max-w-2xl text-3xl font-semibold text-white md:text-4xl lg:text-5xl leading-tight">
              <AnimatedGradientText colorFrom="#00e834" colorTo="#99ff99" speed={0.6}>
                {heading}
              </AnimatedGradientText>
            </h2>
            <p className="text-gray-400 max-w-xl">{description}</p>
          </div>
        </BlurFade>

        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-6">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-gray-500 transition-all duration-200 hover:text-gray-300 data-[state=active]:bg-gray-800 data-[state=active]:text-emerald-400 data-[state=active]:shadow-lg data-[state=active]:shadow-emerald-500/10 data-[state=active]:border data-[state=active]:border-emerald-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Content panel */}
          <div className="relative mx-auto mt-8 max-w-screen-xl rounded-2xl bg-gray-900/80 backdrop-blur-xl border border-white/5 p-6 lg:p-16 overflow-hidden">
            <BorderBeam
              colorFrom="#00e834"
              colorTo="#33ed47"
              duration={8}
              size={80}
              borderWidth={1}
            />

            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-16 lg:grid-cols-2 lg:gap-12 data-[state=inactive]:hidden"
              >
                <div className="flex flex-col gap-6">
                  <span className="inline-flex w-fit items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                    {tab.content.badge}
                  </span>
                  <h3 className="text-3xl font-semibold text-white lg:text-4xl leading-tight">
                    {tab.content.title}
                  </h3>
                  <p className="text-gray-400 lg:text-lg leading-relaxed">
                    {tab.content.description}
                  </p>
                  <a
                    href={tab.content.buttonHref}
                    className="mt-1 inline-flex h-11 w-fit items-center justify-center rounded-full bg-emerald-500 px-7 text-sm font-bold text-black tracking-wide shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-400 hover:shadow-emerald-400/30 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                  >
                    {tab.content.buttonText}
                  </a>
                </div>
                <img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-2xl w-full opacity-90"
                  loading="lazy"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };
