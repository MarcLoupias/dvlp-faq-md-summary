'use strict';

import { IDocumentPaths, ITargetDocument } from 'md-file-converter';

export class TargetDocumentImpl implements ITargetDocument {
    public static createTargetDocumentImpl(targetDocument: ITargetDocument, sectionName: string, sectionTitle: string): TargetDocumentImpl {
        return new TargetDocumentImpl(targetDocument, sectionName, sectionTitle);
    }

    public documentPaths: IDocumentPaths;
    public transformedData: string;
    public fmMetaData?: object;
    public sectionTitle: string;
    private sectionName: string;

    protected constructor(targetDocument: ITargetDocument, sectionName: string, sectionTitle: string) {
        this.documentPaths = targetDocument.documentPaths;
        this.transformedData = targetDocument.transformedData;
        this.fmMetaData = targetDocument.fmMetaData || null;
        this.setSectionName(sectionName);
        this.sectionTitle = sectionTitle;
    }

    public setSectionName(sectionName: string): void {
        this.sectionName = 'section-' + sectionName.substring(0, 3);
    }

    public getSectionName(): string {
        return this.sectionName;
    }
}
