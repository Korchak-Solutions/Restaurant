import './styles.scss';

const red = '#F3274C';

export const EntryText = () => {
  return (
    <div className="entry-text-wrapper">
      <div className="description">
        <h1 className="description-header">
          The Perfect Space to Enjoy Fantastic Food
        </h1>
        <p className="description-text">
          Festive dining at Farthings where we are strong believers in using the
          very best produce
        </p>
      </div>
      <div className="weekly-special-meal-card-wrapper">
        <div className="weekly-special-meal-card">
          <div className="weekly-special-flag">Weekly special</div>
          <div className="weekly-special-meal-info">
            <span>
              <span style={{color: red}}>$</span>90.85
            </span>
            <span>Sicilian Pizza</span>
            <span>⭐⭐⭐⭐⭐</span>
          </div>
          <img src="../../../public/assets/pizza_img.png" />
        </div>
      </div>
    </div>
  );
};
