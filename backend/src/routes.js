import { Router } from 'express';

const routes = new Router();

let requestId = 0; // this is used for 'generate' a id for result

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

  req.id = requestId++;
  const result = {
    id: req.id,
    searchValue: req.params.value,
    isPrime: req.isPrime,
    divisors: req.divisors
  }

  return res.json(result);
});

export default routes;

