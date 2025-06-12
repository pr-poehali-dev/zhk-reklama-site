import Icon from "@/components/ui/icon";

const PropertyInfo = () => {
  const features = [
    {
      icon: "MapPin",
      title: "Премиальное расположение",
      description: "Центр города, развитая инфраструктура",
    },
    {
      icon: "Car",
      title: "Подземная парковка",
      description: "2 уровня паркинга, 450 мест",
    },
    {
      icon: "Shield",
      title: "Безопасность 24/7",
      description: "Консьерж-сервис и видеонаблюдение",
    },
    {
      icon: "Zap",
      title: "Умный дом",
      description: "Система «умный дом» в каждой квартире",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Жилой комплекс премиум-класса с продуманной архитектурой и
            современными решениями
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="bg-golden/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Icon
                  name={feature.icon as any}
                  className="text-golden"
                  size={32}
                />
              </div>
              <h3 className="font-montserrat text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyInfo;
