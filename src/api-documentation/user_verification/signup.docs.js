/**
 * @typedef SignupInput
 * @property {string} email.query.required - user's email
 * @property {string} password.query.required - user's password.
 * @property {string} confirmPassword.query.required - user's password.
 * @property {string} firstName.query.required - user's first Name
 * @property {string} lastName.query.required - user's last Name
 */

/**
 * @typedef Response
 * @property {[integer]} code
 */

/**
 * @typedef Error
 * @property {string} code.required
 */