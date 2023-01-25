/**
 *
 * @returns {boolean}
 */
const isLambda = () => {
    const env = process.env;
    // lambda
    if (env && env.LAMBDA_TASK_ROOT) {
        return true;
    }
    // azure
    if (env.WEBSITE_OWNER_NAME) {
        return true;
    }
    // google cloud
    if (env.X_GOOGLE_FUNCTION_NAME) {
        return true;
    }

    return false;
}

module.exports = isLambda;