const find = require('../utils/find');

//  Given a search root, finds all iOS iconsets.
module.exports = async function findSplashImagesetFolders(searchRoot) {
  return find(searchRoot, (file, stat) => {
    //  exclude node modules from the search.
    if (file.match(/node_modules/)) return false;

    //  only grab the iconset folders.
    return file.match(/splash.imageset/) && stat.isDirectory();
  });
};
