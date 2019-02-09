'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function codeFn(code, language) {
    return `\`\`\`${language}
${code}
\`\`\``;
}
function blockquoteFn(quote) {
    return `>${quote}`;
}
function htmlFn(html) {
    return html;
}
function headingFn(text, level) {
    switch (level) {
        case 1: {
            return `# ${text}\n`;
        }
        case 2: {
            return `## ${text}\n`;
        }
        case 3: {
            return `### ${text}\n`;
        }
        case 4: {
            return `#### ${text}\n`;
        }
        case 5: {
            return `##### ${text}\n`;
        }
        case 6: {
            return `###### ${text}\n`;
        }
        default:
            throw new Error('Invalid heading level.');
    }
}
function hrFn() {
    return '---';
}
function listFn(body) {
    return `${body}`;
}
function listitemFn(text) {
    return `- ${text}`;
}
function paragraphFn(text) {
    return `${text}`;
}
function tableFn(header, body) {
    return `${header}${body}`;
}
function tablerowFn(content) {
    return `|${content}`;
}
function tablecellFn(content) {
    return content;
}
function strongFn(text) {
    return `**${text}**`;
}
function emFn(text) {
    return `*${text}*`;
}
function codespanFn(text) {
    return `\`>${text}\``;
}
function brFn() {
    return '---';
}
function delFn(text) {
    return `${text}`;
}
function linkFn(href, title, text) {
    return `[${text}](${href})`;
}
function imageFn(href) {
    return `![image](${href})`;
}
function textFn(text) {
    return text;
}
exports.default = {
    code: codeFn,
    blockquote: blockquoteFn,
    html: htmlFn,
    heading: headingFn,
    hr: hrFn,
    list: listFn,
    listitem: listitemFn,
    paragraph: paragraphFn,
    table: tableFn,
    tablerow: tablerowFn,
    tablecell: tablecellFn,
    strong: strongFn,
    em: emFn,
    codespan: codespanFn,
    br: brFn,
    del: delFn,
    link: linkFn,
    image: imageFn,
    text: textFn
};
