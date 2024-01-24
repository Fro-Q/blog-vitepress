import MarkdownIt from 'markdown-it';
import { LanguageInput, BuiltinLanguage } from 'shikiji';
import { MarkdownItShikijiSetupOptions } from './core.js';
export { MarkdownItShikijiExtraOptions, fromHighlighter, setupMarkdownIt } from './core.js';

type MarkdownItShikijiOptions = MarkdownItShikijiSetupOptions & {
    /**
     * Language names to include.
     *
     * @default Object.keys(bundledLanguages)
     */
    langs?: Array<LanguageInput | BuiltinLanguage>;
};
declare function markdownItShikiji(options: MarkdownItShikijiOptions): Promise<(markdownit: MarkdownIt) => void>;

export { type MarkdownItShikijiOptions, MarkdownItShikijiSetupOptions, markdownItShikiji as default };
