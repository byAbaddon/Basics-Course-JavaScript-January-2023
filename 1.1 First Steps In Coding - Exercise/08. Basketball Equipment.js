t => {
  s = +t * .6; o = s * .8; b = o / 4; a = b / 5
  return +t + s + o + b + a
}

//---------------------------------(2)--------------------------

function basketballEquipment(tax) {
  let sneakers = tax * 0.6
  let outfit = sneakers * 0.8
  let ball = outfit / 4
  let accessories = ball / 5
  return +tax + sneakers + outfit + ball + accessories
}

//console.log(basketballEquipment(320))
