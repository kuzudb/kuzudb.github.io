<template>
  <div class="main-layout">
    <div class="wrapper">
      <div class="main-layout__sidebar">
        <ul class="main-layout__sidebar-nav">
          <li>
            <ul
              v-if="modeStore.isReadOnly"
              class="navbar-nav hide-on-collapse"
            >
              <li class="nav-item">
                <span
                  class="badge"
                  @click="accessModeModal.show()"
                >Read-only Mode</span>
              </li>
            </ul>
            <ul
              v-if="modeStore.isDemo"
              class="navbar-nav hide-on-collapse"
            >
              <li class="nav-item">
                <span
                  class="badge"
                  @click="accessModeModal.show()"
                >Instructions</span>
              </li>
            </ul>
            <div class="main-layout__sidebar-header flex justify-between items-center">
              <a
                class="navbar-brand"
                href="//kuzudb.com"
                target="_blank"
              >
                <img
                  :key="logoUrl"
                  :src="logoUrl"
                  alt="Logo"
                  class="main-layout__sidebar-logo"
                >
              </a>
            </div>
            <hr>
          </li>

          <li class="nav-item">
            <a
              aria-hidden="true"
              href="https://github.com/kuzudb/kuzu"
              target="_blank"
            >
              <i class="fa-brands fa-github" />
              <span>GitHub</span>
            </a>
          </li>
          <div class="main-layout__sidebar-bottom">
            <li class="nav-item">
              <button
                class="theme-toggle"
                @click="handleThemeToggle()"
              >
                <i :class="['fa-solid', modeStore.theme === 'vs-dark' ? 'fa-sun' : 'fa-moon']" />
                <span>{{ modeStore.theme === 'vs-dark' ? 'Light' : 'Dark' }}</span>
              </button>
            </li>
          </div>
        </ul>
      </div>
      <div ref="bannerAlert" class="alert alert-warning mb-0 text-center banner-alert" role="alert">
        Kuzu is working on something new! We will no longer be actively supporting KuzuDB. You can access the full archive of KuzuDB here: <a href="https://github.com/kuzudb/kuzu" target="_blank" class="alert-link">GitHub</a>
      </div>
      <div class="main-layout__main-container" :style="{ '--dynamic-alert-height': alertHeight + 'px' }">
        <section class="hero-section">
          <div class="hero-content">
            <h1 class="hero-title">
              Embedded, scalable, blazing fast graph database
            </h1>
            <p class="hero-description">
              The easiest way to manage knowledge graphs and vectors.
            </p>
            <div class="hero-buttons">
              <a
                href="https://github.com/kuzudb/kuzu"
                target="_blank"
                class="btn btn-primary btn-lg"
              >
                <i class="fa-brands fa-github"></i>
                GitHub
              </a>
            </div>
          </div>
        </section>

        <section class="features-section">
          <div class="features-container">
            <h2 class="features-title">Kuzu at a Glance</h2>
            <div class="features-grid">
              <div class="feature-card">
                <i class="fa-solid fa-bolt feature-icon"></i>
                <h3 class="feature-title">Runs in-process</h3>
                <p class="feature-description">Embedded, no external servers. Stores on-disk or in-memory</p>
              </div>
              <div class="feature-card">
                <i class="fa-solid fa-expand feature-icon"></i>
                <h3 class="feature-title">Fast and Scalable</h3>
                <p class="feature-description">Columnar storage, vectorized processing, and novel join algorithms</p>
              </div>
              <div class="feature-card">
                <i class="fa-solid fa-code feature-icon"></i>
                <h3 class="feature-title">Cypher</h3>
                <p class="feature-description">Property graph data model with Cypher query language support</p>
              </div>
              <div class="feature-card">
                <i class="fa-solid fa-th-large feature-icon"></i>
                <h3 class="feature-title">Full-featured</h3>
                <p class="feature-description">Graph-native full-text search index, HNSW vector index, algorithms package, and more</p>
              </div>
              <div class="feature-card">
                <i class="fa-solid fa-puzzle-piece feature-icon"></i>
                <h3 class="feature-title">AI and Data Ecosystem</h3>
                <p class="feature-description">Works with LangChain, PyTorch Geometric, LlamaIndex, Pandas, Parquet, Iceberg, and more</p>
              </div>
              <div class="feature-card">
                <i class="fa-solid fa-unlock feature-icon"></i>
                <h3 class="feature-title">Open-source</h3>
                <p class="feature-description">Free and open-source (MIT licensed)</p>
              </div>
            </div>
          </div>
        </section>

        <footer class="footer">
          <div class="footer-container">
            <div class="footer-content">
              <div class="footer-brand">
                <img
                  src="/img/kuzu-logo-dark.png"
                  alt="Kuzu Logo"
                  class="footer-logo"
                >
                <p class="footer-tagline">
                  Kù-zu ('bright' + 'to know') is a Sumerian word for "wisdom"
                </p>
                <p class="footer-description">
                  A fast, modern graph database for really large graphs, with vector search and full text search built in
                </p>
                <div class="footer-social">
                  <a
                    href="https://github.com/kuzudb/kuzu"
                    target="_blank"
                    aria-label="GitHub"
                    class="footer-social-link"
                  >
                    <i class="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>

             
            </div>

            <div class="footer-bottom">
              <p class="footer-copyright">
                &copy; 2023 - {{ new Date().getFullYear() }} Kùzu Inc. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { useModeStore } from "../store/ModeStore";
import { mapStores } from 'pinia'


export default {
  name: "MainLayout",
  components: {

  },
  data: () => ({
    alertHeight: 0,
  }),
  computed: {
    ...mapStores(useModeStore),
    logoUrl() {
      return this.modeStore.theme === 'vs-dark'
        ? '/img/kuzu-logo-dark.png'
        : '/img/kuzu-logo-light.png';
    },
  },
  mounted() {
    this.updateAlertHeight();
    window.addEventListener('resize', this.updateAlertHeight);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateAlertHeight);
  },
  
  methods: {
    updateAlertHeight() {
      if (this.$refs.bannerAlert) {
        this.alertHeight = this.$refs.bannerAlert.offsetHeight;
      }
    },
    // Manual cookie handling methods
    setCookie(name, value, days) {
      let expires = "";
      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    getCookie(name) {
      const nameEQ = name + "=";
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    },
    // Handle theme toggle, save to cookie, then update store
    handleThemeToggle() {
      const currentTheme = this.modeStore.theme;
      const nextTheme = currentTheme === 'vs-dark' ? 'vs-light' : 'vs-dark';
      this.setCookie('themePreference', nextTheme, 365); // Save preference for 365 days
      this.modeStore.toggleTheme(); // Let the store handle the actual theme change
    },
  },
};
</script>

<style>
:root {
  --sidebar-height: 60px;
  --alert-height: 50px;
}

/* Scrollbar styling */
body {
  scrollbar-gutter: stable both-edges;
  scrollbar-width: thin;
  scrollbar-color: var(--bs-body-bg-accent) var(--bs-body-bg);
  overflow-x: hidden;
  overflow-y: auto;
}

html, body {
  height: 100%;
}

.main-layout {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

.main-layout__sidebar,
.result-container__side-panel,
.schema_side-panel__wrapper,
.code-block {
  padding-right: 0 !important;
  margin-right: 0 !important;
}

.main-layout__sidebar-logo {
  height: 28px;
  image-rendering: crisp-edges;
}

.wrapper {
  padding-top: var(--sidebar-height);
  min-height: 100vh;
}

.main-layout__sidebar {
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--sidebar-height);
  margin: 0;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: var(--bs-body-bg-secondary);
  border-bottom: 1px solid var(--bs-body-bg);
  border-radius: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.main-layout__main-container {
  width: 100%;
  position: relative;

  .container-fluid {
    height: 100%;
    padding: 0;
  }
}

.nav-item {
  padding: 0 10px;
}

.main-layout__sidebar-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 10px;
  list-style: none;
  gap: 4px;

  > li {
    display: flex;
    align-items: center;
    height: 100%;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: var(--bs-body-text);
      padding: 8px 12px;
      gap: 8px;
      height: 100%;

      &.hover {
        text-decoration: none;
      }
    }

    hr {
      display: none;
    }

    span {
      color: var(--bs-body-text);
      white-space: nowrap;
    }
  }

  .main-layout__sidebar-bottom {
    position: relative;
    margin-left: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    padding: 0;

    .nav-item {
      padding: 0 10px;
    }
  }
}

.badge {
  margin-left: 4px;
  background-color: var(--bs-body-bg-accent);
  color: white !important;
  cursor: pointer;
}

.main-layout__sidebar-header {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 1rem;
  height: 100%;

  .navbar-brand {
    display: flex;
    align-items: center;
  }
}

.theme-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: var(--bs-body-text);
  padding: 8px 12px;
  cursor: pointer;
  height: 100%;

  i {
    color: var(--bs-body-text);
  }

  span {
    color: var(--bs-body-text);
    white-space: nowrap;
  }

  &:hover {
    opacity: 0.7;
  }
}

.banner-alert {
  top: 60px;
  position: absolute !important;
  left: 0;
  width: 100%;
  z-index: 999;
  border-radius: 0;
  font-size: 1.25rem;
}

@media (max-width: 768px) {
  .banner-alert {
    font-size: 0.875rem;
  }
}

.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: calc(8rem + var(--dynamic-alert-height, 0px)) 1rem 8rem;
  overflow: hidden;
}

.hero-content {
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: var(--bs-body-text);
}

.hero-description {
  font-size: 2rem;
  color: var(--bs-body-text);
  opacity: 0.8;
  margin-bottom: 2rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
}

.btn-primary {
  background-color: #ff5722;
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: #f4511e;
}

.btn-lg {
  padding: 1rem 2rem;
  font-size: 1.75rem;
}

.hero-buttons .btn-primary {
  background-color: #ff5722 !important;
  color: white !important;
  border: none !important;
}

.hero-buttons .btn-primary:hover {
  background-color: #f4511e !important;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1.25rem;
  }

  .hero-buttons .btn.btn-lg,
  .hero-buttons .btn-primary.btn-lg {
    font-size: 1rem !important;
  }
}

@media (max-width: 480px) {
  .hero-buttons .btn.btn-lg,
  .hero-buttons .btn-primary.btn-lg {
    padding: 0.75rem 1.5rem !important;
    font-size: 0.875rem !important;
  }

  .hero-buttons .btn span,
  .theme-toggle span,
  .main-layout__sidebar-nav > li > a span {
    display: none;
  }
}

.features-section {
  padding: 5rem 1rem;
  background-color: var(--bs-body-bg-secondary);
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
}

.features-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--bs-body-text);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: var(--bs-body-bg);
  border: 1px solid var(--bs-body-bg-accent);
  transition: all 0.3s ease;
}

.feature-card:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

.feature-icon {
  font-size: 3rem;
  color: #ff5722;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--bs-body-text);
}

.feature-description {
  font-size: 1rem;
  color: var(--bs-body-text);
  opacity: 0.8;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}

.footer {
  background-color: #1a1a1a;
  border-top: 1px solid #333;
  padding: 3rem 1rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.footer-brand {
  flex: 1;
}

.footer-logo {
  height: 32px;
  margin-bottom: 1rem;
}

.footer-tagline {
  font-size: 0.875rem;
  color: #ccc;
  margin-bottom: 0.5rem;
}

.footer-description {
  font-size: 0.875rem;
  color: #ccc;
  margin-bottom: 1rem;
}

.footer-social {
  display: flex;
  gap: 1rem;
  padding-top: 0.5rem;
}

.footer-social-link {
  color: #ccc;
  font-size: 1.5rem;
  transition: all 0.2s ease;
}

.footer-social-link:hover {
  color: #ff5722;
}

.footer-links-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.footer-links-section {
  flex: 1;
}

.footer-section-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #fff;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-link {
  color: #ccc;
  font-size: 0.875rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.footer-link:hover {
  color: #ff5722;
}

.footer-contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-contact-item i {
  color: #ccc;
  font-size: 1rem;
}

.footer-text {
  color: #ccc;
  font-size: 0.875rem;
}

.footer-bottom {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #333;
  text-align: center;
}

.footer-copyright {
  color: #ccc;
  font-size: 0.875rem;
}

.footer-designer-link {
  color: #ff5722;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.footer-designer-link:hover {
  opacity: 0.8;
}

@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
  }

  .footer-links-container {
    flex-direction: row;
    gap: 5rem;
  }
}
</style>
