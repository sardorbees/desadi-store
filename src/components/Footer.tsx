import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import tg from '../assets/img/icon/telegram.gif'
import ins from '../assets/img/icon/instgram.gif'
import logo from '../assets/img/icon/one.jpg'

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              <img src={logo} alt="" width={45} style={{ borderRadius: '50%' }} />
            </h3>
            <p className="text-muted-foreground mb-4">
              Gozalligingizni ochib beruvchi nozik liboslar
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('contact.info')}</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+998 99 809 39 80</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src={tg} alt="" width={25} />
                <span>Desadi Store</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Ijtimoiy tarmoqlar</h4>
            <div className="flex space-x-4">
              <a
                href="https://t.me/desadistore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <img src={tg} alt="" width={30} />
              </a>
              <a
                href="https://www.instagram.com/desadistore?igsh=MTNhZ3lsMzlyMWJyeg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <img src={ins} alt="" width={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Parvoz Company */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Desadi Store. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>{t('footer.poweredBy')}</span>
            <a
              href="https://parvoz-company.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline transition-smooth"
            >
              Parvoz Company
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
