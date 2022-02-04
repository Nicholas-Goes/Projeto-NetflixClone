import React from 'react';
import './MovieRow.css';

export default ({title, items}) => {
  return (
      <div className='movieRow'>
        <div className='movieRow--title'>
          <h2>{title}</h2>
          <a href='#'>Ver mais</a>
        </div>
          <div className='movieRow--listarea'>

              <div className='movieRow--list'>
                {items.results.length > 0 && items.results.map((item, key) =>(
                  <div key={key} className='movieRow--item'>
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title}/>                  
                  </div>
                ))}
              </div>
          </div>
      </div>
  );
}
