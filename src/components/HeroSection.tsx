import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      />

      {/* Top Gradient Overlay - More gradual transition */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/60 to-transparent z-10" />

      {/* Bottom Gradient Overlay - More gradual transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black/40 z-20" />

      {/* Content */}
      <div className="relative z-30 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-montserrat text-5xl md:text-7xl font-bold mb-6 leading-tight">
          ЖК <span className="text-golden">ПРЕМИУМ</span>
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto leading-relaxed">
          Элитная недвижимость в самом сердце города. Квартиры бизнес-класса с
          панорамными видами
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-golden hover:bg-golden/90 text-black font-semibold px-8 py-4 text-lg"
          >
            <Icon name="Home" className="mr-2" size={24} />
            Выбрать квартиру
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
          >
            <Icon name="Phone" className="mr-2" size={24} />
            Заказать звонок
          </Button>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-golden">25</div>
            <div className="text-sm uppercase tracking-wide">этажей</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-golden">от 4.2М</div>
            <div className="text-sm uppercase tracking-wide">стоимость</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-golden">2025</div>
            <div className="text-sm uppercase tracking-wide">сдача</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <Icon name="ChevronDown" className="text-white" size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
