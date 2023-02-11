chrome.storage.sync.get("pattern", function (data) {
  if (!data.pattern) return;
  const regex = new RegExp(data.pattern, "g");

  const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) =>
      node.textContent.match(regex)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT,
  });

  const replaceWithMark = (match) => `<mark>${match}</mark>`;

  let node;
  while ((node = walk.nextNode())) {
    node.parentNode.innerHTML = node.textContent.replace(
      regex,
      replaceWithMark
    );
  }
});
