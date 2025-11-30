import { motion } from 'framer-motion';
import { ShoppingCart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart, Product } from '@/context/CartContext';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, cart } = useCart();
  const { t, i18n } = useTranslation();
  const [isAdding, setIsAdding] = useState(false);

  const isInCart = cart.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    toast.success(t('products.addToCart'), {
      description: getName(),
    });
    setTimeout(() => setIsAdding(false), 1000);
  };

  const getName = () => {
    if (i18n.language === 'uz') return product.nameUz;
    if (i18n.language === 'ru') return product.nameRu;
    return product.name;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('uz-UZ').format(price) + ' UZS';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="overflow-hidden hover-lift h-full flex flex-col">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={getName()}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
          />
          {!product.inStock && (
            <Badge
              variant="destructive"
              className="absolute top-4 right-4"
            >
              {t('products.outOfStock')}
            </Badge>
          )}
          {product.oldPrice && (
            <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
              Sale
            </Badge>
          )}
        </div>
        <CardContent className="p-6 flex-grow">
          <h3 className="font-serif text-xl font-semibold mb-2 line-clamp-2">
            {getName()}
          </h3>
          <div className="flex items-baseline space-x-2 mb-2">
            <span className="text-2xl font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>
          <p className="text-muted-foreground text-sm line-clamp-3">
            {i18n.language === 'uz'
              ? product.descriptionUz
              : i18n.language === 'ru'
              ? product.descriptionRu
              : product.description}
          </p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock || isAdding}
            className="w-full transition-smooth"
          >
            {isAdding ? (
              <Check className="h-5 w-5 mr-2" />
            ) : (
              <ShoppingCart className="h-5 w-5 mr-2" />
            )}
            {isInCart
              ? t('products.addToCart')
              : t('products.addToCart')}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
