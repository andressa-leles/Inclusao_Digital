export default function initTabContent() {
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  function removeActive(elements) {
    elements.forEach((element) => {
      element.classList.remove("active");
    });
  }

  tabs.forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.dataset.tab;
      const tabContent = document.getElementById(tabId);

      removeActive(contents);
      removeActive(tabs);

      tabContent.classList.add("active");
      button.classList.add("active");
    });
  });
}
