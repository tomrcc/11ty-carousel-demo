// This filter doesn't actually do anything but is needed so that the site will successfully build
// (otherwise if the image component is included in the page liquid cannot register the image filter
// and there will be no output in bookshop)
export default function () {
  this.registerTag("image", {
    parse: () => {},
    render: () => {},
  });
}
