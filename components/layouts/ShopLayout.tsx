import Head from "next/head"
import { FC } from "react";

interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    children: React.ReactNode;
}
export const ShopLayout: FC<Props> = ({children, title, pageDescription, imageFullUrl}) => {
  return (
   <>
   <Head>
    <title>{title}</title>
    <meta name="description" content={pageDescription}/>
    <meta name="og:title" content={pageDescription}/>
    {
      imageFullUrl && (
        <meta name="og:image" content={imageFullUrl}/>
      )
    }
   </Head>
   <nav>

   </nav>
   <main style={{margin: '80px auto', maxWidth: '1440px', padding: '0px 30px'}}>
    {children}
   </main>
   <footer></footer>
   </>
  )
}
