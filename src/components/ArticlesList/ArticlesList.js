import './ArticlesList.css';
import ArticleCard from '../ArticleCard/ArticleCard.js';
import PropTypes from 'prop-types';

function ArticlesList({ articleList, search, setFeaturedArticle }) {
  return (
    <div className='article-container'>
      <div className="all-article-cards">{
        articleList.map((article,  index) => {
          return (
            <ArticleCard
              title={article.title}
              author={article.author}
              imageUrl={article.urlToImage}
              publishedAt={article.publishedAt}
              artVal = {article}
              setArt={setFeaturedArticle}
              search = {search}
              key={"key" + index}
              id={index}
            />
          )
        })
      }</div>
    </div>
  );
}

ArticlesList.propTypes = {
  articleList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default ArticlesList;
