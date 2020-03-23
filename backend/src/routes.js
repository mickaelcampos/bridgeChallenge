import { Router } from 'express';

const routes = new Router();

function checkIsPrime(req, res, next) {

  const isPrime = (num) => {

    for(let i = 2; i < num; i++)
      if(num % i === 0) {
          return false
      };
    return num > 1;
  }

  req.isPrime = isPrime(req.params.value);
  return next();
}

function getDivisors(req, res, next) {

  const num = req.params.value;
  let divisors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      divisors.push(i);
    }
  }

  req.divisors = divisors;
  return next();
}

routes.get('/number/:value', checkIsPrime, getDivisors, (req, res) => {

  const result = {
    isPrime: req.isPrime,
    divisors: req.divisors
  }

  return res.json(result);
});

export default routes;

