const Person = require("../model/No");

const getAll = async (req, res) => {
  const group = await Person.find();
  res.render("index", { group, person: null, personDel: null });
};

const admin = async (req, res) => {
  const group = await Person.find();
  res.render("admin", { group, person: null, personDel: null });
};

const createNo = async (req, res) => {
  const person = req.body;
  await Person.create(person);
  res.redirect("/admin");
};

const editOrDelete = async (req, res) => {
  const { id, action } = req.params;
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    // Yes, it's a valid ObjectId, proceed with `findById` call.
    person = await Person.findByIdAndUpdate({ _id: id });
    const group = await Person.find();
    if (action == "edit") {
      res.render("admin", { group, person, personDel: null });
    } else {
      res.render("index", { group, person: null, personDel: person });
    }
  }
};

const updateNo = async (req, res) => {
  const newPerson = req.body;
  await Person.updateOne({ _id: req.params.id }, newPerson);
  res.redirect("/");
};

const deleteNo = async (req, res) => {
  await Person.deleteOne({ _id: req.params.id });
  res.redirect("/");
};

module.exports = {
  getAll,
  admin,
  createNo,
  editOrDelete,
  updateNo,
  deleteNo,
};
