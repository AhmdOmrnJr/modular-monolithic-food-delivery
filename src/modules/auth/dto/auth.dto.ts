import * as Joi from 'joi';

export const signUpSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      maxDomainSegments: 4,
      tlds: { allow: ['com', 'net'] },
    })
    .required(),
  password: Joi.string()
    .pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/))
    .required()
    .min(8)
    .max(32)
    .messages({
      'string.pattern.base':
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number',
      'string.min': 'Password must be at least 8 characters long',
      'string.max': 'Password must be at most 32 characters long',
    }),
  passwordConfirmation: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.only': 'Passwords do not match',
    'any.required': 'Confirm password is required',
  }),
  phone: Joi.string().required(),
}).required();

export const logInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const forgetPasswordSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'Please provide a valid email address',
    'any.required': 'Email is required',
  }),
}).required();

export const resetPasswordSchema = Joi.object({
  token: Joi.string().required().messages({
    'any.required': 'Reset token is required',
  }),
  newPassword: Joi.string().min(8).required().messages({
    'string.min': 'Password must be at least 8 characters long',
    'any.required': 'New password is required',
  }),
}).required();

export const confirmEmailSchema = Joi.object({
  token: Joi.string().required(),
}).required();

export const requireEmailSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      maxDomainSegments: 4,
      tlds: { allow: ['com', 'net'] },
    })
    .required(),
}).required();
