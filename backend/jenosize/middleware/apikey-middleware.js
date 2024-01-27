const validApiKeys = ['6bb6b3cf-bad3-4143-8924-ebd35ea5e5a4', '6bb6b3cf-bad3-4143-8924-ebd35ea5e5a4'];

const apiKeyMiddleware = (req, res, next) => {
    if (req.exemptFromApiKeyValidation) {
        return next();
    }

    const apiKey = req.headers['api-key'];

    if (!apiKey || !validApiKeys.includes(apiKey)) {
        return res.status(401).json({ error: 'Unauthorized - Invalid API key' });
    }

    next();
};

module.exports = apiKeyMiddleware;