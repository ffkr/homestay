const Discord = require('discord.js')
const Subiex = require('../bot.js')
const math = require('mathjs')

Subiex.registerCommand('math', 'default', (message, bot) => {
  let result
  try {
    result = math.eval(message.content)
  } catch (error) {
    console.log('Failed math calculation ' + message.content + '\nError: ' + e.stack)
    return 'Error while evaluating the math expression.'
  } finally {
    if (isNaN(parseFloat(result))) {
      return 'Invalid Calculation Expression'
    } else {
      return '**Result:** ' + result
    }
  }
}, ['calculate', 'calc', 'calculator'], 'Calculate a math expression', '<expression>')
