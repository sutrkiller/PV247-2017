const validateResponseFactory = (succesfulResponseInterpret) =>
    (response) => {
        if (response.status >= 200 && response.status < 300) {
            return succesfulResponseInterpret(response);
        }
        else {
            throw new Error(response.statusText);
        }
    };

const textResponseInterpret = (response) => response.text();

export const validateTextResponse = validateResponseFactory(textResponseInterpret);