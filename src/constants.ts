import { Group } from './types';

export const COMMIT_FORMAT_PREFIX = /^(break|breaking|build|ci|deps|docs|feature|fix|internal|misc|new|patch|release|revert|security|style|test|update)(?:\(([a-zA-Z0-9\-., ]+)\))?:/u;

export const GROUPS: Group[] = [
  {
    bump: 'major',
    emoji: '💥',
    label: 'Breaking',
    types: ['break', 'breaking'],
  },
  {
    bump: 'patch',
    emoji: '📦',
    label: 'Dependencies',
    types: ['deps'],
  },
  {
    emoji: '📘',
    label: 'Docs',
    types: ['docs'],
  },
  {
    bump: 'patch',
    emoji: '🐞',
    label: 'Fixes',
    types: ['fix', 'patch'],
  },
  {
    emoji: '🛠',
    label: 'Internals',
    types: ['ci', 'build', 'test', 'internal'],
  },
  {
    bump: 'patch',
    emoji: '📋',
    label: 'Misc',
    types: ['misc'],
  },
  {
    bump: 'major',
    emoji: '🎉',
    label: 'Release',
    types: ['release'],
  },
  {
    bump: 'patch',
    emoji: '⚙️',
    label: 'Reverts',
    types: ['revert'],
  },
  {
    bump: 'patch',
    emoji: '🔑',
    label: 'Security',
    types: ['security'],
  },
  {
    bump: 'patch',
    emoji: '🎨',
    label: 'Styles',
    types: ['style'],
  },
  {
    bump: 'minor',
    emoji: '🚀',
    label: 'Updates',
    types: ['new', 'update', 'feature'],
  },
];
