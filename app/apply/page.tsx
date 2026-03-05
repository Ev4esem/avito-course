import ApplicationForm from '@/components/ApplicationForm';
import Nav from '@/components/Nav';

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ tariff?: string }>;
}) {
  const { tariff } = await searchParams;

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Nav />
      <div className="pt-20">
        <ApplicationForm initialTariff={tariff} />
      </div>
    </main>
  );
}
