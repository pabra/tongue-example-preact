import initTongue from '@pabra/tongue-react';
import de from '../tongue_de.json';
import en from '../tongue_en.json';
import entries from '../tongue_entries.json';
import es from '../tongue_es.json';
import fr from '../tongue_fr.json';

const dicts = { en, de, es, fr } as const;
const {
  Translate,
  translate,
  useLanguage,
  useSetLanguage,
  useTranslate,
} = initTongue(entries, dicts);

type Languages = keyof typeof dicts;
const languages = [...(Object.keys(dicts) as Languages[])] as const;

export type { Languages };
export {
  languages,
  Translate,
  translate,
  useLanguage,
  useSetLanguage,
  useTranslate,
};
