
import axios from 'axios';

export default async function translateMessageRandom(message: string): Promise<string> {
  try {
    const list = ['yoda', 'pirate', 'valspeak', 'minion', 'ferb-latin', 'pig-latin', 'dothraki', 'valyrian', 'hodor', 'sindarin', 'quenya', 'orcish', 'sith', 'cheunh', 'gungan', 'mandalorian', 'huttese', 'chef', 'catalan', 'oldenglish', 'shakespeare', 'vulcan', 'klingon', 'romulan', 'dovahzul', 'thuum', 'aldmeris', 'groot', 'jive', 'ebonics', 'dolan', 'fudd', 'kraut', 'wow', 'cockney', 'norfolk', 'morse', 'us2uk', 'uk2us', 'leetspeak', 'brooklyn', 'ermahgerd', 'australian', 'boston', 'austrian', 'article_rewrite', 'braille', 'numbers', 'emoji', 'doge', 'navi', 'southern-accent', 'ubbi-dubbi', 'inflationary-english', 'george-bush-dubya', 'post-modern', 'ayleidoon', 'redneck', 'roman-numerals', 'asian-accent', 'russian-accent', 'english-contraction', 'irish', 'british', 'german-accent', 'draconic', 'enderman', 'wheel-of-time-old-tongue'];
    const random = list[Math.floor(Math.random() * list.length)];
    const response = await axios.post(`https://api.funtranslations.com/translate/${random}`, {
      text: message,
    });
    const funnyFact = response.data.contents.translated;
    console.log(random);
    return funnyFact;
  } catch (error) {
    console.error('Failed to fetch funny fact from API:', error);
    return 'Failed to fetch funny fact. Please try again later.';
  }
}