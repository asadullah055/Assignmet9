exports.create = async (req, res) => {
  res
    .status(200)
    .json({ status: "success", roll: "Sub Admin", data: "Created sub Admin" });
};

exports.read = async (req, res) => {
  res
    .status(200)
    .json({ status: "success", roll: "Sub Admin", data: "Read sub Admin" });
};

exports.delete = async (req, res) => {
  res
    .status(200)
    .json({ status: "success", roll: "Sub Admin", data: "Deleted sub Admin" });
};

exports.update = async (req, res) => {
  res
    .status(200)
    .json({ status: "success", roll: "Sub Admin", data: "Updated sub Admin" });
};
