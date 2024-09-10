import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import { useEffect, useState } from "react";
import ArticleTeaser from "./ArticleTeaser";
import SectionTitle from "./global/SectionTitle";
import Slider from "react-slick";

const PopularArticles = ({ blok }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const storyblokApi = getStoryblokApi();
  
      try {
        const { data } = await storyblokApi.get('cdn/stories', {
          version: 'published',
          resolve_relations: 'articles',
        });
        
        console.log("Fetched articles:", data.stories);
  
        // Ensure the IDs in blok.articles are correct and exist
        console.log("IDs in blok.articles:", blok.articles);
  
        // Filter articles
        const validArticles = data.stories.filter(article => 
          blok.articles.includes(article.uuid)
        );
  
        console.log("Valid articles:", validArticles);
  
        setArticles(validArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
  
    fetchArticles();
  }, [blok.articles]);
  

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
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
    <section className="c-blogs" {...storyblokEditable(blok)}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="c-blogs__wrap">
              <div className="c-blogs__header">
                <SectionTitle
                  cssclass="c-blogs__header__heading"
                  title={blok.headline}
                />
                <p className="c-blogs__header__paragraph">
                  {blok.SubHeading}
                </p>
              </div>
              <div className="c-blogs__body">
                <Slider {...settings} className="s-slick js-blog-carousel">
                  {articles.map((article) => {
                    // Ensure that article has valid content
                    if (article && article.content && article.slug) {
                      article.content.slug = article.slug;
                      return (
                        <ArticleTeaser
                          article={article.content}
                          key={article.uuid}
                          articleRaw={article}
                        />
                      );
                    }
                    return null; // Return null if the article is not valid
                  })}
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
