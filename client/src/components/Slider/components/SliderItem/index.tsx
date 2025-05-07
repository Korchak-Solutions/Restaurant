import {IconBaseProps} from 'react-icons';
import {GiFullPizza, GiSteak} from 'react-icons/gi';
import {PiHamburgerFill} from 'react-icons/pi';
import {RiCake3Fill, RiDrinks2Fill} from 'react-icons/ri';
import {FoodItemDto, MenuCategories, useSliderStore} from '../../../../store';
import './styles.scss';

const classNames = [
  ' beforePrevious',
  ' previous',
  ' current',
  ' next',
  ' afterNext',
];
export const CategoryIcons: Record<MenuCategories, React.FC<IconBaseProps>> = {
  Burger: PiHamburgerFill,
  Pizza: GiFullPizza,
  Steak: GiSteak,
  Dessert: RiCake3Fill,
  Drink: RiDrinks2Fill,
};
export const SliderItem = ({
  title,
  price,
  index,
  category,
  length,
}: FoodItemDto & {index: number; length: number}) => {
  const currentIndex = useSliderStore(state => state.index);
  const className =
    'block' +
    (Math.abs(index - currentIndex) <= 2
      ? classNames[index - currentIndex + 2]
      : currentIndex <= 1 && length - 1 - index <= 1 - currentIndex
      ? classNames[1 - (length - 1 - index) - currentIndex]
      : currentIndex >= length - 2 && index <= 1 - (length - 1 - currentIndex)
      ? classNames[index + 3 + (length - 1 - currentIndex)]
      : '');
  const Icon = CategoryIcons[category];
  return (
    <div className={className}>
      <div className="icon-container">
        <Icon fill="#FFD40D" style={{height: 100, width: 100, zIndex: 2}} />
        <div className="rectangle" />
      </div>
      <div className="text-section">
        {title}
        <div className="price-label">
          <div className="dollar-sign">$</div>
          {price.toFixed(2)}
        </div>
      </div>
    </div>
  );
};
