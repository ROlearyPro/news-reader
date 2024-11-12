import './Nav.css';
import SearchTitle from '../SearchTitle/SearchTitle.js';
import { Link } from 'react-router-dom';


function Nav({ setFilteredArticles, articlesList, filteredArticles }) {
  return (
    <header>
        <div className="full-site-title">
          <Link className="site-title" to={'/'}>RONews</Link>
        </div>
      <div className="search-all">

        <SearchTitle
          setFilteredArticles={setFilteredArticles}
          articlesList={articlesList}
          filteredArticles={filteredArticles}
        />
      </div>
    </header >
  );
}

export default Nav;