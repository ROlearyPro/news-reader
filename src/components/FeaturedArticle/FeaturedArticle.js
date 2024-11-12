import "./FeaturedArticle.css";
import PropTypes from "prop-types";
import { useParams, useNavigate, useLocation} from "react-router-dom";
import { useEffect, useState, } from "react";
import { Link } from "react-router-dom";

function FeaturedArticle({article}) {

  let location = useLocation();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    // getArticle(id);
  }, [id]);

  if (!article) return (
    <h2>Loading Article...</h2>
  );
  console.log(location);


  // function getArticle(search, id) {
  //   fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
  //     .then(res => {
  //       if (!res.ok) {
  //         const err = new Error(res.statusText)
  //         err.statusCode = res.status
  //         throw err
  //       }
  //       return res.json()
  //     })
  //     .then(data => setMovie(data.movie))
  //     .catch(err => {
  //       console.error(err)
  //       navigate(`/error/${err.statusCode}`)
  //     });
  // };

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
            <div>Article Overview:</div>
            <p className="featured-article-overview">{article.overview}</p>
            <div className="featured-article-all-details">
              <div className="featured-article-detail">
                <div>Release Date:</div>
                <div>{article.release_date}</div>
              </div>
              <div className="featured-article-detail">
                <div>Run Time:</div>
                <div>{article.runtime} minutes</div>
              </div>
              <div className="featured-article-detail">
                <div>Budget:</div>
                <div>${article.budget}</div>
              </div>
              <div className="featured-article-detail">
                <div>Revenue:</div>
                <div>${article.revenue}</div>
              </div>
            </div>
            <div className="featured-article-genres">
              <div>Genres:</div>
              {/* <div className="featured-article-genres-container">
                {article.genres && article.genres.length > 0 ? (
                  article.genres.map((genre, index) =>
                  (<div key={index} className="featured-article-genres-box">
                    {genre}
                  </div>))) : (
                  <div>No genres available</div>
                )}
              </div> */}
            </div>
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