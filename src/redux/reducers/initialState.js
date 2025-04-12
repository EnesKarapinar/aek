export default {
  projects: [],
  certificates: [],
  personalInfo: [],
  theme:
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"),
};
