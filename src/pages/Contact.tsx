import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../assets/css/media.css'

interface FormData {
  full_name: string;
  phone: string;
  question: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    phone: "",
    question: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);

  // Проверка блокировки повторной отправки
  // useEffect(() => {
  //   const lastSent = localStorage.getItem("lastApplicationSent");
  //   if (lastSent) {
  //     const diff = Date.now() - parseInt(lastSent);
  //     if (diff < 10 * 60 * 1000) {
  //       setIsBlocked(true);
  //       const remaining = 10 - Math.floor(diff / 60000);
  //       setStatusMessage(`⏳ Вы уже отправляли  заявку. Попробуйте через ${remaining} минут.`);
  //     }
  //   }
  // }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatusMessage("");

    const BOT_TOKEN = "7710033566:AAEUMNtPbpejMGmf3sAoSaX_ZMD_3h_GT-w";
    const CHAT_ID = "@desadistores"; // группа или пользователь

    const text = `
📩 Новая заявка:
👤 Имя: ${formData.full_name} 
📞 Телефон: ${formData.phone}
❓ Вопрос: ${formData.question}
`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
        }),
      });

      toast.success("Заявка отправлена!");
      setStatusMessage("✅ Ваша заявка успешно отправлена!");

      setFormData({ full_name: "", phone: "", question: "" });

    } catch (err) {
      console.error(err);
      toast.error("Ошибка отправки");
      setStatusMessage("❌ Ошибка при отправке.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Связаться с нами</h1>
          <p className="text-xl text-muted-foreground">
            Есть вопросы? Мы будем рады их услышать.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="full_name" className="block text-sm font-medium mb-2">
                    Ваше имя
                  </label>
                  <Input
                    id="full_name"
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Номер телефона
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="question" className="block text-sm font-medium mb-2">
                    Вопрос
                  </label>
                  <Textarea
                    id="question"
                    rows={6}
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting || isBlocked}>
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                </Button>
              </form>

              {statusMessage && (
                <p className="mt-4 text-center text-sm text-muted-foreground">{statusMessage}</p>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <a href="tel:+998998093980"><p className="text-muted-foreground">+998 99 809 39 80</p></a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telegram</h3>
                    <a href="https://t.me/desadistore"><p className="text-muted-foreground">𝒟𝑒𝓈𝒶𝒹𝒾 𝓈𝓉𝑜𝓇𝑒</p></a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Manzil</h3>
                    <p className="text-muted-foreground">Альфе центр -1 кават 2-докон
                      Молжал: абусахий центр ропарасида</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="aspect-video overflow-hidden rounded-lg bg-secondary">
              <img
                src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800"
                alt="Workshop location"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="contact mt-12">
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.95587772446!2d69.16504377656653!3d41.2445190048442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae6274daefb32b%3A0x74e849246415ebcb!2sAbu%20Sakhiy%20Trade%20Centre!5e0!3m2!1sru!2s!4v1764519760864!5m2!1sru!2s"
              allowFullScreen
              loading="lazy"
              title="Наш офис в Ташкенте"
            ></iframe>
          </div>
          <p className="map-caption mt-2 text-center text-muted-foreground">
            Мы на карте — Ташкент, улица ...
          </p>
        </div>
      </div>

    </div>
  );
};

export default Contact;