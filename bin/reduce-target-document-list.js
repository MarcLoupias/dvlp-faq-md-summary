'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class SectionListObject {
    constructor(sectionName, sectionTitle, qaList) {
        this.sectionName = sectionName;
        this.sectionTitle = sectionTitle;
        this.qaList = qaList;
    }
}
function initMdDocument(reducedTargetDocumentList, targetDocumentToReduceCurrent, index, targetDocumentToReduceList) {
    const summaryFmMetaData = reducedTargetDocumentList[0].fmMetaData;
    reducedTargetDocumentList[0].yamlAuthorList = summaryFmMetaData.getAuteurs().reduce((md, auteur) => {
        return md + `    - name: ${auteur.name}
      fullname: ${auteur.fullname}
      url: ${auteur.url}
      role: ${auteur.role}\n`;
    }, 'auteurs:\n');
    const sectionListObject = targetDocumentToReduceList
        .reduce((sections, qa) => {
        if (!sections[qa.getSectionName()]) {
            sections[qa.getSectionName()] = new SectionListObject(qa.getSectionName(), qa.sectionTitle, []);
            sections[qa.getSectionName()].qaList.push(`- [${qa.transformedData}](${sections[qa.getSectionName()].sectionName}/${qa.documentPaths.basename}.md)\n`);
            return sections;
        }
        else {
            sections[qa.getSectionName()].qaList.push(`- [${qa.transformedData}](${sections[qa.getSectionName()].sectionName}/${qa.documentPaths.basename}.md)\n`);
            return sections;
        }
    }, {});
    reducedTargetDocumentList[0].mdSectionList = Object
        .entries(sectionListObject)
        .reduce((md, section) => {
        const links = section[1].qaList.reduce((qaMd, listItem) => {
            return qaMd + listItem;
        }, '');
        return md + `\n${section[1].sectionTitle}\n${links}`;
    }, '');
    return reducedTargetDocumentList;
}
function finalizeMdDocument(reducedTargetDocumentList) {
    const fmMetaData = reducedTargetDocumentList[0].fmMetaData;
    reducedTargetDocumentList[0].transformedData = `---
${reducedTargetDocumentList[0].yamlAuthorList}
editeur:
    edversion: ${fmMetaData.getEditeur().edversion}
    edtypexml: ${fmMetaData.getEditeur().edtypexml}

entete:
    rubrique: ${fmMetaData.getEntete().rubrique}
    meta:
        description: ${fmMetaData.getEntete().getMeta().description}
        keywords: ${fmMetaData.getEntete().getMeta().keywords}
    titre:
        page: ${fmMetaData.getEntete().getTitre().page}
        article: ${fmMetaData.getEntete().getTitre().article}
    date: ${fmMetaData.getEntete().getDate()}
    miseajour: ${fmMetaData.getEntete().getMiseajour()}
    googleAnalytics: ${fmMetaData.getEntete().googleAnalytics}
    licauteur: ${fmMetaData.getEntete().licauteur}
    lictype: ${fmMetaData.getEntete().lictype}
    licannee: ${fmMetaData.getEntete().licannee}
    serveur: ${fmMetaData.getEntete().serveur}
    chemin: ${fmMetaData.getEntete().chemin}
    urlhttp: ${fmMetaData.getEntete().urlhttp}
    pdf:
        sautDePageAvantSection: ${fmMetaData.getEntete().getPdf().sautDePageAvantSection}
        notesBasPage: ${fmMetaData.getEntete().getPdf().notesBasPage}
    nomfaq: ${fmMetaData.getEntete().nomfaq}

edito: ${fmMetaData.edito}
licence: ${fmMetaData.licence}
---

# ${fmMetaData.getEntete().getTitre().article}
${reducedTargetDocumentList[0].mdSectionList}`;
    return reducedTargetDocumentList;
}
function reduceTargetDocumentList(reducedTargetDocumentList, targetDocumentToReduce, index, targetDocumentToReduceList) {
    if (index === 0) {
        return initMdDocument(reducedTargetDocumentList, targetDocumentToReduce, index, targetDocumentToReduceList);
    }
    if (index === targetDocumentToReduceList.length - 1) {
        return finalizeMdDocument(reducedTargetDocumentList);
    }
    return reducedTargetDocumentList;
}
exports.reduceTargetDocumentList = reduceTargetDocumentList;
