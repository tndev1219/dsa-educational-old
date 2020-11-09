module.exports.imgPath = function ( page ) {
    if(typeof(page) !== "string") {
        page = 'global';
    }
    return `./assets/img/${page}/`
};
