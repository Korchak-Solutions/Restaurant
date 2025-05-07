import {MenuCategories} from '../../../../store';
import {CategoryIcons} from '../../../Slider/components/SliderItem';
import './styles.scss';

interface CategoryPickerIE {
  selected: MenuCategories;
  setSelected: (state: MenuCategories) => void;
}
const categories: MenuCategories[] = [
  'Steak',
  'Pizza',
  'Burger',
  'Dessert',
  'Drink',
];
export const CategoryPicker = ({selected, setSelected}: CategoryPickerIE) => {
  return (
    <div className="container">
      {categories.map((el, ind) => {
        const isSelected = el === selected;
        const Icon = CategoryIcons[el];
        const handleClick = () => setSelected(el);
        return (
          <div
            key={ind}
            className={`section${isSelected ? ' selected' : ''}`}
            onClick={handleClick}>
            <Icon
              fill={isSelected ? 'white' : '#F3274C'}
              style={{height: 70, width: 70}}
            />
            <div className={`category-name${isSelected ? ' selected' : ''}`}>
              {el}
            </div>
          </div>
        );
      })}
    </div>
  );
};
