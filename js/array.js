"use strict";
const salary = 7500;
const friendsSalaries = [7500, 12300, 17200, 9400, 8300];
const friends = ['Nissan', 'Rakib', 'Nakib', 'Dakib'];
friendsSalaries[0] = 10500;
friendsSalaries.push(5555);
// friendsSalaries[4] = '4444';
// friendsSalaries.push('9999');
friends.push('Bakib');
friends[2] = 'Qakib';
// friends.push(4444);
let max = 0;
for (const salary of friendsSalaries) {
    if (salary > max) {
        max = salary;
    }
}
