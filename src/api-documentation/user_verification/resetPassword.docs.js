/**
 * @typedef resetPasswordInput
 * @property {string} email.query.required - user's email
 * @property {string} currentPassword.query.required - user's password.
 * @property {string} newPassword.query.required - user's password.
 */

/**
 * @typedef Response
 * @property {[integer]} code
 */

/**
 * @typedef Error
 * @property {string} code.required
 */