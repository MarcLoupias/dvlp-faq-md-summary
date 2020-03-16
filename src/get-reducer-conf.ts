'use strict';

import { IReducerConf, IDocumentPaths, ITargetDocument, TargetDocument } from 'md-file-converter';
import { ReducedTargetDocumentImpl } from './model-impl';

export function getReducerConf(initialValues: { targetDocumentPaths: IDocumentPaths, targetDocumentList: ITargetDocument[] }): IReducerConf {
    const arr = initialValues.targetDocumentList.filter((targetDocument: TargetDocument) => {
        return targetDocument.documentPaths.basename !== 'SUMMARY';
    });

    const summaries = initialValues.targetDocumentList.filter((targetDocument: TargetDocument) => {
        return targetDocument.documentPaths.basename === 'SUMMARY';
    });
    if (summaries.length === 0) {
        throw new Error('SUMMARY.md file not found');
    }
    const faqMetaData = summaries[0].fmMetaData;

    const initialValue = [
        ReducedTargetDocumentImpl.createReducedTargetDocumentImpl(
            TargetDocument.createTargetDocument({
                documentPaths: initialValues.targetDocumentPaths,
                transformedData: '',
                fmMetaData: faqMetaData
            }),
            '',
            ''
        )
    ];

    return {
        arr,
        initialValue
    };
}
