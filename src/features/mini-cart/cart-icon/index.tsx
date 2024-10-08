import { PushCart } from '@src/features/mini-cart/cart-icon/push-cart';
import { ShoppingBag } from '@src/features/mini-cart/cart-icon/shopping-bag';
import { useSiteContext } from '@src/context/site-context';
import { Settings } from '@src/models/settings';

type Props = {
  showText: boolean;
  showIcon: boolean;
  label?: string;
  color?: string;
};

export const CartBasketIcon: React.FC<Props> = ({ showText, label, color }) => {
  const {
    miniCartState: [, setMiniCartIsOpen],
    cart,
    calculateShipping,
    settings,
  } = useSiteContext();
  const { header } = settings as Settings;
  const totalProductsInCart = cart?.totalProductsCount || 0;

  const cartIcon = header?.layout?.cartIcon;

  const handleMinicartOpen = () => {
    setMiniCartIsOpen((prev: boolean) => !prev);
    calculateShipping?.resetRates();
  };

  const renderCartIcon = () => {
    switch (cartIcon) {
      case '2':
        return (
          <ShoppingBag
            color={color}
            count={totalProductsInCart}
          />
        );
      default:
        return (
          <PushCart
            color={color}
            count={totalProductsInCart}
          />
        );
    }
  };

  return (
    <button
      className="button-cart"
      onClick={handleMinicartOpen}
    >
      {renderCartIcon()}
      <span className="hidden lg:inline-block">{showText && label}</span>
    </button>
  );
};
