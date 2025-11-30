import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import artisanPortrait from '@/assets/artisan-portrait.jpg';
import heroImage from '@/assets/hero-artisan.jpg';
import img from '../assets/img/icon/one.jpg'

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Desadi Store
          </h1>
        </motion.div>

        {/* Portrait Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-elevated"
          >
            <img
              src={img}
              alt="Sattorova"
              className="object-cover w-full h-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl font-bold">Desadi Store</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Айоллар уй кийимларини сотиш, буюртма асосида катта хажмдаги уйоллар уй кийимларини ишлаб чикариш.
              Компаниямизнинг озига хослиги:
              Махсулотимиз сифати кафолатланади, чет эл, туркия сифати билан тенглаша олади, чоклари тоза, яхши хаво отказадиган 100% табий матолардан фойдаланамиз, хар кандай кийинликдаги моделларни ярата оламиз ва буюртма асосида тикиб бера оламиз.
              Инстаграмда 1000 дан ортик сотувлар болиб келмокда,
              Савдо сохасида 1 йиллик тажриба
              Ишлаб чикариш сохасида 5 ойлик тажриба
              Хозирда 3 нафар
            </p>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl p-8 md:p-12 mb-20 shadow-soft"
        >
          <h2 className="font-serif text-3xl font-bold mb-6 text-center">
            Desadi store
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">ХИЗМАТЛАР</h3>
              <p className="text-muted-foreground">
                Озбекистон бойлаб йетказиб бериш хизмати тез ва ишончли.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">АФЗАЛЛИКЛАР</h3>
              <p className="text-muted-foreground">
                Фабричный сифатли ва экспорт боб товарлар ишлаб чикарамиз
                Катта хожимдаги ва исталган фасондаги кийимларни тез ва сифатли ишлаб чикариб бера оламиз, 0 дан сотишга таййор бренд пакетлари билан упаковка килинган холатда колингизга топширамиз.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="font-semibold text-xl mb-2"></h3>
              <p className="text-muted-foreground">
                Айоллар уй кийимларини сотиш, буюртма асосида катта хажмдаги уйоллар уй кийимларини ишлаб чикариш.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Workshop Image
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-96 rounded-2xl overflow-hidden shadow-elevated"
        >
          <img
            src={heroImage}
            alt="Workshop"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end">
            <div className="p-8">
              <h3 className="font-serif text-3xl font-bold text-white mb-2">
                Our Workshop
              </h3>
              <p className="text-white/90 text-lg">
                Where tradition meets craftsmanship
              </p>
            </div>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default About;
