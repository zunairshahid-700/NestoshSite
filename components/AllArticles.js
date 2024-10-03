import ArticleTeaser from './ArticleTeaser';
import { getStoryblokApi, storyblokEditable } from '@storyblok/react';
import { useState, useEffect } from 'react';
const AllArticles = ({ blok }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories`, {
        starts_with: 'blog',
        is_startpage: false,
      });
      setArticles((prev) =>
        data.stories
          .filter((article) => article.slug !== "blogs") // Exclude the blog page
          .map((article) => {
            article.content.slug = article.slug;
            return article;
          })
      );
    };
    getArticles();
  }, []);
  return (
    <>
      <p className="fs-1">{blok.title}</p>
      <div
        className="row w-100 g-3 mx-auto px-lg-5 px-md-4"
        {...storyblokEditable(blok)}
      >
        {articles[0] &&
          articles.map((article) => (
            <div className="col-lg-4 col-md-6" key={article.uuid}>
              <ArticleTeaser article={article.content} />
            </div>
          ))}
      </div>
    </>
  );
};
export default AllArticles;
