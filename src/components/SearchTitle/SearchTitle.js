import './SearchTitle.css';
import { useState } from 'react';

function SearchTitle({ setFilteredArticles, articleList, filteredArticles, setSearchTerm}) {
  const [userSearchInput, setUserSearchInput] = useState('');
  var newList;

  const handleSearchInput = (e) => {
    setFilteredArticles(articleList)

    setUserSearchInput(() => e.target.value);
    setSearchTerm(()=>e.target.value)
    newList = filterArticlesByTitle(e.target.value, articleList)
    setFilteredArticles(newList)
    
  };

  function filterArticlesByTitle(title, articles) {

    return articles.filter(article => article.title.toLowerCase().includes(title.toLowerCase()))
  };

  function clearForm() {
    setFilteredArticles(articleList);
    setUserSearchInput('');
    setSearchTerm('');
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