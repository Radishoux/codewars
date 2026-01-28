const salaire = 0
const loyer = 885
const courses = 450
const transport = 100
const atm = 12500
const cp = 1000
const prime = 2000
const deltaStocks = 0
const assurance = 1300
const imprevu = 1500

function thunes() {
  let temp = 0
  let zeil = atm
  let courant = 130
  deltaStocks /= 2
  while (zeil <= 1000000) {

    for (let i = 0; i < 12; i++) {
      courant = salaire
      courant -= transport
      courant -= courses
      zeil += courant
      zeil = zeil * (1 + deltaStocks / 100)
      zeil -= loyer
      zeil = zeil * (1 + deltaStocks / 100)
      temp++
      if (temp % 3 === 0) console.log("apres " + temp + " mois, j'ai " + ((parseInt(zeil / 1000000)) ? "1 " : "") + parseInt(zeil / 1000) + " " + parseInt(zeil % 1000) + " euros")
    }
    zeil += prime
    zeil += cp
    zeil -= assurance
    zeil -= imprevu
  }

  return zeil
}

console.log("j'ai " + thunes() + " euros")

