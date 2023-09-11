const controllerWrapper = controller => {
    const func = async (req: object, res: object, next) => {
        try {
            await controller(req, res, next);
        } catch (error) {
            next(error);
        }
    }
    return func;
};

module.exports = controllerWrapper;
export {}