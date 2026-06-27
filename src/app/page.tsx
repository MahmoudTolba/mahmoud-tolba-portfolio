export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-on-background flex flex-col gap-6 items-center justify-center">
      {/* تجربة خط العناوين الحديث ولون الـ Primary */}
      <h1 className="font-heading text-5xl font-extrabold text-primary tracking-tight">
        Mahmoud Tolba
      </h1>
      
      {/* تجربة خط الفرشاة (اللوجو القديم بتاعك) ولون الـ Secondary */}
      <p className="font-brush text-3xl text-secondary">
        Tolba.
      </p>

      {/* تجربة خط نصوص الجسم الافتراضي ولون الـ Variant */}
      <p className="font-body text-base text-on-surface-variant max-w-md text-center">
        Tailwind config tokens and Google Fonts integrated seamlessly with Next.js architecture.
      </p>
    </main>
  );
}