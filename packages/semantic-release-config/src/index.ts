/**
 * @copyright   2020, Oriflame Software
 * @license     https://opensource.org/licenses/MIT
 */
/* eslint-disable no-template-curly-in-string */

import { SemanticReleaseConfig } from './types';

const config: SemanticReleaseConfig = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        config: '@oriflame/conventional-changelog',
        releaseRules: [
          { type: 'break', release: 'major' },
          { type: 'breaking', release: 'major' },
          { type: 'release', release: 'major' },
          { type: 'new', release: 'minor' },
          { type: 'update', release: 'minor' },
          { type: 'feature', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'deps', release: 'patch' },
          { type: 'docs', release: 'patch' },
          { type: 'revert', release: 'patch' },
          { type: 'style', release: 'patch' },
          { type: 'styles', release: 'patch' },
          { type: 'security', release: 'patch' },
          { type: 'type', release: 'patch' },
          { type: 'types', release: 'patch' },
          { type: 'misc', release: 'patch' },
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        config: '@oriflame/conventional-changelog',
      },
    ],
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        message: 'ci(release): V${nextRelease.version} [ci skip].\n\n${nextRelease.notes}',
      },
    ],
  ],
};

export = config;