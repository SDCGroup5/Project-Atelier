import React from 'react';
import './lib/relatedProducts.css';

function RelatedCard({
  product, style, rating, relatedCardClickHandler, actionButtonHandler, actionButton,
}) {
  return (
    <div
      data-testid="related-card"
      role="button"
      tabIndex="0"
      aria-label="productDetails"
      className="product-card"
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          relatedCardClickHandler(product.id);
        }
      }}
      onClick={() => { relatedCardClickHandler(product.id); }}
    >
      <div className="image-card">
        <img
          height="300"
          width="300"
          src={style.photos[0].thumbnail_url ? style.photos[0].thumbnail_url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7SsdDOAxGIuFgj3nx_8D0JW4ypdrnGGWnSgbXvuDDA&s'}
          alt={product.name}
        />
        <button
          type="button"
          aria-label={actionButton === '⭐' ? 'comparing products' : 'removing product'}
          className="actionButton"
          onClick={(e) => {
            e.stopPropagation();
            actionButtonHandler(product);
          }}
        >
          {actionButton}
        </button>
      </div>
      <p>
        Generate Product #
        {product.id}
      </p>
      <h3>
        Name:
        {product.name}
      </h3>
      <p>
        Category:
        {product.category}
        <br />
        {rating}
        Slogan:
        {product.slogan}
      </p>
    </div>
  );
}

export default RelatedCard;
