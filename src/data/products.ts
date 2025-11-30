import { Product } from '@/context/CartContext';
import product1 from '../assets/img/product/1.jpg';
import product2 from '../assets/img/product/2.jpg';
import product3 from '../assets/img/product/3.jpg';
import product4 from '../assets/img/product/4.jpg';
import product5 from '../assets/img/product/5.jpg';
import product6 from '../assets/img/product/6.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Халат вишня ( темно зеленый ): 1202',
    nameUz: 'Gilos xalati (toq yashil): 1202',
    nameRu: 'Халат вишня ( темно зеленый ): 1202',
    price: 255000,
    image: product1,
    description: 'Материал: Кадифе, 100% натуральная ткань. Размеры: 46/48/50/52',
    descriptionUz: 'Material: Kadife, 100% tabiiy mato. Olchamlari: 46/48/50/52',
    descriptionRu: 'Материал: Кадифе, 100% натуральная ткань. Размеры: 46/48/50/52',
    inStock: true,
    category: 'ceramics'
  },
  {
    id: '2',
    name: 'Халат лепестки ( черный ): 1195',
    nameUz: 'Gulbargli xalat (qora): 1195',
    nameRu: 'Халат лепестки ( черный ): 1195',
    price: 285000,
    image: product2,
    description: 'Материал: Кадифе, 100% натуральная ткань. Размеры: 52 / 54 / 56 / 68',
    descriptionUz: 'Material: Kadife, 100% tabiiy mato. Olchamlari: 52/54/56/68',
    descriptionRu: 'Материал: Кадифе, 100% натуральная ткань. Размеры: 52/54/56/68',
    inStock: true,
    category: 'textiles'
  },
  {
    id: '3',
    name: 'Xaлат клубника ( розовый ): 1210',
    nameUz: 'Qulupnay xalat (pushti): 1210',
    nameRu: 'Xалат клубника ( розовый ): 1210',
    price: 255000,
    image: product3,
    description: 'Материал Кадифе, 100% натуральная ткань. Размеры: 46/48/50/52',
    descriptionUz: 'Material: Kadife, 100% tabiiy mato. Olchamlari: 46/48/50/52',
    descriptionRu: 'Материал Кадифе, 100% натуральная ткань. Размеры: 46/48/50/52',
    inStock: true,
    category: 'special'
  },
  {
    id: '4',
    name: 'Xaлат сердце ( оранжевый ): 1208',
    nameUz: 'Yurak xalati (apelsin): 1208',
    nameRu: 'Xалат сердце ( оранжевый ): 1208',
    price: 285000,
    image: product4,
    description: 'Материал Кадифе, 100% натуральная ткань. Размеры: 46/48/50/52',
    descriptionUz: 'Material: Kadife, 100% tabiiy mato. Olchamlari: 46/48/50/52',
    descriptionRu: 'Материал Кадифе, 100% натуральная ткань. Размеры: 46/48/50/52',
    inStock: true,
    category: 'special'
  },
  {
    id: '5',
    name: 'Xaлат воротником ( черный ): 1206',
    nameUz: 'Yurak цветочки ( qora ): 1206',
    nameRu: 'Xалат воротником ( черный ): 1206',
    price: 285000,
    image: product5,
    description: 'Материал Микровильвет, 100% натуральная ткань. Размеры: 46/48/50/52',
    descriptionUz: 'Material: Мikrovelvet, 100% tabiiy mato. Olchamlari: 46/48/50/52',
    descriptionRu: 'Материал Микровильвет, 100% натуральная ткань. Размеры: 46/48/50/52',
    inStock: true,
    category: 'special'
  },
  {
    id: '6',
    name: 'Xaлат цветочки ( красный ): 1210',
    nameUz: 'Yurak gullar ( qizil ): 1210',
    nameRu: 'Xалат цветочки ( красный ): 1210',
    price: 255000,
    image: product6,
    description: 'Материал Кадифе, 100% натуральная ткань. Размеры: 46/48/50/52',
    descriptionUz: 'Material: Kadife, 100% tabiiy mato. Olchamlari: 46/48/50/52',
    descriptionRu: 'Материал Кадифе, 100% натуральная ткань. Размеры: 46/48/50/52',
    inStock: true,
    category: 'special'
  }
];
