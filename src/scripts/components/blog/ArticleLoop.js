import React from 'react';
import Article from './Article.js';


/* LOOPING ARTICLE ELEMENT */
const ArticleLoop = (props) => {
  const { data, listedTags, className } = props;
  const articles = data.map((item, index) => (
    <Article data={item} key={index} listedTags={listedTags} className={className} />
  ));

  return(
    <React.Fragment>
      {articles}
    </React.Fragment>
  );
}


export default ArticleLoop;