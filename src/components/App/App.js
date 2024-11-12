import './App.css';
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Nav from '../Nav/Nav';
import testData from '../testData/testData.json'
import ArticlesList from '../ArticlesList/ArticlesList';
import FeaturedArticle from '../FeaturedArticle/FeaturedArticle';
// import ErrorPage from '../ErrorPage/ErrorPage';


function App() {

  const navigate = useNavigate();
  // const [articleList, setArticleList] = useState([]);
  const [articleList, setArticleList] = React.useState([testData.articles]);

  // const [filteredArticles, setFilteredArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([...testData.articles]);
  const [featuredArticle, setFeaturedArticle] = useState({});
  const [searchTerm, setSearchTerm] = useState("Airlines");
  const tempsearch = "airlines"
  const apiKey = "c19eb22bf9d94a9d9bc042eabe380ca8"



  // var url = 'https://newsapi.org/v2/everything?' +`q=${tempsearch}&`+'sortBy=popularity&' +'apiKey=c19eb22bf9d94a9d9bc042eabe380ca8';
  
  // function fetchNews() {
  //   fetch(url)
  //     .then((res) => {
  //       if (!res.ok) {
  //         const err = new Error(res.statusText);
  //         err.statusCode = res.status;
  //         throw err;
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setArticleList(data.articles);
  //       setFilteredArticles([...data.articles])
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }


console.log(articleList)
console.log(testData)
  useEffect(()=>{
    // fetchNews()
  }, []);

  return (
    <div className="App">
      <Nav setFilteredArticles={setFilteredArticles} articlesList = {articleList} filteredArticles={filteredArticles}/>
      <Routes>
        <Route path='/' element={<ArticlesList articlesList={filteredArticles} search={searchTerm} setFeaturedArticle={setFeaturedArticle}/>}></Route>
        <Route path=':search/:id' element={<FeaturedArticle article={featuredArticle} setFeaturedArticle={setFeaturedArticle}/>}></Route>
      </Routes>
      Should see words here
    </div>
  );
}

export default App;
