const patternInput = document.getElementById("pattern");
const saveButton = document.getElementById("save");

document.addEventListener("DOMContentLoaded", () => {
  saveButton.addEventListener("click", () => {
    const pattern = patternInput.value;
    chrome.storage.sync.set({ pattern: pattern }, () => {
      console.log("Pattern saved:", pattern);
    });
  });
});
