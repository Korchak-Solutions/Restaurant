import {create} from 'zustand';

export type MenuCategories = 'Steak' | 'Pizza' | 'Burger' | 'Dessert' | 'Drink';

export interface FoodItemDto {
  id: string;
  category: MenuCategories;
  price: number;
  title: string;
  isFeatured: boolean;
  ingredients: string;
}
export type MenuDto = Record<MenuCategories, FoodItemDto[] | undefined>;

const initialMenuState: MenuDto = {
  Steak: [
    {
      id: 's1',
      category: 'Steak',
      price: 25.99,
      title: 'Ribeye Steak',
      ingredients: 'Beef, Salt, Pepper, Garlic Butter',
      isFeatured: true,
    },
    {
      id: 's2',
      category: 'Steak',
      price: 22.5,
      title: 'Sirloin Steak',
      ingredients: 'Beef, Herbs, Olive Oil',
      isFeatured: false,
    },
  ],
  Pizza: [
    {
      id: 'p1',
      category: 'Pizza',
      price: 15.99,
      title: 'Margherita',
      ingredients: 'Tomato, Mozzarella, Basil',
      isFeatured: true,
    },
    {
      id: 'p2',
      category: 'Pizza',
      price: 17.5,
      title: 'Pepperoni',
      ingredients: 'Tomato, Mozzarella, Pepperoni',
      isFeatured: false,
    },
    {
      id: 'p3',
      category: 'Pizza',
      price: 18.0,
      title: 'BBQ Chicken',
      ingredients: 'Chicken, BBQ Sauce, Onion, Cheese',
      isFeatured: true,
    },
  ],
  Burger: [
    {
      id: 'b1',
      category: 'Burger',
      price: 12.99,
      title: 'Classic Cheeseburger',
      ingredients: 'Beef, Cheese, Lettuce, Tomato, Bun',
      isFeatured: false,
    },
    {
      id: 'b2',
      category: 'Burger',
      price: 13.5,
      title: 'Bacon Burger',
      ingredients: 'Beef, Bacon, Cheese, Pickles',
      isFeatured: true,
    },
    {
      id: 'b3',
      category: 'Burger',
      price: 14.0,
      title: 'Veggie Burger',
      ingredients: 'Bean Patty, Lettuce, Tomato, Vegan Mayo',
      isFeatured: false,
    },
  ],
  Dessert: [
    {
      id: 'd1',
      category: 'Dessert',
      price: 6.5,
      title: 'Chocolate Lava Cake',
      ingredients: 'Chocolate, Eggs, Butter, Sugar',
      isFeatured: true,
    },
    {
      id: 'd2',
      category: 'Dessert',
      price: 5.0,
      title: 'Cheesecake',
      ingredients: 'Cream Cheese, Graham Cracker Crust',
      isFeatured: false,
    },
  ],
  Drink: [
    {
      id: 'dr1',
      category: 'Drink',
      price: 3.0,
      title: 'Coca-Cola',
      ingredients: 'Carbonated Water, Sugar, Flavoring',
      isFeatured: false,
    },
    {
      id: 'dr2',
      category: 'Drink',
      price: 4.5,
      title: 'Orange Juice',
      ingredients: 'Fresh Orange Juice',
      isFeatured: true,
    },
    {
      id: 'dr3',
      category: 'Drink',
      price: 4.0,
      title: 'Espresso',
      ingredients: 'Coffee Beans, Water',
      isFeatured: true,
    },
  ],
};

const featured: FoodItemDto[] = Object.values(initialMenuState)
  .flatMap(items => items ?? [])
  .filter(item => item.isFeatured);

// in component:
// const data = useStore((state) => state.menu)
interface MenuStoreState {
  menu: MenuDto;
}

export const useMenuStore = create<MenuStoreState>(() => ({
  menu: initialMenuState,
}));

interface SliderStoreState {
  index: number;
  featured: FoodItemDto[];
  indexSetters: {nextIndex: () => void; prevIndex: () => void};
}

export const useSliderStore = create<SliderStoreState>(set => ({
  index: 0,
  featured,
  indexSetters: {
    nextIndex: () =>
      set(state => ({
        index: (state.index + 1) % state.featured.length,
      })),
    prevIndex: () =>
      set(state => ({
        index:
          (state.index - 1 + state.featured.length) % state.featured.length,
      })),
  },
}));
