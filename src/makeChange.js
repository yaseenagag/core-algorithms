const makeChange = ({ price, amountGiven, callback }) => {
  let changeTracker = {
    change: { quarters: 0, dimes: 0, nickels: 0, pennies: 0 },
    remainder: amountGiven - price
  }

  while ( changeTracker.remainder > 0 ) {
    switch ( true ) {
      case ( changeTracker.remainder >= 25 ):
        callback.call( changeTracker, 'quarters' )
        break
      case ( changeTracker.remainder >= 10 ):
        callback.call( changeTracker, 'dimes' )
        break
      case ( changeTracker.remainder >= 5 ):
        callback.call( changeTracker, 'nickels' )
        break
      case ( changeTracker.remainder >= 1 ):
        callback.call( changeTracker, 'pennies' )
        break
      default:
    }
  }

  return changeTracker.change
}

function findChangeAmount ( denomination ) {
  let amount

  switch ( denomination ) {
    case ('quarters'):
      amount = 25
      break
    case ('dimes'):
      amount = 10
      break
    case ('nickels'):
      amount = 5
      break
    case ('pennies'):
      amount = 1
      break
    default:
  }

  let numberOfDenomination = Math.floor( this.remainder / amount )
  this.change[denomination] = numberOfDenomination
  this.remainder = this.remainder - ( numberOfDenomination * amount )
}

export { makeChange, findChangeAmount }
