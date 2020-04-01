'use strict';

import { IDocumentPaths, ITargetDocument } from 'md-file-converter';

export class TargetDocumentImpl implements ITargetDocument {
    public static createTargetDocumentImpl(targetDocument: ITargetDocument, sectionTitle: string): TargetDocumentImpl {
        return new TargetDocumentImpl(targetDocument, sectionTitle);
    }

    public documentPaths: IDocumentPaths;
    public transformedData: string;
    public fmMetaData?: object;
    public sectionTitle: string;
    private sectionName: string;

    protected constructor(targetDocument: ITargetDocument, sectionTitle: string) {
        this.documentPaths = targetDocument.documentPaths;
        this.transformedData = targetDocument.transformedData;
        this.fmMetaData = targetDocument.fmMetaData || null;
        this.setSectionName(targetDocument.documentPaths.src);
        this.sectionTitle = sectionTitle;
    }

    public setSectionName(path: string): void {
        const lastFolderSep = path.lastIndexOf('/');
        const previousLastFolderSep = path.lastIndexOf('/', lastFolderSep - 1);
        this.sectionName = path.substring(previousLastFolderSep + 1, lastFolderSep);
    }

    public getSectionName(): string {
        return this.sectionName;
    }
}
