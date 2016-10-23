import sanitize from './sanitize';

const knownProps = [
  'title',
  'description',
  'body',
  'author',
  'keywords',
  'itunesSubtitle',
  'businessReference',
];

const contextualProps = (node, pairs) => {
  for (const prop in node) {
    if (typeof node[prop] !== 'undefined' &&  node[prop] !== null) {
      if (typeof node[prop] === 'object') {
        pairs = [...pairs, ...contextualProps(node[prop], [])];
      } else {
        if (knownProps.indexOf(prop) >= 0) {
          pairs.push({ key: prop, value: node[prop] })
        }
      }
    }
  }

  return pairs;
};

export const indexer = steps => {
  const words = {};

  steps.forEach(step => {
    const { uuid } = step;
    const props = contextualProps(step, []);

    props.forEach(({ key, value }) => {
      const rawWords = sanitize(value);

      if (rawWords) {
        rawWords.forEach(word => {
          word = word.toLowerCase();

          if (typeof words[word] !== 'undefined' && typeof words[word][uuid] !== 'undefined') {
            words[word][uuid].score++;

            if (words[word][uuid].props.indexOf(key) < 0) {
              words[word][uuid].props.push(key);
            }
          } else if (typeof words[word] !== 'undefined' && typeof words[word][uuid] === 'undefined') {
            words[word] = { ...words[word], [uuid]: { word, score: 1, props: [key] } };
          } else {
            words[word] = { [uuid]: { word, score: 1, props: [key] } };
          }
        });
      }
    });
  })

  return words;
};

export default indexer;
