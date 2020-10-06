const informationModel = require("../model/informationModel");
class InformationController {
  async getRecord(req, res) {
    console.log("req.params.id", req.params.id);
    var id = req.params.id;
    let setinfo = await new informationModel(id);

    var info = await setinfo.getRecord();
    var msg = {
      success: true,
      data: info,
    };
    res.status(200).send(msg);
  }
  async createRecord(req, res) {
    console.log("req", req.files);
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }
    let setinfo = await new informationModel(1);
    var id = await setinfo.createRecord(req.files);
    var msg = {
      success: true,
      data: {
        id: id,
      },
    };
    res.status(200).send(msg);
  }
}

module.exports = InformationController;
