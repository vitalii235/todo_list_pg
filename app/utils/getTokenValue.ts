const getTokenValue = (token: string, prefix: string) => {
    return token.replace(prefix, '').trim();
}

export default getTokenValue;
