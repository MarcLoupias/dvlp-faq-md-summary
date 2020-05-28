'use strict';

import {
    IMdParsedDocument, ITargetDocument, TargetDocument, UnConfiguredMapParsedDocumentFnType, MapParsedDocumentFnType
} from 'md-file-converter';
import { MdParsedDocumentImpl, TargetDocumentImpl } from './model-impl';
import { MarkedOptions, Tokens } from 'marked';

export function makeUnConfiguredMapParsedDocument({ marked }: any): UnConfiguredMapParsedDocumentFnType {
    return (conf: { markedOptions: MarkedOptions }): MapParsedDocumentFnType => {
        return (mdParsedDocument: IMdParsedDocument): ITargetDocument => {
            function parseWithMarked(tokens: any) {
                tokens.links = Object.create(null); // pour fix erreur levée ici https://github.com/markedjs/marked/blob/master/lib/marked.js#L642
                return marked.parser(tokens, conf.markedOptions);
            }

            if (mdParsedDocument.documentPaths.basename === 'SUMMARY') {
                return TargetDocument.createTargetDocument({
                    documentPaths: mdParsedDocument.documentPaths,
                    transformedData: marked.parser(mdParsedDocument.parsedTokensList, conf.markedOptions),
                    fmMetaData: mdParsedDocument.fmMetaData
                });

            } else {
                const mdParsedDocumentImpl = mdParsedDocument as MdParsedDocumentImpl;
                const questionTitleToken = mdParsedDocumentImpl.questionTitleToken[0] as Tokens.Heading;
                const questionTitle = questionTitleToken.text;
                const transformedData = `${questionTitle}`;

                return TargetDocumentImpl.createTargetDocumentImpl(
                    TargetDocument.createTargetDocument({
                        documentPaths: mdParsedDocumentImpl.documentPaths,
                        transformedData,
                        fmMetaData: mdParsedDocumentImpl.fmMetaData
                    }),
                    parseWithMarked(mdParsedDocumentImpl.sectionTitleToken)
                );
            }
        };
    };
}
