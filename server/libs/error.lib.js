class ErrorHandler extends Error {
    constructor(message) {
        super();
        this.message = message;
    }
}

const handleError = (err, req, res, next) => {
    let message = processErrorMessage(err);

    res.status(400).json({
        status: 'Error',
        data: { message: message }
    })
}

const processErrorMessage = (err) => {
    if (err.code === 11000) {
        return err.message.includes("email") ? "Email telah digunakan" : "Username telah digunakan";
    } else {
        return err.message;
    }
}

export {
    ErrorHandler, handleError
}