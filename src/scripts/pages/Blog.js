import React, { createRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/pages/Blog.css';
// import articleData from '../data/article-data.js';
import defaultImg from '../../assets/images/transparent.svg';
import StringHelper from '../utils/string-helper.js';
import ElementHelper from '../utils/element-helper';
import BlogData from '../data/BlogData';

const Blog = (props) => {
  const [data, setData] = useState(['', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(true);
  const loadingClassName = isLoading ? 'box-loading' : '';

  useEffect(() => {
    BlogData.getByPage(2)
    .then((data) => {
      setData(data);
      setIsLoading(false);
    })
  }, []);

  return (
    <section id="blog-page">
      <div className="title-box container">
        <span>OUR BLOG</span>
        <h2>Blog Adalah Sumber Informasi Kami</h2>

        <i className="icon_memphis-1"></i>
        <i className="icon_memphis-2"></i>
      </div>

      <div className="latests-news container">
        <h3>Berita Terbaru</h3>
        <Article data={data[0]} className={loadingClassName} listedTags />
        <Dates className={loadingClassName} />
        <div className="articles">
          <ArticleLoop data={data.slice(1, 5)} className={loadingClassName} />
        </div>
      </div>

      <div className="all-news container">
        <header>
          <h3>Semua Berita</h3>
          <button>Lihat Semua</button>
        </header>
        <ArticleLoop data={data} className={loadingClassName} />
      </div>
    </section>
  );
};


/* TAGS ELEMENT */
const Tags = (props) => {
  const { data, list, className } = props;
  const tagClassName = StringHelper.join(' ', 'tag', className);
  const tagsClassName = StringHelper.join(' ', 'tags', className);
  
  if (list) {
    return(
      <ul className="tags">
        { data.map((tag, indx) => <li className={tagClassName} key={indx}>{tag}</li>) }
      </ul>
    );
  }

  return(
    <span className={tagsClassName}>
      { data.join(' ') }
    </span>
  )
};


/* ARTICLE ELEMENT */
const Article = (props) => {
  const { pathname } = useLocation();
  const { data, listedTags, className='' } = props;
  const { id, thumbnail, tags=[], title } = data;
  const tagData = tags.map(item => StringHelper.tag(item.slug));
  const list = listedTags === true ? true : false;
  const imgBoxClassName = StringHelper.join(' ', 'img-box', className);
  const imgRef = createRef();
  
  useEffect(() => {
    const imgElmnt = imgRef.current;
    const successHandler = () => {};
    const errorHandler = () => imgElmnt.src = defaultImg;

    ElementHelper.load(imgElmnt)
    .then(successHandler)
    .catch(errorHandler)
  }, [imgRef]);

  return(
    <Link className="article" to={`${pathname}/${id}`}>
      <div className={imgBoxClassName}>
        <img src={thumbnail || defaultImg} alt=" " ref={imgRef} />
      </div>
      <div className="text-box">
        <Tags data={tagData} list={list} className={className}/>
        <h4 className={className}>{title}</h4>
      </div>
    </Link>
  );
};


/* DATE ELEMENT */
const Dates = (props) => {
  const { className='' } = props;
  const dateClassName = StringHelper.join(' ', 'date', className);
  const date = new Date();
  const months = ['Januari','Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return (
    <div className={dateClassName}>
      {month} {day}, {year}
    </div>
  );
}


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

export default Blog;