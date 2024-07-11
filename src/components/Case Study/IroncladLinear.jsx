import blogs from "../../data/blogs";
import Header from "../Header";

const IroncladLinear = () => {
  const blog = blogs[0];

  return (
    <div className="font-poppins mx-2 sm:mx-16 md:mx-40 lg:mx-60 xl:mx-custom my-14 px-4">
      <Header />
      <section className="my-3">
        <h1 className=" text-2xl my-3">{blog.title}</h1>
        <p className="text-sm">{blog.overview}</p>
      </section>

      <hr />
      <h4 className="font-semibold mt-3">Challenges</h4>
      <section className="md:flex text-sm my-3">
        {blog.challengesTitle.map((item, index) => (
          <div key={index}>
            <h4 className="font-medium md:my-3">{item}</h4>
            <p className="mb-3">{blog.challenges[index]}</p>
          </div>
        ))}
      </section>

      {/* <h4>Approach</h4>
      <div>{blog.approach}</div>
      <section>
        {blog.process.map((item, index) => (
          <div key={index}>
            <p>{item}</p>
          </div>
        ))}
      </section> */}
    </div>
  );
};

export default IroncladLinear;
