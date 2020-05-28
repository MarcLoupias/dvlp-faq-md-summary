'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const md_file_converter_1 = require("md-file-converter");
const model_impl_1 = require("./model-impl");
function getReducerConf(initialValues) {
    const arr = initialValues.targetDocumentList.filter((targetDocument) => {
        return targetDocument.documentPaths.basename !== 'SUMMARY';
    });
    const summaries = initialValues.targetDocumentList.filter((targetDocument) => {
        return targetDocument.documentPaths.basename === 'SUMMARY';
    });
    if (summaries.length === 0) {
        throw new Error('SUMMARY.md file not found');
    }
    const faqMetaData = summaries[0].fmMetaData;
    const initialValue = [
        model_impl_1.ReducedTargetDocumentImpl.createReducedTargetDocumentImpl(md_file_converter_1.TargetDocument.createTargetDocument({
            documentPaths: initialValues.targetDocumentPaths,
            transformedData: '',
            fmMetaData: faqMetaData
        }), '', '')
    ];
    return {
        arr,
        initialValue
    };
}
exports.getReducerConf = getReducerConf;
