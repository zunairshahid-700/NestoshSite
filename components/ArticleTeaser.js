import Link from "next/link";
import Image from "next/image";
import userImage from "../public/assets/images/user.svg";

const ArticleTeaser = ({ url, image, title, desc, date }) => {
  return (
    <div className="c-blogs__slide">
      <div className="c-blogs__card">
        <div className="c-blogs__card__img-holder">
          <Link href={url}>
            <a>
              <figure className="m-0">
                <img
                  className="c-blogs__card-img"
                  src={image}
                  alt="blog"
                />
              </figure>
            </a>
          </Link>
          <div className="c-blogs__card-img__card-date">
            <p>{date}</p>
          </div>
        </div>
        <div className="card-body c-blogs__content">
          <div className="c-blogs__content__icons-wrap">
            <Image src={userImage} alt="User" />
            <span>by Nestosh</span>
          </div>
          <Link href={url}>
            <a className="c-blogs__content__card-title">{title}</a>
          </Link>
          <p className="c-blogs__content__card-text">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleTeaser;
