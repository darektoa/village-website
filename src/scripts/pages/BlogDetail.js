import '../../styles/pages/BlogDetail.css';
import thumbnail_11 from '../../assets/images/blog/thumbnail_11.png';

const BlogDetail = () => {
  return(
    <section id="blog-detail-page">
      <div className="container">
        <div className="title-box">
          <span className="published">Published April 13, 2021</span>
          <h2>Start A Blog To Reach Your Creative Peak</h2>
          <Tags data={['#Tag-One', '#Tag-Two', '#Tag-Three']} />
        </div>
        
        <div className="img-box">
          <img src={thumbnail_11} alt=" " />
        </div>

        <div className="text-box">
          <p>Id cursus metus aliquam eleifend mi in nulla posuere. Ipsum faucibus vitae aliquet nec ullamcorper sit. Amet purus gravida quis blandit turpis cursus in hac. Posuere urna nec tincidunt praesent semper feugiat nibh. Sollicitudin ac orci phasellus egestas tellus. Quis blandit turpis cursus in hac. In hendrerit gravida rutrum quisque. Pellentesque habitant morbi tristique senectus et.</p>
          <p>Proin libero nunc consequat interdum varius sit amet mattis. Porttitor massa id neque aliquam. In fermentum posuere urna nec. Rhoncus aenean vel elit scelerisque mauris pellentesque. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Consequat id porta nibh venenatis cras sed. Eu nisl nunc mi ipsum faucibus vitae.</p>
          <h1>Heading 1</h1>
          <p>Proin libero nunc consequat interdum varius sit amet mattis. Porttitor massa id neque aliquam. In fermentum posuere urna nec. Rhoncus aenean vel elit scelerisque mauris pellentesque. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Consequat id porta nibh venenatis cras sed. Eu nisl nunc mi ipsum faucibus vitae.</p>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
        </div>
      </div>
    </section>
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