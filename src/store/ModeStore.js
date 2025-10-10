import { defineStore } from "pinia";

export const useModeStore = defineStore("mode", {
  state: () => ({
    theme: "",
  }),

  actions: {
    toggleTheme() {
      this.theme = this.theme === 'vs-dark' ? 'vs-light' : 'vs-dark';
      document.documentElement.setAttribute(
        'data-bs-theme',
        this.theme === 'vs-dark' ? 'dark' : 'light'
      );
    },
    setTheme(theme) {
      this.theme = theme;
      document.documentElement.setAttribute(
        'data-bs-theme',
        theme === 'vs-dark' ? 'dark' : 'light'
      );
    },
    init() {
      const savedTheme = localStorage.getItem('themePreference') || 'vs-light';
      this.setTheme(savedTheme);
    },
  },
});
