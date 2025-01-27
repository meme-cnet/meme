import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css'; // Asegúrate de importar los estilos de Tailwind

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Memeorial: Price History In.</title>
        <meta
          name="description"
          content="(MEME)ORIAL lets you collect iconic images from the past and present, turning them into exclusive NFTs. From historical landmarks to viral moments, we have something for every collector."
        />
        <meta
          name="keywords"
          content="NFT, Collection, History, Crypto, NFT art, Digital art, Crypto art, Collectible NFT, Historical NFT, Historical art, Digital history, Digital collectible"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
