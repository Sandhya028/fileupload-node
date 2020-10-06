const mysql = require("mysql2/promise");
class informationModel {
  constructor(id) {
    this.id = id;
    this.pool = mysql.createPool({
      host: "localhost",
      user: "root",
      database: "test",
      password: "",
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }
  async getRecord() {
    console.log("reached");
    const result = await this.pool.query(
      "SELECT * from informations WHERE id = ?",
      [this.id]
    );
    if (result[0].length < 1) {
      throw new Error("Post with this id was not found");
    }
    return result[0][0];
  }
  async createRecord(data) {
    var picture = data.picture;
    var picture_name = picture.name;
    picture.mv(
      "F:/sandhya/file_upload_demo/imagesave_frontend/src/assets/img/" +
        picture.name,
      function (err) {}
    );
    var file = data.file;
    var file_name = file.name;
    file.mv(
      "F:/sandhya/file_upload_demo/imagesave_frontend/src/assets/img/" +
        file.name,
      function (err) {}
    );
    var create_date = new Date();
    const result = await this.pool.query(
      "INSERT INTO informations SET picture = ?, file = ?, create_date = ?",
      [picture_name, file_name, create_date]
    );
    return result[0].insertId;
  }
}
module.exports = informationModel;
