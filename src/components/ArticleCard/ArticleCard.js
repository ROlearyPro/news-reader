import './ArticleCard.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ArticleCard({
  title, author, publishedAt, artVal, setArt, imageUrl, search, id}) {
  return (
    <Link to={`${search}/${id}`} onClick={()=>setArt(artVal)}>
      <div className='set-article' >
      <div className="article-card">
        <h3 className="article-title">{title}</h3>
        <img className='article-image' src={imageUrl} alt="image for article">{}</img>
        <div className='article-author'>
          {author}
        </div>
      </div>
      </div>
     </Link>
  );
}


export default ArticleCard;