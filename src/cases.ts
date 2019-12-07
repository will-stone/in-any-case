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
    changer: (str: string): string => camelCase(str),
    commandId: 'camelCase',
    testInput: 'lorem ipsum Dolor sit_Amet',
    testOutput: 'loremIpsumDolorSitAmet',
  },
  {
    changer: (str: string): string => capitalize(str),
    commandId: 'capitalize',
    testInput: 'LOREM ipsum Dolor sit_Amet',
    testOutput: 'Lorem ipsum dolor sit_amet',
  },
  {
    changer: (str: string): string => flow([snakeCase, toUpper])(str),
    commandId: 'constantCase',
    testInput: 'LOREM ipsum Dolor sit_Amet',
    testOutput: 'LOREM_IPSUM_DOLOR_SIT_AMET',
  },
  {
    changer: (str: string): string => deburr(str),
    commandId: 'deburr',
    testInput: 'déjà vu',
    testOutput: 'deja vu',
  },
  {
    changer: (str: string): string => escape(str),
    commandId: 'escape',
    testInput: 'fred, barney, & pebbles',
    testOutput: 'fred, barney, &amp; pebbles',
  },
  {
    changer: (str: string): string => kebabCase(str),
    commandId: 'kebabCase',
    testInput: 'lorem ipsum Dolor sit_Amet',
    testOutput: 'lorem-ipsum-dolor-sit-amet',
  },
  {
    changer: (str: string): string => lowerCase(str),
    commandId: 'lowerCase',
    testInput: 'lorem ipsum Dolor sit_Amet',
    testOutput: 'lorem ipsum dolor sit amet',
  },
  {
    changer: (str: string): string => lowerFirst(str),
    commandId: 'lowerFirst',
    testInput: 'Lorem ipsum Dolor sit_Amet',
    testOutput: 'lorem ipsum Dolor sit_Amet',
  },
  {
    changer: (str: string): string => flow([camelCase, upperFirst])(str),
    commandId: 'pascalCase',
    testInput: 'lorem ipsum Dolor sit_Amet',
    testOutput: 'LoremIpsumDolorSitAmet',
  },
  {
    changer: (str: string): string => snakeCase(str),
    commandId: 'snakeCase',
    testInput: 'Lorem ipsum Dolor sit_Amet',
    testOutput: 'lorem_ipsum_dolor_sit_amet',
  },
  {
    changer: (str: string): string => startCase(str),
    commandId: 'startCase',
    testInput: 'Lorem ipsum Dolor sit_Amet',
    testOutput: 'Lorem Ipsum Dolor Sit Amet',
  },
  {
    changer: (str: string): string => titleCase(str),
    commandId: 'titleCase',
    testInput: 'this is a test',
    testOutput: 'This is a Test',
  },
  {
    changer: (str: string): string => toLower(str),
    commandId: 'toLower',
    testInput: 'Lorem ipsum Dolor sit_Amet',
    testOutput: 'lorem ipsum dolor sit_amet',
  },
  {
    changer: (str: string): string => toUpper(str),
    commandId: 'toUpper',
    testInput: 'Lorem ipsum Dolor sit_Amet',
    testOutput: 'LOREM IPSUM DOLOR SIT_AMET',
  },
  {
    changer: (str: string): string => unescape(str),
    commandId: 'unescape',
    testInput: 'fred, barney, &amp; pebbles',
    testOutput: 'fred, barney, & pebbles',
  },
  {
    changer: (str: string): string => upperCase(str),
    commandId: 'upperCase',
    testInput: 'Lorem ipsum Dolor sit_Amet',
    testOutput: 'LOREM IPSUM DOLOR SIT AMET',
  },
  {
    changer: (str: string): string => upperFirst(str),
    commandId: 'upperFirst',
    testInput: 'lorem ipsum Dolor sit_Amet',
    testOutput: 'Lorem ipsum Dolor sit_Amet',
  },
]

export default CASES
