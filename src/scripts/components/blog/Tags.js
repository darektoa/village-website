import '../../../styles/components/blog/Tags.css';
import StringHelper from "../../utils/string-helper";


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


export default Tags;