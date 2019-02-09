'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class ReducedTargetDocumentImpl {
    static createReducedTargetDocumentImpl(targetDocument, yamlAuthorList, mdSectionList) {
        return new ReducedTargetDocumentImpl(targetDocument, yamlAuthorList, mdSectionList);
    }
    constructor(targetDocument, yamlAuthorList, mdSectionList) {
        this.documentPaths = targetDocument.documentPaths;
        this.transformedData = targetDocument.transformedData;
        this.fmMetaData = targetDocument.fmMetaData || null;
        this.yamlAuthorList = yamlAuthorList || '';
        this.mdSectionList = mdSectionList || '';
    }
}
exports.ReducedTargetDocumentImpl = ReducedTargetDocumentImpl;
