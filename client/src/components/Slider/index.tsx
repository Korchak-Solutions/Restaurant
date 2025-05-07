import {memo} from 'react';
import {FoodItemDto, useSliderStore} from '../../store';
import {SliderController} from './components/SliderController';
import {SliderItem} from './components/SliderItem';
import './styles.scss';

export const Slider = memo(() => {
  const data = useSliderStore(state => state.featured);
  const handleRender = (item: FoodItemDto, index: number) => (
    <SliderItem {...item} index={index} length={data.length} />
  );

  return (
    <>
      <div className="section-header">Featured dished</div>
      <div className="slider">
        {data.map(handleRender)}
        <SliderController />
      </div>
    </>
  );
});
