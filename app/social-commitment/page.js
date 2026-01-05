import PageShell from '../components/PageShell';

export default function Page() {
  return (
    <PageShell title="Social Commitment">
      <div className="space-y-8">
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300">
             Muhammad Monir Hossain is deeply committed to societal development and ethical leadership.
          </p>

          <div className="mt-8 border-t border-gray-100 dark:border-white/10 pt-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Professional History</h3>
            
            <div className="bg-gray-50 dark:bg-zinc-800/50 p-6 rounded-xl border border-gray-100 dark:border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100">NSE Corporation</h4>
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 w-fit">
                  May 2008 - March 2013
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Project Manager</p>
              <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Led strategic projects and operational management during his tenure, laying early groundwork for his future leadership roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
