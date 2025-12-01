import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const Cart = () => {
  const { t, i18n } = useTranslation();
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Telegram
  const BOT_TOKEN = "7710033566:AAEUMNtPbpejMGmf3sAoSaX_ZMD_3h_GT-w";
  const CHAT_ID = "@desadistores";
  const ADMIN_CHAT_ID = "6427349045";

  const getName = (item: any) => {
    if (i18n.language === 'uz') return item.nameUz;
    if (i18n.language === 'ru') return item.nameRu;
    return item.name;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('uz-UZ').format(price) + ' UZS';
  };

  const handleCheckout = async () => {
    if (!customerName || !customerPhone || !customerAddress) {
      toast.error(i18n.language === "uz" ? "Iltimos, barcha maydonlarni to‘ldiring." : "Заполните все поля.");
      return;
    }

    if (cart.length === 0) {
      toast.error(i18n.language === "uz" ? "Savat bo‘sh." : "Корзина пуста.");
      return;
    }

    setLoading(true);

    try {
      const itemsText = cart
        .map((item) => `📦 ${getName(item)} — ${item.quantity} x ${item.price} UZS`)
        .join("\n");

      const tgMessage = `
🛒 <b>Yangi buyurtma!</b>

👤 <b>Ism:</b> ${customerName}
📞 <b>Telefon:</b> ${customerPhone}
📍 <b>Manzil:</b> ${customerAddress}

${itemsText}

💰 <b>Jami summa:</b> ${cartTotal.toLocaleString()} UZS
`;

      // Send to Telegram channel
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: tgMessage,
          parse_mode: "HTML",
        }),
      });

      // Save order in backend
      await fetch("https://backend-desadi-store.onrender.com/api/order/orders/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: customerName,
          customer_phone: customerPhone,
          customer_address: customerAddress,
          total_price: cartTotal,
          items: cart.map((item) => ({
            product_name: getName(item),
            price: item.price,
            quantity: item.quantity,
          })),
        }),
      });

      // Notify admin
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: ADMIN_CHAT_ID,
          text: `
📬 <b>Buyurtma tizimga saqlandi!</b>
👤 ${customerName}
📞 ${customerPhone}
💰 ${cartTotal.toLocaleString()} UZS

✅ Buyurtma muvaffaqiyatli qabul qilindi!
`,
          parse_mode: "HTML",
        }),
      });

      toast.success(i18n.language === "uz" ? "Buyurtma yuborildi!" : "Заказ отправлен!");

      clearCart();
      setCustomerName("");
      setCustomerPhone("");
      setCustomerAddress("");
      setSuccess(true);
    } catch (err) {
      toast.error(i18n.language === "uz" ? "Xatolik yuz berdi." : "Ошибка.");
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
            <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
            <h1 className="font-serif text-3xl font-bold mb-4">{t('cart.empty')}</h1>
            <Link to="/products"><Button size="lg">{t('cart.continueShopping')}</Button></Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-5xl font-bold mb-8">
          {t('cart.title')}
        </motion.h1>

        {success && (
          <div className="p-4 mb-6 bg-green-100 text-green-700 rounded-lg">
            ✅ {t("cart.success")}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ITEMS */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <Card className="p-4">
                  <div className="flex gap-4">
                    <img src={item.image} alt={getName(item)} className="w-24 h-24 object-cover rounded-lg" />

                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg mb-1">{getName(item)}</h3>
                      <p className="text-primary font-bold mb-2">{formatPrice(item.price)}</p>

                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          <Minus className="h-4 w-4" />
                        </Button>

                        <span className="w-12 text-center font-semibold">{item.quantity}</span>

                        <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)} className="text-destructive">
                        <Trash2 className="h-5 w-5" />
                      </Button>
                      <p className="font-bold text-lg">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* SUMMARY + FORM */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-1">
            <Card className="p-6 sticky top-20 space-y-4">
              <h2 className="font-serif text-2xl font-bold">Sizning zakazingiz</h2>

              <div className="space-y-4">
                <input className="w-full p-2 border rounded" placeholder="Ismingiz / Ваше имя" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
                <input className="w-full p-2 border rounded" placeholder="Telefon / Телефон" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} />
                <input className="w-full p-2 border rounded" placeholder="Manzil / Адрес" value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)} />
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between text-xl font-bold mb-4">
                  <span>{t('cart.total')}</span>
                  <span className="text-primary">{formatPrice(cartTotal)}</span>
                </div>
              </div>

              <Button size="lg" className="w-full mb-4" disabled={loading} onClick={handleCheckout}>
                {loading ? "⏳ Yuborilmoqda..." : t('cart.checkout')}
              </Button>
              <br /><br />
              <Link to="/products">
                <Button variant="outline" size="lg" className="w-full">
                  {t('cart.continueShopping')}
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;