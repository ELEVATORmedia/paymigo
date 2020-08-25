
const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
});

export const dateToParamString = (input: Date) => {
    const { month, day, year, hour, minute, second } = formatter
        .formatToParts(input)
        .reduce(
            (prev, { type, value }) => {
                if (type !== 'literal') prev[type] = value;
                return prev;
            },
            {} as { [key: string]: string },
        );

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};
