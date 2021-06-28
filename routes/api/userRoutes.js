const router = require('express').Router();
const { User } = require('../../models');

//Create new login - auto creates session
router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    //Begins new session with created log in
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login - creates new session
router.post('/login', async (req, res) => {
  const userData = User.findOne({
    where: {
      email: req.body.email
    },
  });
  //Checks email exists in db
  if (!userData) {
    res.status(400)
      .json({ message: "Incorrect email or password. Please try again" });
  };

  //Checks password matches with email     INCLUDE DEFINITION IN USERS MODEL
  const validate = await (await userData).checkPassword(req.body.password);
  if (!validate) {
    res.status(400)
      .json({ message: "Incorrect email or password. Please try again" });
  };

  req.session.save(() => {
    req.session.loggedIn = true;

    res.status(200).json(userData);
  });
});

//Log out - terminates session
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  };
});

module.exports = router;