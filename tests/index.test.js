const isLambda = require('../index');

describe('Test if env on lambda func', () => {
    const env = process.env

    beforeEach(() => {
        jest.resetModules()
        process.env = {...env}
    })

    it("Should be false with empty env", () => {
        process.env = {};
        const result = isLambda();
        expect(result).toStrictEqual(false);
    });

    it("Should be true with AWS Lambda", () => {
        process.env = {LAMBDA_TASK_ROOT: '/task/Root'};
        const result = isLambda();
        expect(result).toStrictEqual(true);
    });

    it('Should be true if AZURE func', () => {
        process.env = {WEBSITE_OWNER_NAME: 'HOME'};
        const result = isLambda();
        expect(result).toStrictEqual(true);
    });

    it('Should be true at google func', () => {
        process.env = {X_GOOGLE_FUNCTION_NAME: 'isLambda'};
        const result = isLambda();
        expect(result).toStrictEqual(true);
    })


    afterEach(() => {
        process.env = env
    })
})