import React, {Component} from 'react';

class For extends Component{
    componentDidMount() {
        var Es5_Arr = [3,2,8,8]
        var Es5_newArr = []

        for (var i=0; i <Es5_Arr.length; i++){
            Es5_newArr.push(Es5_Arr[i])
        }
        console.log('1. Es5_newArr :["+Es5+newArr+"]')

        var Es6_Arr = [3,3,9,8]
        var Es6_newArr = []
        Es6_Arr.forEach((result) => {
            Es6_newArr.push(result)
        })
        console.log(`"2.Es6_newArr : ["+Es6+newArr+"]"`)
    }
    render(){
        return(
            <h2>
                [THIS IS ForEach]
            </h2>
        )
    }
}
export default For;