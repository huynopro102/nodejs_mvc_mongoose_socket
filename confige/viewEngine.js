const configeViewEngine = (app,path,__dirname) => {
    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "/view"));
    console.log(__dirname)
}

module.exports = configeViewEngine;
