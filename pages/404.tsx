import Meta, { defaultMetaProps } from '@/components/layout/meta';

// Bu satırı kaldırın:
// export { getStaticProps } from '.';

// Gerekiyorsa, getStaticProps'u direkt burada tanımlayın:
export async function getStaticProps() {
  return {
    props: {
      meta: {
        ...defaultMetaProps,
        title: '404 – Sayfa Bulunamadı'
      }
    }
  };
}

export default function Custom404() {
  return (
    <>
      <Meta title="404 – Sayfa Bulunamadı" />
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-4">Aradığınız sayfa bulunamadı.</p>
      </div>
    </>
  );
}
