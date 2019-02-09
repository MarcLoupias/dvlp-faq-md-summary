# dvlp-faq-md-summary

[![Build Status](https://travis-ci.org/MarcLoupias/dvlp-faq-md-summary.svg?branch=master)](https://travis-ci.org/MarcLoupias/dvlp-faq-md-summary)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm version](https://badge.fury.io/js/dvlp-faq-md-summary.svg)](http://badge.fury.io/js/dvlp-faq-md-summary)

An implementation package for [md-file-converter](https://www.npmjs.com/package/md-file-converter).

This implementation output a `<filename>.md` file in the format expected by [developpez.com website](https://www.developpez.com/) for the FAQ documents.

## installation

In the repository containing your FAQ markdown documents, add this package to devDependencies :

```bash
npm i -D dvlp-faq-md-summary
```

## usage

Invoke the CLI with the following :

```bash
node ./node_modules/.bin/mdfc convert 'dvlp-faq-md-summary' '<faq-markdown-files-glob>' --dest '<dest-dir-path>' --filename '<filename-without-ext>'
```
