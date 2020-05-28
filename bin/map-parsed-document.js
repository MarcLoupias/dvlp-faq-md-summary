'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const md_file_converter_1 = require("md-file-converter");
const model_impl_1 = require("./model-impl");
function makeUnConfiguredMapParsedDocument({ marked }) {
    return (conf) => {
        return (mdParsedDocument) => {
            function parseWithMarked(tokens) {
                tokens.links = Object.create(null);
                return marked.parser(tokens, conf.markedOptions);
            }
            if (mdParsedDocument.documentPaths.basename === 'SUMMARY') {
                return md_file_converter_1.TargetDocument.createTargetDocument({
                    documentPaths: mdParsedDocument.documentPaths,
                    transformedData: marked.parser(mdParsedDocument.parsedTokensList, conf.markedOptions),
                    fmMetaData: mdParsedDocument.fmMetaData
                });
            }
            else {
                const mdParsedDocumentImpl = mdParsedDocument;
                const questionTitleToken = mdParsedDocumentImpl.questionTitleToken[0];
                const questionTitle = questionTitleToken.text;
                const transformedData = `${questionTitle}`;
                return model_impl_1.TargetDocumentImpl.createTargetDocumentImpl(md_file_converter_1.TargetDocument.createTargetDocument({
                    documentPaths: mdParsedDocumentImpl.documentPaths,
                    transformedData,
                    fmMetaData: mdParsedDocumentImpl.fmMetaData
                }), parseWithMarked(mdParsedDocumentImpl.sectionTitleToken));
            }
        };
    };
}
exports.makeUnConfiguredMapParsedDocument = makeUnConfiguredMapParsedDocument;
