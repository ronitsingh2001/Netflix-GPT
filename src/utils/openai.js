import OpenAI from 'openai';
import { KEY } from './secret';

const openai = new OpenAI({
    apiKey: KEY, // This is the default and can be omitted
    dangerouslyAllowBrowser: true
});

export default openai;