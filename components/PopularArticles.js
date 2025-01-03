import ArticleTeaser from "./ArticleTeaser";
import SectionTitle from "./global/SectionTitle";
import Slider from "react-slick";

const PopularArticles = ({ title, desc, articles }) => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    speed: 300,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
    ],
  };

  return (
    <section className="c-blogs">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="c-blogs__wrap">
              <div className="c-blogs__header">
                <SectionTitle
                  cssclass="c-blogs__header__heading"
                  title={title}
                />
                <p className="c-blogs__header__paragraph">{desc}</p>
              </div>
              <div className="c-blogs__body">
                <Slider {...settings} className="s-slick js-blog-carousel">
                  {articles.map((article) => (
                    <ArticleTeaser {...article} key={article.id} />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularArticles;
