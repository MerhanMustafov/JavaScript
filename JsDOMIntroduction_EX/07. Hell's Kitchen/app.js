function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('#inputs>textarea');
   const bestRestaurantP =document.querySelector('#bestRestaurant p')
   const workersP = document.querySelector('#workers p')

   function onClick () {
      const arr = JSON.parse(input.value);
      let restaurant = {}

      arr.forEach((line) => {
         const tokens = line.split(' - ')
         const name  = tokens[0]
         const workersArr = tokens[1].split(', ')
         
         let workers = []
         

         for (let worker of workersArr){
            let workerTokens = worker.split(' ')
            const salary = Number(workerTokens[1])
            workers.push({
               name: workerTokens[0],
               salary
            })
         }
         if (restaurant[name]){
            workers = workers.concat(restaurant[name].workers)
            
         }
         workers.sort((worker1, worker2) => worker2.salary - worker1.salary)
         const bestSalary = workers[0].salary
         
         const averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0)/workers.length

         restaurant[name] = {
            workers,
            averageSalary,
            bestSalary
         }
      })
      let bestRestaurantSalary = 0
      let bestRestaurant = undefined;
      
      for (const name in restaurant){
         if (restaurant[name].averageSalary > bestRestaurantSalary){
            bestRestaurant = {
               name,
               workers: restaurant[name].workers,
               bestSalary: restaurant[name].bestSalary,
               averageSalary: restaurant[name].averageSalary,
            }
            bestRestaurantSalary = restaurant[name].averageSalary
         }
      }
      bestRestaurantP.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`

      let workersResult = []
      bestRestaurant.workers.forEach(worker =>{
         workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
      })

      workersP.textContent = workersResult.join(' ')
      
   }
}