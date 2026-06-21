import { create } from 'zustand';

// This store only holds UI state (things that live entirely on the
// frontend). Once your friend's API is ready, server data (fleet list,
// bookings, etc.) should live in its own store or be fetched via
// hooks + services — keep them separate from UI state like this.

export const useUIStore = create((set) => ({
  isMobileMenuOpen: false,
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
}));