import './SearchTitle.css';
import { useState } from 'react';

function SearchTitle({ setFilteredArticles, articlesList }) {
  const [userSearchInput, setUserSearchInput] = useState('');

  const handleSearchInput = (e) => {
    setUserSearchInput(() => e.target.value);
    const newList = filterArticlesByTitle(e.target.value, articlesList)
    setFilteredArticles(newList)
    
  };

  function filterArticlesByTitle(title, articles) {
    console.log(articles)
    console.log(title)
    return articles[0].filter(article => article.title.toLowerCase().includes(title.toLowerCase()))
  };

  function clearForm() {
    setFilteredArticles(articlesList);
    setUserSearchInput('');
  }

  const handleSearchReset = (e) => {
    e.preventDefault();
    return
  };

  return (
    <form onSubmit={handleSearchReset}>
      <input
        type="text"
        placeholder="Search by Title"
        className="search-by-title"
        value={userSearchInput}
        onChange={handleSearchInput}
      />
      <button type="reset" className="nav-search-button" onClick={clearForm}>Reset</button>
    </form>
  );
}

export default SearchTitle;