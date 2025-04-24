
//Write a program that takes an array of days like "Mon", "Tue", and "Fri" and uses a switch statement to print what type of delivery is scheduled on each day.
const deliveryType =(days) =>{
    days.forEach(day =>{
      switch(day){
        case'monday':
        console.log(`Door to door on ${day}`);
        break;
        case'tuesday':
        console.log(`Pick-up delivery on ${day}`);
        break;
        case'wednesday':
        console.log(`Package service delivery on ${day}`);
        break;
        default:
        console.log("No delivery");
        break;
      }
    })
  }
  const days =["monday", "tuesday", "wednesday","friday"];
  deliveryType(days);
  
  //Create a program that loops through an array of book statuses and prints "Ready to lend" if the status is "available" or "Checked out" if the status is "borrowed".
  const booksArray = (bookstatus) =>{
    bookstatus.forEach(item =>{
      if(item == "available"){
        console.log("Ready to lend")
      }
      else{
        console.log("Checked out");
        
      }
    })
  }
  const bookstatus =["available","borrowed","borrowed"];
  booksArray(bookstatus);
  
  // Given an array of customer ages, write a program that checks each age and prints "Adult" if the age is 18 or above, and "Minor" otherwise.
  
  function checksAge(ages){
    for(let i=0;i<ages.length;i++){
      if(ages[i]>=18){
        console.log("Adult");
        
      }
      else{
        console.log("Minor");
        
      }
    }
  }
  let ages = [24,17,18,59,12];
  checksAge(ages);
  
  //Write a program using a while loop that simulates a countdown of lives in a game starting from 5 and prints "You have X lives left" on each loop until it reaches 0.
  
    const countLives = () =>{
      let count = 5
      while(count>=0 && count<=5){
        console.log(`You have ${count} lives left`)
        count--
      }
    }
    countLives();
  
    //Using a do...while loop, write a program that loops through an array of user feedback and prints each comment until the array is empty
  
    const userFeedback = (feedbacks)=>{
      do{
        console.log(feedbacks.pop());
        }while(feedbacks.length > 0);
    }
    const feedbacks = ["amazing","boring","tiresome","fun","interactive"]
    userFeedback(feedbacks);
  
    //Write a program that loops through an array of user login statuses and prints "Welcome back!" if the user is "logged in" or "Please log in" otherwise.
    const loginStatuses = (logins) =>{
      logins.forEach(login =>{
        if(login == "logged in"){
          console.log("Welcome back!");
          
        }
        else{
          console.log("Please log in");
          
        }
      })
    }
    loginStatuses(["logged in", "logged out","signed in"]);
  
    //Write a program that processes an array of support ticket priorities using a switch statement to print how quickly each one should be addressed based on whether the priority is "low", "medium", or "high".
   const ticketPriorities = (priorities) =>{
    priorities.forEach(priority =>{
      switch(priority){
        case 'low':
          console.log("Lowly prioritized");
          break;
          case 'medium':
            console.log("Medium prioritized");
            break;
              default:
                console.log("Highly prioritized");
                break;
                
      }
    })
   }
   const priorities = ["high","low","medium","low","high"];
   ticketPriorities(priorities);
  
   //Create a while loop that simulates a quiz countdown from 10 seconds, printing each number until it reaches 0.
  
   const quizCountdown = () =>{
    let i = 0
    let countdown = 10
    while(countdown>=0 && countdown<=10){
      console.log(` Countdown is ${countdown}`);
      countdown--
    }
   }
   quizCountdown();