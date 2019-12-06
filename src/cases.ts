import camelCase = require('lodash/camelCase')
import capitalize = require('lodash/capitalize')
import deburr = require('lodash/deburr')
import escape = require('lodash/escape')
import flow = require('lodash/flow')
import kebabCase = require('lodash/kebabCase')
import lowerCase = require('lodash/lowerCase')
import lowerFirst = require('lodash/lowerFirst')
import snakeCase = require('lodash/snakeCase')
import startCase = require('lodash/startCase')
import toLower = require('lodash/toLower')
import toUpper = require('lodash/toUpper')
import unescape = require('lodash/unescape')
import upperCase = require('lodash/upperCase')
import upperFirst = require('lodash/upperFirst')

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
