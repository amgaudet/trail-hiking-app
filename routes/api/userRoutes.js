const router = require('express').Router();
const { User, Trail } = require('../../models');


// router.get('/', (req, res) => {
//   res.status(200).json('hello world');
// })
//Create new login - auto creates session
router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      name: req.body.name,
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

// router.put('/', async (req, res) => {
//   const userData = await User.findOne({
//     where: {
//       email: ''
//     }
//   })
// });

//Login - creates new session
router.post('/login', async (req, res) => {
  console.log(req.body.email);
  const userData = await User.findOne({
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

//gets users favorite trails for profile page
router.get('/:id', async (req, res) => {
  try {
    const userFavorites = await User.findOne({
      where: {
        id: req.params.id
      },
      include: [Trail]
    });
    res.render('profile', userFavorites);
  } catch (err) {
    res.status(404).json('user not found');
  }
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