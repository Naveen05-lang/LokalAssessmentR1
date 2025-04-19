import { create } from 'zustand';
import { fetchJobsFromApi } from '../api/jobApi';

const useJobStore = create((set, get) => ({
  jobs: [],
  page: 1,
  loading: false,
  error: '',
  hasMore: true,

  fetchJobs: async () => {
    const { page, loading, hasMore } = get();
    if (loading || !hasMore) return;

    set({ loading: true, error: '' });

    try {
      const data = await fetchJobsFromApi(page);
      if (data.results?.length > 0) {
        set((state) => ({
          jobs: [...state.jobs, ...data.results],
          page: state.page + 1,
        }));
      } else {
        set({ hasMore: false });
      }
    } catch (error) {
      set({ error: 'Failed to fetch jobs.' });
    } finally {
      set({ loading: false });
    }
  },

  resetJobs: () => set({ jobs: [], page: 1, hasMore: true, error: '' }),
}));

export default useJobStore;
