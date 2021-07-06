const items = ['item1', 'item2', 'item3', 'item4'];

const mySelf = {
    name : 'Sandile',
    surname : 'Tukani',
    age : 24,
    isMarried : false,
    hobbies : [
        'reading','researching','traveling','thinking'
    ],
    profession : [{
        curentPosition : "Software Developer",
        currentCompany : "The Digital Academy",
        duties : ['programming','product delivery'],
        otherPositions : ['Data Scientist','Machine Learning Engineer','Cloud Engineer'],
        strategicGoal : 'Entrepreneur and Businessman'
    }
    ]
};

console.log(mySelf, items);
module.exports.myItems = items;
module.exports.realMan = mySelf;

console.log(module);