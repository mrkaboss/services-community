import Joi from "joi";

export const signupSchema = Joi.object({
  names: Joi.string().required().messages({
    'string.base': 'names must be string',
    'string.empty': 'names cannot be empty',
    'any.required': 'names is required'
  }),
  password: Joi.string()
    .required()
    .min(8)
    .max(10)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/)
    .messages({
      'string.base': 'password should be a type of text',
      'string.empty': 'password cannot be empty',
      'string.pattern.base':
        'password must contain uppercase, lowercase and number'
    })
});

export const signinSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': 'email is required',
    'string.email': 'email must be a valid email',
    'string.base': 'email should be a type of string',
    'string.empty': 'email is not allowed to be empty'
  }),
  password: Joi.string()
    .required()
    .min(8)
    .max(10)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/)
    .messages({
      'string.base': 'password should be a type of text',
      'string.empty': 'password cannot be empty',
      'string.pattern.base':
        'password must contain uppercase, lowercase and number'
    })
});
