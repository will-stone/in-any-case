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

const CASES: ICase[] = [
  {
    changer: str => camelCase(str),
    commandId: 'camelCase',
    testInput: 'lorem ipsum Dolor sit_Amet',
    testOutput: 'loremIpsumDolorSitAmet',
  },
  {
    changer: str => capitalize(str),
    commandId: 'capitalize',
    testInput: 'LOREM ipsum Dolor sit_Amet',
    testOutput: 'Lorem ipsum dolor sit_amet',
  },
  {
    changer: str => flow([snakeCase, toUpper])(str),
    commandId: 'constantCase',
    testInput: 'LOREM ipsum Dolor sit_Amet',
    testOutput: 'LOREM_IPSUM_DOLOR_SIT_AMET',
  },
  {
    changer: str => deburr(str),
    commandId: 'deburr',
    testInput: 'déjà vu',
    testOutput: 'deja vu',
  },
  {
    changer: str => escape(str),
    commandId: 'escape',
    testInput: 'fred, barney, & pebbles',
    testOutput: 'fred, barney, &amp; pebbles',
  },
  {
    changer: str => kebabCase(str),
    commandId: 'kebabCase',
    testInput: 'lorem ipsum Dolor sit_Amet',
    testOutput: 'lorem-ipsum-dolor-sit-amet',
  },
  {
    changer: str => lowerCase(str),
    commandId: 'lowerCase',
    testInput: 'lorem ipsum Dolor sit_Amet',
    testOutput: 'lorem ipsum dolor sit amet',
  },
  {
    changer: str => lowerFirst(str),
    commandId: 'lowerFirst',
    testInput: 'Lorem ipsum Dolor sit_Amet',
    testOutput: 'lorem ipsum Dolor sit_Amet',
  },
  {
    changer: str => flow([camelCase, upperFirst])(str),
    commandId: 'pascalCase',
    testInput: 'lorem ipsum Dolor sit_Amet',
    testOutput: 'LoremIpsumDolorSitAmet',
  },
  {
    changer: str => snakeCase(str),
    commandId: 'snakeCase',
    testInput: 'Lorem ipsum Dolor sit_Amet',
    testOutput: 'lorem_ipsum_dolor_sit_amet',
  },
  {
    changer: str => startCase(str),
    commandId: 'startCase',
    testInput: 'Lorem ipsum Dolor sit_Amet',
    testOutput: 'Lorem Ipsum Dolor Sit Amet',
  },
  {
    changer: str => toLower(str),
    commandId: 'toLower',
    testInput: 'Lorem ipsum Dolor sit_Amet',
    testOutput: 'lorem ipsum dolor sit_amet',
  },
  {
    changer: str => toUpper(str),
    commandId: 'toUpper',
    testInput: 'Lorem ipsum Dolor sit_Amet',
    testOutput: 'LOREM IPSUM DOLOR SIT_AMET',
  },
  {
    changer: str => unescape(str),
    commandId: 'unescape',
    testInput: 'fred, barney, &amp; pebbles',
    testOutput: 'fred, barney, & pebbles',
  },
  {
    changer: str => upperCase(str),
    commandId: 'upperCase',
    testInput: 'Lorem ipsum Dolor sit_Amet',
    testOutput: 'LOREM IPSUM DOLOR SIT AMET',
  },
  {
    changer: str => upperFirst(str),
    commandId: 'upperFirst',
    testInput: 'lorem ipsum Dolor sit_Amet',
    testOutput: 'Lorem ipsum Dolor sit_Amet',
  },
]

export default CASES
