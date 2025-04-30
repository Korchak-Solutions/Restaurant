import {useState} from 'react';
import {FoodItemDto, MenuCategories, useMenuStore} from '../../store';
import './styles.scss';
import {CategoryPicker} from './components/CategoryPicker';

export const MenuPicker = () => {
  const menuData = useMenuStore(state => state.menu);

  const [currentCategory, setCurrentCategory] =
    useState<MenuCategories>('Drink');

  const currentData: FoodItemDto[] | undefined = menuData[currentCategory];

  return (
    <div>
      <CategoryPicker
        selected={currentCategory}
        setSelected={setCurrentCategory}
      />
      <div className="menu-picker-wrapper">
        <img
          className="menu-picker-image"
          src="../../../public/assets/dish_on_plate.png"
        />
        <div className="menu-picker-info">
          <div className="menu-items-list-wrapper">
            <h2 className="menu-picker-active-category">{currentCategory}</h2>
            <div className="menu-items-list">
              {currentData?.map((item, index) => {
                return (
                  <>
                    <div key={item.id} className="menu-list-item">
                      <div className="menu-list-item-info">
                        <h3>{item.title}</h3>
                        <span className="ingredients">{item.ingredients}</span>
                      </div>
                      <span className="price">${item.price}</span>
                    </div>
                    {index !== currentData.length - 1 && (
                      <div className="horizontal-line"></div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
