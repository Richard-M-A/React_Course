import React from 'react'

const Day1pah2 = () => {

    let age =18
    let name = 'keran'
    let setstatus = false
    let userDefault = undefined
    let responsevalue = null


    const printValue = () => {
        alert ("check the console output !")
        console.log(age)
        console.log(name)
        console.log(userDefault)
        console.log(setstatus)
        console.log(userdefaults)
        console.log(responsevalue)
        age = 25
        setstatus = true 
        console.log(age)
        console.log(name)
    }
    return (
        <>
        <h1>printive Data type copy the values</h1>
        <input type='submit' onclick={() => printValue}></input>
        </>
    )
}
export default Day1pah2