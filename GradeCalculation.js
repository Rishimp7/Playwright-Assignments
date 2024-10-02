function StudentsMarks (Mark) {
     // initializing switch to true to get inside 
    switch (true) {
        case Mark >= 90:
        console.log("Grade obtained is A");
        break;
        
        case Mark >= 80:
        console.log("Grade obtained is B")
        
        break;
        
        case Mark >=70:
        console.log("Grade obtained is C");
        
        break;
        
        default :
        return "F"
            
    }

}
let Mark = 83
StudentsMarks(Mark);