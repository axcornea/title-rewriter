chrome.storage.sync.get(["matchingWebsites", "customTitle"], (data) => {
    const matchingWebsites = data.matchingWebsites || [];
    const customTitle = data.customTitle || "NSFW";

    if (matchingWebsites.some(pattern => window.location.href.includes(pattern))) {
        document.title = customTitle;

        // Watch for changes in the title and revert if needed
        const titleObserver = new MutationObserver(() => {
            if (document.title !== customTitle) {
                document.title = customTitle;
            }
        });
        titleObserver.observe(document.querySelector("title"), { childList: true });
    }
});
