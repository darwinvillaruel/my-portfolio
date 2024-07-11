import blogs from "../data/blogs";
import { NavLink } from "react-router-dom";

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
          <NavLink
            to="/projects/ironclad-linear"
            className="text-blue-500 text-sm">
            Read more
          </NavLink>
        </div>
      ))}
    </article>
  );
};

export default BlogPost;
