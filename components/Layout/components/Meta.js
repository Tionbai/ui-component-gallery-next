import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="UTF-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Tina\'s UI component gallery',
  keywords: 'web development, front-end, CSS, SCSS, components, webdesign, UI, UX, accessibility, gallery, library, HTML, React, Next.js, JavaScript',
  description: 'A UI design component gallery / library made with Next.js. All components are written from scratch with CSS / Sass / SCSS.'
}

export default Meta;
