import blogs from "../data/blogs";

const BlogPost = () => {
  const summaryLength = 150;

  return (
    <article className="px-3">
      {blogs.map(({ title, overview }, index) => (
        <div key={index}>
          <h1 className="font-semibold my-3">{title}</h1>
          <p className="text-sm">
            {overview.length > summaryLength
              ? `${overview.slice(0, summaryLength)}...`
              : overview}
          </p>
          <a href="/" className="text-blue-500 text-sm">
            Read more
          </a>
        </div>
      ))}
    </article>
  );
};

export default BlogPost;
