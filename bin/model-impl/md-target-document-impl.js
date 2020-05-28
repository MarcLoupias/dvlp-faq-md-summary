'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class TargetDocumentImpl {
    static createTargetDocumentImpl(targetDocument, sectionTitle) {
        return new TargetDocumentImpl(targetDocument, sectionTitle);
    }
    constructor(targetDocument, sectionTitle) {
        this.documentPaths = targetDocument.documentPaths;
        this.transformedData = targetDocument.transformedData;
        this.fmMetaData = targetDocument.fmMetaData || null;
        this.setSectionName(targetDocument.documentPaths.src);
        this.sectionTitle = sectionTitle;
    }
    setSectionName(path) {
        const lastFolderSep = path.lastIndexOf('/');
        const previousLastFolderSep = path.lastIndexOf('/', lastFolderSep - 1);
        this.sectionName = path.substring(previousLastFolderSep + 1, lastFolderSep);
    }
    getSectionName() {
        return this.sectionName;
    }
}
exports.TargetDocumentImpl = TargetDocumentImpl;
