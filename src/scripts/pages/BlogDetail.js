import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/pages/BlogDetail.css';
import BlogData from '../data/BlogData';
import StringHelper from '../utils/string-helper';
import defaultImg from '../../assets/images/transparent.svg';

const BlogDetail = () => {
  const { idBlog } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const loadingClassName = isLoading ? 'box-loading' : '';

  useEffect(() => {
    window.scrollTo(0, 0);
    BlogData.getById(idBlog)
    .then(data => {
      console.log(data);
      setData(data);
      setIsLoading(false);
    })
  }, [idBlog]);

  return(
    <section id="blog-detail-page">
      <div className="container">
        <TitleBox data={data} className={loadingClassName} />
        <ImgBox data={data} className={loadingClassName} />
        <TextBox data={data} className={loadingClassName} />
      </div>
    </section>
  );
};


/* TITLE BOX ELEMENT */
const TitleBox = (props) => {
  const { data, className } = props;
  const { tags=[], created_at } = data;
  const tagData = tags.map(item => StringHelper.tag(item.slug));
  const publishedDate = new Date(created_at).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return(
    <div className="title-box">
      <button className="back" onClick={()=>window.history.back()}> ← </button>
      <span className="published">Published at {publishedDate}</span>
      <h2 className={className}>{data.title}</h2>
      <Tags data={tagData} className={className}/>
    </div>
  );
};


/* IMG BOX ELEMENT */
const ImgBox = (props) => {
  const { data, className='' } = props;
  const imgBoxClassName = StringHelper.join(' ', 'img-box', className);

  return(
    <div className={imgBoxClassName}>
      <img src={data.thumbnail || defaultImg} alt=" " />
    </div>
  );
};


/* TEXT BOX ELEMENT */
const TextBox = (props) => {
  const { data, className='' } = props;
  const textBoxClassName = StringHelper.join(' ', 'text-box', className);

  return(
    <div className={textBoxClassName}>
      {data.description}
    </div>
  );
};


/* TAGS ELEMENT */
const Tags = (props) => {
  const { data, list, className='' } = props;
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

export default BlogDetail;