async function getQuestionData(){
    let inputQuestion=document.getElementById("inputQuestion").value
    console.log(inputQuestion)
    console.log("Weather Data is called")
    let url=`https://opentdb.com/api.php?amount=${inputQuestion}`
    console.log(url)
    let data=await fetch(url)
    let res=await data.json()
    // console.log(res.results[0].question)
    // console.log(res.results[1].question)
    console.log(res)
    let count=1;
    res.results.forEach(element => {
      let divtag=document.createElement('div')
      divtag.setAttribute("class","q-div")
      divtag.innerHTML=`
        
          <div class="question">
            <p><span class="q-span">Question:${count} </span>${element.question}</p>
            <p><span class="q-span">Ans: ${element.correct_answer}</span></p>
       
        </div>`
        document.body.append(divtag)
        count++
    });
  }