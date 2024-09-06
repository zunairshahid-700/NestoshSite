import ArticleTeaser from "./ArticleTeaser";
import { storyblokEditable } from "@storyblok/react";
import SectionTitle from "./global/SectionTitle";
 
const PopularArticles = ({ blok }) => {
    // console.log("log", blok.articles);
    
  return (
    <>
     <section class="c-blogs">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="c-blogs__wrap">
                        <div class="c-blogs__header">
                            <SectionTitle cssClass="c-blogs__header__heading" title={blok.headline} />
                            <p class="c-blogs__header__paragraph">{blok.SubHeading}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

        {/* {blok.articles.map((article) => {
            // console.log("article", article.slug);
            
        //   article.content.slug = article.slug
        //   return (
        //     <ArticleTeaser article={article.content} key={article.uuid} />
        //   )
        })} */}
    </>
  );
};
export default PopularArticles;