/**
 * Unified Icon Logic for both Eleventy and Obsidian
 * Format: ::li-icon-name::
 */

const ICON_REGEX = /::li-([a-z0-9-]+)::/g;

/**
 * Normalizes the captured icon name.
 * Since we are being strict, we just ensure it's trimmed.
 */
function normalizeIconName(name) {
    return name.trim().toLowerCase();
}

/**
 * Transforms all icon shortcodes in a string into HTML.
 * Used by Eleventy build.
 */
function transformIcons(content) {
    if (!content) return content;
    return content.replace(ICON_REGEX, (match, iconName) => {
        const normalized = normalizeIconName(iconName);
        return `<i data-lucide="${normalized}" class="inline-icon"></i>`;
    });
}

module.exports = {
    ICON_REGEX,
    normalizeIconName,
    transformIcons
};
