const Joi = require('joi');

const validateUserSchema = (usr) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    }),
    password: Joi.string()
      .required()
      .min(3)
      .regex(/^[a-zA-Z0-9]{3,30}$/),
    mobile: Joi.number().min(12).max(13),
  });
  return schema.validate(usr);
};
const validateSignIn = (usr) => {
  const schema = Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    }),
    password: Joi.string().min(8).max(200).required(),
  });
  return schema.validate(usr);
};

const validateUpdate = (usr) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    }),
    mobile: Joi.number().min(12).max(13),
    id: Joi.number().min(1).max(1000),
  });
  return schema.validate(usr);
};
const validateChangePassword = (cust) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    oldPassword: Joi.string().min(8).max(200).required(),
    newPassword: Joi.string().min(8).max(200).required(),
  });
  return schema.validate(cust);
};

module.exports = {
  validateUserSchema,
  validateSignIn,
  validateUpdate,
  validateChangePassword,
};
