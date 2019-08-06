export function greet(input: string | string[]): string {
    if (input instanceof Array) {
        const [normal, shouted] = splitNames(input);
        const firstSentence = handleNormalPeople(normal);
        const secondSentence = handleCrazyPeople(shouted);

        if (!firstSentence) {
            return secondSentence;
        } else if (!secondSentence) {
            return firstSentence;
        }
        return [firstSentence, secondSentence].join(' AND ');
    }
    return isUppercase(input as string) ? `HELLO ${input}!` : `Hello, ${input || 'my friend'}.`;
}

function isUppercase(text: string): boolean {
    return text && text === text.toUpperCase();
}

function handleNormalPeople(names: string[]): string {
    if (!names.length) {
        return '';
    }
    const lastName = names[names.length - 1];
    const allNamesExceptLast = names.slice(0, names.length - 1);
    return `Hello, ${allNamesExceptLast.join(', ')} and ${lastName}.`
}

function handleCrazyPeople(names: string[]): string {
    if (!names.length) {
        return '';
    }
    const lastName = names[names.length - 1];
    const allNamesExceptLast = names.slice(0, names.length - 1);
    return `HELLO ${allNamesExceptLast.join(', ')} AND ${lastName}!`
}

export function splitNames(names: string[]): [string[], string[]] {
    const shouted: string[] = [];
    const normal: string[] = [];
    names.forEach(name => {
        if (isUppercase(name)) {
            shouted.push(name);
        } else {
            normal.push(name);
        }
    });
    return [normal, shouted];
}