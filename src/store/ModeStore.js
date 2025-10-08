import { defineStore } from "pinia";

export const useModeStore = defineStore("mode", {
  state: () => ({
    theme: "vs-dark",
  }),

  actions: {
    toggleTheme() {
      this.theme = this.theme === 'vs-dark' ? 'vs-light' : 'vs-dark';
      document.documentElement.setAttribute(
        'data-bs-theme',
        this.theme === 'vs-dark' ? 'dark' : 'light'
      );
      if (window.Monaco?.editor) {
        window.Monaco.editor.setTheme(this.theme);
      }
    },
    setTheme(theme) {
      this.theme = theme;
      document.documentElement.setAttribute(
        'data-bs-theme',
        theme === 'vs-dark' ? 'dark' : 'light'
      );
      if (window.Monaco?.editor) {
        window.Monaco.editor.setTheme(theme);
      }
    },
  },
});
