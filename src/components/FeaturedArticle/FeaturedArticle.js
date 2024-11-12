import "./FeaturedArticle.css";
import PropTypes from "prop-types";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, } from "react";
import { Link } from "react-router-dom";

function FeaturedArticle({ article, setFeaturedArticle }) {

  let location = useLocation();
  const navigate = useNavigate();
  const { search, id } = useParams();
  const [sourceName, setSourceName] = useState("");


  useEffect(() => {
    getArticle(search, id);
  }, [id]);

  if (!article) return (
    <h2>Loading Article...</h2>
  );
  console.log(search);
  console.log(id);
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

  function getArticle(search, id) {
    if (Object.keys(article).length === 0) {
      console.log("running");
      fetch('https://newsapi.org/v2/everything?' + `q=${search}&` + 'sortBy=popularity&' + 'apiKey=c19eb22bf9d94a9d9bc042eabe380ca8')
        .then(res => {
          if (!res.ok) {
            const err = new Error(res.statusText)
            err.statusCode = res.status
            throw err
          }
          return res.json()
        })
        .then(data => {setFeaturedArticle(data.articles[id])
          setSourceName(data.articles[id].source.name);
          console.log(sourceName)
        })
        .catch(err => {
          console.error(err)
          navigate(`/error/${err.statusCode}`)
        });
    }else{
      setSourceName(article.source.name);
      console.log(sourceName)

    }
  };

  return (
    <section className="featured-article">
      <Link to='/'>
        <button className="featured-article-button">See all Articles</button>
      </Link>
      <>
        <div className="featured-article-info">
          <div className="featured-article-title-poster-rating">
            <h2>{article.title}</h2>
            <img className="featured-article-poster" src={article.urlToImage} alt="image"></img>
          </div>
          <div className="featured-article-right-info">
            <div className="featured-article-tagline">
              <h3>{article.description}</h3>
            </div>
            <div>Article Content:</div>
            <p className="featured-article-overview">{article.content}</p>
            <p className="featured-article-source">{sourceName} </p>

            {/* <Link to={sourceUrl} target="_blank">Source</Link> */}
            
          </div>
        </div>
      </>
    </section>
  );
}

FeaturedArticle.propTypes = {
  article: PropTypes.shape({
  })
}

export default FeaturedArticle