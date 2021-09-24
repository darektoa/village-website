import { useEffect, useState } from 'react';
import '../../../styles/pages/blog/Blog.css';
import StringHelper from '../../utils/string-helper.js';
import BlogData from '../../data/BlogData';
import Article from '../../components/blog/Article.js';
import ArticleLoop from '../../components/blog/ArticleLoop.js';

const Blog = (props) => {
  const [data, setData] = useState(['', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(true);
  const loadingClassName = isLoading ? 'box-loading' : '';

  useEffect(() => {
    window.scrollTo(0, 0);
    BlogData.getByPage(1)
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
        </header>
        <ArticleLoop data={data} className={loadingClassName} />
      </div>
    </section>
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


export default Blog;