import {memo, useState} from 'react';
import {SliderItem} from './components/SliderItem';
import './styles.scss';
import {SliderController} from './components/SliderController';

const initialData = [
  {title: 'loh', id: 1, color: 'red'},
  {title: 'daun', id: 2, color: 'green'},
  {title: 'john', id: 3, color: 'blue'},
  {title: 'gavno', id: 4, color: 'brown'},
  {title: 'anton', id: 5, color: 'yellow'},
  {title: 'knig44a bratan', id: 6, color: 'lime'},
  {title: 'kniga31 bratan', id: 7, color: 'lime'},
  {title: 'kniga131 bratan', id: 8, color: 'lime'},
  {title: 'knig1a bratan', id: 9, color: 'lime'},
  {title: 'knig1a bratan', id: 10, color: 'lime'},
  {title: 'knig123a bratan', id: 11, color: 'lime'},
  {title: 'kniga22 bratan', id: 12, color: 'lime'},
  {title: 'knig445a bratan', id: 13, color: 'lime'},
];

export const Slider = memo(() => {
  const [data, _] = useState(initialData);

  const handleRender = (
    {color, title}: {color: string; title: string},
    index: number
  ) => (
    <SliderItem
      color={color}
      title={title}
      index={index}
      length={data.length}
    />
  );

  return (
    <div className="slider">
      {data.map(handleRender)}
      <SliderController />
    </div>
  );
});
