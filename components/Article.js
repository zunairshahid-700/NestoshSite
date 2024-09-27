import { render } from 'storyblok-rich-text-react-renderer';

const Article = ({ blok }) => {
  return (
    <section className="text-muted">
      <div className="container d-flex flex-column justify-content-center align-items-center py-5 mt-5">
        <img
          className="img-fluid mb-4 rounded"
          alt={blok.image?.alt}
          src={blok.image?.filename}
        />
        <div className="text-start w-100" style={{ maxWidth: "100%" }}>
          <h1 className="display-4 mb-3 fw-bold text-dark">
            {blok.title}
          </h1>
          <h2 className="fs-3 mb-3 fw-medium text-secondary">
            {blok.subtitle}
          </h2>
          <div className="mb-5 text-justify">
            {render(blok.content)}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Article;
