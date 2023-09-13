const User = require('./person'); // Import your Person model

// Controller functions
exports.createPerson = async (req, res) => {
  try {
    const { name } = req.body;
    const person = new User({ name });
    const savedPerson = await person.save();
    res.status(201).json(savedPerson);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create a person' });
  }
};

exports.getPersonById = async (req, res) => {
  try {
    const person = await User.findById(req.params.id);
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch a person' });
  }
};

exports.updatePerson = async (req, res) => {
  try {
    const { name } = req.body;
    const updatedPerson = await User.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );
    if (!updatedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.status(200).json(updatedPerson);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update a person' });
  }
};

exports.deletePerson = async (req, res) => {
  try {
    const deletedPerson = await User.findByIdAndRemove(req.params.id);
    if (!deletedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete a person' });
  }
};
