import Meta from '@/components/layout/meta';

export default function Custom404() {
  return (
    <>
      <Meta props={{ title: "404 – Sayfa Bulunamadı" }} />
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-4">Aradığınız sayfa bulunamadı.</p>
      </div>
    </>
  );
}
