import { compiler, Options } from './compiler';
import { parser } from './parser';
import { Languages } from './types';

export const wordsToNumbers = (text: string, options: Options) => {
    const regions = parser(text, { language: Languages['en-us'], ...options });
    if (options.debug) console.log(JSON.stringify(regions));
    const compiled = compiler({ text, regions }, options);
    return compiled;
};

export default wordsToNumbers;

const words = 'sirop de fraise';
wordsToNumbers(words, { language: Languages['fr-fr'] });
