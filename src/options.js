const MATCHING_WEBSITES_NODE_ID = "matching-websites";
const CUSTOM_TITLE_NODE_ID = "custom-title";

// Load existing values.
chrome.storage.sync.get(["matchingWebsites", "customTitle"], (data) => {
    document.getElementById(MATCHING_WEBSITES_NODE_ID).value = (data.matchingWebsites || []).join('\n');
    document.getElementById(CUSTOM_TITLE_NODE_ID).value = data.customTitle || "NSFW";
});

document.getElementById("save").addEventListener("click", () => {
    const matchingWebsites = document.getElementById(MATCHING_WEBSITES_NODE_ID).value.trim().split('\n');
    const customTitle = document.getElementById(CUSTOM_TITLE_NODE_ID).value;

    chrome.storage.sync.set({ matchingWebsites, customTitle });
});