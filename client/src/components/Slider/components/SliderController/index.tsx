import {useRef} from 'react';
import {useSliderStore} from '../../../../store';
import './styles.scss';
import {ArrowIcon} from '../../../../assets/icons/ArrowIcon';
export const SliderController = () => {
  const {nextIndex: setNext, prevIndex: setPrevious} = useSliderStore(
    state => state.indexSetters
  );
  const isInputBlocked = useRef(false);
  const setStateWithTimeout = (setter: () => void) => {
    if (isInputBlocked.current) return;
    isInputBlocked.current = true;
    setter();
    setTimeout(() => (isInputBlocked.current = false), 300);
  };

  const pressNext = () => setStateWithTimeout(setNext);
  const pressPrevious = () => setStateWithTimeout(setPrevious);

  return (
    <div className="slider-controller">
      <div className="slider-button reverse" onClick={pressPrevious}>
        <ArrowIcon />
      </div>

      <div className="slider-button" onClick={pressNext}>
        <ArrowIcon />
      </div>
    </div>
  );
};
