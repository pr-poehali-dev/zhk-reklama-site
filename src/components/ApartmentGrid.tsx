import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ApartmentGrid = () => {
  const apartments = [
    {
      type: "Студия",
      area: "28-35 м²",
      price: "от 4.2 млн ₽",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      type: "1-комнатная",
      area: "42-55 м²",
      price: "от 6.8 млн ₽",
      image:
        "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      type: "2-комнатная",
      area: "65-78 м²",
      price: "от 9.5 млн ₽",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      type: "3-комнатная",
      area: "85-120 м²",
      price: "от 12.8 млн ₽",
      image:
        "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Планировки квартир
          </h2>
          <p className="text-xl text-gray-600">
            Выберите идеальную планировку для вашей семьи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {apartments.map((apartment, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={apartment.image}
                  alt={apartment.type}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-golden text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {apartment.type}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 flex items-center">
                    <Icon name="Square" className="mr-2" size={16} />
                    {apartment.area}
                  </span>
                </div>

                <div className="text-2xl font-bold text-gray-900">
                  {apartment.price}
                </div>

                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                  <Icon name="Eye" className="mr-2" size={16} />
                  Смотреть планировку
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApartmentGrid;
