import {useSliderStore} from '../../../../store';
import './styles.scss';

const classNames = [
  ' beforePrevious',
  ' previous',
  ' current',
  ' next',
  ' afterNext',
];

export const SliderItem = ({
  color,
  title,
  index,
  length,
}: {
  color: string;
  title: string;
  index: number;
  length: number;
}) => {
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

  return (
    <div className={className} style={{background: color}}>
      {title}
    </div>
  );
};
