import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import heroImage from '../assets/img/product/kiyim.webp';

const Home = () => {
  const { t } = useTranslation();
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Gozalligingizni ochib beruvchi nozik liboslar</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Desadi store
            </p>
            <Link to="/products">
              <Button size="lg" className="text-lg px-8 py-6">
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              {t('products.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Откройте для себя нашу коллекцию изделий ручной работы
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button size="lg" variant="outline">
                Просмотреть все продукты
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl font-bold mb-6">
                Desadi Store
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Ayollar uy kiyimlarini sotish, buyurtma asosida katta hazhmdagi
                ayollar ui kiimlarini ishlab chikarish.
                Ozig hosliga ishlab chiqaruvchi kompaniyalar:
                Mahsulotimiz sifati kafolatlanadi, chet el, turkiya sifati bilan tenglasha oladi, choclari toza, yahshi havo o'tadigan 100% tabiy matolardan foidalanamiz, har qandai kiinlikdagi modellarni yarata olamiz va buyurtma asosida tikib bera olamiz.
                Instagram 1000 dan ortik sotuvlar bolib kelmokda,
                Savdo 1 yillik tazhriba
                Ishlab chikarish 5 oilik tazhriba
                Xozird 3 nafar
              </p>
              <Link to="/about">
                <Button size="lg">
                  Biz haqimizda
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-elevated"
            >
              <img
                src={heroImage}
                alt="Workshop"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
