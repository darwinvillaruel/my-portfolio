import Header from "../components/Header";
import BlogPost from "../components/BlogPost";

const Projects = () => {
  return (
    <div className="font-poppins mx-2 sm:mx-16 md:mx-40 lg:mx-60 xl:mx-96 my-14 px-4">
      <Header />
      <section>
        These projects ignite my curiosity and drive action, making them vital
        to me as a developer. Currently, a work in progress...
      </section>
      <section className="mt-5">
        <h1 className="font-semibold mb-3 text-xl">Projects | Case Study</h1>
        <BlogPost />
      </section>
    </div>
  );
};

export default Projects;
