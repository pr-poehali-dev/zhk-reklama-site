import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-6">
              Готовы к просмотру?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Запишитесь на индивидуальную экскурсию по жилому комплексу. Наши
              менеджеры покажут лучшие планировки и расскажут об условиях
              покупки.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-golden/20 p-3 rounded-full">
                  <Icon name="Phone" className="text-golden" size={24} />
                </div>
                <div>
                  <div className="font-semibold">+7 (495) 123-45-67</div>
                  <div className="text-gray-300 text-sm">Отдел продаж</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-golden/20 p-3 rounded-full">
                  <Icon name="MapPin" className="text-golden" size={24} />
                </div>
                <div>
                  <div className="font-semibold">ул. Центральная, 15</div>
                  <div className="text-gray-300 text-sm">Офис продаж</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-golden/20 p-3 rounded-full">
                  <Icon name="Clock" className="text-golden" size={24} />
                </div>
                <div>
                  <div className="font-semibold">Ежедневно 9:00 - 21:00</div>
                  <div className="text-gray-300 text-sm">Время работы</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <h3 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
              Заказать обратный звонок
            </h3>

            <form className="space-y-4">
              <Input placeholder="Ваше имя" className="h-12" />
              <Input placeholder="Номер телефона" type="tel" className="h-12" />
              <Input
                placeholder="Email (необязательно)"
                type="email"
                className="h-12"
              />

              <Button className="w-full h-12 bg-golden hover:bg-golden/90 text-black font-semibold text-lg">
                <Icon name="Phone" className="mr-2" size={20} />
                Заказать звонок
              </Button>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
