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
      if (data.showReadingTime !== undefined) return data.showReadingTime;
      const nested = data["dg-note-properties"];
      if (nested && nested.showReadingTime !== undefined) return nested.showReadingTime;
      return undefined; // inherit global default (show)
    },
    showTimestamps: (data) => {
      if (data.showTimestamps !== undefined) return data.showTimestamps;
      const nested = data["dg-note-properties"];
      if (nested && nested.showTimestamps !== undefined) return nested.showTimestamps;
      return undefined; // inherit global default
    },
    created: (data) => {
      if (data.created) return data.created;
      const nested = data["dg-note-properties"];
      if (nested && nested.created) return nested.created;
      return data.page && data.page.date ? data.page.date : undefined;
    },
    updated: (data) => {
      if (data.updated) return data.updated;
      const nested = data["dg-note-properties"];
      if (nested && nested.updated) return nested.updated;
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
