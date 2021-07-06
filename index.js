var path = require("path");
var fs = require("fs");

class ClassicTheme {
    
    constructor(server, config){
        this.server = server;
        this.config = config;
        this.module_name = "Classic Theme";
    }

    init()
    {
      var files = [
        "/src/bootstrap.min.css",
        "/src/bootstrap-overrides.css",
        "/src/bootstrap.min.js",
        "/src/jquery-3.1.1.slim.min.js",
        "/src/mermaid.min.js",
        "/src/process-links.js",
        "/src/sticky-footer.css",
        "/src/tether.min.css",
        "/src/tether.min.js",
        "/src/vue@2.2.6.js"
      ]
      for (let i = 0; i < files.length; i++) {
        var _this = this;
        
        this.server.express.get("/" + files[i].split("/").pop(), function (req, res) {
          var file = path.join(path.dirname(fs.realpathSync(__filename)), files[i]);
          res.sendFile(file, function(err){
            if (err) {
              _this.server.cli.log("> Error: " + file + " - file not found");
              res.status(err.status).end();
            }
            else {
              _this.server.cli.log('> Sending ' + file +  _this.server.printUser(req));
            }
          });
        });
      }
    }

    run(){}
      
}

module.exports = ClassicTheme;