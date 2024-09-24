import Link from 'next/link';
import { render } from 'storyblok-rich-text-react-renderer';
import Image from 'next/image';
import userImage from '../public/assets/images/user.svg'

const ArticleTeaser = ({ article, articleRaw }) => {
  const isoDate = articleRaw?.published_at;
  const dateObj = new Date(isoDate);

  // Define an array of month names
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Format the date as '9 Sep 2024'
  const formattedDate =
    dateObj.getDate() +
    " " +
    months[dateObj.getMonth()] +
    " " +
    dateObj.getFullYear();

  return (
    <div className="c-blogs__slide">
      <div className="c-blogs__card">
        <div className="c-blogs__card__img-holder">
          <a href="#">
            <figure className="m-0">
              <img
                className="c-blogs__card-img"
                src={article.image?.filename}
                alt="blog"
              />
            </figure>
          </a>
          <div className="c-blogs__card-img__card-date">
            <p>{formattedDate}</p>
          </div>
        </div>
        <div className="card-body c-blogs__content">
          <div className="c-blogs__content__icons-wrap">
            <Image src={userImage} alt="User" />
            <span>by Nestosh</span>
          </div>
          <a
            href={`/blog/${article.slug}`}
            className="c-blogs__content__card-title"
          >
            {article?.title}
          </a>
          <p className="c-blogs__content__card-text">
            {article?.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ArticleTeaser;
