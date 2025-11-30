import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  uz: {
    translation: {
      nav: {
        home: "Bosh sahifa",
        about: "Biz haqimizda",
        products: "Mahsulotlar",
        gallery: "Galereya",
        certificates: "Sertifikatlar",
        videos: "Videolar",
        faq: "Savollar",
        contact: "Aloqa"
      },
      hero: {
        title: "An'anaviy hunarmandchilik",
        subtitle: "Qo'l bilan yaratilgan noyob mahsulotlar",
        cta: "Mahsulotlarni ko'rish"
      },
      products: {
        title: "Bizning mahsulotlarimiz",
        addToCart: "Savatga qo'shish",
        viewDetails: "Batafsil",
        price: "Narxi",
        inStock: "Mavjud",
        outOfStock: "Tugagan",
        filter: "Filtrlash",
        sort: "Tartiblash",
        search: "Qidirish..."
      },
      cart: {
        title: "Savat",
        empty: "Savatingiz bo'sh",
        total: "Jami",
        checkout: "To'lovga o'tish",
        continueShopping: "Xarid davom ettirish",
        remove: "O'chirish"
      },
      about: {
        title: "Sattorova haqida",
        subtitle: "Hunarmandchilik sanʼati"
      },
      contact: {
        title: "Biz bilan bog'laning",
        name: "Ismingiz",
        email: "Email",
        message: "Xabar",
        send: "Yuborish",
        info: "Aloqa ma'lumotlari"
      },
      footer: {
        description: "An'anaviy hunarmandchilik va qo'l mehnati",
        poweredBy: "Ishlab chiqildi"
      }
    }
  },
  ru: {
    translation: {
      nav: {
        home: "Главная",
        about: "О нас",
        products: "Продукты",
        gallery: "Галерея",
        certificates: "Сертификаты",
        videos: "Видео",
        faq: "Вопросы",
        contact: "Контакты"
      },
      hero: {
        title: "Традиционное ремесло",
        subtitle: "Уникальные изделия ручной работы",
        cta: "Смотреть продукты"
      },
      products: {
        title: "Наши продукты",
        addToCart: "В корзину",
        viewDetails: "Подробнее",
        price: "Цена",
        inStock: "В наличии",
        outOfStock: "Нет в наличии",
        filter: "Фильтр",
        sort: "Сортировка",
        search: "Поиск..."
      },
      cart: {
        title: "Корзина",
        empty: "Ваша корзина пуста",
        total: "Итого",
        checkout: "Оформить заказ",
        continueShopping: "Продолжить покупки",
        remove: "Удалить"
      },
      about: {
        title: "О Сатторовой",
        subtitle: "Искусство ремесла"
      },
      contact: {
        title: "Свяжитесь с нами",
        name: "Ваше имя",
        email: "Email",
        message: "Сообщение",
        send: "Отправить",
        info: "Контактная информация"
      },
      footer: {
        description: "Традиционное ремесло и ручной труд",
        poweredBy: "Разработано"
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        products: "Products",
        gallery: "Gallery",
        certificates: "Certificates",
        videos: "Videos",
        faq: "FAQ",
        contact: "Contact"
      },
      hero: {
        title: "Traditional Craftsmanship",
        subtitle: "Unique handcrafted products",
        cta: "View Products"
      },
      products: {
        title: "Our Products",
        addToCart: "Add to Cart",
        viewDetails: "View Details",
        price: "Price",
        inStock: "In Stock",
        outOfStock: "Out of Stock",
        filter: "Filter",
        sort: "Sort",
        search: "Search..."
      },
      cart: {
        title: "Shopping Cart",
        empty: "Your cart is empty",
        total: "Total",
        checkout: "Checkout",
        continueShopping: "Continue Shopping",
        remove: "Remove"
      },
      about: {
        title: "About Sattorova",
        subtitle: "The Art of Craftsmanship"
      },
      contact: {
        title: "Get in Touch",
        name: "Your Name",
        email: "Email",
        message: "Message",
        send: "Send",
        info: "Contact Information"
      },
      footer: {
        description: "Traditional craftsmanship and handwork",
        poweredBy: "Powered by"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
