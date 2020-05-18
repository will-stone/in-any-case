import titleCase from '@will-stone/title-case'
import camelCase from 'lodash/camelCase'
import capitalize from 'lodash/capitalize'
import deburr from 'lodash/deburr'
import escape from 'lodash/escape'
import flow from 'lodash/flow'
import kebabCase from 'lodash/kebabCase'
import lowerCase from 'lodash/lowerCase'
import lowerFirst from 'lodash/lowerFirst'
import snakeCase from 'lodash/snakeCase'
import startCase from 'lodash/startCase'
import toLower from 'lodash/toLower'
import toUpper from 'lodash/toUpper'
import unescape from 'lodash/unescape'
import upperCase from 'lodash/upperCase'
import upperFirst from 'lodash/upperFirst'

const CASES: Case[] = [
  {
    changer: (string: string): string => camelCase(string),
    commandId: 'camelCase',
    testInput: 'lorem ipsum Dolor sit_Amet',
    testOutput: 'loremIpsumDolorSitAmet',
  },
  {
    changer: (string: string): string => capitalize(string),
    commandId: 'capitalize',
    testInput: 'LOREM ipsum Dolor sit_Amet',
    testOutput: 'Lorem ipsum dolor sit_amet',
  },
  {
    changer: (string: string): string => flow([snakeCase, toUpper])(string),
    commandId: 'constantCase',
    testInput: 'LOREM ipsum Dolor sit_Amet',
    testOutput: 'LOREM_IPSUM_DOLOR_SIT_AMET',
  },
  {
    changer: (string: string): string => deburr(string),
    commandId: 'deburr',
    testInput: 'déjà vu',
    testOutput: 'deja vu',
  },
  {
    changer: (string: string): string => escape(string),
    commandId: 'escape',
    testInput: 'fred, barney, & pebbles',
    testOutput: 'fred, barney, &amp; pebbles',
  },
  {
    changer: (string: string): string => kebabCase(string),
    commandId: 'kebabCase',
    testInput: 'lorem ipsum Dolor sit_Amet',
    testOutput: 'lorem-ipsum-dolor-sit-amet',
  },
  {
    changer: (string: string): string => lowerCase(string),
    commandId: 'lowerCase',
    testInput: 'lorem ipsum Dolor sit_Amet',
    testOutput: 'lorem ipsum dolor sit amet',
  },
  {
    changer: (string: string): string => lowerFirst(string),
    commandId: 'lowerFirst',
    testInput: 'Lorem ipsum Dolor sit_Amet',
    testOutput: 'lorem ipsum Dolor sit_Amet',
  },
  {
    changer: (string: string): string => flow([camelCase, upperFirst])(string),
    commandId: 'pascalCase',
    testInput: 'lorem ipsum Dolor sit_Amet',
    testOutput: 'LoremIpsumDolorSitAmet',
  },
  {
    changer: (string: string): string => snakeCase(string),
    commandId: 'snakeCase',
    testInput: 'Lorem ipsum Dolor sit_Amet',
    testOutput: 'lorem_ipsum_dolor_sit_amet',
  },
  {
    changer: (string: string): string => startCase(string),
    commandId: 'startCase',
    testInput: 'Lorem ipsum Dolor sit_Amet',
    testOutput: 'Lorem Ipsum Dolor Sit Amet',
  },
  {
    changer: (string: string): string => titleCase(string),
    commandId: 'titleCase',
    testInput: 'this is a test',
    testOutput: 'This is a Test',
  },
  {
    changer: (string: string): string => toLower(string),
    commandId: 'toLower',
    testInput: 'Lorem ipsum Dolor sit_Amet',
    testOutput: 'lorem ipsum dolor sit_amet',
  },
  {
    changer: (string: string): string => toUpper(string),
    commandId: 'toUpper',
    testInput: 'Lorem ipsum Dolor sit_Amet',
    testOutput: 'LOREM IPSUM DOLOR SIT_AMET',
  },
  {
    changer: (string: string): string => unescape(string),
    commandId: 'unescape',
    testInput: 'fred, barney, &amp; pebbles',
    testOutput: 'fred, barney, & pebbles',
  },
  {
    changer: (string: string): string => upperCase(string),
    commandId: 'upperCase',
    testInput: 'Lorem ipsum Dolor sit_Amet',
    testOutput: 'LOREM IPSUM DOLOR SIT AMET',
  },
  {
    changer: (string: string): string => upperFirst(string),
    commandId: 'upperFirst',
    testInput: 'lorem ipsum Dolor sit_Amet',
    testOutput: 'Lorem ipsum Dolor sit_Amet',
  },
]

export default CASES
