require("dotenv").config();
const settings = require("../../helpers/constants");

const allSettings = settings.ALL_NOTE_SETTINGS;

module.exports = {
  eleventyComputed: {
    layout: (data) => {
      if (data.tags.indexOf("gardenEntry") != -1) {
        return "layouts/index.njk";
      }
      return "layouts/note.njk";
    },
    permalink: (data) => {
      if (data.tags.indexOf("gardenEntry") != -1) {
        return "/";
      }
      return data.permalink || undefined;
    },
    basesNotes: (data) => {
      if (!data.collections || !data.collections.note) return [];
      return data.collections.note.map((item) => ({
        path: item.filePathStem.replace("/notes/", ""),
        url: item.url,
        metadata: item.data,
        fileSlug: item.fileSlug,
      }));
    },
    titleIcon: (data) => {
      // Return the icon name (Lucide format)
      if (data.icon) return data.icon;
      if (data.faIcon) return data.faIcon;
      const nested = data["dg-note-properties"];
      if (nested) {
        return nested.icon || nested.faIcon;
      }
      return null;
    },
    showReadingTime: (data) => {
      // Read ONLY from dg-note-properties to avoid circular reference
      // (data.showReadingTime would reference this computed itself)
      const nested = data["dg-note-properties"];
      if (nested && nested.showReadingTime !== undefined) return nested.showReadingTime;
      return undefined; // undefined = show by default (no override)
    },
    showTimestamps: (data) => {
      // Read ONLY from dg-note-properties to avoid circular reference
      const nested = data["dg-note-properties"];
      if (nested && nested.showTimestamps !== undefined) return nested.showTimestamps;
      return undefined; // undefined = follow global env vars
    },
    created: (data) => {
      // Only use explicit creation date if provided
      const nested = data["dg-note-properties"];
      if (nested && nested.created) return nested.created;
      if (data.created) return data.created;
      return undefined;
    },
    updated: (data) => {
      const nested = data["dg-note-properties"];
      if (nested && nested.updated) return nested.updated;
      if (data.updated) return data.updated;
      // Fall back to Eleventy's file date as the "Last Modified" date
      if (data.page && data.page.date) {
        const d = data.page.date;
        return d instanceof Date ? d.toISOString() : String(d);
      }
      return undefined;
    },
    settings: (data) => {


      const noteSettings = {};
      allSettings.forEach((setting) => {
        let noteSetting = data[setting];
        let globalSetting = process.env[setting];

        let settingValue =
          noteSetting || (globalSetting === "true" && noteSetting !== false);
        noteSettings[setting] = settingValue;
      });
      return noteSettings;
    },
  },
};
