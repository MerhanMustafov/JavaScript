function solve(array, first_str, second_str){
    let start = array.indexOf(first_str);
    let end = array.indexOf(second_str);
    return array.splice(start, end+1)//it is working with method .splice() as well
                                        // the problem were that "end" were missing +1
    // return result

    
}

console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
))

console.log(solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
))