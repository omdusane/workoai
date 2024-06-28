import Joi from "joi";

const userSchema = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    age: Joi.number().min(0).required(),
    city: Joi.string().required(),
    zipCode: Joi.string().required()
});

export default userSchema;