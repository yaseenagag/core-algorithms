const makeChange = ({price, amountGiven}) => {
  let change = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 },
      remainder = amountGiven - price

  const findChangeAmount = ( denomination, amount ) => {
    let numberOfDenomination = Math.floor( remainder / amount )
    change[denomination] = numberOfDenomination
    remainder = remainder - ( numberOfDenomination * amount )
  }

  while ( remainder > 0 ) {
    switch ( true ) {
      case ( remainder >= 25 ):
        findChangeAmount( 'quarters', 25 )
        break
      case ( remainder >= 10 ):
        findChangeAmount( 'dimes', 10 )
        break
      case ( remainder >= 5 ):
        findChangeAmount( 'nickels', 5 )
        break
      case ( remainder >= 1 ):
        findChangeAmount( 'pennies', 1 )
        break
      default:
    }
  }

  return change
}

export default makeChange
