import Meta from '@/components/layout/meta';

export default function Custom500() {
  return (
    <>
      <Meta props={{
        title: "500 – Sunucu Hatası",
        description: "Sunucu hatası oluştu",
        ogUrl: "https://your-site.com/500",
        ogImage: "https://your-site.com/og-image.jpg"
      }} />
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold">500</h1>
        <p className="mt-4">Sunucu hatası oluştu. Lütfen daha sonra tekrar deneyin.</p>
      </div>
    </>
  );
}
