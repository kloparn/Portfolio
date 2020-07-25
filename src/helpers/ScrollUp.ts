export const ScrollUp = (document: Document) => {
  window.scrollTo({
    behavior: "smooth",
    top:
      document.getElementById("navbar-ref")!.getBoundingClientRect().top -
      document.body.getBoundingClientRect().top,
  });
};
