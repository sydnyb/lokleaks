
import Head from 'next/head';
import LokLeaksDemo from '../components/LokLeaksDemo';

export default function Home() {
  return (
    <>
      <Head>
        <title>LokLeaks</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <LokLeaksDemo />
    </>
  );
}
