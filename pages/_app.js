
import '@/styles/globals.css'
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }) {
  /* SunLayout이 없는 경우를 생각해서 코딩 */
  const Emptylayout = ({children}) => <>{children}</>
    const SubLayout = Component.Layout || Emptylayout

  return (
    <Layout>
      <SubLayout>
        <Component {...pageProps} />
      </SubLayout>    
    </Layout>
    );
}