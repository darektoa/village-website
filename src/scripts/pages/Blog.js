import '../../styles/pages/Blog.css';
import React from 'react';
import articlesData from '../data/articles-data.js';

const Blog = (props) => {
  return (
    <section id="blog-page">
      <div className="title-box container">
        <span>OUR BLOG</span>
        <h2>Lorem Ipsum Lorem Ipsum Dolor</h2>

        <i className="icon_memphis-1"></i>
        <i className="icon_memphis-2"></i>
      </div>

      <div className="latests-news container">
        <h3>Berita Terbaru</h3>
        <Article data={articlesData[0]} className="latests" listedTags/>
        <Dates />
        <div className="articles">
          <ArticleLoop data={articlesData.slice(1, 5)} />
        </div>
      </div>

      <div className="all-news container">
        <header>
          <h3>Semua Berita</h3>
          <button>Lihat Semua</button>
        </header>
        <ArticleLoop data={articlesData.slice(5)} />
      </div>
    </section>
  );
};


/* TAGS ELEMENT */
const Tags = (props) => {
  const { tags, list } = props;

  if (list) {
    return(
      <ul className="tags">
        { tags.map((tag, indx) => <li className="tag" key={indx}>{tag}</li>) }
      </ul>
    );
  }

  return(
    <span className="tags">
      { tags.join(' ') }
    </span>
  )
};


/* ARTICLE ELEMENT */
const Article = (props) => {
  const { data, listedTags } = props;
  const { thumbnail, tags, title } = data;
  const list = listedTags === true ? true : false;

  return(
    <div className="article">
      <div className="img-box">
        <img src={thumbnail} alt="" />
      </div>
      <div className="text-box">
        <Tags tags={tags} list={list}/>
        <h4>{title}</h4>
      </div>
    </div>
  );
};


/* DATE ELEMENT */
const Dates = () => {
  const date = new Date();
  const months = ['Januari','Februari', 'Maret', 'April', 'Mei', 'juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return (
    <div className="date">
      {month} {day}, {year}
    </div>
  );
}


/* LOOPING ARTICLE ELEMENT */
const ArticleLoop = (props) => {
  const { data, listedTags } = props;
  const articles = data.map((item, index) => (
    <Article data={item} key={index} listedTags={listedTags}/>
  ));

  return(
    <React.Fragment>
      {articles}
    </React.Fragment>
  );
}

export default Blog;