import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import './App.css';
import CategoryMovie from './components/CategoryMovie';


export default () => {

  const [movielist, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(()=>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setFeaturedData(chosenInfo);         
    }

    loadAll();
  }, []);

  return (
    <div className='page'>

      {featuredData &&
        <FeaturedMovie item={featuredData}/>
      }

        <CategoryMovie/>

      <section className='="lists'>
        {movielist.map((item, key)=>(
            <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
  
};

