

         const twoSum = (target, number) =>    {
           if( number.length < 2){
            throw Error('Array deve conter pelo menos dois numeros')
           }

           
           const pairs = {};

            for ( const num of number) {
                if(pairs[num] !== undefined){
                    return [pairs[num],num]
                }

                pairs[target - num] = num;
            }

        }   



module.exports = twoSum;