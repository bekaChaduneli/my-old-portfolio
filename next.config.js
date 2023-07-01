const path = require("path");
const withVideos = require("next-videos");

/** @type {import('next').NextConfig} */
module.exports = withVideos({
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
});
