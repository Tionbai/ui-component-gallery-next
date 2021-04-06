import Meta from "../components/Layout/components/Meta";

const about = () => {
  return (
    <div>
      <section className="grid spacing">
        <Meta title="About - Tina's UI component gallery" />
        <h1 className="title">What is this all about?</h1>
        <p>
          Hi!
          <br />
          <br />
          I'm Tina, and this is my personal UI webdesign project.
          <br />
          <br />
          The goal is to have fun and design UI web components and layouts using
          mainly CSS/Sass. There is very limited logic (JavaScript) used on
          these components, and if so, it is related to design rather than
          functionality.
          <br />
          <br />
          The key focus areas for each component is visual harmony, clean,
          structured and modern code, great responsiveness for all screen sizes
          and devices, and cross-browser compatibility.
          <br />
          <br />
          All of the components are made completely from scratch following
          semantic HTML, CSS BEM and Material Design™ principles. The designs
          themselves have been found from various online sources - especially
          but not limited to{" "}
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://dribbble.com/"
          >
            Dribbble.com
          </a>
          .
          <br />
          <br />
          <b>NOTE:</b> Everything you find here is open source and under the MIT
          license, so feel free to snatch anything you fancy.
        </p>
      </section>
    </div>
  );
};

export default about;
