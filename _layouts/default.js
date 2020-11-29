import Head from "next/head";

// components

const DefaultLayout = ({ title, description, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
    <main>{children}</main>
  </>
);

export default DefaultLayout;
