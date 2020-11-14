import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';

import { User } from '../models/user';
import { BadRequestError, validateRequest } from '@lmtesttickets/common';

const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    console.log('email and password', email, password);

    const existingUser = await User.findOne({ email });

    console.log('existingUser', existingUser);

    if (existingUser) {
      throw new BadRequestError('Email in use');
    }

    console.log('Before');

    const user = User.build({ email, password });

    console.log('After');

    await user.save();

    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_KEY!
    );

    console.log('userJwt', userJwt);

    req.session = {
      jwt: userJwt,
    };

    console.log('req.session', req.session);

    res.status(201).send(user);
  }
);

export { router as signupRouter };
