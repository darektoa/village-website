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
        <TitleBox data={data} />
        <ImgBox data={data} className={loadingClassName} />
        <TextBox data={data} className={loadingClassName} />
      </div>
    </section>
  );
};


/* TITLE BOX ELEMENT */
const TitleBox = (props) => {
  const { data } = props;
  const { tags=[] } = data;
  const tagData = tags.map(item => StringHelper.tag(item.slug));

  return(
    <div className="title-box">
      <span className="published">Published April 13, 2021</span>
      <h2>{data.title}</h2>
      <Tags data={tagData} />
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
  const { data, list } = props;

  if (list) {
    return(
      <ul className="tags">
        { data.map((tag, indx) => <li className="tag" key={indx}>{tag}</li>) }
      </ul>
    );
  }

  return(
    <span className="tags">
      { data.join(' ') }
    </span>
  )
};

export default BlogDetail;