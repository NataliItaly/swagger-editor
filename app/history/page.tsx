import { createClient } from '@/lib/supabase-server';
import { redirect } from 'next/navigation';
import HistoryList from '@/components/HistoryList';
import { getTranslations } from 'next-intl/server';

export default async function HistoryPage() {
  const t = await getTranslations('HistoryList');

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect('/sign-in');
  }

  const { data: history, error } = await supabase
    .from('history')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (error) {
    console.error(error);
    return <div className="text-red-500 font-medium">{t('failedHistory')}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{t('requestHistory')}</h1>
      <HistoryList history={history || []} />
    </div>
  );
}
